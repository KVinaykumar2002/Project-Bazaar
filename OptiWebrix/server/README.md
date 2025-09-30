# OptiWebrix Backend - SMTP Email Service

This is the backend server for OptiWebrix contact form with SMTP integration using Nodemailer.

## Features

- ✉️ Send emails via SMTP protocol
- 🔒 Secure email transmission
- 📝 Contact form validation
- 🎨 HTML email templates
- ⚡ Fast and reliable

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `server` directory by copying the example file:

```bash
cp env.example .env
```

Then edit the `.env` file with your SMTP credentials:

```env
PORT=5000

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password

# Recipient Email
RECIPIENT_EMAIL=your-email@gmail.com
```

### 3. SMTP Provider Setup

#### Gmail Setup:
1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
3. Use these settings:
   - `SMTP_HOST`: smtp.gmail.com
   - `SMTP_PORT`: 587
   - `SMTP_SECURE`: false
   - `SMTP_USER`: your Gmail address
   - `SMTP_PASS`: your app password

#### Outlook/Hotmail Setup:
- `SMTP_HOST`: smtp-mail.outlook.com
- `SMTP_PORT`: 587
- `SMTP_SECURE`: false

#### Yahoo Setup:
- `SMTP_HOST`: smtp.mail.yahoo.com
- `SMTP_PORT`: 587
- `SMTP_SECURE`: false

#### Custom SMTP:
- Use your provider's SMTP settings
- Port 465 requires `SMTP_SECURE=true`
- Port 587 requires `SMTP_SECURE=false`

### 4. Run the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000` (or your configured PORT).

## API Endpoints

### POST `/api/send-email`

Send an email via SMTP.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "<message-id>"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message"
}
```

### GET `/api/health`

Check server health status.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Frontend Integration

The frontend is already configured to use this backend. Make sure to:

1. Update the `VITE_API_URL` environment variable in your frontend `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

2. For production, update it to your deployed backend URL:
   ```env
   VITE_API_URL=https://your-backend-domain.com
   ```

## Deployment

### Deploy to Heroku:

1. Install Heroku CLI
2. Login to Heroku: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set SMTP_HOST=smtp.gmail.com
   heroku config:set SMTP_PORT=587
   heroku config:set SMTP_SECURE=false
   heroku config:set SMTP_USER=your-email@gmail.com
   heroku config:set SMTP_PASS=your-app-password
   heroku config:set RECIPIENT_EMAIL=your-email@gmail.com
   ```
5. Deploy: `git push heroku main`

### Deploy to Render/Railway/Fly.io:

1. Connect your GitHub repository
2. Set the build command: `npm install`
3. Set the start command: `npm start`
4. Add environment variables in the dashboard
5. Deploy

## Testing

Test the API using curl:

```bash
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

Or use Postman/Insomnia with the same endpoint and JSON body.

## Troubleshooting

### Common Issues:

1. **"Invalid login" error with Gmail:**
   - Make sure 2-Step Verification is enabled
   - Use App Password, not your regular password
   - Check if "Less secure app access" is turned off (use App Password instead)

2. **Port already in use:**
   - Change the PORT in `.env` file
   - Or kill the process using the port: `lsof -ti:5000 | xargs kill`

3. **CORS errors:**
   - The server has CORS enabled for all origins
   - For production, update CORS settings in `server.js`

4. **Timeout errors:**
   - Check your SMTP credentials
   - Verify your network allows SMTP connections
   - Try different ports (587 or 465)

## Security Notes

- Never commit `.env` file to version control
- Use environment variables for all sensitive data
- Enable rate limiting for production
- Consider adding authentication for the API endpoint
- Use HTTPS in production

## License

MIT
