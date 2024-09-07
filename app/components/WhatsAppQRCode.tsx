'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const QRCode = dynamic(() => import('qrcode.react'), { ssr: false });

export default function Home() {
  const whatsappNumber = '254798353347'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Connect with Me on WhatsApp</h1>
          <p className="text-gray-600">Scan the QR code below to start a conversation</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <QRCode value={whatsappLink} size={200} />
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