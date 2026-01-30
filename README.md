<div align="center">

# 🏥 HealthMe: AI-Powered Telehealth Platform

[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![OpenAI](https://img.shields.io/badge/AI-OpenAI_GPT--4-412991?logo=openai&logoColor=white)](https://openai.com/)
[![Twilio](https://img.shields.io/badge/Video-Twilio_SDK-F22F46?logo=twilio&logoColor=white)](https://www.twilio.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Bridging the gap between patients and healthcare providers through technology**

[🌐 Live Demo](https://healthme-496r.onrender.com) • [📖 Documentation](#documentation) • [🚀 Getting Started](#installation--setup)

</div>

---

## 📸 Platform Showcase

<div align="center">

### Patient Dashboard
![Patient Dashboard]
<img width="910" height="912" alt="image" src="https://github.com/user-attachments/assets/0806e9f8-289e-46b2-91e2-4ea35eb06f65" />
*Intuitive patient interface with appointment scheduling and health tracking*

### AI Symptom Analyzer
<img width="913" height="923" alt="image" src="https://github.com/user-attachments/assets/f92d72e4-8f32-462e-9030-81ce79b3af25" />
*OpenAI-powered symptom analysis providing preliminary health insights*

### Video Consultation
<img width="909" height="923" alt="image" src="https://github.com/user-attachments/assets/be93979f-7c59-4b34-b7d3-19c483a3a23d" />
*HIPAA-compliant video consultations powered by Twilio*

### Doctor Portal
<img width="910" height="907" alt="image" src="https://github.com/user-attachments/assets/3182dce6-5aa0-489e-8bef-dcec5f50e186" />
*Comprehensive patient management and appointment scheduling*

</div>

---

## 🌟 Overview

**HealthMe** is a full-stack telehealth ecosystem that revolutionizes how patients connect with healthcare providers. Built with modern web technologies and AI capabilities, it offers a seamless experience for virtual healthcare delivery.

### 🎯 Mission
To make quality healthcare accessible, affordable, and convenient through innovative technology solutions that empower both patients and healthcare providers.

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 👥 For Patients

- **🤖 AI Health Assistant**
  - GPT-4 powered symptom analysis
  - Preliminary health insights
  - Medical terminology translation
  
- **📹 Virtual Consultations**
  - HD video/audio quality
  - HIPAA-compliant security
  - Screen sharing capabilities
  
- **📊 Health Tracking**
  - Symptom logging & history
  - Medication reminders
  - Health metrics dashboard
  
- **📅 Smart Booking**
  - Real-time availability
  - Search by specialty
  - Instant confirmations

</td>
<td width="50%">

### 👨‍⚕️ For Healthcare Providers

- **📋 Patient Management**
  - Centralized patient records
  - Medical history access
  - Appointment scheduling
  
- **💬 Secure Messaging**
  - End-to-end encryption
  - Real-time notifications
  - HIPAA-compliant storage
  
- **⚡ AI Co-Pilot**
  - Automated summaries
  - Clinical decision support
  - Documentation assistance
  
- **📈 Analytics Dashboard**
  - Patient insights
  - Appointment metrics
  - Revenue tracking

</td>
</tr>
</table>

---

## 🏗️ Technical Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌──────────────────┐         ┌──────────────────┐          │
│  │  Patient SPA     │         │  Doctor SPA      │          │
│  │  (Vanilla JS)    │         │  (Vanilla JS)    │          │
│  └────────┬─────────┘         └────────┬─────────┘          │
└───────────┼──────────────────────────────┼──────────────────┘
            │                              │
            └──────────────┬───────────────┘
                           │
┌──────────────────────────┼──────────────────────────────────┐
│                    API Gateway (Express.js)                  │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Auth API  │  │  Video API  │  │   AI API    │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└──────────────────────────┼──────────────────────────────────┘
                           │
┌──────────────────────────┼──────────────────────────────────┐
│                    Service Layer                             │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   MongoDB   │  │   Twilio    │  │   OpenAI    │        │
│  │   Database  │  │   Video SDK │  │   GPT-4     │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└──────────────────────────────────────────────────────────────┘
```

### 🛠️ Technology Stack

<details>
<summary><b>Backend Technologies</b></summary>

- **Runtime:** Node.js v18+
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** 
  - bcrypt for password hashing
  - helmet for HTTP headers
  - CORS protection
  - Rate limiting
- **Real-time:** Socket.io for messaging
- **File Storage:** MongoDB GridFS
- **API Documentation:** Swagger/OpenAPI

</details>

<details>
<summary><b>Frontend Technologies</b></summary>

- **Core:** Vanilla JavaScript (ES6+)
- **Styling:** CSS3 with CSS Grid & Flexbox
- **Architecture:** Single Page Application (SPA)
- **State Management:** Custom state management
- **Build Tools:** Webpack, Babel
- **Testing:** Jest, Cypress

</details>

<details>
<summary><b>Third-Party Integrations</b></summary>

- **Video Platform:** Twilio Programmable Video
- **AI Engine:** OpenAI GPT-4 API
- **Email Service:** SendGrid
- **Payment Processing:** Stripe (planned)
- **Cloud Storage:** AWS S3 (planned)

</details>

---

## 📡 API Reference

### Authentication Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/auth/register` | POST | Register new user (patient/doctor) | ❌ |
| `/api/auth/login` | POST | User login and JWT generation | ❌ |
| `/api/auth/logout` | POST | User logout | ✅ |
| `/api/auth/refresh` | POST | Refresh access token | ✅ |
| `/api/auth/verify-email` | GET | Verify email address | ❌ |

### AI & Analysis Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/ai/analyze` | POST | AI symptom analysis via GPT-4 | ✅ |
| `/api/ai/chat` | POST | Interactive health chat | ✅ |
| `/api/ai/summarize` | POST | Summarize patient symptoms | ✅ (Doctor) |

### Video Consultation Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/video/token` | POST | Generate Twilio access token | ✅ |
| `/api/video/room/create` | POST | Create video consultation room | ✅ (Doctor) |
| `/api/video/room/join` | POST | Join existing room | ✅ |
| `/api/video/room/end` | POST | End consultation | ✅ (Doctor) |

### Patient Management Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/patient/profile` | GET | Get patient profile | ✅ |
| `/api/patient/profile` | PUT | Update patient profile | ✅ |
| `/api/patient/appointments` | GET | List patient appointments | ✅ |
| `/api/patient/symptoms` | POST | Log new symptoms | ✅ |
| `/api/patient/symptoms` | GET | Get symptom history | ✅ |
| `/api/patient/messages` | GET | Retrieve message history | ✅ |

### Doctor Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/doctor/profile` | GET | Get doctor profile | ✅ (Doctor) |
| `/api/doctor/patients` | GET | List assigned patients | ✅ (Doctor) |
| `/api/doctor/appointments` | GET | List appointments | ✅ (Doctor) |
| `/api/doctor/availability` | PUT | Update availability | ✅ (Doctor) |

### Appointment Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/appointments/book` | POST | Book new appointment | ✅ |
| `/api/appointments/:id` | GET | Get appointment details | ✅ |
| `/api/appointments/:id/cancel` | POST | Cancel appointment | ✅ |
| `/api/appointments/:id/reschedule` | PUT | Reschedule appointment | ✅ |

---

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/junjhon12/HealthMe-Telehealth-Platform.git
cd HealthMe-Telehealth-Platform
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
NODE_ENV=development
PORT=3000

# Database
MONGO_URI=mongodb://localhost:27017/healthme
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/healthme

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRE=30d

# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-api-key-here
OPENAI_MODEL=gpt-4

# Twilio Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_API_KEY=your_twilio_api_key
TWILIO_API_SECRET=your_twilio_api_secret

# Email Service (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@healthme.com
FROM_NAME=HealthMe Platform

# Client URLs
CLIENT_URL=http://localhost:3000
DOCTOR_PORTAL_URL=http://localhost:3000/doctor
PATIENT_PORTAL_URL=http://localhost:3000/patient

# Security
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100

# Session Configuration
SESSION_SECRET=your_session_secret_here
```

### 4️⃣ Database Setup

#### Option A: Local MongoDB

```bash
# Install MongoDB locally
# macOS
brew install mongodb-community

# Ubuntu
sudo apt-get install mongodb

# Start MongoDB
mongod --dbpath /path/to/your/data/directory
```

#### Option B: MongoDB Atlas (Recommended)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGO_URI` in `.env`

### 5️⃣ Initialize Database

```bash
# Run database migrations and seed data
npm run db:setup

# Or manually:
node utils/dbSetup.js
```

### 6️⃣ Start the Development Server

```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start
```

The application will be available at:
- Patient Portal: `http://localhost:3000/patient`
- Doctor Portal: `http://localhost:3000/doctor`
- API: `http://localhost:3000/api`

---

## 🧪 Testing

### Run All Tests

```bash
npm test
```

### Run Specific Test Suites

```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

---

## 📁 Project Structure

```
HealthMe-Telehealth-Platform/
├── controllers/              # Request handlers
│   ├── authController.js
│   ├── patientController.js
│   ├── doctorController.js
│   ├── appointmentController.js
│   └── aiController.js
│
├── middleware/               # Custom middleware
│   ├── auth.js              # JWT authentication
│   ├── errorHandler.js      # Error handling
│   ├── rateLimiter.js       # API rate limiting
│   └── validator.js         # Request validation
│
├── models/                   # Database models
│   ├── User.js
│   ├── Patient.js
│   ├── Doctor.js
│   ├── Appointment.js
│   ├── Symptom.js
│   └── Message.js
│
├── routes/                   # API routes
│   ├── auth.js
│   ├── patient.js
│   ├── doctor.js
│   ├── appointment.js
│   ├── ai.js
│   └── video.js
│
├── public/                   # Frontend static files
│   ├── css/
│   ├── js/
│   │   ├── patient/         # Patient SPA
│   │   └── doctor/          # Doctor SPA
│   ├── images/
│   └── index.html
│
├── utils/                    # Utility functions
│   ├── openai.js            # OpenAI integration
│   ├── twilio.js            # Twilio integration
│   ├── email.js             # Email service
│   └── validation.js        # Data validation
│
├── config/                   # Configuration files
│   ├── database.js
│   └── security.js
│
├── tests/                    # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example             # Environment variables template
├── .gitignore
├── database_design.sql      # Database schema
├── package.json
├── server.js                # Application entry point
└── README.md
```

---

## 🔐 Security Features

HealthMe implements industry-standard security practices:

### Data Protection
- ✅ **Encryption at Rest**: All sensitive data encrypted in MongoDB
- ✅ **Encryption in Transit**: HTTPS/TLS for all communications
- ✅ **Password Security**: bcrypt hashing with salt rounds
- ✅ **JWT Authentication**: Secure token-based auth with refresh tokens

### Compliance
- ✅ **HIPAA Considerations**: Designed with HIPAA compliance in mind
- ✅ **Data Privacy**: User data access controls and audit logs
- ✅ **Secure Video**: Twilio's HIPAA-eligible video infrastructure

### API Security
- ✅ **Rate Limiting**: Prevents DDoS and brute force attacks
- ✅ **Input Validation**: Sanitization and validation of all inputs
- ✅ **CORS Protection**: Configured cross-origin resource sharing
- ✅ **SQL Injection Prevention**: NoSQL injection protection via Mongoose

---

## 🎨 User Interface

### Design Principles

- **Accessibility First**: WCAG 2.1 AA compliant
- **Responsive Design**: Mobile-first approach
- **Clean & Intuitive**: Minimal learning curve
- **Fast Performance**: Optimized for speed

### Screenshots

<details>
<summary><b>Patient Experience</b></summary>

#### Registration & Onboarding
![Registration](./public/images/patient-registration.png)

#### Dashboard Home
![Dashboard](./public/images/patient-home.png)

#### Find a Doctor
![Find Doctor](./public/images/find-doctor.png)

#### Book Appointment
![Book Appointment](./public/images/book-appointment.png)

#### AI Symptom Checker
![Symptom Checker](./public/images/symptom-checker.png)

#### Video Call Interface
![Video Call](./public/images/patient-video-call.png)

</details>

<details>
<summary><b>Doctor Experience</b></summary>

#### Doctor Dashboard
![Doctor Dashboard](./public/images/doctor-dashboard.png)

#### Patient List
![Patient List](./public/images/patient-list.png)

#### Patient Details
![Patient Details](./public/images/patient-details.png)

#### Appointment Calendar
![Calendar](./public/images/appointment-calendar.png)

#### Video Consultation
![Doctor Video](./public/images/doctor-video-call.png)

</details>

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation

---

## 📚 Documentation

### Additional Resources

- [API Documentation](https://healthme-496r.onrender.com/api-docs) (Swagger)
- [User Guide](./docs/user-guide.md)
- [Developer Guide](./docs/developer-guide.md)
- [Deployment Guide](./docs/deployment.md)
- [Troubleshooting](./docs/troubleshooting.md)

### Video Tutorials

- [Getting Started (5 min)](https://youtube.com/watch?v=example)
- [Patient Tutorial (10 min)](https://youtube.com/watch?v=example)
- [Doctor Tutorial (15 min)](https://youtube.com/watch?v=example)

---

## 🚀 Deployment

### Deploy to Production

<details>
<summary><b>Deploy to Render</b></summary>

1. Create a Render account
2. Connect your GitHub repository
3. Configure environment variables
4. Deploy!

```bash
# Build command
npm install

# Start command
npm start
```

</details>

<details>
<summary><b>Deploy to Heroku</b></summary>

```bash
heroku create healthme-app
heroku config:set NODE_ENV=production
heroku config:set MONGO_URI=your_mongodb_uri
# Set other environment variables
git push heroku main
```

</details>

<details>
<summary><b>Deploy to AWS</b></summary>

See [AWS Deployment Guide](./docs/deployment/aws.md) for detailed instructions.

</details>

<details>
<summary><b>Docker Deployment</b></summary>

```bash
# Build image
docker build -t healthme .

# Run container
docker run -p 3000:3000 --env-file .env healthme
```

</details>

---

## 🔧 Troubleshooting

### Common Issues

<details>
<summary><b>MongoDB Connection Error</b></summary>

**Error:** `MongoServerError: Authentication failed`

**Solution:**
- Check your MongoDB URI in `.env`
- Verify MongoDB is running
- Check network access in MongoDB Atlas
- Verify credentials

</details>

<details>
<summary><b>Twilio Video Not Working</b></summary>

**Error:** `Unable to create video room`

**Solution:**
- Verify Twilio credentials in `.env`
- Check Twilio account status
- Ensure proper permissions
- Check browser WebRTC support

</details>

<details>
<summary><b>OpenAI API Rate Limit</b></summary>

**Error:** `Rate limit exceeded`

**Solution:**
- Check API usage in OpenAI dashboard
- Upgrade API plan if needed
- Implement caching for common queries
- Add rate limiting on client side

</details>

---

## 📊 Roadmap

### Current Version: v1.0.0

- ✅ User authentication & authorization
- ✅ Patient registration & profiles
- ✅ Doctor profiles & specialties
- ✅ Appointment booking system
- ✅ AI symptom analysis
- ✅ Video consultations
- ✅ Secure messaging

### Upcoming Features (v2.0.0)

- 🔄 Electronic Health Records (EHR) integration
- 🔄 Prescription management
- 🔄 Payment processing (Stripe)
- 🔄 Insurance verification
- 🔄 Mobile apps (iOS/Android)
- 🔄 Multi-language support
- 🔄 Advanced analytics dashboard
- 🔄 Telemedicine API for third-party integration

### Future Enhancements (v3.0.0)

- ⏳ AI-powered diagnosis assistance
- ⏳ Wearable device integration
- ⏳ Automated appointment reminders
- ⏳ Group video consultations
- ⏳ Health insurance marketplace
- ⏳ Mental health support features

---

## 👥 Team & Acknowledgments

### Development Team

This project was developed as part of a Full-Stack Software Engineering course.

### Special Thanks

- **OpenAI** - For GPT-4 API and documentation
- **Twilio** - For Programmable Video SDK
- **MongoDB** - For excellent database documentation
- **Node.js Community** - For amazing packages and support

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 HealthMe Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## ⚠️ Disclaimer

**IMPORTANT NOTICE:**

HealthMe is a **demonstration platform** built for educational purposes. 

- ❌ **NOT for actual medical use**
- ❌ **NOT a substitute for professional medical advice**
- ❌ **NOT HIPAA-compliant in current form**
- ❌ **NOT intended for production healthcare environments**

**For Medical Emergencies:**
- 🚨 Call 911 (US) or your local emergency number
- 🏥 Visit the nearest emergency room
- ☎️ Contact your primary care physician

This platform is a **technology demonstration** only. Always consult qualified healthcare professionals for medical advice, diagnosis, or treatment.

---

## 📞 Support & Contact

### Get Help

- 📧 Email: support@healthme-demo.com
- 💬 Discord: [Join our community](https://discord.gg/healthme)
- 🐛 Issues: [GitHub Issues](https://github.com/junjhon12/HealthMe-Telehealth-Platform/issues)
- 📖 Wiki: [Project Wiki](https://github.com/junjhon12/HealthMe-Telehealth-Platform/wiki)

### Stay Connected

- 🌐 Website: [healthme-496r.onrender.com](https://healthme-496r.onrender.com)
- 🐦 Twitter: [@HealthMePlatform](https://twitter.com/healthmeplatform)
- 📺 YouTube: [HealthMe Tutorials](https://youtube.com/healthme)

---

<div align="center">

### ⭐ Star Us on GitHub!

If you find this project helpful, please consider giving it a star! It helps us reach more developers and healthcare innovators.

[![Star on GitHub](https://img.shields.io/github/stars/junjhon12/HealthMe-Telehealth-Platform?style=social)](https://github.com/junjhon12/HealthMe-Telehealth-Platform)

---

**Made with ❤️ by the HealthMe Team**

*Empowering healthcare through technology*

</div>
