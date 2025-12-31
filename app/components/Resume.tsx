import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 font-sans relative">
      {/* Grid System - Vertical Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-12 gap-0">
          {[...Array(13)].map((_, i) => (
            <div
              key={i}
              className="border-l border-white/[0.03] h-full"
              style={{ gridColumn: i + 1 }}
            />
          ))}
        </div>
      </div>

      {/* Horizontal Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="border-t border-white/[0.03] w-full"
            style={{ top: `${i * 5}vh` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        {/* Hero Header - Massive Typography */}
        <header className="mb-32 md:mb-48 grid grid-cols-12 gap-6 min-h-[70vh] items-center border-b border-white/30 pb-16">
          <div className="col-span-12 lg:col-span-6 space-y-12">
            <div className="space-y-8">
              <div className="text-[7vw] md:text-[8vw] lg:text-[9vw] xl:text-[10vw] leading-[0.85] font-serif font-bold tracking-tighter">
                程思睿
              </div>
              <div className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white/60 uppercase font-sans">
                Research Engineer
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-10 border-l-2 border-white/40 pl-8 lg:pl-10">
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-sans font-bold">
                Institution
              </div>
              <div className="text-xl md:text-2xl font-sans text-white/90 leading-relaxed space-y-2">
                <div className="font-bold">南方科技大学</div>
                <div className="text-lg md:text-xl text-white/70">
                  创新创意设计学院
                </div>
                <div className="text-lg md:text-xl text-white/70">
                  智能制造与机器人
                </div>
                <div className="text-base md:text-lg text-white/50 font-mono pt-2">
                  2024届研究生
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/30">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-sans font-bold">
                Document Info
              </div>
              <div className="text-base md:text-lg font-mono text-white/60 space-y-1">
                <div>Last Updated</div>
                <div className="text-2xl font-bold text-white/80">2025.11</div>
              </div>
            </div>
          </div>
        </header>

        {/* Sections Container - Swiss Grid Layout */}
        <div className="space-y-32">
          {/* Academic Performance */}
          <section className="grid grid-cols-12 gap-6 border-t border-white/30 pt-16">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 font-sans sticky top-24">
                Academic
                <br />
                Performance
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9 border-l-2 border-white/40 pl-8 space-y-6">
              <div className="space-y-3">
                <div className="text-8xl md:text-9xl font-serif font-bold tabular-nums leading-none">
                  3.58
                </div>
                <div className="text-2xl text-white/40 font-mono tracking-wide">
                  / 4.0 GPA
                </div>
              </div>
              <div className="text-base text-white/60 font-sans uppercase tracking-widest border-l-4 border-white/60 pl-4">
                学院本专业排名第一
              </div>
            </div>
          </section>

          {/* Research */}
          <section className="grid grid-cols-12 gap-6 border-t border-white/30 pt-16">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 font-sans sticky top-24">
                Research
                <br />
                Projects
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9 border-l-2 border-white/40 pl-8 space-y-12">
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
          <section className="grid grid-cols-12 gap-6 border-t border-white/30 pt-16">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 font-sans sticky top-24">
                Awards &<br />
                Honors
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9 border-l-2 border-white/40 pl-8 grid gap-px">
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
          </section>

          {/* Teaching & Service */}
          <section className="grid grid-cols-12 gap-6 border-t border-white/30 pt-16">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 font-sans sticky top-24">
                Teaching &<br />
                Service
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9 border-l-2 border-white/40 pl-8 space-y-10">
              <ServiceItem
                number="01"
                role="教学助理 (TA)"
                context="南方科技大学"
                period="一学年"
              >
                担任本科课程《Ai in design》和《Design and Learning with
                Data》助教。负责备课、批改作业及答疑。
              </ServiceItem>

              <ServiceItem
                number="02"
                role="研究生团支书"
                context="班级服务"
                period="2024 - 至今"
              >
                组织"潮起珠江，青春逐梦"等团日活动。荣获
                <strong>校级"优秀共青团干部"</strong>称号，团员年度评议"优秀"。
              </ServiceItem>

              <ServiceItem
                number="03"
                role="公益志愿者"
                context="志愿服务"
                period="9.5 小时"
              >
                热心公益，积极参与志愿服务活动，增强社会责任感。
              </ServiceItem>
            </div>
          </section>
        </div>

        {/* Footer - Swiss Style */}
        <footer className="mt-40 pt-16 border-t-2 border-white/30 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 space-y-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-sans font-bold">
              Copyright
            </div>
            <div className="text-base font-mono text-white/60">
              程思睿 © 2025
              <br />
              All Rights Reserved
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 space-y-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-sans font-bold">
              Design System
            </div>
            <div className="text-base font-mono text-white/60">
              Swiss International Style
              <br />
              Typographic Grid System
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
    <div className="group border-b border-white/20 pb-10">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 md:col-span-1">
          <div className="text-4xl font-serif font-bold text-white/20 group-hover:text-white/40 transition-colors tabular-nums">
            {number}
          </div>
        </div>
        <div className="col-span-10 md:col-span-11 space-y-4">
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white group-hover:text-white/80 transition-colors leading-tight">
              {title}
            </h3>
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 font-sans font-bold">
              {subtitle}
            </div>
          </div>
          <p className="text-white/60 leading-relaxed font-sans text-base md:text-lg">
            {children}
          </p>
          {links && (
            <div className="mt-4 flex gap-4">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest font-sans text-white/40 hover:text-white border-b border-white/30 hover:border-white transition-all pb-0.5"
                >
                  {link.label} →
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
    <div className="border-b border-white/20 py-8 group hover:bg-white/[0.02] transition-colors">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 md:col-span-1">
          <div className="text-3xl font-serif font-bold text-white/20 group-hover:text-white/40 transition-colors tabular-nums">
            {number}
          </div>
        </div>
        <div className="col-span-10 md:col-span-11 space-y-3">
          <div className="text-2xl md:text-3xl font-serif font-bold">{title}</div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 font-sans font-bold">
            {org}
          </div>
          {desc && (
            <div className="text-sm md:text-base text-white/50 leading-relaxed font-sans pt-1">
              {desc}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceItem({
  number,
  role,
  context,
  period,
  children,
}: {
  number: string;
  role: string;
  context: string;
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group border-b border-white/20 pb-10">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 md:col-span-1">
          <div className="text-4xl font-serif font-bold text-white/20 group-hover:text-white/40 transition-colors tabular-nums">
            {number}
          </div>
        </div>
        <div className="col-span-10 md:col-span-11 grid md:grid-cols-[240px_1fr] gap-4 md:gap-8">
          <div className="space-y-2">
            <div className="font-serif text-2xl md:text-3xl font-bold">{role}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 font-sans font-bold">
              {context}
            </div>
            <div className="text-sm font-mono text-white/40 pt-1">{period}</div>
          </div>
          <div className="text-white/60 font-sans text-base md:text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
