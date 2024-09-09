This project is a simple, elegant landing page that generates a QR code for your WhatsApp contact. When scanned, the QR code directs users to start a conversation with you on WhatsApp. It's built with Next.js, TypeScript, and Tailwind CSS, providing a responsive and visually appealing interface.
Features

Dynamic QR code generation for WhatsApp contact
Responsive design using Tailwind CSS
Easy to customize with your own WhatsApp number
Direct "Open WhatsApp" button for mobile users
Built with Next.js for optimal performance and SEO

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (v14.0.0 or later)
npm (v6.0.0 or later)

Installation
To install the WhatsApp QR Landing Page, follow these steps:

Clone the repository:
git clone https://github.com/yourusername/whatsapp-qr-landing.git

Navigate to the project directory:
cd whatsapp-qr-code

Install the dependencies:
npm install


Configuration

Open app/page.tsx and replace the whatsappNumber variable with your own WhatsApp number:
typescriptCopyconst whatsappNumber = 'your-whatsapp-number';

(Optional) Replace the whatsapp-icon.png in the public folder with your own icon if desired.

Usage
To run the project locally:

Start the development server:
npm run dev

Open your browser and visit http://localhost:3000

Building for Production
To create a production build:

Run the build command:
npm run build

Start the production server:
npm start


