"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "GPA 3.58/4.0",
    subtitle: "Rank 1st in Major",
    desc: "Intelligent Manufacturing and Robotics",
    color: "bg-blue-100",
  },
  {
    title: "Tase Published",
    subtitle: "Underwater Exoskeleton",
    desc: "Deep Learning LSTM Model",
    color: "bg-green-100",
  },
  {
    title: "NeurIPS Submitted",
    subtitle: "VLA Robot Model",
    desc: "Diffusion & DiT Tech",
    color: "bg-purple-100",
  },
  {
    title: "National 1st Prize",
    subtitle: "China-US Maker Comp",
    desc: "Full Stack Development",
    color: "bg-orange-100",
  },
  {
    title: "Milan Triennale",
    subtitle: "Exhibition",
    desc: "Industrial Design Innovation",
    color: "bg-red-100",
  },
  {
    title: "Climbing Plan",
    subtitle: "Project Leader",
    desc: "Research Organization",
    color: "bg-yellow-100",
  },
];

export default function ScrollyTelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: pinnedRef.current,
          // markers: true, // debug
        },
      });

      // 1. Slogan Animation (0% - 15%)
      // Start: Center, Opacity 1
      // End: Scale up significantly, Opacity 0
      tl.to(sloganRef.current, {
        scale: 10,
        opacity: 0,
        ease: "power2.inOut",
        duration: 2,
      })
      .set(sloganRef.current, { display: "none" }); // Hide after it's gone

      // 2. Cards Fly In (15% - 45%)
      // Cards start scattered off-screen (handled by CSS or initial set)
      const cards = gsap.utils.toArray(".resume-card");
      
      // Randomly position cards off-screen initially
      cards.forEach((card: any) => {
        gsap.set(card, {
          x: (Math.random() - 0.5) * window.innerWidth * 2,
          y: (Math.random() - 0.5) * window.innerHeight * 2,
          rotation: (Math.random() - 0.5) * 60,
          opacity: 0,
          scale: 0.5,
        });
      });

      // Fly to center (scattered view)
      tl.to(cards, {
        x: (index) => (index % 2 === 0 ? -150 : 150) + (Math.random() - 0.5) * 50, // Loosely clustered
        y: (index) => (index - 2) * 120 + (Math.random() - 0.5) * 50,
        rotation: (index) => (Math.random() - 0.5) * 10,
        opacity: 1,
        scale: 1,
        duration: 5,
        stagger: 0.1,
        ease: "elastic.out(1, 0.75)",
      }, "<"); // Overlap slightly with slogan fade out if desired, or sequence

      // 3. Stacking Effect (45% - 65%)
      // All cards move to absolute center (0,0) and rotate slightly to look like a stack
      tl.to(cards, {
        x: 0,
        y: 0,
        rotation: (index) => (index - (cards.length - 1) / 2) * 5, // Fanned out slightly
        scale: 1,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        duration: 4,
        ease: "power3.inOut",
      });

      // 4. Reveal Button (65% - 75%)
      tl.fromTo(buttonRef.current, 
        { scale: 0, opacity: 0, y: 100 },
        { scale: 1, opacity: 1, y: 200, duration: 2, ease: "back.out(1.7)" }
      );

      // 5. Explosion (75% - 90%)
      // Cards explode outwards
      tl.to(cards, {
        x: () => (Math.random() - 0.5) * window.innerWidth * 3,
        y: () => (Math.random() - 0.5) * window.innerHeight * 3,
        rotation: () => (Math.random() - 0.5) * 720,
        opacity: 0,
        scale: 0.2,
        duration: 3,
        ease: "power4.out", // Explosive feeling
      }, "+=0.5");

      // Hide button
      tl.to(buttonRef.current, { opacity: 0, scale: 0, duration: 1 }, "<");

      // 6. Logo Reveal (90% - 100%)
      tl.fromTo(logoRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 2, ease: "power2.out" }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "600vh" }}>
      {/* Pinned Container */}
      <div 
        ref={pinnedRef} 
        className="sticky top-0 left-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black text-white"
      >
        {/* Slogan */}
        <h1 
          ref={sloganRef} 
          className="absolute z-10 text-6xl md:text-9xl font-bold tracking-tighter text-center px-4"
        >
          Cheng Sirui<br/>
          <span className="text-3xl md:text-5xl font-light opacity-80 mt-4 block">Next-Gen Engineer</span>
        </h1>

        {/* Cards Container */}
        <div ref={cardsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`resume-card absolute w-80 h-96 p-6 rounded-3xl shadow-2xl flex flex-col justify-between border border-white/10 backdrop-blur-md ${card.color} bg-opacity-10`}
              style={{
                // Initial styles are handled by GSAP
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fallback / Base
                color: '#000'
              }}
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                   <span className="text-lg font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="text-xs font-mono opacity-50">RESUME-DOC</div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold leading-tight">{card.title}</h3>
                <p className="text-sm font-medium text-gray-600">{card.subtitle}</p>
              </div>

              <div className="pt-4 border-t border-black/10">
                <p className="text-xs text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          ref={buttonRef}
          className="absolute z-20 px-8 py-4 bg-red-600 text-white rounded-full text-xl font-bold shadow-lg hover:bg-red-700 transition-colors opacity-0"
        >
          Unsubscribe All
        </button>

        {/* Final Logo */}
        <div ref={logoRef} className="absolute z-30 text-center opacity-0">
          <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
            </svg>
          </div>
          <h2 className="text-4xl font-bold">Cheng Sirui</h2>
          <p className="mt-2 text-gray-400">Available for Opportunities</p>
          <a href="mailto:contact@chengsirui.com" className="mt-4 inline-block text-blue-400 hover:text-blue-300">Contact Me</a>
        </div>

      </div>
      
      {/* Scroll indicator hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce fixed z-50 mix-blend-difference">
        Scroll to Explore
      </div>
    </div>
  );
}
