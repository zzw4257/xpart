import React from 'react';

const AchievementItem = ({ highlight, courseRequirement, ourImplementation, emoji }) => (
  <div className="grid grid-cols-12 gap-x-3 gap-y-2 py-3 px-3 items-start border-b border-gray-700 last:border-b-0">
    <div className="col-span-12 md:col-span-3 font-semibold text-lg text-sky-300">
      <span className="mr-2">{emoji}</span>{highlight}
    </div>
    <div className="col-span-12 md:col-span-4 text-sm text-gray-400 whitespace-pre-line">
      {courseRequirement}
    </div>
    <div className="col-span-12 md:col-span-5 text-sm text-gray-200">
      {ourImplementation}
    </div>
  </div>
);

const AchievementsSlide = () => {
  const achievements = [
    {
      emoji: "🌈",
      highlight: "现代Shell交互",
      courseRequirement: "实现 shell (10 ~ 40 分)",
      ourImplementation: "超预期高完成度：UI炫酷（动画启动、渐变提示符、多色主题），交互流畅（命令补全、历史管理、行内编辑、Ctrl+C），功能丰富（内建帮助、安全彩蛋、命令劫持），远超“简易shell”标准。"
    },
    {
      emoji: "🗂️",
      highlight: "双文件系统模式",
      courseRequirement: "支持 VirtIO 与任意文件的 open、read、write (40 分)\n实现 VFS 与 FAT32 文件系统 (40 分)",
      ourImplementation: "内存RAMFS功能完备，支持类Unix文件操作。VirtIO驱动框架已搭建，为SFS/FAT32和持久化存储奠定坚实基础。清晰阐述了VirtIO、SFS/FAT32、VFS三者关系和作用。文件系统切换机制是创新点。"
    },
    {
      emoji: "📞",
      highlight: "丰富健壮的Syscalls",
      courseRequirement: "支持字节粒度内存管理 malloc/free (评分点)\n支持更多 syscall (30分)\n实现...信号 (20分)",
      ourImplementation: "超量完成：实现了 getpid, getppid, write, read, fork (COW!), execve, waitpid, exit, yield, sleep, open, close, lseek, dup2, pipe2, getcwd, chdir, mkdir, rmdir, unlink, fstat, sbrk, signal, kill。信号机制完备，支持自定义处理与上下文安全切换。malloc/free实现字节粒度管理与块分割。"
    },
    {
      emoji: "⚡",
      highlight: "ELF执行引擎",
      courseRequirement: "实现 ELF 文件的解析与加载 (15 分)\n实现 execve (20 分)",
      ourImplementation: "ELF解析与加载高完成度，验证机制健全，能详细打印ELF信息。通过程序模拟器实现了ELF程序的安全执行（传递参数、环境变量），为完整内核态execve打下坚实基础。包含丰富的ELF测试用例。"
    },
    {
      emoji: "🏗️",
      highlight: "模块化与分层架构",
      courseRequirement: "(体现软件工程素养，酌情加分)",
      ourImplementation: "代码组织高内聚低耦合，用户态/内核态、各模块（VFS, Shell, ELF, 信号处理, 内存管理）分层清晰，保证了可维护性与扩展性。"
    },
    {
      emoji: "💡",
      highlight: "其他细节与探索",
      courseRequirement: "(酌情归类或作为加分点)",
      ourImplementation: "如do_fork中的优先级处理（未完全实现但有设计）、安全彩蛋、详细的调试信息输出等，体现了对系统运行细节的深入思考和探索精神。"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-start items-center text-center p-6 bg-gray-900 text-gray-100 overflow-y-auto">
      <h1 className="text-5xl font-bold mb-6">
        XPart成果斐然：创新实践与课程目标的完美融合
      </h1>

      <div className="w-full max-w-6xl text-left bg-gray-800 shadow-xl rounded-lg">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-x-3 gap-y-2 py-3 px-3 bg-gray-700 rounded-t-lg font-semibold text-sm sticky top-0 z-10">
          <div className="col-span-12 md:col-span-3">XPart亮点/特性</div>
          <div className="col-span-12 md:col-span-4">对应课程实验要求/评分点</div>
          <div className="col-span-12 md:col-span-5">我们的实现与特色 (突出完善性)</div>
        </div>
        <div className="max-h-[550px] overflow-y-auto rounded-b-lg">
          {achievements.map(ach => <AchievementItem key={ach.highlight} {...ach} />)}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSlide;
