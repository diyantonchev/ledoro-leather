'use server'

import nodemailer from 'nodemailer'
import { env } from '~/env'

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

type ContactEmailSuccessResponse = {
  success: true
}

type ContactEmailErrorResponse = {
  success: false
  error: string
}

type ContactEmailResponse = ContactEmailSuccessResponse | ContactEmailErrorResponse

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_APP_PASSWORD
  }
});

function createContactEmailHtml(formData: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { width: 100%; max-width: 600px; margin: 0 auto; }
        .header { background-color: #f8f9fa; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #777; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Ново запитване от формата за контакт</h1>
        </div>
        
        <div class="content">
          <h2>Детайли за контакт</h2>
          <p><strong>Име:</strong> ${formData.name}</p>
          <p><strong>Имейл:</strong> ${formData.email}</p>
          
          <h2>Съобщение</h2>
          <p><strong>Относно:</strong> ${formData.subject}</p>
          <p style="white-space: pre-line;">${formData.message}</p>
        </div>
        
        <div class="footer">
          <p>Съобщение, изпратено от формата за контакт на Ledoro Leather.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function sendContactEmail(formData: ContactFormData): Promise<ContactEmailResponse> {
  try {
    const htmlContent = createContactEmailHtml(formData);
    
    await transporter.sendMail({
      from: env.GMAIL_USER,
      to: `${env.MAIL_TO}, ${env.GMAIL_USER}`,
      subject: `Запитване: ${formData.subject}`,
      text: `Ново запитване от ${formData.name} (${formData.email}): ${formData.message}`,
      html: htmlContent,
    });
    
    console.log('Contact form email sent');
    return { success: true };
    
  } catch (error) {
    console.error('Error sending contact email:', 
      error instanceof Error ? error.message : 'Unknown error'
    );
    
    return { 
      success: false, 
      error: 'Failed to send message. Please try again later.'
    };
  }
} 