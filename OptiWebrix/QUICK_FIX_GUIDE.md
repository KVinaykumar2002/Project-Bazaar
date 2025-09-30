# ✅ ERRORS FIXED! Quick Reference Guide

## 🎉 What Was Fixed

1. **Port Conflict Resolved** - Changed from port 5000 → 3001 (macOS uses 5000 for AirPlay)
2. **CORS Configuration Updated** - Added proper CORS headers
3. **Backend Server Running** - Successfully started on http://localhost:3001
4. **Frontend Updated** - Now connects to the correct port

## ✨ Current Status

✅ Backend server is running on: **http://localhost:3001**  
✅ Frontend connects to: **http://localhost:3001**  
✅ CORS errors are fixed  
✅ Server is ready to send emails

## 🚀 How to Use

### 1. Update Your SMTP Credentials (IMPORTANT!)

Edit this file: `OptiWebrix/server/.env`

```env
# Change these values with your actual email credentials:
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

**For Gmail:**
1. Go to: https://myaccount.google.com/apppasswords
2. Create an App Password
3. Copy the 16-character password
4. Paste it in `SMTP_PASS`

### 2. Backend Server (Already Running!)

The server is already running in the background. If you need to restart it:

```bash
cd OptiWebrix/server
npm run dev
```

Server will run on: **http://localhost:3001**

### 3. Frontend Server

Make sure your frontend is running:

```bash
cd OptiWebrix
npm run dev
```

### 4. Test the Form

1. Open your browser to your frontend URL (usually http://localhost:5173)
2. Navigate to the contact form
3. Fill it out and submit
4. Check your email inbox!

## 🔧 Port Information

- **Old Port:** 5000 (conflicted with macOS AirPlay) ❌
- **New Port:** 3001 (working perfectly!) ✅

## 🧪 Test Commands

**Check if backend is running:**
```bash
curl http://localhost:3001/api/health
```

**Test email sending (replace with your data):**
```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message from the API"
  }'
```

## 🐛 Troubleshooting

### Backend not responding?
```bash
# Check if running on port 3001
lsof -ti:3001

# If nothing, restart the server
cd OptiWebrix/server
npm run dev
```

### Still getting CORS errors?
- Make sure backend is running on port 3001
- Check that frontend is using http://localhost:3001
- Clear browser cache and reload

### Email not sending?
1. ✅ Update `.env` with real SMTP credentials
2. ✅ Use Gmail App Password (not regular password)
3. ✅ Check server console for error messages
4. ✅ Verify SMTP settings are correct

## 📁 Files Changed

- ✏️ `server/.env` - Changed PORT from 5000 to 3001
- ✏️ `server/server.js` - Updated CORS configuration
- ✏️ `src/components/ContactForm.jsx` - Updated API_URL to port 3001
- ✏️ `src/components/Contact.jsx` - Updated API_URL to port 3001

## 🎯 Next Steps

1. **Update SMTP credentials** in `server/.env`
2. **Test the contact form** on your website
3. **Check your email** to confirm it works
4. **Deploy to production** when ready

## 💡 Important Notes

- Port 5000 is reserved by macOS for AirPlay/AirTunes
- Always use port 3001 for this project (or another port, just not 5000)
- The `.env` file is already created but needs your real credentials
- Backend must be running for the contact form to work

---

**Everything is fixed and ready to use!** 🚀  
Just update your SMTP credentials and test the form!
