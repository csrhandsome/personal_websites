import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-white text-black font-body relative selection:bg-black selection:text-white overflow-hidden">
      {/* Global Textures */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-texture-noise" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-texture-lines" />

      {/* Grid System - Vertical Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-12 gap-0 border-r border-black/5">
          {[...Array(13)].map((_, i) => (
            <div
              key={i}
              className="border-l border-black/5 h-full"
              style={{ gridColumn: i + 1 }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Hero Header */}
        <header className="pt-32 pb-24 md:pt-48 md:pb-32 border-b-4 border-black grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-6">
              <h1 className="text-[15vw] lg:text-[10rem] leading-[0.8] font-display font-medium tracking-tighter -ml-1 md:-ml-2">
                程思睿
              </h1>
              <div className="text-3xl md:text-5xl font-display italic tracking-tight text-black border-t border-black pt-6 inline-block">
                Research Engineer
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end space-y-8 pb-2">
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono border-b border-black pb-2">
                Institution
              </div>
              <div className="text-lg md:text-xl font-body leading-snug">
                <div className="font-bold">南方科技大学</div>
                <div>创新创意设计学院</div>
                <div className="italic">智能制造与机器人</div>
                <div className="font-mono text-sm mt-2 text-neutral-600">2024届研究生</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono border-b border-black pb-2">
                Last Updated
              </div>
              <div className="text-xl font-mono font-bold">2025.11</div>
            </div>
          </div>
        </header>

        {/* Sections Container */}
        <div className="divide-y-4 divide-black">
          {/* Academic Performance */}
          <section className="grid grid-cols-12 gap-6 py-24 md:py-32">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] sticky top-8">
                01 — Academic
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-8">
              <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8">
                <div className="text-9xl md:text-[10rem] font-display font-medium leading-none tracking-tighter">
                  3.58
                </div>
                <div className="text-xl md:text-2xl font-mono text-neutral-600">
                  / 4.0 GPA
                </div>
              </div>
              <div className="inline-block border border-black px-6 py-3 text-sm font-mono uppercase tracking-widest bg-black text-white">
                学院本专业排名第一
              </div>
            </div>
          </section>

          {/* Research */}
          <section className="grid grid-cols-12 gap-6 py-24 md:py-32">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] sticky top-8">
                02 — Research
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9 grid gap-px bg-black border border-black">
              <ProjectItem
                number="01"
                title="水下可穿戴外肢体项目"
                subtitle="成果发表于 Tase"
                links={[
                  {
                    label: "开源代码",
                    url: "https://github.com/csrhandsome/sound_analysis",
                  },
                ]}
              >
                利用深度学习LSTM模型，通过分析声音特征预测控制指令。该成果已在Tase发表。
              </ProjectItem>

              <ProjectItem
                number="02"
                title="VLA 机器人大模型"
                subtitle="投稿至 NeurIPS"
              >
                运用Diffusion和DiT技术学习机器人行为模式，并通过仿真验证了模型的正确性。项目与南方科技大学本科生团队开展合作研究，部分研究成果已提交至NeurIPS会议。
              </ProjectItem>

              <ProjectItem
                number="03"
                title="Reactive Desk"
                subtitle="交互式桌面系统"
              >
                融合增强现实（AR）、机器人控制和自定义交互组件，为用户提供直观的人机交互体验。实现了机械臂和物体的数字孪生技术，能够在3D虚拟世界中精确复现现实物体。
              </ProjectItem>

              <ProjectItem
                number="04"
                title="ReacTap"
                subtitle="Unity 交互开发"
              >
                参与罗涛老师课题组的项目开发工作，负责完成Unity平台的交互逻辑设计与实现。
              </ProjectItem>

              <ProjectItem number="05" title="攀登计划" subtitle="项目负责人">
                成功申请校级"攀登计划"项目，从项目构思、团队组建到实验执行，全面锻炼了科研组织与领导能力。
              </ProjectItem>
            </div>
          </section>

          {/* Awards */}
          <section className="grid grid-cols-12 gap-6 py-24 md:py-32">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] sticky top-8">
                03 — Honors
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="border-t border-black">
                <AwardItem
                  number="01"
                  title="国家级一等奖"
                  org="2024-2025 中美青年创客大赛"
                  desc="负责前后端开发及部分硬件工作 (第二获奖人)"
                />
                <AwardItem
                  number="02"
                  title="省级一等奖"
                  org="2024-2025 中美青年创客大赛"
                  desc="分赛区选拔"
                />
                <AwardItem
                  number="03"
                  title="作品入选参展"
                  org="意大利米兰三年展"
                  desc="课程作品：《工业应用与实践中的设计创新》"
                />
              </div>
            </div>
          </section>

          {/* Teaching & Service */}
          <section className="grid grid-cols-12 gap-6 py-24 md:py-32">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] sticky top-8">
                04 — Service
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-12">
              <ServiceItem
                role="教学助理 (TA)"
                context="南方科技大学"
                period="一学年"
              >
                担任本科课程《Ai in design》和《Design and Learning with
                Data》助教。负责备课、批改作业及答疑。
              </ServiceItem>

              <ServiceItem
                role="研究生团支书"
                context="班级服务"
                period="2024 - 至今"
              >
                组织"潮起珠江，青春逐梦"等团日活动。荣获
                <strong>校级"优秀共青团干部"</strong>称号，团员年度评议"优秀"。
              </ServiceItem>

              <ServiceItem
                role="公益志愿者"
                context="志愿服务"
                period="9.5 小时"
              >
                热心公益，积极参与志愿服务活动，增强社会责任感。
              </ServiceItem>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="py-24 border-t-4 border-black grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em]">
              Copyright
            </div>
            <div className="text-sm font-mono text-neutral-600">
              程思睿 © 2025
              <br />
              All Rights Reserved
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em]">
              System
            </div>
            <div className="text-sm font-mono text-neutral-600">
              Minimalist Monochrome
              <br />
              Typographic Grid
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ProjectItem({
  number,
  title,
  subtitle,
  children,
  links,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  links?: { label: string; url: string }[];
}) {
  return (
    <div className="group relative bg-white p-8 md:p-12 transition-colors duration-200 hover:bg-black hover:text-white">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-2 mb-4 md:mb-0">
          <div className="text-xl font-mono text-neutral-400 group-hover:text-neutral-500">
            {number}
          </div>
        </div>
        <div className="col-span-12 md:col-span-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-display font-medium leading-tight">
              {title}
            </h3>
            <div className="text-xs font-mono uppercase tracking-[0.2em] opacity-60">
              {subtitle}
            </div>
          </div>
          <p className="text-lg font-body leading-relaxed max-w-2xl text-neutral-600 group-hover:text-neutral-300">
            {children}
          </p>
          {links && (
            <div className="pt-4 flex gap-6">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-widest border-b border-black group-hover:border-white pb-1 transition-all hover:opacity-70"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AwardItem({
  number,
  title,
  org,
  desc,
}: {
  number: string;
  title: string;
  org: string;
  desc?: string;
}) {
  return (
    <div className="group border-b border-black py-8 transition-colors hover:bg-black hover:text-white px-4 -mx-4">
      <div className="grid grid-cols-12 gap-4 items-baseline">
        <div className="col-span-2 md:col-span-1">
          <div className="text-sm font-mono text-neutral-400">
            {number}
          </div>
        </div>
        <div className="col-span-10 md:col-span-11 grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-2xl md:text-3xl font-display font-medium">{title}</div>
            <div className="text-xs font-mono uppercase tracking-widest mt-2 opacity-60">
              {org}
            </div>
          </div>
          {desc && (
            <div className="text-base font-body text-neutral-600 group-hover:text-neutral-400 flex items-center">
              {desc}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceItem({
  role,
  context,
  period,
  children,
}: {
  role: string;
  context: string;
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-black pt-8 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            {period}
          </div>
          <div className="text-lg font-bold">{context}</div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-display italic">{role}</h3>
          <p className="text-lg font-body text-neutral-600 leading-relaxed max-w-2xl">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}