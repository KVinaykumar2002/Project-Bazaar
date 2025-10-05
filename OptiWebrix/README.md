# OptiWebrix - Full Stack Web Application

A modern, responsive web application with separate frontend and backend components.

## 📁 Project Structure

```
OptiWebrix/
├── frontend/          # React + Vite frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   ├── package.json  # Frontend dependencies
│   └── ...
├── backend/          # Node.js + Express backend server
│   ├── server.js     # Main server file
│   ├── package.json  # Backend dependencies
│   └── ...
└── README.md         # This file
```

## 🚀 Quick Start

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`

### Backend Setup
```bash
cd backend
npm install
npm start
```
The backend will run on `http://localhost:3001`

## 📖 Documentation

- **[Frontend README](./frontend/README.md)** - Frontend setup and development guide
- **[Backend README](./backend/README.md)** - Backend setup and API documentation
- **[SMTP Setup Guide](./SMTP_SETUP_GUIDE.md)** - Email configuration guide
- **[Quick Fix Guide](./QUICK_FIX_GUIDE.md)** - Common issues and solutions
- **[Start Here](./START_HERE.md)** - Complete setup instructions

## 🛠️ Technologies Used

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod Validation

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS
- dotenv

## 📧 Features

- Responsive design
- Contact form with SMTP integration
- Dark/Light theme support
- Smooth animations
- Email validation
- Modern UI components

## 🔧 Development

1. Clone the repository
2. Set up both frontend and backend as described above
3. Configure your SMTP settings in `backend/.env`
4. Start both servers for full functionality

## 📝 License

MIT