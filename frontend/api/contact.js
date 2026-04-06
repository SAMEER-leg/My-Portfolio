export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields.' });
  }

  // Ensure nodemailer is imported dynamically so Vercel builds it correctly within the function
  const nodemailer = await import('nodemailer');

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
    <div style="background-color: #000000; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 600px; margin: auto; background-color: #050505; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(217, 162, 14, 0.3); box-shadow: 0 0 20px rgba(217, 162, 14, 0.15);">
        
        <!-- HEADER -->
        <div style="background: #d9a20e; background: linear-gradient(to right, #ffe9a8 0%, #d9a20e 50%, #5a3f0a 100%); padding: 30px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
          <h1 style="color: #050505; margin: 0; font-size: 26px; text-transform: uppercase; letter-spacing: 3px; font-weight: 900;">New Inquiry</h1>
          <p style="color: #1a1306; font-size: 14px; font-weight: bold; margin-top: 8px;">Portfolio Project Request — Abdul Qadir</p>
        </div>

        <div style="padding: 30px;">
          
          <!-- SENDER DETAILS BOX -->
          <div style="background: #110c03; background: linear-gradient(135deg, #1f1604 0%, #000000 100%); padding: 25px; border-radius: 12px; border: 1px solid rgba(217, 162, 14, 0.2); margin-bottom: 25px;">
            <p style="color: #d9a20e; font-size: 12px; font-weight: bold; text-transform: uppercase; margin: 0 0 10px 0; letter-spacing: 1px;">Sender Details</p>
            <p style="margin: 0; font-size: 18px; color: #ffffff;"><strong>${name}</strong></p>
            <p style="margin: 5px 0 0 0; color: #d9a20e; font-size: 14px;">${email}</p>
          </div>

          <!-- MESSAGE BODY BOX -->
          <div style="background: #110c03; background: linear-gradient(135deg, #1f1604 0%, #000000 100%); padding: 25px; border-radius: 12px; border: 1px solid rgba(217, 162, 14, 0.2);">
            <p style="color: #d9a20e; font-size: 12px; font-weight: bold; text-transform: uppercase; margin: 0 0 10px 0; letter-spacing: 1px;">Message Body</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #e0e0e0; white-space: pre-wrap;">${message}</p>
          </div>

        </div>

        <!-- FOOTER -->
        <div style="background: #d9a20e; background: linear-gradient(to right, #ffe9a8 0%, #d9a20e 50%, #5a3f0a 100%); border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 25px; text-align: center;">
          <p style="color: #050505; font-size: 12px; font-weight: bold; margin: 0; letter-spacing: 1px;">&copy; 2026 Abdul Qadir | Portfolio System</p>
        </div>

      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Portfolio Inquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    subject: `🚀 [Inquiry] ${name} — Portfolio Message`,
    html: htmlContent,
    replyTo: email,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.', details: error.message });
  }
}
