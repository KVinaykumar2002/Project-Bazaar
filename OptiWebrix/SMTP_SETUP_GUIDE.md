# SMTP Integration Setup Guide

Your contact forms have been successfully integrated with a custom SMTP backend! 🎉

## What Changed?

### Backend (New)
- Created a Node.js/Express server with Nodemailer integration
- Location: `OptiWebrix/backend/`
- SMTP-based email sending with HTML templates

### Frontend (Updated)
- **ContactForm.jsx** - Updated to use SMTP backend API
- **Contact.jsx** - Updated to use SMTP backend API
- Removed dependency on EmailJS
- Now uses `fetch` API to communicate with backend

## Quick Start Guide

### Step 1: Configure SMTP Credentials

1. Navigate to the server directory:
   ```bash
   cd OptiWebrix/server
   ```

2. Create a `.env` file from the example:
   ```bash
   cp env.example .env
   ```

3. Edit `.env` with your SMTP credentials:
   ```env
   PORT=5000
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-specific-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

### Step 2: Gmail App Password Setup (Recommended)

If using Gmail:

1. Go to your Google Account: https://myaccount.google.com
2. Enable **2-Step Verification**
3. Generate an **App Password**:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
4. Use this password in `SMTP_PASS` in your `.env` file

### Step 3: Start the Backend Server

```bash
cd OptiWebrix/server
npm run dev
```

The server will start on `http://localhost:5000`

### Step 4: Configure Frontend (Optional)

The frontend is already configured to use `http://localhost:5000` by default.

For production or custom backend URL, create a `.env` file in `OptiWebrix/`:

```env
VITE_API_URL=http://localhost:5000
```

Or for production:
```env
VITE_API_URL=https://your-backend-domain.com
```

### Step 5: Start the Frontend

In a new terminal:

```bash
cd OptiWebrix
npm run dev
```

### Step 6: Test the Contact Form

1. Open your browser to `http://localhost:5173` (or your Vite dev server URL)
2. Navigate to the contact form
3. Fill out the form and submit
4. Check your email inbox (the one you set in `RECIPIENT_EMAIL`)

## Supported SMTP Providers

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Outlook/Hotmail
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

### Custom SMTP
- Contact your email provider for SMTP settings
- Port 465 typically requires `SMTP_SECURE=true`
- Port 587 typically requires `SMTP_SECURE=false`

## Testing the API

You can test the backend directly using curl:

```bash
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message from the API"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "<unique-message-id>"
}
```

## Deployment

### Backend Deployment Options:

1. **Heroku**
   - Push server directory to Heroku
   - Set environment variables in Heroku dashboard
   - Update frontend `VITE_API_URL` to Heroku URL

2. **Render**
   - Connect GitHub repository
   - Set root directory to `backend/`
   - Add environment variables
   - Deploy

3. **Railway**
   - Import project
   - Configure environment variables
   - Deploy

4. **VPS (DigitalOcean, AWS, etc.)**
   - Install Node.js
   - Clone repository
   - Set up PM2 or systemd
   - Configure Nginx reverse proxy

### Frontend Deployment:

Update `VITE_API_URL` environment variable to point to your deployed backend.

## Troubleshooting

### "Invalid login" with Gmail
- ✅ Enable 2-Step Verification
- ✅ Use App Password (not regular password)
- ✅ Check that Less Secure Apps is OFF

### Port Already in Use
```bash
# Find and kill process on port 5000
lsof -ti:5000 | xargs kill
```

### CORS Errors
- Backend has CORS enabled for all origins in development
- For production, update CORS settings in `backend/server.js`

### Email Not Sending
- ✅ Check SMTP credentials
- ✅ Verify SMTP_HOST and SMTP_PORT
- ✅ Check firewall/network settings
- ✅ Look at server console logs for errors

### Frontend Can't Connect to Backend
- ✅ Ensure backend server is running
- ✅ Check `VITE_API_URL` is correct
- ✅ Verify no CORS errors in browser console

## File Structure

```
OptiWebrix/
├── backend/                         # Backend server
│   ├── server.js                   # Main server file
│   ├── package.json                # Backend dependencies
│   ├── .env                        # Environment variables (create this)
│   ├── env.example                 # Example environment file
│   ├── .gitignore                  # Git ignore file
│   └── README.md                   # Backend documentation
├── frontend/src/
│   └── components/
│       ├── Contact.jsx             # Updated to use SMTP backend
│       └── ContactForm.jsx         # Updated to use SMTP backend
└── SMTP_SETUP_GUIDE.md            # This file
```

## Security Best Practices

- ✅ Never commit `.env` files to Git
- ✅ Use environment variables for all secrets
- ✅ Enable HTTPS in production
- ✅ Consider adding rate limiting
- ✅ Use strong App Passwords
- ✅ Regularly rotate credentials

## Need Help?

1. Check the server console logs for errors
2. Check browser console for frontend errors
3. Verify all environment variables are set correctly
4. Test the API endpoint directly with curl
5. Refer to the detailed `backend/README.md`

## Email Template Customization

The email template is in `backend/server.js`. You can customize:
- HTML styling
- Email layout
- Subject line
- Colors and branding

Look for the `mailOptions` object in the `/api/send-email` endpoint.

---

**Congratulations!** 🎉 You now have a fully functional SMTP-integrated contact form!
