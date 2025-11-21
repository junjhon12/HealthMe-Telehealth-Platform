const User = require('../models/User');
const Symptom = require('../models/Symptom');
const Appointment = require('../models/Appointment');
const Message = require('../models/Message');
const Notification = require('../models/Notification');

// --- SYMPTOMS ---

exports.logSymptom = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return res.status(400).json({ message: 'Symptoms are required and must be an array of strings.' });
    }

    const newSymptomLog = new Symptom({
      symptoms,
      patient: req.user.id
    });

    await newSymptomLog.save();

    res.status(201).json({ message: 'Symptoms logged successfully.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getSymptomHistory = async (req, res) => {
  try {
    const history = await Symptom.find({ patient: req.user.id }).sort({ date: -1 });
    res.json(history);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteSymptom = async (req, res) => {
  try {
    const symptomId = req.params.id;
    const patientId = req.user.id;

    const symptom = await Symptom.findById(symptomId);

    if (!symptom) {
      return res.status(404).json({ message: 'Symptom log not found.' });
    }

    if (symptom.patient.toString() !== patientId) {
      return res.status(403).json({ message: 'User not authorized to delete this log.' });
    }

    await Symptom.findByIdAndDelete(symptomId);
    res.json({ message: 'Symptom log deleted successfully.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// --- DOCTORS ---

exports.getAvailableDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' }).select('-password');
    res.json(doctors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// --- APPOINTMENTS ---

exports.scheduleAppointment = async (req, res) => {
  const { doctorId, date, reason } = req.body;

  if (!doctorId || !date || !reason) {
    return res.status(400).json({ message: 'Please provide doctor, date, and reason.' });
  }

  try {
    const newAppointment = new Appointment({
      patient: req.user.id,
      doctor: doctorId,
      date,
      reason
    });

    await newAppointment.save();

    // Notify the doctor
    await new Notification({
        recipient: doctorId,
        message: `New appointment request from a patient.`,
        type: 'appointment'
    }).save();

    res.json(newAppointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getPatientAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user.id })
      .populate('doctor', 'email')
      .sort({ date: 1 });
    res.json(appointments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// --- MESSAGES ---

exports.sendMessage = async (req, res) => {
  const { doctorId, content } = req.body;

  if (!doctorId || !content) {
    return res.status(400).json({ message: 'Doctor ID and content are required.' });
  }

  try {
    const newMessage = new Message({
      from: req.user.id,
      to: doctorId,
      content
    });

    await newMessage.save();

    // Optional: Notify the doctor
    await new Notification({
        recipient: doctorId,
        message: `New message from a patient.`,
        type: 'message'
    }).save();

    res.json(newMessage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getPatientMessages = async (req, res) => {
  try {
    const patientId = req.user.id;
    const messages = await Message.find({
      $or: [{ from: patientId }, { to: patientId }]
    })
    .populate('from', 'email role')
    .populate('to', 'email role')
    .sort({ createdAt: 'asc' });

    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.id;
    const patientId = req.user.id;

    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json({ message: 'Message not found.' });
    }

    // Security: Only allow deleting messages sent BY the patient
    if (message.from.toString() !== patientId) {
      return res.status(403).json({ message: 'Unauthorized. You can only delete your own messages.' });
    }

    await Message.findByIdAndDelete(messageId);
    res.json({ message: 'Message deleted successfully.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};