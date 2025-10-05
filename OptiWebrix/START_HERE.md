# 🚀 Quick Start - SMTP Email Integration

## ✅ What's Done

Your contact forms have been integrated with a custom SMTP email server! The integration is complete and ready to use.

## 🎯 Quick Setup (5 minutes)

### 1️⃣ Configure Your Email (Most Important!)

Open `OptiWebrix/backend/env.example` and save it as `.env` with your details:

```bash
cd OptiWebrix/backend
cp env.example .env
# Then edit .env with your email credentials
```

**For Gmail users:**
1. Go to https://myaccount.google.com/apppasswords
2. Create an App Password
3. Copy the 16-character password
4. Use it in your `.env` file

Example `.env`:
```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourname@gmail.com
SMTP_PASS=your-16-char-app-password
RECIPIENT_EMAIL=yourname@gmail.com
```

### 2️⃣ Start the Servers

**Option A - Start Both (Recommended):**
```bash
# In OptiWebrix directory
npm run dev:all
```

**Option B - Start Separately:**

Terminal 1 (Backend):
```bash
cd OptiWebrix/backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd OptiWebrix/frontend
npm run dev
```

### 3️⃣ Test It!

1. Open `http://localhost:5173` in your browser
2. Go to the contact form
3. Fill it out and submit
4. Check your email! 📧

## 📁 What Was Created

```
OptiWebrix/
├── backend/                   # ← Backend SMTP server
│   ├── server.js             # Express server with Nodemailer
│   ├── package.json          # Backend dependencies
│   ├── env.example           # Example environment file
│   └── README.md             # Detailed backend docs
│
├── frontend/                  # ← Frontend React application
│   ├── src/
│   │   └── components/
│   │       ├── Contact.jsx           # ✏️ UPDATED - Uses SMTP backend
│   │       └── ContactForm.jsx       # ✏️ UPDATED - Uses SMTP backend
│   ├── package.json          # Frontend dependencies
│   └── README.md             # Frontend documentation
│
├── SMTP_SETUP_GUIDE.md       # Complete setup guide
└── START_HERE.md             # This file
```

## 🔧 Common SMTP Providers

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```
**Note:** Requires App Password (not regular password)

### Outlook
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

## 🧪 Test the API Directly

```bash
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello World!"}'
```

## ❓ Troubleshooting

### "Invalid login" error
- ✅ Use App Password for Gmail (not regular password)
- ✅ Enable 2-Step Verification first
- ✅ Check SMTP credentials are correct

### Backend won't start
- ✅ Make sure `.env` file exists in `backend/` directory
- ✅ Run `npm install` in `backend/` directory
- ✅ Check port 5000 isn't already in use

### Frontend can't connect
- ✅ Make sure backend is running on port 5000
- ✅ Check browser console for errors
- ✅ Verify API_URL is correct

### Email not received
- ✅ Check spam folder
- ✅ Verify RECIPIENT_EMAIL is correct
- ✅ Look at server console for error messages

## 📚 Documentation

- **Full Setup Guide:** `SMTP_SETUP_GUIDE.md`
- **Backend Docs:** `backend/README.md`
- **Deployment Guide:** See `backend/README.md`

## 🎨 Customization

### Change Email Template
Edit `backend/server.js` → Look for `mailOptions.html`

### Change Recipient
Edit `backend/.env` → Update `RECIPIENT_EMAIL`

### Change Port
Edit `backend/.env` → Update `PORT`

## 🚀 Next Steps

1. **Development:** Test locally with your SMTP credentials
2. **Production:** Deploy backend to Heroku/Render/Railway
3. **Frontend:** Update `VITE_API_URL` to production backend URL

## 💡 Pro Tips

- Keep your `.env` file secure (never commit to Git)
- Use different recipient emails for testing vs production
- Set up email forwarding if needed
- Monitor server logs for debugging

---

**Need more help?** Check `SMTP_SETUP_GUIDE.md` for detailed instructions!
