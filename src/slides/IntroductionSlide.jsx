import React from 'react';

const IntroductionSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-start text-left p-10 bg-gray-900 text-gray-100">
      <h1 className="text-5xl font-bold mb-8 self-center">
        超越基础：XPart的追求与三年所学之升华
      </h1>

      <div className="space-y-6 text-xl">
        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">课程背景与实验初衷</h2>
          <p>
            本项目源于计算机系统Ⅰ、Ⅱ、Ⅲ贯通课程的结课实验，旨在综合运用三年来所学的计算机系统知识，从底层构建一个完整的操作系统内核及用户交互界面。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">核心目标回顾</h2>
          <p>
            课程基础要求包括实现一个最小化的RISC-V操作系统，能够运行简单程序，并逐步完善对若干关键系统调用（如 <code className="bg-gray-700 px-1 rounded">fork</code>, <code className="bg-gray-700 px-1 rounded">exec</code>, <code className="bg-gray-700 px-1 rounded">pipe</code>, <code className="bg-gray-700 px-1 rounded">dup</code> 等）的支持。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">我们的升华：XPart的追求</h2>
          <p>
            XPart项目不满足于仅仅实现一个“最小”系统。我们致力于打造一个功能更丰富、交互体验更现代、系统架构更清晰，并且具有一定探索性的RISC-V操作系统实验平台。我们希望借此深入探索操作系统设计的精髓。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">“匠心独蕴”概览</h2>
          <p>
            为达成此目标，XPart将重点实现以下特色功能：一个具备现代命令行特性的Shell、支持动态切换的双文件系统模式（RAMFS与SFS）、一组扩展且丰富的系统调用接口、完善的ELF程序执行能力，以及一些旨在增强趣味性与探索性的安全“彩蛋”。
          </p>
        </section>
      </div>
    </div>
  );
};

export default IntroductionSlide;
