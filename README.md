# 🧠 Task Manager Frontend

A simple and modern frontend for the Task Manager app, built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/). This frontend interfaces with the [Task Manager API](https://github.com/Reyshal/task-manager-api), offering JWT-based authentication and task management UI.

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org/) 14+
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [Axios](https://axios-http.com/) — for HTTP requests
- [React Hook Form](https://react-hook-form.com/) — form handling
- [Zod](https://zod.dev/) — schema validation
- [NextAuth.js (optional)](https://next-auth.js.org/) — for future auth enhancements

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Reyshal/task-manager-frontend.git
cd task-manager-frontend
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up `.env.local` file

Copy `.env.example` and rename it to `.env.local`, then configure the environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

---

## 📦 Features

- 🔐 **Authentication**
  - Login / Register (via JWT)
- ✅ **Task Management**
  - View, add, edit, and delete tasks
- 💡 **Form Validation**
  - With Zod and React Hook Form
- ⚙️ **API Integration**
  - Axios-based service layer with error handling

---

## 🗂 Project Structure

```bash
.
├── app/
│   ├── page.tsx              # Dashboard
│   ├── login/page.tsx        # Login page
│   ├── register/page.tsx     # Register page
│   └── layout.tsx            # Root layout
├── components/               # Reusable UI components
│   └── TaskCard.tsx
├── lib/                      # API functions, utilities
│   └── api.ts
├── hooks/                    # Custom React hooks
├── styles/
│   └── globals.css
├── public/
├── .env.local
└── next.config.js
```

---

## 🧪 Todo / Improvements

- [ ] Persist JWT in `HttpOnly` cookies
- [ ] Protected routes (via middleware or client-side check)
- [ ] Pagination / Filtering
- [ ] Mobile responsive layout
- [ ] Dockerfile / Deployment setup

---

## 📄 License

MIT — free to use, modify, and contribute.
