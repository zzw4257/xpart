import React from 'react';
import { PlayCircle } from 'lucide-react'; // Using an icon

const LiveDemoSlide = () => {
  const demoPoints = [
    "启动XPart系统，展示启动动画与Shell提示符。",
    "演示Shell的现代交互特性：命令补全 (Tab)、历史记录 (上下箭头)、行内编辑。",
    "展示彩色输出：例如 `ls` 命令、错误提示。",
    "通过Shell命令进行内存VFS文件操作：`mkdir test_dir`, `cd test_dir`, `echo \"Hello XPart FS\" > file.txt`, `cat file.txt`, `ls`。",
    "执行预置的ELF测试程序：例如 `run-elf /bin/hello.elf`, `run-elf /bin/args_test.elf arg1 arg2`。",
    "展示 `print_elf_info /bin/hello.elf` 命令的ELF信息解析输出。",
    "演示系统调用效果：例如通过 `test_syscall.elf` (若有) 或特定命令展示 `fork`, `getpid`, `signal` (Ctrl+C) 等。",
    "（可选，若VirtIO/SFS部分已可演示）重启XPart，选择VirtIO/SFS模式，并进行简单的文件操作对比。",
    "触发并展示一个“安全彩蛋”命令 (如 `matrix` 或自定义的趣味命令)。"
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center text-center p-10 bg-gray-800 text-gray-100">
      <PlayCircle size={96} className="text-green-400 mb-8 animate-pulse" />
      <h1 className="text-6xl font-bold mb-6">
        现场演示 (Live Demo)
      </h1>
      <p className="text-2xl text-gray-300 mb-10">
        接下来，我们将进行XPart操作系统的现场演示。
      </p>

      <div className="w-full max-w-3xl bg-gray-700/50 p-6 rounded-lg text-left">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">演示要点提醒:</h2>
        <ul className="list-decimal list-inside space-y-2 text-lg text-gray-200">
          {demoPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveDemoSlide;
