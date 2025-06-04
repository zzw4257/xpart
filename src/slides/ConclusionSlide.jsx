import React from 'react';
// import { Award, Users, Heart } from 'lucide-react'; // Icons for later

const ConclusionSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center p-10 bg-gray-900 text-gray-100">
      <h1 className="text-6xl font-bold mb-10">
        总结回顾与感恩致谢
        {/* <Award size={64} className="inline ml-6 text-yellow-400" /> */}
      </h1>

      <div className="w-full max-w-4xl space-y-10 text-left">
        {/* Summary */}
        <section>
          <h2 className="text-3xl font-semibold text-green-400 mb-3">总结 (Project Summary)</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            XPart项目成功构建了一个功能丰富、交互现代、架构灵活（支持双文件系统模式切换）的RISC-V操作系统实验平台。
            通过本项目，我们不仅深入实践了操作系统核心概念（如进程管理、内存管理、文件系统、系统调用、信号处理、ELF执行等），
            更在多个方面进行了创新与拓展（如现代化的Shell、COW优化、可切换文件系统架构、安全彩蛋等），
            显著超越了课程的基本要求，达到了预期的研究与学习目标。
          </p>
        </section>

        {/* Challenges & Learnings */}
        <section>
          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">挑战与收获 (Challenges & Learnings)</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            在XPart的开发过程中，我们遇到了诸多挑战，包括复杂的并发控制、内存管理的精细化、底层硬件交互的调试、以及确保各模块协同工作的稳定性等。
            克服这些挑战不仅极大地提升了我们的问题解决能力和系统编程技巧，也加深了对操作系统设计哲学与实现细节的理解。
            最大的收获在于体验了从零开始构建一个小型但五脏俱全的操作系统的完整过程，这是对三年所学知识的最佳检验与升华。
          </p>
        </section>

        {/* Acknowledgements */}
        <section>
          <h2 className="text-3xl font-semibold text-pink-400 mb-3">致谢 (Acknowledgements)</h2>
          <div className="text-xl text-gray-200 leading-relaxed space-y-2">
            <p>
              感谢 <strong className="text-pink-300">[指导教师姓名/团队]</strong> 老师/助教团队在整个课程和实验过程中的悉心指导与宝贵建议。
            </p>
            <p>
              感谢 <strong className="text-pink-300">[课程名称，如“计算机系统贯通课程”]</strong> 提供的实践平台与学习机会。
            </p>
            <p>
              感谢所有团队成员的辛勤付出、紧密协作与不懈探索。
            </p>
            <p>
              感谢开源社区及相关RISC-V项目提供的参考与灵感。
            </p>
            <p className="text-sm text-gray-500">
              [Placeholder: Specific individuals, other groups, or resources if applicable]
            </p>
          </div>
        </section>
      </div>

      <p className="mt-16 text-4xl font-bold text-purple-400 animate-pulse">
        感谢聆听！Q & A
      </p>
    </div>
  );
};

export default ConclusionSlide;
