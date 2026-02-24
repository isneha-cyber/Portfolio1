// components/About.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Download, Code, Palette, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const skillsRef = useRef(null);
  const ctaRef = useRef(null);
  const statsCardRef = useRef(null);
  const statsRef = useRef([]);
  const cornerTopRef = useRef(null);
  const cornerBottomRef = useRef(null);
  const quoteRef = useRef(null);
  
  const [isDownloading, setIsDownloading] = useState(false);

  const skills = [
    { icon: Code, label: 'Clean Code' },
    { icon: Palette, label: 'UI/UX Design' },
    { icon: Zap, label: 'Fast Performance' }
  ];

  // Function to handle CV download
  const handleDownloadCV = () => {
    setIsDownloading(true);
    
    try {
      // Update this path to match where you place your PDF file
      const cvPath = '/cv.pdf'; // or '/assets/cv.pdf' or '/cv.pdf'
      
      // Method 1: Simple download using anchor element
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'cv.pdf'; // Change this to your name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Method 2: Alternative - fetch and download (more robust)
      // handleAdvancedDownload();
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: Open in new tab
      window.open('/cv.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  // Advanced download method using fetch
  const handleAdvancedDownload = async () => {
    try {
      const response = await fetch('/cv.pdf');
      if (!response.ok) throw new Error('Failed to fetch CV');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'cv.pdf';
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback to simple method
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'cv.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headerRef.current, para1Ref.current, para2Ref.current], {
        opacity: 0,
        y: 30
      });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left' });
      gsap.set(skillsRef.current?.children, { opacity: 0, x: -30 });
      gsap.set(ctaRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(statsCardRef.current, { opacity: 0, x: 50 });
      gsap.set([cornerTopRef.current, cornerBottomRef.current], { scale: 0 });
      gsap.set(statsRef.current, { opacity: 0, y: 20 });
      gsap.set(quoteRef.current, { opacity: 0, y: 20 });
      
      // Set initial state for stat numbers (hides the "0+" flash)
      gsap.set('.stat-number', { opacity: 1 });

      // Main scroll-triggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        defaults: { ease: 'power3.out' }
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      })
      .to(lineRef.current, {
        scaleX: 1,
        duration: 0.6
      }, '-=0.4')
      .to(para1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.3')
      .to(para2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.5')
      .to(skillsRef.current?.children, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15
      }, '-=0.4')
      .to(ctaRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.5)'
      }, '-=0.4')
      .to(statsCardRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out'
      }, '-=1')
      .to([cornerTopRef.current, cornerBottomRef.current], {
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(2)'
      }, '-=0.6')
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15
      }, '-=0.5')
      .to(quoteRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, '-=0.3');

      // Parallax effect for stats card
      gsap.to(statsCardRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Skill icons hover animation enhancement
      const skillElements = skillsRef.current?.children;
      if (skillElements) {
        Array.from(skillElements).forEach((skill) => {
          const icon = skill.querySelector('.skill-icon');
          
          skill.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              scale: 1.1,
              rotate: 5,
              duration: 0.3,
              ease: 'back.out(2)'
            });
          });
          
          skill.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              scale: 1,
              rotate: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        });
      }

      // CTA button magnetic effect
      const cta = ctaRef.current;
      if (cta) {
        const handleMouseMove = (e) => {
          const rect = cta.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(cta, {
            x: x * 0.2,
            y: y * 0.2,
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
      }

      // Number counter animation with data attributes
      statsRef.current.forEach((stat, index) => {
        const number = stat.querySelector('.stat-number');
        if (number) {
          // Get target from data attribute or use default based on position
          const targets = [9, 10, 1]; // Your actual numbers
          const target = targets[index];
          
          // Initialize with 0
          number.textContent = '0+';
          
          const obj = { value: 0 };
          
          // Create separate timeline for each counter
          const counterTl = gsap.timeline({
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%', // Slightly lower to ensure visibility
              toggleActions: 'play none none reverse',
              once: true // Only play once
            }
          });
          
          counterTl.to(obj, {
            value: target,
            duration: 2.5, // Slightly longer duration for smoother animation
            ease: 'power2.out',
            onUpdate: () => {
              number.textContent = Math.round(obj.value) + '+';
            },
            onStart: () => {
              // Ensure number is visible when animation starts
              gsap.set(number, { opacity: 1 });
            }
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-white py-12 md:py-24 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative">
        {/* Section Header */}
        <div className="mb-20">
          <h2 ref={headerRef} className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
            About
          </h2>
          <div ref={lineRef} className="w-12 h-px bg-gray-900 mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side - Main Content */}
          <div className="lg:col-span-7">
            {/* Description */}
            <div className="space-y-6 mb-12">
              <p ref={para1Ref} className="text-gray-700 leading-relaxed text-lg font-light">
                Software developer with extensive knowledge and experience, working in web and software technologies and UI/UX design, delivering quality work with attention to detail and passion for clean code.
              </p>
              <p ref={para2Ref} className="text-gray-600 leading-relaxed font-light">
                Passionate about creating efficient, scalable solutions and continuously learning new technologies to stay at the forefront of development.
              </p>
            </div>

            {/* Skills Highlights */}
            <div ref={skillsRef} className="space-y-4 mb-12">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="skill-icon w-12 h-12 border border-gray-200 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-300 relative overflow-hidden">
                      <Icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300 relative z-10" />
                      <div className="absolute inset-0 bg-gray-900 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                    </div>
                    <span className="text-gray-700 font-light group-hover:text-gray-900 transition-colors">
                      {skill.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Download Button */}
            <div>
              <button 
                ref={ctaRef}
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className="inline-flex items-center gap-3 px-8 py-3 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="relative z-10">Downloading...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Download CV</span>
                    <Download size={16} className="group-hover:translate-y-0.5 transition-transform relative z-10" />
                  </>
                )}
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              
            </div>
          </div>

          {/* Right Side - Stats Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <div 
                ref={statsCardRef}
                className="border border-gray-200 p-8 lg:p-10 bg-gray-50 relative hover:shadow-lg transition-shadow duration-300"
              >
                {/* Decorative Corners */}
                <div ref={cornerTopRef} className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-900"></div>
                <div ref={cornerBottomRef} className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-900"></div>

                <div className="space-y-8">
                  {/* Months Experience */}
                  <div 
                    ref={(el) => (statsRef.current[0] = el)}
                    className="pb-6 border-b border-gray-200"
                  >
                    <div className="stat-number text-5xl font-light text-gray-900 mb-2">0+</div>
                    <p className="text-xs text-gray-500 font-light tracking-wide uppercase">Months Experience</p>
                  </div>
                  
                  {/* Projects Completed */}
                  <div 
                    ref={(el) => (statsRef.current[1] = el)}
                    className="pb-6 border-b border-gray-200"
                  >
                    <div className="stat-number text-5xl font-light text-gray-900 mb-2">0+</div>
                    <p className="text-xs text-gray-500 font-light tracking-wide uppercase">Projects Completed</p>
                  </div>
                  
                  {/* Companies Worked */}
                  <div 
                    ref={(el) => (statsRef.current[2] = el)}
                  >
                    <div className="stat-number text-5xl font-light text-gray-900 mb-2">0+</div>
                    <p className="text-xs text-gray-500 font-light tracking-wide uppercase">Companies Worked</p>
                  </div>
                </div>

                {/* Quote or Tagline */}
                {/* <div ref={quoteRef} className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-light italic">
                    "Turning ideas into elegant digital solutions"
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;