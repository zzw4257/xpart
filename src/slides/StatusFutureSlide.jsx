import React from 'react';
// import { CheckCircle, PlayCircle, Zap, Telescope } from 'lucide-react'; // Icons for later

const StatusFutureSlide = () => {
  return (
    <div className="h-full flex flex-col justify-start items-center text-center p-8 bg-gray-900 text-gray-100 overflow-y-auto">
      <h1 className="text-5xl font-bold mb-10">
        开发状态、演示与未来展望
      </h1>

      <div className="w-full max-w-5xl text-left space-y-10">
        {/* Development Status Summary */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-green-400 mb-4 flex items-center">
            {/* <CheckCircle size={32} className="mr-3" /> */}
            开发状态总结 (Development Status Summary)
          </h2>
          <div className="space-y-3 text-lg text-gray-300">
            <p>
              <strong>核心功能已完成:</strong> Shell交互、内存VFS、多数关键系统调用 (fork, execve (simulated), read, write, open, close, pipe, signal等)、ELF解析与模拟执行。
            </p>
            <p>
              <strong>部分实现与框架搭建:</strong> VirtIO驱动框架、SFS/FAT32对接（设计阶段，部分代码）、高级内存管理（COW）。
            </p>
            <p>
              <strong>测试情况:</strong> 已完成大量单元测试和集成测试，覆盖主要功能模块。
            </p>
            <p className="text-sm text-gray-500">
              [Placeholder: Specific details to be filled from project documentation, e.g., exact syscall completion, known bugs, test coverage percentage if available.]
            </p>
          </div>
        </section>

        {/* Demo Announcement */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4 flex items-center">
            {/* <PlayCircle size={32} className="mr-3" /> */}
            演示环节预告 (Live Demonstration Preview)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
            <li>Modern Shell功能展示：启动动画、命令补全、历史、彩色提示符。</li>
            <li>ELF程序执行：运行各类测试ELF，包括参数传递、系统调用测试。</li>
            <li>文件系统操作：通过Shell命令演示内存VFS的目录和文件操作。</li>
            <li>信号处理：演示Ctrl+C中断前台进程。</li>
            <li>(若时间允许) 展示一个“彩蛋”命令。</li>
          </ul>
        </section>

        {/* Future Outlook */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4 flex items-center">
            {/* <Telescope size={32} className="mr-3" /> */}
            未来展望 (Future Outlook)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-sky-300 mb-2">短期 (Short-term)</h3>
              <ul className="list-disc list-inside space-y-1 text-lg text-gray-300">
                <li>完善VirtIO驱动，实现完整的SFS/FAT32文件系统读写。</li>
                <li>完成内核态 <code className="bg-gray-700 px-1 rounded text-xs">execve</code> 的完整实现，包括页表替换。</li>
                <li>增强进程调度策略（如优先级调度）。</li>
                <li>扩展更多实用系统调用。</li>
                <li>进行更全面的压力测试和Bug修复。</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-300 mb-2">长期 (Long-term)</h3>
              <ul className="list-disc list-inside space-y-1 text-lg text-gray-300">
                <li>实现完整的虚拟内存管理（分页、按需加载）。</li>
                <li>支持多核处理器与SMP。</li>
                <li>网络协议栈的初步探索。</li>
                <li>移植更多用户态程序和库。</li>
                <li>构建图形化用户界面 (GUI) 的可能性探索。</li>
                <li>打造为RISC-V操作系统教学与研究的优秀实验平台。</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StatusFutureSlide;
