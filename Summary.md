# 🛡️ ThreatLens Project Overview (UK English)

## 📌 Project Objective

**ThreatLens** is a full-stack cybersecurity web application designed to simulate real-world penetration tests, analyse system logs with AI-driven models, and present findings through intuitive dashboards and exportable reports. The platform integrates manual and automated security tools with machine learning to surface vulnerabilities and anomalies in a realistic, professional-grade environment.

This project is being built to demonstrate real-world proficiency in:

- Secure full-stack web development
- AI + machine learning for cybersecurity
- Frontend UX/UI design with performance and scalability in mind
- Penetration testing techniques and DevSecOps workflow

It is intended to **accompany job applications** and serve as a public, polished portfolio piece for the following roles:

### 🎯 Target Job Roles

1. 🔐 **Penetration Tester – Addition Solutions**  
   [View Job Posting](https://uk.indeed.com/viewjob?jk=8c9db4f76f7cbef5)

2. 🧠 **Machine Learning Engineer – Abnormal AI**  
   [View Job Posting](https://uk.indeed.com/q-fully-remote-machine-learning-%C2%A370%2C000-jobs.html)

3. 🛠️ **Python Engineer – Cybersecurity Scale-up (Michael Page)**  
   [View Job Posting](https://machinelearningjobs.co.uk/view-job/python-engineer-cyber-security-da9747fc83af)

4. 💼 **ML Engineer – Tellme (Remote Startup)**  
   [View Job Posting](https://uk.linkedin.com/jobs/view/machine-learning-engineer-%C2%A350k%E2%80%93%C2%A370k-%2B-equity-remote-uk-at-tellme-4249975436)

---

## 🧠 What the Application Does

ThreatLens offers a seamless workflow from simulated attack execution to intelligent threat detection and reporting:

- 🔧 **Launch custom or pre-defined penetration test simulations** from a web interface.
- 🧪 **Upload logs or receive data streams** for AI-based classification using NLP and anomaly detection.
- 📈 **Visualise risk exposure and threat profiles** via dynamic dashboards.
- 📄 **Generate exportable reports** for compliance, audit, or client review.

It is designed to be used by:

- Ethical hackers / red teamers
- Security researchers
- Internal IT/SecOps teams
- Freelance consultants and auditors

---

## ⚙️ Stack Overview

### 🧩 Frontend

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui
- **Animation**: Framer Motion

### 🧩 Backend (Setup Complete)

- **Language**: Python (virtual environment active)
- **Planned Framework**: FastAPI or Flask
- **Functionality** (To be implemented):
  - Scan execution API
  - Threat classification API
  - Authentication endpoint
  - Report export/download

---

## ✅ Progress So Far

### 🔐 Login Page

- Located at `/app/page.tsx`
- Simple login screen (email & password)
- Hardcoded demo credentials
- Redirects to dashboard on success

### 🏠 Dashboard Page

- Located at `/app/dashboard/page.tsx`
- Displays summary metrics (e.g. Total Scans, AI Detections)
- Contains detailed paragraph explaining:
  - What ThreatLens is
  - How it works
  - The three key modules

### 📑 Sidebar Navigation

- Located at `/components/Sidebar.tsx`
- Fully collapsible (Framer Motion)
- Icons + routes to all pages
- Logout button included
- Hidden on login screen only

### 🧭 Header Component

- Located at `/components/Header.tsx`
- Top bar with welcome message

### Layout Logic

- `/app/layout.tsx` uses `usePathname()`
- Conditionally renders layout elements (sidebar, header)
- Ensures clean login screen + consistent UX elsewhere

---

## 🧭 Next Steps

We are now ready to implement the three feature-specific pages:

### 1. `/app/scan/page.tsx`

- UI to launch scans (select test type, enter URL/IP, start scan)
- Console-style output area for real-time results

### 2. `/app/threats/page.tsx`

- Upload logs or connect stream
- View AI classification (threat severity, risk types)
- Filters and tag-based categorisation

### 3. `/app/reports/page.tsx`

- List of past scans and AI results
- Filters by date/severity
- Downloadable PDF or CSV reports

---

## 🧠 After Frontend Completion

We’ll build out the **Python backend** to power these features:

- Use Flask or FastAPI
- Secure API routes
- Handle scan logic, data processing, and ML integration
- Possibly add WebSocket for real-time updates

---

This project is designed not only to **showcase deep technical ability**, but also to demonstrate:

- Strong architecture planning
- Real-world cybersecurity understanding
- Professional-grade UI/UX practices

It is a production-ready portfolio project aimed at landing one of several high-value roles in AI or cybersecurity.

Let’s build it.
