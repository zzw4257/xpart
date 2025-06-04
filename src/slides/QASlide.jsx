import React from 'react';
import { MessageSquarePlus } from 'lucide-react'; // Icon for Q&A

const QASlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center p-10 bg-gray-900 text-gray-100">
      <MessageSquarePlus size={128} className="text-blue-400 mb-12 animate-bounce" />
      <h1 className="text-7xl font-bold mb-8">
        提问与交流 (Q&A)
      </h1>
      <p className="text-4xl text-gray-300 leading-relaxed">
        第九组
        <br />
        期待与您深入交流！
      </p>
      <p className="mt-12 text-lg text-gray-500">
        Thank you for your attention!
      </p>
    </div>
  );
};

export default QASlide;
