import React from 'react';
// import { ShieldCheck, CornerDownRightArrow, Puzzle } from 'lucide-react'; // Icons for later

const SyscallItem = ({ name, user, kernel, description, highlight }) => (
  <div className={`grid grid-cols-12 gap-2 py-2 px-3 items-center text-sm ${highlight ? 'bg-blue-800/50 rounded' : ''}`}>
    <div className="col-span-2 font-mono text-blue-300">{name}</div>
    <div className="col-span-2 text-center">{user ? '✅' : '🚧'}</div>
    <div className="col-span-2 text-center">{kernel ? '✅' : '🚧'}</div>
    <div className="col-span-6 text-gray-300">{description}</div>
  </div>
);

const SyscallsHighlightSlide = () => {
  const syscalls = [
    { name: 'getpid', user: true, kernel: true, description: '返回当前进程PID。' },
    { name: 'getppid', user: true, kernel: true, description: '返回父进程PID。' },
    { name: 'write', user: true, kernel: true, description: '标准输出/错误输出，或通过VFS写入文件。支持文件描述符 stdout, stderr。' },
    { name: 'read', user: true, kernel: true, description: '标准输入（通过sbi_debug_console_read），或通过VFS读取文件。支持文件描述符 stdin。' },
    { name: 'fork (clone)', user: true, kernel: true, description: '创建子进程。重点实现写时复制 (Copy-on-Write, COW) 优化，提升效率与资源利用率。', highlight: true },
    { name: 'exec (execve)', user: true, kernel: true, description: '执行新程序，加载ELF文件，替换当前进程映像。' },
    { name: 'wait (waitpid)', user: true, kernel: true, description: '等待子进程结束并回收资源，支持选项 WNOHANG 等。' },
    { name: 'exit', user: true, kernel: true, description: '进程主动退出，释放资源，通知父进程。' },
    { name: 'yield', user: true, kernel: true, description: '进程主动让出CPU，调度器选择下一个进程执行。' },
    { name: 'sleep', user: true, kernel: true, description: '进程睡眠指定时间（通过时钟中断实现）。' },
    { name: 'open', user: true, kernel: true, description: '通过VFS打开或创建文件，返回文件描述符。' },
    { name: 'close', user: true, kernel: true, description: '通过VFS关闭文件描述符。' },
    { name: 'lseek', user: true, kernel: true, description: '通过VFS定位文件读写指针。' },
    { name: 'dup (dup2)', user: true, kernel: true, description: '复制文件描述符，支持 dup2 的原子性操作。' },
    { name: 'pipe (pipe2)', user: true, kernel: true, description: '创建管道，用于进程间通信。' },
    { name: 'getcwd', user: true, kernel: true, description: '获取当前工作目录。' },
    { name: 'chdir', user: true, kernel: true, description: '更改当前工作目录。' },
    { name: 'mkdir', user: true, kernel: true, description: '创建目录 (通过VFS)。' },
    { name: 'rmdir', user: true, kernel: true, description: '删除空目录 (通过VFS)。' },
    { name: 'unlink', user: true, kernel: true, description: '删除文件链接，当链接数为0时删除文件 (通过VFS)。' },
    { name: 'fstat', user: true, kernel: true, description: '获取文件状态信息 (通过VFS)。' },
    { name: 'sbrk', user: true, kernel: true, description: '调整用户态进程堆大小，用于动态内存分配。' },
    { name: 'signal', user: true, kernel: true, description: '注册信号处理函数。支持 SIGINT, SIGTERM, SIGUSR1, SIGUSR2 等。', highlight: true },
    { name: 'kill', user: true, kernel: true, description: '向指定进程发送信号。支持权限检查。' },
    { name: 'sigreturn', user: false, kernel: true, description: '信号处理完成后恢复上下文 (内核内部使用)。' },
  ];

  return (
    <div className="h-full flex flex-col justify-start items-center text-center p-6 bg-gray-900 text-gray-100 overflow-y-auto">
      <h1 className="text-5xl font-bold mb-6">
        内核之桥：构建全面的系统调用服务体系
        {/* <Puzzle size={48} className="inline ml-4 text-teal-400" /> */}
      </h1>

      <div className="w-full max-w-6xl text-left">
        {/* Syscall Table Header */}
        <div className="grid grid-cols-12 gap-2 py-2 px-3 bg-gray-700 rounded-t-md font-semibold text-sm sticky top-0 z-10">
          <div className="col-span-2">Syscall</div>
          <div className="col-span-2 text-center">用户态封装</div>
          <div className="col-span-2 text-center">内核态实现</div>
          <div className="col-span-6">核心功能与完善性说明</div>
        </div>
        <div className="max-h-[400px] overflow-y-auto border border-gray-700 rounded-b-md">
          {syscalls.map(sc => <SyscallItem key={sc.name} {...sc} />)}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <section className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-400 mb-3 flex items-center">
              {/* <ShieldCheck size={28} className="mr-2" /> */}
              信号处理机制 (<code className="text-sm bg-gray-700 px-1 rounded">signal.c</code> - <code className="text-sm bg-gray-700 px-1 rounded">do_signal</code>)
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>精确的信号上下文保存与恢复，确保用户程序状态不丢失。</li>
              <li>支持信号屏蔽(sigmask)，允许进程临时阻塞某些信号。</li>
              <li>内核态与用户态切换时的信号检查与处理。</li>
              <li>对SIG_DFL (默认处理) 和 SIG_IGN (忽略)的正确处理。</li>
            </ul>
          </section>
          <section className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-orange-400 mb-3 flex items-center">
              {/* <CornerDownRightArrow size={28} className="mr-2" /> */}
              用户态内存管理 (<code className="text-sm bg-gray-700 px-1 rounded">malloc.c</code> & <code className="text-sm bg-gray-700 px-1 rounded">sbrk</code>)
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
              <li>提供用户态 <code className="bg-gray-700 px-1 rounded">malloc</code>, <code className="bg-gray-700 px-1 rounded">free</code>, <code className="bg-gray-700 px-1 rounded">realloc</code>。</li>
              <li>字节粒度内存分配器，基于首次适应或最佳适应策略。</li>
              <li>通过 <code className="bg-gray-700 px-1 rounded">sbrk</code> 系统调用向内核申请或释放大块堆内存。</li>
              <li>基本的内存碎片管理和合并相邻空闲块。</li>
            </ul>
          </section>
        </div>
        <p className="mt-6 text-center text-lg text-gray-400">
          XPart的系统调用设计不仅满足了课程要求，更在此基础上进行了扩展和深化，力求提供一个功能相对完整且鲁棒的类Unix内核环境。
        </p>
      </div>
    </div>
  );
};

export default SyscallsHighlightSlide;
