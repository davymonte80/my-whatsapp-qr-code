'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const whatsappNumber = '1234567890'; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const generateQRCode = async () => {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappLink)}`
      );
      setQrCodeUrl(response.url);
    };

    generateQRCode();
  }, [whatsappLink]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Connect with Me on WhatsApp</h1>
          <p className="text-gray-600">Scan the QR code below to start a conversation</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {qrCodeUrl && (
              <Image src={qrCodeUrl} alt="WhatsApp QR Code" width={200} height={200} />
            )}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-700 mb-4">Or click the button below:</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            <Image src="/whatsapp-icon.png" alt="WhatsApp Icon" width={24} height={24} className="mr-2" />
            Open WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}