import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { sendEmail } from './utilis/sendEmail.js';

const app = express();
const router = express.Router();

// Load environment variables
config({ path: './config.env' });

// Configure CORS
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

// Middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route to send mail
router.post('/send/mail', async (req, res) => {
    console.log('Received POST request to /send/mail');
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all details',
        });
    }
    try {
        await sendEmail({
            email: 'nadgerisarika@gmail.com',
            subject: 'GYM WEBSITE CONTACT',
            message: message, // Make sure message is passed here
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: 'Message sent successfully',
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});

// GET route to verify server is running
router.get('/', (req, res) => {
    res.json({ success: true, message: 'Welcome Home' });
});

// Use the router for all routes
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
