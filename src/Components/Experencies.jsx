// import React from 'react';

// const Experiences = () => {
//   const experiences = [
//     {
//       title: "Frontend Developer Intern",
//       company: "SAIT SOLUTION Trades & Concerns",
//       date: "2024",
//       description: "Currently working as a Front-End Developer at Sait Solution, where I am gaining hands-on experience with real-world projects. My responsibilities include creating user-friendly and interactive designs, developing flexible interfaces, and ensuring smooth domain hosting and browsing experiences."
//     },
//     {
//       title: "Test Centre Assistant",
//       company: "Infomax College of IT & Management",
//       date: "Dec 2024 - Feb 2025",
//       description: "Worked as a Test Center Assistant at Infomax College of IT and Management, where I managed examiner entry, ensured security with CCTV monitoring, coordinated with exam conductors, and provided clear guidance to examiners."
//     },
//     {
//       title: "Student Service Advisor",
//       company: "Creative Studio",
//       date: "Jul 2024 - Dec 2024",
//       description: "I had the wonderful opportunity to work at Infomax College of IT and Management as a Student Service Advisor. It was a great experience to be part of the team, where I was able to assist students and contribute to the college environment while also enhancing my own skills."
//     }
//   ];

//   return (
//     <section id="experience" className="bg-gray-50 py-16 md:py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Experience
//           </h2>
//           <div className="w-20 h-1 bg-gray-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Timeline Container */}
//         <div className="max-w-4xl mx-auto">
//           {/* Timeline Line */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-400 to-black-600"></div>

//           {/* Timeline Items */}
//           <div className="relative space-y-8 md:space-y-12">
//             {experiences.map((experience, index) => (
//               <div
//                 key={index}
//                 className="relative flex flex-col md:flex-row items-center"
//               >
//                 {/* Timeline Dot */}
//                 <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-black-500 rounded-full border-4 border-white shadow-lg z-10"></div>

//                 {/* Content Card */}
//                 <div
//                   className={`w-full ml-8 md:ml-0 ${
//                     index % 2 === 0 
//                       ? 'md:pr-8 md:text-right' 
//                       : 'md:pl-8 md:text-left'
//                   }`}
//                 >
//                   <div
//                     className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
//                       index % 2 === 0 ? 'md:mr-auto md:max-w-[45%]' : 'md:ml-auto md:max-w-[45%]'
//                     }`}
//                   >
//                     {/* Date Badge */}
//                     <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-black-50 text-black-600 mb-4 ${
//                       index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
//                     }`}>
//                       <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
//                       {experience.date}
//                     </div>

//                     {/* Content */}
//                     <div className="clear-both">
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">
//                         {experience.title}
//                       </h3>
//                       <p className="text-gray-600 font-semibold mb-4">
//                         {experience.company}
//                       </p>
//                       <p className="text-gray-600 leading-relaxed">
//                         {experience.description}
//                       </p>
//                     </div>

//                     {/* Decorative Corner */}
//                     {/* <div className={`absolute top-0 w-3 h-3 border-t-2 border-l-2 border-gray-500 rounded-tl-lg ${
//                       index % 2 === 0 ? 'left-0' : 'right-0 border-t-2 border-r-2 border-l-0 rounded-tl-none rounded-tr-lg'
//                     }`}></div> */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Decoration */}
//         {/* <div className="text-center mt-12">
//           <div className="inline-flex items-center text-gray-400">
//             <span className="w-8 h-px bg-gray-300 mr-2"></span>
//             Career Journey
//             <span className="w-8 h-px bg-gray-300 ml-2"></span>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Experiences;
// import React from 'react';

// const Experiences = () => {
//   const experiences = [
//     {
//       title: "Frontend Developer Intern",
//       company: "SAIT SOLUTION Trades & Concerns",
//       date: "2024",
//       description: "Currently working as a Front-End Developer at Sait Solution, where I am gaining hands-on experience with real-world projects. My responsibilities include creating user-friendly and interactive designs, developing flexible interfaces, and ensuring smooth domain hosting and browsing experiences."
//     },
//     {
//       title: "Test Centre Assistant",
//       company: "Infomax College of IT & Management",
//       date: "Dec 2024 - Feb 2025",
//       description: "Worked as a Test Center Assistant at Infomax College of IT and Management, where I managed examiner entry, ensured security with CCTV monitoring, coordinated with exam conductors, and provided clear guidance to examiners."
//     },
//     {
//       title: "Student Service Advisor",
//       company: "Creative Studio",
//       date: "Jul 2024 - Dec 2024",
//       description: "I had the wonderful opportunity to work at Infomax College of IT and Management as a Student Service Advisor. It was a great experience to be part of the team, where I was able to assist students and contribute to the college environment while also enhancing my own skills."
//     }
//   ];

