import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sendContactEmail } from './api/send-contact-email';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.post('/api/send-contact-email', sendContactEmail);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
