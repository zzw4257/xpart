import React from 'react';
// import { HardDrive, MemoryStick, GitCompareArrows } from 'lucide-react'; // Icons for later

const FilesystemHighlightSlide = () => {
  return (
    <div className="h-full flex flex-col justify-start items-center text-center p-8 bg-gray-900 text-gray-100 overflow-y-auto">
      <h1 className="text-5xl font-bold mb-8">
        灵活存储：内存VFS与VirtIO持久化存储的协同与切换
        {/* <GitCompareArrows size={48} className="inline ml-4 text-cyan-400" /> */}
      </h1>

      <div className="w-full max-w-5xl text-left space-y-6">
        {/* Core Design: Filesystem Selection */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-cyan-400 mb-3">核心设计：文件系统选择机制</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>
              <strong>启动时选择 (Boot-time Selection):</strong>
              <p className="text-sm ml-6">允许用户或系统配置在启动阶段选择加载RAMFS或基于VirtIO的SFS（Simple File System）。</p>
            </li>
            <li>
              <strong>动态切换的意义 (Significance of Switching):</strong>
              <p className="text-sm ml-6">为测试不同存储后端、教学演示、以及未来扩展更复杂文件系统（如ext2）提供了灵活性和便利性。</p>
            </li>
          </ul>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Column 1: RAMFS (Virtual File System) */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-green-400 mb-3 flex items-center">
              {/* <MemoryStick size={32} className="mr-3" /> */}
              A. 纯粹的虚拟文件系统 (内存RAMFS)
            </h2>
            <ul className="space-y-3 text-lg">
              <li>
                <strong>特性 (Features):</strong>
                <p className="text-sm text-gray-300 ml-4">完全基于内存，速度快，易于实现和调试，断电数据即失。适合临时数据存储和基础测试。</p>
              </li>
              <li>
                <strong>完善性展示 (Implementation Details):</strong>
                <p className="text-sm text-gray-300 ml-4">
                  - <code className="bg-gray-700 px-1 rounded text-xs">vfs_node_t</code>: 统一的节点结构，支持文件和目录。 <br />
                  - 类Unix操作: 实现 <code className="bg-gray-700 px-1 rounded text-xs">open</code>, <code className="bg-gray-700 px-1 rounded text-xs">read</code>, <code className="bg-gray-700 px-1 rounded text-xs">write</code>, <code className="bg-gray-700 px-1 rounded text-xs">close</code>, <code className="bg-gray-700 px-1 rounded text-xs">ls</code>, <code className="bg-gray-700 px-1 rounded text-xs">mkdir</code>, <code className="bg-gray-700 px-1 rounded text-xs">cd</code> 等。 <br />
                  - 路径解析: 支持绝对与相对路径，包括 <code className="bg-gray-700 px-1 rounded text-xs">.</code> 和 <code className="bg-gray-700 px-1 rounded text-xs">..</code>。 <br />
                  - 预置目录: 初始化时创建 <code className="bg-gray-700 px-1 rounded text-xs">/</code>, <code className="bg-gray-700 px-1 rounded text-xs">/dev</code>, <code className="bg-gray-700 px-1 rounded text-xs">/tmp</code> 等标准目录结构。
                </p>
              </li>
            </ul>
          </section>

          {/* Column 2: VirtIO + FAT32 (Persistent Storage Exploration) */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-3 flex items-center">
              {/* <HardDrive size={32} className="mr-3" /> */}
              B. 持久化探索 (VirtIO + SFS/FAT32)
            </h2>
            <ul className="space-y-3 text-lg">
              <li>
                <strong>VirtIO与VFS (VirtIO & VFS):</strong>
                <p className="text-sm text-gray-300 ml-4">VirtIO作为标准化的虚拟I/O接口，其块设备(VirtIO-blk)为上层文件系统提供原始块数据读写能力。VFS则抽象这些操作，提供统一的文件和目录接口。</p>
              </li>
              <li>
                <strong>当前完成度与下一步 (Current Status & Next Steps):</strong>
                <p className="text-sm text-gray-300 ml-4">
                  - <span className="text-green-300">已完成:</span> VirtIO驱动基本框架、VFS抽象层设计。 <br />
                  - <span className="text-yellow-300">进行中/展望:</span> 实现一个简单的块组织文件系统 (SimpleFS)，或集成FAT32文件系统逻辑，处理目录项、文件分配表等。
                </p>
              </li>
              <li>
                <strong>应用前景 (Future Applications):</strong>
                <p className="text-sm text-gray-300 ml-4">实现真正的持久化存储，支持用户数据保存、系统配置持久化、以及更复杂应用的运行基础。</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FilesystemHighlightSlide;