//   return (
//     <section id="experience" className="bg-white py-12 md:py-24">
//       <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
//         {/* Section Header */}
//         <div className="mb-20">
//           <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
//             Experience
//           </h2>
//           <div className="w-12 h-px bg-gray-900 mt-4"></div>
//         </div>

//         {/* Experience List */}
//         <div className="space-y-16">
//           {experiences.map((experience, index) => (
//             <div
//               key={index}
//               className="group relative"
//             >
//               {/* Date - Small and subtle */}
//               <div className="text-sm text-gray-500 mb-3 font-light tracking-wide">
//                 {experience.date}
//               </div>

//               {/* Content */}
//               <div className="border-l-2 border-gray-200 pl-6 group-hover:border-gray-900 transition-colors duration-300">
//                 <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-1">
//                   {experience.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 font-light">
//                   {experience.company}
//                 </p>
//                 <p className="text-gray-700 leading-relaxed font-light max-w-2xl">
//                   {experience.description}
//                 </p>
//               </div>

//               {/* Subtle dot indicator */}
//               <div className="absolute left-0 top-0 w-2 h-2 bg-gray-900 rounded-full -translate-x-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experiences;
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const sectionRef = useRef(null);
  const headerTitleRef = useRef(null);
  const headerLineRef = useRef(null);
  const experienceRefs = useRef([]);
  const timelineLineRef = useRef(null);

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "SAIT SOLUTION Trades & Concerns",
      date: "March 2025- June 2025",
      description: "Currently working as a Front-End Developer at Sait Solution, where I am gaining hands-on experience with real-world projects. My responsibilities include creating user-friendly and interactive designs, developing flexible interfaces, and ensuring smooth domain hosting and browsing experiences."
    },
      {
      title: "Backend Developer Intern",
      company: "SAIT SOLUTION Trades & Concerns",
      date: "June 2025 - Present",
      description: "Currently working as a full Stack Developer at Sait Solution, where I am gaining hands-on experience with real-world projects. My responsibilities include creating user-friendly and interactive designs, developing flexible interfaces, and ensuring smooth domain hosting and browsing experiences."
    },
    {
      title: "Test Centre Assistant",
      company: "Infomax College of IT & Management",
      date: "Dec 2024 - Feb 2025",
      description: "Worked as a Test Center Assistant at Infomax College of IT and Management, where I managed examiner entry, ensured security with CCTV monitoring, coordinated with exam conductors, and provided clear guidance to examiners."
    },
    {
      title: "Student Service Advisor",
      company: "Infomax College of IT & Management",
      date: "Jul 2024 - Dec 2024",
      description: "I had the wonderful opportunity to work at Infomax College of IT and Management as a Student Service Advisor. It was a great experience to be part of the team, where I was able to assist students and contribute to the college environment while also enhancing my own skills."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerTitleRef.current, { opacity: 0, y: 30 });
      gsap.set(headerLineRef.current, { scaleX: 0, transformOrigin: 'left' });
      gsap.set(timelineLineRef.current, { height: 0 });
      
      experienceRefs.current.forEach((exp) => {
        if (!exp) return;
        const date = exp.querySelector('.exp-date');
        const title = exp.querySelector('.exp-title');
        const company = exp.querySelector('.exp-company');
        const description = exp.querySelector('.exp-description');
        const dot = exp.querySelector('.exp-dot');
        const line = exp.querySelector('.exp-line');

        gsap.set([date, title, company, description], { opacity: 0, x: -30 });
        gsap.set(dot, { scale: 0 });
        gsap.set(line, { scaleX: 0, transformOrigin: 'left' });
      });

      // Header animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });

      headerTl
        .to(headerTitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        })
        .to(headerLineRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.6');

      // Animate timeline line as user scrolls
      gsap.to(timelineLineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'bottom 80%',
          scrub: 1
        }
      });

      // Animate each experience
      experienceRefs.current.forEach((exp, index) => {
        if (!exp) return;

        const date = exp.querySelector('.exp-date');
        const title = exp.querySelector('.exp-title');
        const company = exp.querySelector('.exp-company');
        const description = exp.querySelector('.exp-description');
        const dot = exp.querySelector('.exp-dot');
        const line = exp.querySelector('.exp-line');
        const contentBorder = exp.querySelector('.exp-border');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: exp,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        });

        tl
          .to(dot, {
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2)'
          })
          .to(line, {
            scaleX: 1,
            duration: 0.6,
            ease: 'power2.out'
          }, '-=0.3')
          .to(date, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out'
          }, '-=0.4')
          .to(title, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out'
          }, '-=0.4')
          .to(company, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out'
          }, '-=0.5')
          .to(description, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out'
          }, '-=0.5');

        // Hover animations
        exp.addEventListener('mouseenter', () => {
          gsap.to(dot, {
            scale: 1.5,
            backgroundColor: '#111827',
            duration: 0.3,
            ease: 'back.out(1.7)'
          });

          gsap.to(contentBorder, {
            borderColor: '#111827',
            x: 5,
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(title, {
            x: 10,
            color: '#111827',
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(line, {
            scaleX: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });

          // Pulse effect on dot
          gsap.to(dot, {
            boxShadow: '0 0 0 8px rgba(17, 24, 39, 0.1)',
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        exp.addEventListener('mouseleave', () => {
          gsap.to(dot, {
            scale: 1,
            backgroundColor: '#9ca3af',
            boxShadow: '0 0 0 0px rgba(17, 24, 39, 0)',
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(contentBorder, {
            borderColor: '#e5e7eb',
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(title, {
            x: 0,
            color: '#111827',
            duration: 0.3,
            ease: 'power2.out'
          });

          gsap.to(line, {
            scaleX: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        // Parallax effect
        gsap.to(dot, {
          y: -15,
          scrollTrigger: {
            trigger: exp,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });

        gsap.to([title, company, description], {
          y: -8,
          scrollTrigger: {
            trigger: exp,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="bg-white py-12 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative">
        {/* Section Header */}
        <div className="mb-20">
          <h2 ref={headerTitleRef} className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
            Experience
          </h2>
          <div ref={headerLineRef} className="w-12 h-px bg-gray-900 mt-4"></div>
        </div>

        {/* Timeline container with animated line */}
        <div className="relative">
          {/* Vertical timeline line - hidden on mobile, shows on md+ */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200">
            <div 
              ref={timelineLineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gray-900 to-gray-400"
              style={{ height: 0 }}
            ></div>
          </div>

          {/* Experience List */}
          <div className="space-y-16 md:ml-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                ref={(el) => (experienceRefs.current[index] = el)}
                className="group relative"
              >
                {/* Animated dot on timeline - positioned absolutely on desktop */}
                <div className="exp-dot absolute -left-8 top-0 w-3 h-3 bg-gray-400 rounded-full hidden md:block"
                  style={{ transform: 'translateX(-50%)' }}
                ></div>

                {/* Connecting line from dot to content */}
                <div className="exp-line absolute -left-8 top-1.5 w-8 h-px bg-gray-200 hidden md:block"></div>

                {/* Date - Small and subtle */}
                <div className="exp-date text-sm text-gray-500 mb-3 font-light tracking-wide">
                  {experience.date}
                </div>

                {/* Content Card */}
                <div className="exp-border border-l-2 border-gray-200 pl-6 md:pl-8 py-4 transition-all duration-300 relative">
                  {/* Accent bar that appears on hover */}
                  <div className="absolute left-0 top-0 w-1 h-0 bg-gray-900 group-hover:h-full transition-all duration-500"></div>

                  <h3 className="exp-title text-xl md:text-2xl font-medium text-gray-900 mb-1 transition-all duration-300">
                    {experience.title}
                  </h3>
                  <p className="exp-company text-gray-600 mb-4 font-light">
                    {experience.company}
                  </p>
                  <p className="exp-description text-gray-700 leading-relaxed font-light max-w-2xl">
                    {experience.description}
                  </p>

                  {/* Decorative corner on hover */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Progress indicator */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="mt-16 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Experiences;