// import React, { useState } from 'react';

// const Skills = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const skills = [
//     { name: 'HTML', icon: 'devicon-html5-plain colored' },
//     { name: 'CSS', icon: 'devicon-css3-plain colored' },
//     { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
//     { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
//     { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
//     { name: 'React', icon: 'devicon-react-original colored' },
//     { name: 'PHP', icon: 'devicon-php-plain colored' },
//     { name: 'Laravel', icon: 'devicon-laravel-plain colored' }
//   ];

//   return (
//     <>
//       <link 
//         rel="stylesheet" 
//         href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css"
//       />
      
//       <section id="skills" className="bg-white min-h-screen flex items-center relative overflow-hidden">
//         {/* Subtle Background Pattern */}
//         <div className="absolute inset-0 opacity-[0.02]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
//             backgroundSize: '48px 48px'
//           }}></div>
//         </div>

//         <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10 py-12 sm:py-24">
//           {/* Header */}
//           <div className="mb-16 sm:mb-20">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-12 h-px bg-gray-900"></div>
//               <span className="text-gray-500 text-xs tracking-wide uppercase font-light">
//                 Expertise
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
//               Skills
//             </h2>
//           </div>

//           {/* Skills Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group relative aspect-square"
//               >
//                 {/* Card */}
//                 <div 
//                   className="absolute inset-0 bg-white border-2 border-gray-900 transition-all duration-300 ease-out"
//                   style={{
//                     transform: hoveredIndex === index ? 'translate(-4px, -4px)' : 'translate(0, 0)'
//                   }}
//                 >
//                   {/* Decorative Corners */}
//                   <div 
//                     className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gray-900 transition-opacity duration-300"
//                     style={{
//                       opacity: hoveredIndex === index ? 1 : 0
//                     }}
//                   ></div>
//                   <div 
//                     className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gray-900 transition-opacity duration-300"
//                     style={{
//                       opacity: hoveredIndex === index ? 1 : 0
//                     }}
//                   ></div>

//                   <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
//                     <i 
//                       className={`${skill.icon} text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 transition-transform duration-300`}
//                       style={{
//                         transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
//                       }}
//                     ></i>
//                     <span className="text-gray-900 text-xs sm:text-sm md:text-base font-light tracking-wide text-center">
//                       {skill.name}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Shadow element */}
//                 <div 
//                   className="absolute inset-0 bg-gray-900 border-2 border-gray-900 transition-all duration-300 ease-out -z-10"
//                   style={{
//                     transform: 'translate(4px, 4px)'
//                   }}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Skills;
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const headerLineRef = useRef(null);
  const headerLabelRef = useRef(null);
  const headerTitleRef = useRef(null);
  const skillsGridRef = useRef(null);
  const skillCardsRef = useRef([]);

  const skills = [
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'Laravel', icon: 'devicon-laravel-plain colored' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerLineRef.current, { scaleX: 0, transformOrigin: 'left' });
      gsap.set(headerLabelRef.current, { opacity: 0, x: -20 });
      gsap.set(headerTitleRef.current, { opacity: 0, y: 30 });
      gsap.set(skillCardsRef.current, { 
        opacity: 0, 
        scale: 0.8,
        rotateY: -20
      });

      // Header animation timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });

      headerTl
        .to(headerLineRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.out'
        })
        .to(headerLabelRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4')
        .to(headerTitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.4');

      // Skills cards animation with stagger
      gsap.to(skillCardsRef.current, {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 0.8,
        stagger: {
          each: 0.1,
          from: 'start',
          ease: 'power2.out'
        },
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: skillsGridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      // Floating animation for cards
      skillCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            y: -10,
            duration: 2 + (index % 3) * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1
          });
        }
      });

      // Add hover animations
      skillCardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardInner = card.querySelector('.card-inner');
        const shadow = card.querySelector('.card-shadow');
        const icon = card.querySelector('.skill-icon');
        const corners = card.querySelectorAll('.corner');

        card.addEventListener('mouseenter', () => {
          gsap.to(cardInner, {
            x: -8,
            y: -8,
            duration: 0.3,
            ease: 'power2.out'
          });
          
          gsap.to(shadow, {
            x: 8,
            y: 8,
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(1.7)'
          });

          gsap.to(corners, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'back.out(2)'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(cardInner, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: 'elastic.out(1, 0.6)'
          });
          
          gsap.to(shadow, {
            x: 4,
            y: 4,
            duration: 0.4,
            ease: 'elastic.out(1, 0.6)'
          });

          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'back.out(1.5)'
          });

          gsap.to(corners, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css"
      />
      
      <section ref={sectionRef} id="skills" className="bg-white min-h-screen flex items-center relative overflow-hidden pt-12 pb-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10 py-12 ">
          {/* Header */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div ref={headerLineRef} className="w-12 h-px bg-gray-900"></div>
              <span ref={headerLabelRef} className="text-gray-500 text-xs tracking-wide uppercase font-light">
                Expertise
              </span>
            </div>
            <h2 ref={headerTitleRef} className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
              Skills
            </h2>
          </div>

          {/* Skills Grid */}
          <div ref={skillsGridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (skillCardsRef.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative aspect-square cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card */}
                <div 
                  className="card-inner absolute inset-0 bg-white border-2 border-gray-900 transition-all duration-300 ease-out"
                >
                  {/* Decorative Corners */}
                  <div 
                    className="corner absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gray-900"
                    style={{ opacity: 0, transform: 'scale(0)' }}
                  ></div>
                  <div 
                    className="corner absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gray-900"
                    style={{ opacity: 0, transform: 'scale(0)' }}
                  ></div>

                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                      style={{ transform: 'skewX(-20deg)' }}
                    ></div>
                  </div>

                  <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 relative z-10">
                    <i 
                      className={`skill-icon ${skill.icon} text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4`}
                    ></i>
                    <span className="text-gray-900 text-xs sm:text-sm md:text-base font-light tracking-wide text-center">
                      {skill.name}
                    </span>
                  </div>
                </div>

                {/* Shadow element */}
                <div 
                  className="card-shadow absolute inset-0 bg-gray-900 border-2 border-gray-900 -z-10"
                  style={{ transform: 'translate(4px, 4px)' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;