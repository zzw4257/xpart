import React from 'react';
// import { FileCode, ShieldAlert, Terminal, ListChecks } from 'lucide-react'; // Icons for later

const ElfExecutionSlide = () => {
  return (
    <div className="h-full flex flex-col justify-start items-center text-center p-8 bg-gray-900 text-gray-100 overflow-y-auto">
      <h1 className="text-5xl font-bold mb-8">
        让二进制“活”起来：ELF解析、验证与安全模拟执行
        {/* <FileCode size={48} className="inline ml-4 text-purple-400" /> */}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl text-left">
        {/* Column 1: ELF Parsing & Validation */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl space-y-6">
          <div>
            <h2 className="text-3xl font-semibold text-purple-400 mb-3 flex items-center">
              {/* <FileCode size={32} className="mr-3" /> */}
              ELF 解析能力 (<code className="text-lg bg-gray-700 px-1 rounded">elf.c</code>)
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              <li>
                <strong>详细信息展示:</strong>
                <p className="text-sm ml-4">能够解析并打印ELF头部、程序头表、节头表等关键信息。</p>
                <p className="text-xs text-gray-500 ml-4">[Placeholder: Screenshot of `print_elf_info` output]</p>
              </li>
              <li>
                <strong>关键函数:</strong>
                <p className="text-sm ml-4">
                  <code className="bg-gray-700 px-1 rounded text-xs">load_elf_header</code>,
                  <code className="bg-gray-700 px-1 rounded text-xs">load_program_headers</code>,
                  <code className="bg-gray-700 px-1 rounded text-xs">load_section_headers</code>.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-red-400 mb-3 flex items-center">
              {/* <ShieldAlert size={32} className="mr-3" /> */}
              ELF 验证 (<code className="text-lg bg-gray-700 px-1 rounded">validate_elf</code>)
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              <li>
                <strong>安全检查点:</strong>
                <p className="text-sm ml-4">
                  - 检查魔数 (<code className="bg-gray-700 px-1 rounded text-xs">ELFMAG</code>)。<br />
                  - 确认文件为64位 (<code className="bg-gray-700 px-1 rounded text-xs">ELFCLASS64</code>)。<br />
                  - 校验目标架构为RISC-V (<code className="bg-gray-700 px-1 rounded text-xs">EM_RISCV</code>)。<br />
                  - 确保程序头表和节头表在文件内的合理范围。
                </p>
              </li>
              <li>
                <strong>强调安全性:</strong>
                <p className="text-sm ml-4">防止加载格式错误或恶意的ELF文件，保障系统稳定。</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2: ELF Loading & Execution Simulation */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl space-y-6">
          <div>
            <h2 className="text-3xl font-semibold text-green-400 mb-3 flex items-center">
              {/* <Terminal size={32} className="mr-3" /> */}
              ELF 加载与执行模拟
            </h2>
            <p className="text-sm text-gray-400 mb-2">
              (在 <code className="bg-gray-700 px-1 rounded text-xs">shell.c</code> 中由 <code className="bg-gray-700 px-1 rounded text-xs">execute_elf_program</code> 和 <code className="bg-gray-700 px-1 rounded text-xs">run_elf_program</code> 实现)
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              <li>
                <strong>路径支持:</strong>
                <p className="text-sm ml-4">支持通过相对路径或绝对路径执行用户程序。</p>
              </li>
              <li>
                <strong>文件定位:</strong>
                <p className="text-sm ml-4">使用 <code className="bg-gray-700 px-1 rounded text-xs">vfs_resolve_path</code> 查找目标ELF文件。</p>
              </li>
              <li>
                <strong>模拟执行:</strong>
                <p className="text-sm ml-4">根据文件名模拟执行不同的用户程序（如 <code className="bg-gray-700 px-1 rounded text-xs">hello</code>, <code className="bg-gray-700 px-1 rounded text-xs">test_syscall</code> 等）。</p>
              </li>
              <li>
                <strong>嵌套Shell能力:</strong>
                <p className="text-sm ml-4">
                  <code className="bg-gray-700 px-1 rounded text-xs">simulate_shell_program</code> 函数展示了执行另一个Shell实例的能力，体现了进程模型的初步支持。
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-3 flex items-center">
              {/* <ListChecks size={32} className="mr-3" /> */}
              丰富的ELF测试用例
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              <li>
                <strong>测试程序:</strong>
                <p className="text-sm ml-4">包含 <code className="bg-gray-700 px-1 rounded text-xs">hello.elf</code>, <code className="bg-gray-700 px-1 rounded text-xs">args_test.elf</code>, <code className="bg-gray-700 px-1 rounded text-xs">exit_code.elf</code>, <code className="bg-gray-700 px-1 rounded text-xs">syscall_test.elf</code> 等。</p>
              </li>
              <li>
                <strong>Shell内建命令:</strong>
                <p className="text-sm ml-4"><code className="bg-gray-700 px-1 rounded text-xs">run-elf &lt;path&gt;</code> 命令用于加载和执行这些测试程序。</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xl text-gray-400 italic max-w-4xl">
        XPart通过细致的ELF解析、严格的验证流程和灵活的执行模拟，为用户程序的运行提供了坚实的基础，并为后续更完整的进程加载和虚拟内存管理打下基础。
      </p>
    </div>
  );
};

export default ElfExecutionSlide;
