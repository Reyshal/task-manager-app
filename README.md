# 🧠 Task Manager App

A simple and modern frontend for the Task Manager app, built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/). This frontend interfaces with the [Task Manager API](https://github.com/Reyshal/task-manager-api), offering JWT-based authentication and task management UI.

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org/) 14+
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [Axios](https://axios-http.com/) — for HTTP requests
- [Tanstack Query](https://tanstack.com/) - for state management 

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Reyshal/task-manager-app.git
cd task-manager-app
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

## 📄 License

MIT — free to use, modify, and contribute.
