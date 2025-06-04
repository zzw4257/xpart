import React from 'react';
// import { Terminal, Zap, Palette, HelpCircle } from 'lucide-react'; // Icons for later

const ShellHighlightSlide = () => {
  return (
    <div className="h-full flex flex-col justify-start items-center text-center p-8 bg-gray-900 text-gray-100 overflow-y-auto">
      <h1 className="text-5xl font-bold mb-8">
        告别单调：ZzwShell带来的视觉与交互革新
        {/* <Zap size={48} className="inline ml-4 text-yellow-400" /> */}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl text-left">
        {/* Column 1: UI Design Highlights */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-pink-400 mb-4 flex items-center">
            {/* <Palette size={32} className="mr-3" /> */}
            UI设计亮点 (Visual Enhancements)
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">🎨</span>
              <div>
                <strong>动画启动序列与ASCII艺术:</strong>
                <p className="text-sm text-gray-400">[Placeholder: Screenshot/GIF of boot sequence]</p>
                <p className="text-gray-300">增强启动时的视觉吸引力与品牌感。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">🌈</span>
              <div>
                <strong>渐变彩色艺术提示符:</strong>
                <p className="text-sm text-gray-400">[Placeholder: Screenshot of prompt]</p>
                <p className="text-gray-300">动态、美观的命令行提示符，提升交互乐趣。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">🖌️</span>
              <div>
                <strong>多层次颜色主题:</strong>
                <p className="text-sm text-gray-400">[Placeholder: Screenshot of themed output]</p>
                <p className="text-gray-300">为不同类型的信息（错误、成功、提示）赋予不同颜色，提高可读性。</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">💡</span>
              <div>
                <strong>丰富的命令帮助系统:</strong>
                <p className="text-sm text-gray-400">[Placeholder: Screenshot of 'help' command]</p>
                <p className="text-gray-300">内建详细的 <code className="bg-gray-700 px-1 rounded">help</code> 命令，方便用户查询。</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 2: Interactive Experience Optimization */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-green-400 mb-4 flex items-center">
            {/* <Terminal size={32} className="mr-3" /> */}
            交互体验优化 (Interactive Features)
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">⚡</span>
              <strong>智能命令补全 (Tab):</strong>
              <p className="text-gray-300 ml-6">支持基于当前路径和已注册命令的自动补全。</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">📜</span>
              <strong>命令历史管理与行内编辑:</strong>
              <p className="text-gray-300 ml-6">上下箭头浏览历史，左右编辑命令。</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">⌨️</span>
              <strong>快捷键支持:</strong>
              <p className="text-gray-300 ml-6"><code className="bg-gray-700 px-1 rounded">Ctrl+C</code> 发送SIGINT信号中断前台进程等。</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">🤫</span>
              <strong>安全彩蛋与命令劫持:</strong>
              <p className="text-gray-300 ml-6">趣味性的“彩蛋”命令，以及演示性的命令“劫持”功能，探索Shell安全边界。</p>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-xl text-gray-400 italic">
        完成度：远超课程基础要求的“简易Shell”，ZzwShell旨在提供一个功能完整且用户友好的现代命令行环境。
      </p>
    </div>
  );
};

export default ShellHighlightSlide;
