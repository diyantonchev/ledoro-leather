/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use server'

import nodemailer from 'nodemailer'
import { env } from '~/env'

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

type OrderFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  paymentMethod: string
}

type OrderEmailSuccessResponse = {
  success: true
  orderNumber: string
}

type OrderEmailErrorResponse = {
  success: false
  error: string
}

type OrderEmailResponse = OrderEmailSuccessResponse | OrderEmailErrorResponse

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_APP_PASSWORD
  }
});


function createOrderEmailHtml(
  orderNumber: string,
  formData: OrderFormData,
  cart: CartItem[],
  subtotal: number,
  shipping: number,
  total: number
): string {
  const cartItemsHtml = cart.map(item => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${item.price.toFixed(2)} лв.</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${(item.price * item.quantity).toFixed(2)} лв.</td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { width: 100%; max-width: 600px; margin: 0 auto; }
        .header { background-color: #f8f9fa; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th { padding: 10px; text-align: left; border-bottom: 2px solid #ddd; }
        .summary { margin-top: 20px; background-color: #f8f9fa; padding: 15px; }
        .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #777; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Потвърждение на поръчка</h1>
          <p>Поръчка #${orderNumber}</p>
        </div>
        
        <div class="content">
          <h2>Данни на клиента</h2>
          <p><strong>Име:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Имейл:</strong> ${formData.email}</p>
          <p><strong>Телефон:</strong> ${formData.phone}</p>
          
          <h2>Адрес за доставка</h2>
          <p>${formData.address}</p>
          <p>${formData.city}, ${formData.state} ${formData.zipCode}</p>
          
          <h2>Начин на плащане</h2>
          <p>${formData.paymentMethod === 'cash-on-delivery' ? 'Наложен платеж' : 'Карта'}</p>
          
          <h2>Детайли на поръчката</h2>
          <table>
            <thead>
              <tr>
                <th>Продукт</th>
                <th style="text-align: center;">Количество</th>
                <th style="text-align: right;">Цена</th>
                <th style="text-align: right;">Общо</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHtml}
            </tbody>
          </table>
          
          <div class="summary">
            <p><strong>Сума:</strong> ${subtotal.toFixed(2)} лв.</p>
            <p><strong>Доставка:</strong> ${shipping === 0 ? 'Безплатно' : `${shipping.toFixed(2)} лв.`}</p>
            <p style="font-size: 18px;"><strong>Общо:</strong> ${total.toFixed(2)} лв.</p>
          </div>
        </div>
        
        <div class="footer">
          <p>Благодарим ви за поръчката!</p>
          <p>Ако имате въпроси, моля, свържете се с нас.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function sendOrderEmail(
  formData: OrderFormData,
  cart: CartItem[],
  subtotal: number,
  shipping: number,
  total: number
): Promise<OrderEmailResponse> {
  try {
    const orderNumber = `ORD-${Date.now().toString().slice(-6)}`
    
    const htmlContent = createOrderEmailHtml(
      orderNumber,
      formData,
      cart,
      subtotal,
      shipping,
      total
    );
    
    try {
      await transporter.sendMail({
        from: env.GMAIL_USER,
        to: `${env.MAIL_TO}, ${env.GMAIL_USER}, ${formData.email}`,
        subject: `Поръчка #${orderNumber} от Ledoro Leather`,
        text: `Нова поръчка #${orderNumber} от ${formData.firstName} ${formData.lastName}. Сумма: ${total.toFixed(2)} лв.`,
        html: htmlContent,
      });
      console.log(`Order email sent for order #${orderNumber}`);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }
    
    return { success: true, orderNumber }
  } catch (error) {
    console.error('Error processing order:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to process order' 
    }
  }
} 