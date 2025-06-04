import React from 'react';
import { Cpu } from 'lucide-react';

const CoverSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center p-10 bg-gray-900 text-gray-100">
      {/* RISC-V Logo Placeholder - Top Right */}
      <div className="absolute top-10 right-10 text-blue-400 flex flex-col items-center">
        <Cpu size={48} className="mb-1"/>
        <span className="text-xs">RISC-V Base</span>
      </div>

      <h1 className="text-6xl font-bold mb-4">
        XPart：现代交互式RISC-V操作系统内核与Shell的探索与实现
      </h1>
      <h2 className="text-3xl text-gray-400 mb-12">
        计算机系统Ⅰ、Ⅱ、Ⅲ贯通课程结课实验 (第九组)
      </h2>

      <div className="my-12 w-full max-w-3xl">
        <h3 className="text-2xl font-semibold mb-4 text-sky-300">团队成员及其主要贡献</h3>
        <ul className="list-disc list-inside text-left text-lg space-y-2 text-gray-300">
          <li>[成员姓名]: [主要贡献 - 例如：Shell设计与实现, ELF加载器] (Placeholder)</li>
          <li>[成员姓名]: [主要贡献 - 例如：文件系统VFS与RAMFS, 系统调用接口] (Placeholder)</li>
          <li>[成员姓名]: [主要贡献 - 例如：内核核心机制, VirtIO驱动, 信号处理] (Placeholder)</li>
          {/* Add more members as needed */}
        </ul>
      </div>

      <div className="absolute bottom-8 left-8 text-lg text-gray-500">
        2025年6月4日
      </div>

      {/* Placeholder visual elements - can be positioned around the slide */}
      <div className="absolute bottom-16 right-8 flex space-x-4 text-xs text-gray-600">
        <span>[Abstract Code Flow]</span>
        <span>[Shell UI]</span>
        <span>[FS Switch Icon]</span>
      </div>
    </div>
  );
};

export default CoverSlide;
