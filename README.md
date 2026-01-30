# 🏥 HealthMe: A Full-Stack AI-Powered Telehealth Ecosystem

![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)
![OpenAI](https://img.shields.io/badge/AI-OpenAI_GPT--4-412991?logo=openai&logoColor=white)
![Twilio](https://img.shields.io/badge/Video-Twilio_SDK-F22F46?logo=twilio&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**HealthMe** is a comprehensive telehealth platform designed to bridge the gap between patients and healthcare providers. It features real-time video consultations, AI-driven symptom analysis, and secure encrypted messaging, all packaged within a modern, role-based SPA (Single Page Application).

🔗 **Live Platform:** [https://healthme-496r.onrender.com](https://healthme-496r.onrender.com)

Img: <img width="906" height="915" alt="image" src="https://github.com/user-attachments/assets/49f9f4f8-6d8e-4b34-8453-883219fd581c" />
<img width="1067" height="816" alt="image" src="https://github.com/user-attachments/assets/4695e43c-36d2-4be4-832f-6e9899eef1e5" />
<img width="1067" height="811" alt="image" src="https://github.com/user-attachments/assets/9737dba8-7663-4144-a4b3-2b0674cf7965" />

---

## 🌟 Key Features

### **For Patients**
* **🤖 AI Symptom Analysis:** Leveraging the OpenAI API to provide preliminary health insights and analysis.
* **📹 Virtual Consultations:** Integrated Twilio Video SDK for high-definition, secure face-to-face appointments.
* **📊 Health Logging:** Track symptom history over time to provide doctors with better diagnostic data.
* **📅 Easy Booking:** Search for doctors by specialty and book appointments instantly.

### **For Healthcare Providers**
* **📋 Patient Management:** Centralized dashboard to view patient histories, symptoms, and scheduled visits.
* **💬 Secure Messaging:** A real-time, JWT-secured chat system for patient follow-ups.
* **⚡ AI Co-Pilot:** Use AI tools to help summarize patient symptoms for faster review.

---

## 🛠️ Tech Stack & Architecture

### **The Backend (Engine)**
* **Environment:** Node.js & Express.js
* **Database:** MongoDB (NoSQL) for flexible patient records and symptom logs.
* **Security:** JSON Web Tokens (JWT) for session management and `bcrypt` for password hashing.
* **Services:** * **Twilio Video:** Powers the WebRTC video/audio rooms.
    * **OpenAI API:** Drives the conversational health assistant and symptom analyzer.

### **The Frontend (Experience)**
* **Core:** Vanilla JavaScript (ES6+), HTML5, CSS3.
* **Architecture:** Organized as two distinct Single-Page Applications (SPAs) for Patients and Doctors, ensuring a tailored experience for each user role.

---

## 📂 API Reference

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/auth/register` | `POST` | User registration with role assignment. |
| `/api/ai/analyze` | `POST` | Processes symptom strings via GPT-4. |
| `/api/video/token` | `POST` | Generates secure Twilio access tokens. |
| `/api/patient/messages` | `GET` | Retrieves encrypted message history. |

---

## 🚀 Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone [https://github.com/junjhon12/HealthMe.git](https://github.com/junjhon12/HealthMe.git)
Backend Setup

Bash

cd healthme-backend
npm install
Create a .env file with your MONGO_URI, OPENAI_API_KEY, and TWILIO credentials.

Start the server

Bash

node server.js
🤝 Collaboration & Contribution
Developed as a Full-Stack Software Engineering project. Special thanks to the Twilio and OpenAI developer communities.

Disclaimer: HealthMe is a simulation and should not be used for actual medical advice or emergencies.
