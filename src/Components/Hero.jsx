// import React, { useState, useEffect } from 'react';
// import { Linkedin, Github, Mail, ArrowRight, Sparkles } from 'lucide-react';

// const Hero = () => {
//   const [activeText, setActiveText] = useState(0);
  
//   const rotatingTexts = [
//     "Turning ideas into reality",
//     "Building end-to-end solutions",
//     "Crafting seamless experiences"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveText((prev) => (prev + 1) % rotatingTexts.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="hero" className="bg-white min-h-screen flex items-center relative overflow-hidden pt-24">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
//           backgroundSize: '48px 48px'
//         }}></div>
//       </div>

//       {/* Large Background Text */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
//         <h1 className="text-[20vw] font-bold whitespace-nowrap">DEVELOPER</h1>
//       </div>

//       <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10">
//         <div className="grid lg:grid-cols-12 gap-12 items-center">
//           {/* Left Side - Main Content */}
//           <div className="lg:col-span-7 space-y-8">
//             {/* Status Badge */}
//             {/* <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 bg-gray-50 text-sm font-light">
//               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//               Available for work
//             </div> */}

//             {/* Main Heading */}
//             <div className="space-y-4">
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
//                 Hi, I'm
//                 <br />
//                 <span className="font-normal">Isneha</span>
//               </h1>
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-px bg-gray-900"></div>
//                 <p className="text-xl md:text-2xl text-gray-600 font-light">
//                   Full Stack Developer
//                 </p>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-gray-600 leading-relaxed max-w-lg font-light text-lg">
//               Building clean, creative, and high-performing web solutions that bring ideas to life and deliver real results.
//             </p>

//             {/* Animated Tagline */}
//             <div className="flex items-center gap-4 py-6 min-h-[60px]">
//               <Sparkles className="w-5 h-5 text-gray-900 flex-shrink-0" />
//               <div className="relative overflow-hidden h-8">
//                 {rotatingTexts.map((text, index) => (
//                   <p
//                     key={index}
//                     className={`absolute left-0 text-lg font-light text-gray-900 transition-all duration-500 ${
//                       activeText === index
//                         ? 'opacity-100 translate-y-0'
//                         : index < activeText
//                         ? 'opacity-0 -translate-y-8'
//                         : 'opacity-0 translate-y-8'
//                     }`}
//                   >
//                     {text}
//                   </p>
//                 ))}
//               </div>
//             </div>

//             {/* CTA Button */}
//             <div className="pt-4">
//               <a href="#contact">
//               <button className="group cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-all">
//                 Get in touch
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//               </a>
//             </div>
//           </div>

//           {/* Right Side - Profile Card & Social */}
//           <div className="lg:col-span-5">
//             <div className="relative">
//               {/* Profile Image Card */}
//               <div className="relative border-2 border-gray-900 p-8 bg-white">
//                 {/* Decorative Corners */}
//                 <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-gray-900"></div>
//                 <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-gray-900"></div>
                
//                 <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
//                   <img 
//                     src="/images/person.png" 
//                     alt="Isneha - Full Stack Developer" 
//                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                   />
//                 </div>

