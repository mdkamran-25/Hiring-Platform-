# **Hiring Platform**

_A job-matching platform with AI-driven resume parsing and real-time features_

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Frontend CI](https://github.com/yourusername/hiring-platform/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/yourusername/hiring-platform/actions)

---

## **Tech Stack**

- **Frontend**: Next.js (TypeScript), Tailwind CSS, Zustand
- **Backend**: Node.js/Express, MongoDB (Mongoose), Firebase
- **AI/NLP**: Python (spaCy), Docker
- **Hosting**: Vercel (Frontend), Render (Backend), MongoDB Atlas, Firebase
- **CI/CD**: GitHub Actions

---

## **Quick Start**

### Prerequisites

- Node.js ≥18.x, Python ≥3.9, Docker (optional)
- MongoDB Atlas & Firebase accounts (free tiers).

### Installation

1. **Clone the repo**:

   ```bash
   git clone https://github.com/yourusername/hiring-platform.git
   cd hiring-platform
   ```

2. **Set up Frontend**:

   ```bash
   cd frontend
   npm install
   cp .env.local.example .env.local  # Update Firebase/backend keys
   ```

3. **Set up Backend**:

   ```bash
   cd backend
   npm install
   cp .env.example .env  # Add MongoDB Atlas URI, Firebase config
   ```

4. **Set up AI Services**:
   ```bash
   cd ai
   pip install -r requirements.txt  # spaCy, pandas, etc.
   python -m spacy download en_core_web_sm  # NLP model
   ```

---

## **Project Structure**

```
hiring-platform/
│── backend/                      # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/                # Config files (DB, Firebase, etc.)
│   │   ├── controllers/           # Business logic for routes
│   │   ├── middlewares/           # Authentication, error handling
│   │   ├── models/                # MongoDB Models (Mongoose)
│   │   ├── routes/                # API Routes (Resume, Jobs, Users)
│   │   ├── services/              # Business logic (AI, Job Matching)
│   │   ├── utils/                 # Helper functions
│   │   ├── app.js                 # Express server setup
│   │   ├── server.js              # Start the backend
│   ├── .env                       # Environment variables
│   ├── package.json               # Dependencies for backend
│   ├── README.md

│── frontend/                     # Frontend (Next.js + TypeScript)
│   ├── public/                   # Static assets (logos, icons)
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── features/              # Feature-specific UI components
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── pages/                 # Next.js pages (index.tsx, dashboard.tsx)
│   │   ├── styles/                # Tailwind CSS and global styles
│   │   ├── utils/                 # Utility functions (API calls, helpers)
│   │   ├── config/                # Configuration files (API URLs, Firebase)
│   │   ├── types/                 # TypeScript interfaces
│   │   ├── store/                 # State management (Zustand/Redux)
│   │   ├── app/                   # Next.js App Router
│   ├── .env.local                 # Environment variables
│   ├── package.json               # Dependencies for frontend
│   ├── README.md

│── ai/                            # AI & NLP (spaCy Resume Parsing)
│   ├── models/                    # AI Models
│   ├── scripts/                   # Data processing scripts
│   ├── resume_parser.py           # Resume parsing logic
│   ├── job_matching.py            # AI-powered job matching

│── deployment/                    # CI/CD, Deployment scripts
│   ├── vercel.json                # Vercel config for frontend
│   ├── docker-compose.yml         # Docker setup (if needed)
│   ├── firebase.json              # Firebase setup
│   ├── github-actions/            # GitHub Actions CI/CD

│── .gitignore                      # Ignore node_modules, env files
│── README.md                       # Project documentation

```

---

## **Configuration**

### Environment Variables

- **Backend** (`.env`):

  ```
  MONGODB_URI=your_mongodb_atlas_uri
  FIREBASE_API_KEY=your_firebase_key
  JWT_SECRET=your_jwt_secret
  ```

- **Frontend** (`.env.local`):

  ```
  NEXT_PUBLIC_API_URL=http://localhost:5000/api
  NEXT_PUBLIC_FIREBASE_CONFIG=your_firebase_config
  ```

- **AI** ( `.env`):
  ```
  ML_MODEL_PATH=./ai/models
  ```

---

## **Running Locally**

1. **Start Backend**:

   ```bash
   cd backend
   npm run dev  # http://localhost:5000
   ```

2. **Start Frontend**:

   ```bash
   cd frontend
   npm run dev  # http://localhost:3000
   ```

3. **Run AI Scripts**:
   ```bash
   cd ai
   python resume_parser.py --file sample_resume.pdf
   ```

---

## **Deployment**

### Frontend (Vercel)

- Link your GitHub repo to Vercel.
- Set environment variables in Vercel’s dashboard.
- Push to `main` branch to trigger auto-deploy.

### Backend (Render)

- Create a **Web Service** on Render.
- Connect your backend repo and add environment variables.
- Set build command: `npm install && npm run build`.

### AI Services (Google Cloud Run)

- Build Docker image:
  ```bash
  docker build -t resume-parser ./ai
  ```
- Deploy:
  ```bash
  gcloud run deploy --image resume-parser --platform managed
  ```

---

## **Contributing**

1. **Branch Naming**:
   - `feature/job-search`: New features.
   - `fix/auth-bug`: Bug fixes.
2. **Pull Requests**:
   - Include tests (if applicable) and update documentation.
   - Use `npm run lint` (ESLint) before submitting.

---

## **Troubleshooting**

- **MongoDB Connection Issues**: Verify Atlas IP whitelisting.
- **Firebase Auth Errors**: Check `NEXT_PUBLIC_FIREBASE_CONFIG` in frontend.
- **AI Model Failures**: Ensure spaCy model is downloaded (`en_core_web_sm`).

---

## **License**

MIT License. See [LICENSE](LICENSE) for details.

---

## **FAQ**

❓ **How to test the AI locally?**  
 Run `python job_matching.py --test` with sample data in `ai/test_data/`.

❓ **Where are API docs?**  
 See `backend/README.md` for Postman collection links.
