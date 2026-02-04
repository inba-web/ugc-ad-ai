## 🚀 UGC AI Ads Generator

**UGC AI Ads Generator** is a scalable, enterprise-grade SaaS platform that empowers businesses to generate high-converting AI-driven UGC (User-Generated Content) advertisements. Built on the PERN stack and integrated with modern cloud-native services, the platform delivers a production-ready ad creation pipeline optimized for performance, scalability, and growth.

---

## 🎯 Value Proposition

* **AI-Driven UGC Ad Creation** – Automatically generate ad scripts, creatives, and layouts.
* **Scalable SaaS Architecture** – Designed for multi-tenant, high-traffic environments.
* **Enterprise-Ready Stack** – Secure authentication, managed databases, and ORM-based data modeling.
* **Growth Optimization** – Rapid creative iteration for A/B testing and conversion optimization.

---

## 🧠 Core Features

* AI-powered ad script and creative generation
* UGC-style ad templates (Vertical & Horizontal formats)
* Secure authentication via Clerk
* PostgreSQL database powered by Neon
* Prisma ORM for type-safe database operations
* Google APIs integration for media and AI workflows
* Real-time preview and export of creatives
* Modular frontend architecture for rapid feature delivery

---

## 🏗️ Tech Stack

**Frontend**

* React.js
* TypeScript
* Tailwind CSS
* Axios
* Lucide Icons

**Backend**

* Node.js
* Express.js
* Prisma ORM

**Database**

* PostgreSQL (Neon Serverless Database)

**Authentication**

* Clerk

**Integrations**

* Google APIs (AI & media services)

**Infrastructure**

* SaaS-ready deployment (Vercel / Render / AWS)
* Environment-based configuration for dev, staging, and production

---

## 📂 Project Structure

```
ugc-ai-ads-generator/
│
├── client/                # React frontend
│   ├── components/         # Reusable UI components
│   ├── pages/               # Application pages
│   ├── config/              # Axios and API config
│   └── assets/              # Static assets
│
├── server/                # Express backend
│   ├── routes/              # API routes
│   ├── controllers/         # Business logic
│   ├── prisma/               # Prisma schema and migrations
│   └── services/             # AI & Google API services
│
├── .env.example
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

> ⚠️ **Security Notice**
> Never commit real API keys, database URLs, or secrets to GitHub. Always use environment variables and `.env.example` templates. Rotate any exposed credentials immediately.

> ⚠️ **Project Status**
> This project is not fully production-ready yet. The AI generation pipeline requires a **Google AI API key**, which is only available with **paid access or $300 free trial credits**. Without this key, AI creative generation features will not function.

### 1️⃣ Clone the Repository

> ⚠️ **Important Note**
> This project is not fully production-ready yet. The AI generation pipeline requires a **Google AI API key**, which is only available with **paid access or $300 free trial credits**. Without this key, AI creative generation features will not function.

### 1️⃣ Clone the Repository

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ugc-ai-ads-generator.git
cd ugc-ai-ads-generator
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Configuration

Create a `.env` file and configure the following:

```env
# Server Environment Variables
PORT=5000
DATABASE_URL=your_neon_postgres_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SIGNING_SECRET=your_clerk_webhook_secret
CLOUDINARY_URL=your_cloudinary_url
GOOGLE_CLOUD_API_KEY=your_google_api_key

# Client Environment Variables
VITE_BASEURL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 4️⃣ Run Database Migrations

```bash
npx prisma migrate dev
```

### 5️⃣ Start the Application

```bash
npm run dev
```

---

## 🧩 Usage Workflow

1. Authenticate via Clerk.
2. Input product or campaign details.
3. Generate AI-driven UGC ad scripts and creatives.
4. Preview ad layouts (Vertical/Horizontal).
5. Export creatives for deployment on ad platforms.

---

## 📈 Roadmap

* Multi-tenant workspace support
* Bulk ad generation pipeline
* AI avatars and voice-over synthesis
* Campaign performance analytics dashboard
* Meta & Google Ads direct publishing integration
* Team collaboration and role-based access control

---

## 🤝 Contribution Guidelines

* Fork the repository
* Create a feature branch
* Commit with descriptive messages
* Open a pull request for review

---

## ⭐ Support

If this project adds value to your workflow, consider starring the repository and sharing it with your network.