//                 {/* Info Bar */}
//                 <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
//                   <div>
//                     <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-1">Based in</p>
//                     <p className="text-sm text-gray-900 font-light">Pokhara, Nepal</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-1">Experience</p>
//                     <p className="text-sm text-gray-900 font-light">9+ Months</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Links - Positioned outside the card */}
//               <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
//                 <a 
//                   href="https://www.linkedin.com/in/isneha-manandhar-19a18a339/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 border-2 border-gray-900 bg-white flex items-center justify-center hover:bg-gray-900 transition-colors group"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
//                 </a>
//                 <a 
//                   href="https://github.com/isneha-cyber" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 border-2 border-gray-900 bg-white flex items-center justify-center hover:bg-gray-900 transition-colors group"
//                   aria-label="GitHub"
//                 >
//                   <Github className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
//                 </a>
//                 <a 
//                   href="mailto:isnehamanandhar88@gmail.com"
//                   className="w-12 h-12 border-2 border-gray-900 bg-white flex items-center justify-center hover:bg-gray-900 transition-colors group"
//                   aria-label="Email"
//                 >
//                   <Mail className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Stats Bar */}
//         <div className="mt-20 pt-12 border-t border-gray-200">
//           {/* <div className="grid grid-cols-3 gap-8">
//             <div>
//               <div className="text-4xl font-light text-gray-900 mb-2">10+</div>
//               <p className="text-xs text-gray-500 font-light tracking-wide uppercase">Projects</p>
//             </div>
//             <div>
//               <div className="text-4xl font-light text-gray-900 mb-2">9+</div>
//               <p className="text-xs text-gray-500 font-light tracking-wide uppercase">Months Exp</p>
//             </div>
//             <div>
//               <div className="text-4xl font-light text-gray-900 mb-2">100%</div>
//               <p className="text-xs text-gray-500 font-light tracking-wide uppercase">Dedication</p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [activeText, setActiveText] = useState(0);
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const nameRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const imageCardRef = useRef(null);
  const socialRef = useRef(null);
  const bgTextRef = useRef(null);
  const decorCorner1Ref = useRef(null);
  const decorCorner2Ref = useRef(null);
  const imageRef = useRef(null);
  
  const rotatingTexts = [
    "Turning ideas into reality",
    "Building end-to-end solutions",
    "Crafting seamless experiences"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headingRef.current, nameRef.current, lineRef.current, titleRef.current, descRef.current, taglineRef.current, ctaRef.current], {
        opacity: 0,
        y: 30
      });
      gsap.set(imageCardRef.current, { opacity: 0, x: 50, rotateY: -15 });
      gsap.set(socialRef.current?.children, { opacity: 0, x: 30 });
      gsap.set([decorCorner1Ref.current, decorCorner2Ref.current], { scale: 0 });

      // Background text animation - continuous subtle movement
      gsap.to(bgTextRef.current, {
        x: '-10%',
        duration: 20,
        repeat: -1,
        ease: 'none',
        yoyo: true
      });

      // Main entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3
      })
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1
      }, '-=0.7')
      .to(lineRef.current, {
        width: '3rem',
        opacity: 1,
        duration: 0.8
      }, '-=0.5')
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.6')
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.5')
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.5')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.5')
      .to(imageCardRef.current, {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1.2,
        ease: 'power4.out'
      }, '-=1')
      .to(decorCorner1Ref.current, {
        scale: 1,
        duration: 0.5,
        ease: 'back.out(2)'
      }, '-=0.8')
      .to(decorCorner2Ref.current, {
        scale: 1,
        duration: 0.5,
        ease: 'back.out(2)'
      }, '-=0.6')
      .to(socialRef.current?.children, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.5)'
      }, '-=0.8');

      // Parallax effects on scroll
      gsap.to(imageCardRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to(bgTextRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Magnetic effect for CTA button
      const cta = ctaRef.current;
      if (cta) {
        const handleMouseMove = (e) => {
          const rect = cta.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(cta, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(cta, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
          });
        };

        cta.addEventListener('mousemove', handleMouseMove);
        cta.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          cta.removeEventListener('mousemove', handleMouseMove);
          cta.removeEventListener('mouseleave', handleMouseLeave);
        };
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Hover effect for image
  const handleImageHover = () => {
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleImageLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  return (
    <section ref={heroRef} id="hero" className="bg-white flex items-center relative overflow-hidden pt-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Large Background Text */}
      <div ref={bgTextRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <h1 className="text-[20vw]  font-bold whitespace-nowrap">DEVELOPER</h1>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 ref={headingRef} className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
                Hi, I'm
                <br />
                <span ref={nameRef} className="font-normal inline-block">Isneha</span>
              </h1>
              <div className="flex items-center gap-3">
                <div ref={lineRef} className="w-0 h-px bg-gray-900"></div>
                <p ref={titleRef} className="text-xl md:text-2xl text-gray-600 font-light">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <p ref={descRef} className="text-gray-600 leading-relaxed max-w-lg font-light text-lg">
              Building clean, creative, and high-performing web solutions that bring ideas to life and deliver real results.
            </p>

            {/* Animated Tagline */}
            <div ref={taglineRef} className="flex items-center gap-4 py-6 min-h-[60px]">
              <Sparkles className="w-5 h-5 text-gray-900 flex-shrink-0" />
              <div className="relative overflow-hidden h-8">
                {rotatingTexts.map((text, index) => (
                  <p
                    key={index}
                    className={`absolute left-0 text-lg font-light text-gray-900 transition-all duration-500 ${
                      activeText === index
                        ? 'opacity-100 translate-y-0'
                        : index < activeText
                        ? 'opacity-0 -translate-y-8'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div ref={ctaRef} className="pt-4">
              <a href="#contact">
                <button className="group cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-all relative overflow-hidden">
                  <span className="relative z-10">Get in touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Card & Social */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Profile Image Card */}
              <div ref={imageCardRef} className="relative border-2 border-gray-900 p-8 bg-white" style={{ transformStyle: 'preserve-3d' }}>
                {/* Decorative Corners */}
                <div ref={decorCorner1Ref} className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-gray-900"></div>
                <div ref={decorCorner2Ref} className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-gray-900"></div>
                
                <div 
                  ref={imageRef}
                  className="relative w-full aspect-square overflow-hidden bg-gray-100"
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                >
                  <img 
                    src="/images/person.png" 
                    alt="Isneha - Full Stack Developer" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Info Bar */}
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-1">Based in</p>
                    <p className="text-sm text-gray-900 font-light">Pokhara, Nepal</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-1">Experience</p>
                    <p className="text-sm text-gray-900 font-light">9+ Months</p>
                  </div>
                </div>
              </div>

              {/* Social Links - Positioned outside the card */}
              <div ref={socialRef} className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <a 
                  href="https://www.linkedin.com/in/isneha-manandhar-19a18a339/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-gray-900 bg-white flex items-center justify-center hover:bg-gray-900 transition-all duration-300 group hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://github.com/isneha-cyber" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-gray-900 bg-white flex items-center justify-center hover:bg-gray-900 transition-all duration-300 group hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="mailto:isnehamanandhar88@gmail.com"
                  className="w-12 h-12 border-2 border-gray-900 bg-white flex items-center justify-center hover:bg-gray-900 transition-all duration-300 group hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          {/* Stats can be added here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;