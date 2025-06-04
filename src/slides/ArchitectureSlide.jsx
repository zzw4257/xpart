import React from 'react';

const ArchitectureSlide = () => {
  return (
    <div className="h-full flex flex-col justify-start items-center text-center p-8 bg-gray-900 text-gray-100 overflow-y-auto">
      <h1 className="text-5xl font-bold mb-6">
        XPart全景：模块化设计驱动的现代操作系统体验
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-3xl">
        XPart旨在构建一个模块清晰、功能完备的实验平台，集成了多进程管理、健壮的信号机制、灵活的双模式文件系统、ELF程序加载、以及一个现代化的交互式Shell，同时融入了探索性的安全特性。
      </p>

      {/* Simplified Text-based Architecture Diagram */}
      <div className="w-full max-w-4xl space-y-4 text-left">
        {/* Layer 1: User Interaction */}
        <div className="bg-blue-900/50 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">用户交互层 (User Interaction Layer)</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
            <li>Shell UI/UX (Modern Terminal Experience)</li>
            <li>Command Parser & Executor</li>
            <li>Input History & Autocompletion Features</li>
            <li>Job Control (Foreground/Background Processes)</li>
          </ul>
          <div className="text-center mt-2 text-blue-400">↓ ↑ (User Commands & System Responses)</div>
        </div>

        {/* Layer 2: Execution Engine */}
        <div className="bg-indigo-900/50 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">执行引擎层 (Execution Engine Layer)</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
            <li>ELF Program Loader & Executor</li>
            <li>Virtual File System (VFS) Command Processor</li>
            <li>Process Environment Setup (args, envp)</li>
          </ul>
          <div className="text-center mt-2 text-indigo-400">↓ ↑ (Program Execution & VFS Operations)</div>
        </div>

        {/* Layer 3: File System */}
        <div className="bg-purple-900/50 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">文件系统层 (File System Layer - Dual Mode)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-sm">
            <div className="bg-purple-800/60 p-3 rounded">
              <h3 className="font-bold text-purple-200">VFS (Virtual File System)</h3>
              <p>Unified interface for file operations.</p>
              <div className="text-center mt-1 text-purple-400">↓ (File Operation Request)</div>
              <h3 className="font-bold text-purple-200 mt-2">FS Selector</h3>
              <p>Dynamic routing to selected file system.</p>
            </div>
            <div className="space-y-2">
              <div className="bg-teal-800/60 p-3 rounded">
                <h3 className="font-bold text-teal-200">RAM File System (RAMFS)</h3>
                <p>Lightweight, in-memory, volatile storage. Purely virtual.</p>
              </div>
              <div className="bg-green-800/60 p-3 rounded">
                <h3 className="font-bold text-green-200">Simple File System (SFS) on VirtIO</h3>
                <p>Persistent storage via VirtIO block device (e.g., FAT32 mapped).</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-2 text-purple-400">↓ ↑ (Syscalls for File I/O)</div>
        </div>

        {/* Layer 4: Kernel Interface */}
        <div className="bg-red-900/50 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-300 mb-2">内核接口层 (Kernel Interface Layer)</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-sm">
            <li>System Call Interface (RISC-V `ecall`)</li>
            <li>Process Management (fork, exec, wait, exit, SIGHUP, SIGINT, SIGQUIT, SIGKILL, SIGTERM, SIGSTOP, SIGCONT)</li>
            <li>Signal Handling & Dispatch</li>
            <li>Memory Management (Page Table Management, sbrk)</li>
            <li>Device Drivers (UART, VirtIO)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;
