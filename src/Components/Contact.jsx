// import React, { useState } from 'react';
// import { Mail, Send, MapPin, Phone, Github, Linkedin, CheckCircle, Facebook } from 'lucide-react';

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Format the message for WhatsApp
//     const whatsappMessage = `New Contact Form Submission:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    
//     // Your WhatsApp number (remove any spaces or special characters)
//     const phoneNumber = '9806614220'; // Your number
    
//     // Create WhatsApp URL
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
//     // Open WhatsApp in a new tab
//     window.open(whatsappUrl, '_blank');
    
//     // Show success message
//     setSubmitted(true);
//     setIsLoading(false);
    
//     // Reset form after delay
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, 5000);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Alternative method using form submission (if you prefer not to open WhatsApp directly)
//   const handleSubmitAlternative = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // Format message for WhatsApp
//       const message = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      
//       // Encode the message for URL
//       const encodedMessage = encodeURIComponent(message);
//       const phoneNumber = '9806614220';
      
//       // Create WhatsApp link
//       const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      
//       // Redirect to WhatsApp
//       window.location.href = whatsappLink;
      
//       setSubmitted(true);
//       setIsLoading(false);
      
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormData({ name: '', email: '', message: '' });
//       }, 3000);
      
//     } catch (error) {
//       console.error('Error sending message:', error);
//       setIsLoading(false);
//     }
//   };

//   const contactInfo = {
//     email: 'isnehamanandhar88@gmail.com',
//     phone: '9806614220',
//     location: 'Pokhara, Nepal',
//     github: 'https://github.com/yourusername',
//     linkedin: 'https://linkedin.com/in/yourusername',
//     facebook: 'https://facebook.com/yourusername'
//   };

//   return (
//     <section id="contact">
//       <div className="min-h-screen bg-gray-500 flex items-center justify-center p-4 sm:p-6 lg:p-8">
//         <div className="max-w-6xl w-full">
//           {/* Header */}
//           <div className="text-center mb-8 sm:mb-12 lg:mb-16">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Let's Connect</h2>
//             <div className="w-16 sm:w-20 h-1 bg-gray-400 mx-auto rounded-full"></div>
//             <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg px-4">
//               Have a project in mind? I'd love to hear from you.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
//             {/* Left Side - Contact Info */}
//             <div className="space-y-6 sm:space-y-8">
//               <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-xl">
//                 <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Get in Touch</h3>
                
//                 <div className="space-y-4 sm:space-y-6">
//                   {/* Email */}
//                   <a 
//                     href={`mailto:${contactInfo.email}`}
//                     className="flex items-start gap-3 sm:gap-4 group cursor-pointer hover:bg-gray-700/30 p-3 rounded-xl transition-all"
//                   >
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700/50 hover:bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
//                       <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-gray-400 text-xs sm:text-sm">Email</p>
//                       <p className="text-white font-medium text-sm sm:text-base break-all">{contactInfo.email}</p>
//                     </div>
//                   </a>

//                   {/* Phone & WhatsApp */}
//                   <a 
//                     href={`https://wa.me/977${contactInfo.phone}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-start gap-3 sm:gap-4 group cursor-pointer hover:bg-gray-700/30 p-3 rounded-xl transition-all"
//                   >
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700/50 hover:bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
//                       <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-gray-400 text-xs sm:text-sm">Phone / WhatsApp</p>
//                       <p className="text-white font-medium text-sm sm:text-base">{contactInfo.phone}</p>
//                       <p className="text-green-400 text-xs mt-1">Click to message on WhatsApp</p>
//                     </div>
//                   </a>

//                   {/* Location */}
//                   <div className="flex items-start gap-3 sm:gap-4 group cursor-pointer hover:bg-gray-700/30 p-3 rounded-xl transition-all">
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700/50 hover:bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
//                       <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-gray-400 text-xs sm:text-sm">Location</p>
//                       <p className="text-white font-medium text-sm sm:text-base">{contactInfo.location}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/50">
//                   <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Follow me</p>
//                   <div className="flex gap-2 sm:gap-3">
//                     <a 
//                       href={contactInfo.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-md"
//                     >
//                       <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
//                     </a>
//                     <a 
//                       href={contactInfo.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-md"
//                     >
//                       <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//                     </a>
//                     <a 
//                       href={contactInfo.facebook}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-md"
//                     >
//                       <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Contact Form */}
//             <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-xl">
//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-300 text-xs sm:text-sm font-medium mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm sm:text-base"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email-input" className="block text-gray-300 text-xs sm:text-sm font-medium mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email-input"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm sm:text-base"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-gray-300 text-xs sm:text-sm font-medium mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="5"
//                     className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none text-sm sm:text-base"
//                     placeholder="Tell me about your project..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={submitted || isLoading}
//                   className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base shadow-lg"
//                 >
//                   {isLoading ? (
//                     <>
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Preparing WhatsApp...
//                     </>
//                   ) : submitted ? (
//                     <>
//                       <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//                       Opening WhatsApp!
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4 sm:w-5 sm:h-5" />
//                       Send via WhatsApp
//                     </>
//                   )}
//                 </button>
//               </form>

//               {submitted && (
//                 <div className="mt-4 p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
//                   <p className="text-green-300 text-xs sm:text-sm text-center">
//                     Opening WhatsApp with your message... Please send the pre-filled message to contact me.
//                   </p>
//                 </div>
//               )}

//               <div className="mt-4 text-center">
//                 <p className="text-gray-400 text-xs">
//                   Alternatively, you can directly message on{' '}
//                   <a 
//                     href={`https://wa.me/977${contactInfo.phone}`} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-green-400 hover:text-green-300 underline"
//                   >
//                     WhatsApp
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="mt-12 text-center">
//             <p className="text-gray-400 text-sm">
//               Designed & Developed with <span className="text-red-500">❤</span> by Isneha
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from 'react';
// import { Mail, Send, MapPin, Phone, Github, Linkedin, CheckCircle, MailIcon, } from 'lucide-react';

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = () => {
//     if (!formData.name || !formData.email || !formData.message) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsLoading(true);

//     const whatsappMessage = `New Contact Form Submission:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
//     const phoneNumber = '9806614220';
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
//     window.open(whatsappUrl, '_blank');
    
//     setSubmitted(true);
//     setIsLoading(false);
    
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, 5000);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = {
//     email: 'isnehamanandhar88@gmail.com',
//     phone: '9806614220',
//     location: 'Pokhara, Nepal',
//     github: 'https://github.com/yourusername',
//     linkedin: 'https://linkedin.com/in/yourusername',
//     MailIcon: 'https://mail.google.com/mail/u/0/#inbox?compose=new'
//   };

//   return (
//     <section id="contact" className="bg-white py-12 md:py-24">
//       <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
//         {/* Section Header */}
//         <div className="md:mb-20 mb-12">
//           <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
//             Get in Touch
//           </h2>
//           <div className="w-12 h-px bg-gray-900 mt-4"></div>
//         </div>

//         <div className="grid md:grid-cols-5 gap-12 md:gap-16">
//           {/* Left Side - Contact Info */}
//           <div className="md:col-span-2 space-y-8">
//             {/* Email */}
//             <div className="group">
//               <p className="text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">Email</p>
//               <a 
//                 href={`mailto:isnehamanandhar88@gmail.com ${contactInfo.email}`}
//                 className="text-gray-900 hover:text-gray-600 transition-colors font-light text-sm block"
//               >
//                 {contactInfo.email}
//               </a>
//             </div>

//             {/* Phone */}
//             <div className="group">
//               <p className="text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">Phone</p>
//               <a 
//                 href={`https://wa.me/977${contactInfo.phone}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-900 hover:text-gray-600 transition-colors font-light text-sm block"
//               >
//                 {contactInfo.phone}
//               </a>
//               <p className="text-xs text-gray-500 mt-1 font-light">WhatsApp available</p>
//             </div>

//             {/* Location */}
//             <div className="group">
//               <p className="text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">Location</p>
//               <p className="text-gray-900 font-light text-sm">
//                 {contactInfo.location}
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="pt-4 border-t border-gray-200">
//               <p className="text-xs text-gray-500 mb-4 font-light tracking-wide uppercase">Connect</p>
//               <div className="flex gap-4">
//                 <a 
//                   href={contactInfo.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-900 hover:text-gray-600 transition-colors"
//                   aria-label="GitHub"
//                 >
//                   <Github className="w-5 h-5" />
//                 </a>
//                 <a 
//                   href={contactInfo.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-900 hover:text-gray-600 transition-colors"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a 
//                   href={contactInfo.MailIcon}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-900 hover:text-gray-600 transition-colors"
//                   aria-label="MailIcon"
//                 >
//                   <MailIcon className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="md:col-span-3">
//             <div className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors font-light"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email-input" className="block text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email-input"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors font-light"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors resize-none font-light"
//                   placeholder="Tell me about your project..."
//                 ></textarea>
//               </div>

//               <div className="pt-4">
//                 <button
//                   onClick={handleSubmit}
//                   disabled={submitted || isLoading}
//                   className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isLoading ? (
//                     <>
//                       <div className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin"></div>
//                       Sending...
//                     </>
//                   ) : submitted ? (
//                     <>
//                       <CheckCircle className="w-4 h-4" />
//                       Sent
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <Send className="w-4 h-4" />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {submitted && (
//               <div className="mt-6 p-4 border border-gray-300 bg-gray-50">
//                 <p className="text-sm text-gray-700 font-light">
//                   Opening WhatsApp with your message. Please send the pre-filled message to complete.
//                 </p>
//               </div>
//             )}

//             <div className="mt-6">
//               <p className="text-xs text-gray-500 font-light">
//                 Message via{' '}
//                 <a 
//                   href={`https://wa.me/977${contactInfo.phone}`} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-gray-900 hover:text-gray-600 underline"
//                 >
//                   WhatsApp
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
//       <footer className="mt-32 pt-12 border-t border-gray-200">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="text-center md:text-left">
//               <p className="text-sm text-gray-900 font-light">
//                 Designed & Developed by <span className="font-normal">Isneha</span>
//               </p>
//               <p className="text-xs text-gray-500 mt-1 font-light">
//                 © {new Date().getFullYear()} All rights reserved
//               </p>
//             </div>
            
//             <div className="flex gap-6">
//               <a 
//                 href="#hero" 
//                 className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-light tracking-wide uppercase"
//               >
//                 Home
//               </a>
//               <a 
//                 href="#about" 
//                 className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-light tracking-wide uppercase"
//               >
//                 About
//               </a>
//               <a 
//                 href="#projects" 
//                 className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-light tracking-wide uppercase"
//               >
//                 Projects
//               </a>
//               <a 
//                 href="#contact" 
//                 className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-light tracking-wide uppercase"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         </footer>
//         </div>
//     </section>
//   );
// }

import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, MapPin, Phone, Github, Linkedin, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sectionRef = useRef(null);
  const headerTitleRef = useRef(null);
  const headerLineRef = useRef(null);
  const contactInfoRefs = useRef([]);
  const formRef = useRef(null);
  const submitBtnRef = useRef(null);
  const footerRef = useRef(null);
  const socialLinksRef = useRef(null);
  const successMsgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerTitleRef.current, { opacity: 0, y: 30 });
      gsap.set(headerLineRef.current, { scaleX: 0, transformOrigin: 'left' });
      gsap.set(contactInfoRefs.current, { opacity: 0, x: -30 });
      gsap.set(formRef.current?.children, { opacity: 0, y: 30 });
      gsap.set(submitBtnRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(socialLinksRef.current?.children, { opacity: 0, scale: 0 });
      gsap.set(footerRef.current, { opacity: 0, y: 20 });

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

      // Contact info animation
      gsap.to(contactInfoRefs.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactInfoRefs.current[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Social links pop in
      gsap.to(socialLinksRef.current?.children, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: socialLinksRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      // Form animation
      gsap.to(formRef.current?.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      // Submit button
      gsap.to(submitBtnRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: submitBtnRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      // Footer animation
      gsap.to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      // Magnetic button effect
      const btn = submitBtnRef.current;
      if (btn) {
        const handleMouseMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
          });
        };

        btn.addEventListener('mousemove', handleMouseMove);
        btn.addEventListener('mouseleave', handleMouseLeave);
      }

      // Hover effects for contact info
      contactInfoRefs.current.forEach((info) => {
        if (!info) return;

        const label = info.querySelector('.info-label');
        const value = info.querySelector('.info-value');

        info.addEventListener('mouseenter', () => {
          gsap.to(label, {
            x: 5,
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(value, {
            x: 10,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        info.addEventListener('mouseleave', () => {
          gsap.to([label, value], {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

      // Social links hover
      if (socialLinksRef.current) {
        Array.from(socialLinksRef.current.children).forEach((link) => {
          link.addEventListener('mouseenter', () => {
            gsap.to(link, {
              scale: 1.2,
              rotation: 5,
              duration: 0.3,
              ease: 'back.out(1.7)'
            });
          });

          link.addEventListener('mouseleave', () => {
            gsap.to(link, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        });
      }

      // Form input focus animations
      const inputs = formRef.current?.querySelectorAll('input, textarea');
      inputs?.forEach((input) => {
        input.addEventListener('focus', () => {
          gsap.to(input, {
            borderColor: '#111827',
            y: -2,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        input.addEventListener('blur', () => {
          gsap.to(input, {
            borderColor: '#d1d5db',
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Success message animation
  useEffect(() => {
    if (submitted && successMsgRef.current) {
      gsap.fromTo(successMsgRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [submitted]);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      // Shake animation for button
      gsap.to(submitBtnRef.current, {
        x: [-10, 10, -10, 10, 0],
        duration: 0.4,
        ease: 'power2.out'
      });
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    // Loading animation
    const btn = submitBtnRef.current;
    gsap.to(btn, {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });

    const whatsappMessage = `New Contact Form Submission:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const phoneNumber = '9806614220';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setIsLoading(false);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = {
    email: 'isnehamanandhar88@gmail.com',
    phone: '9806614220',
    location: 'Pokhara, Nepal',
    github: 'https://github.com/isneha-cyber',
    linkedin: 'https://www.linkedin.com/in/isneha-manandhar-19a18a339/',
    mailUrl: 'https://mail.google.com/mail/u/0/#inbox?compose=new'
  };

  return (
    <section ref={sectionRef} id="contact" className="bg-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-64 bg-gray-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl relative">
        {/* Section Header */}
        <div className="md:mb-20 mb-12">
          <h2 ref={headerTitleRef} className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
            Get in Touch
          </h2>
          <div ref={headerLineRef} className="w-12 h-px bg-gray-900 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Left Side - Contact Info */}
          <div className="md:col-span-2 space-y-8">
            {/* Email */}
            <div ref={(el) => (contactInfoRefs.current[0] = el)} className="group">
              <p className="info-label text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">Email</p>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="info-value text-gray-900 hover:text-gray-600 transition-colors font-light text-sm block relative"
              >
                {contactInfo.email}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Phone */}
            <div ref={(el) => (contactInfoRefs.current[1] = el)} className="group">
              <p className="info-label text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">Phone</p>
              <a 
                href={`https://wa.me/977${contactInfo.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="info-value text-gray-900 hover:text-gray-600 transition-colors font-light text-sm block relative"
              >
                {contactInfo.phone}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <p className="text-xs text-gray-500 mt-1 font-light">WhatsApp available</p>
            </div>

            {/* Location */}
            <div ref={(el) => (contactInfoRefs.current[2] = el)} className="group">
              <p className="info-label text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">Location</p>
              <p className="info-value text-gray-900 font-light text-sm">
                {contactInfo.location}
              </p>
            </div>

            {/* Social Links */}
            <div ref={(el) => (contactInfoRefs.current[3] = el)} className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-4 font-light tracking-wide uppercase">Connect</p>
              <div ref={socialLinksRef} className="flex gap-4">
                <a 
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={contactInfo.mailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                  aria-label="Mail"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:col-span-3">
            <div ref={formRef} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors font-light"
                  placeholder="Your name"
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 peer-focus:w-full"></div>
              </div>

              <div className="relative">
                <label htmlFor="email-input" className="block text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors font-light"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-xs text-gray-500 mb-2 font-light tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors resize-none font-light"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  ref={submitBtnRef}
                  onClick={handleSubmit}
                  disabled={submitted || isLoading}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin inline-block mr-2"></div>
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <CheckCircle className="w-4 h-4 inline mr-2" />
                        Sent
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {submitted && (
              <div ref={successMsgRef} className="mt-6 p-4 border-l-4 border-gray-900 bg-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent opacity-50"></div>
                <p className="text-sm text-gray-700 font-light relative z-10">
                  Opening WhatsApp with your message. Please send the pre-filled message to complete.
                </p>
              </div>
            )}

            <div className="mt-6">
              <p className="text-xs text-gray-500 font-light">
                Message via{' '}
                <a 
                  href={`https://wa.me/977${contactInfo.phone}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 underline"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        <footer ref={footerRef} className="mt-32 pt-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-900 font-light">
                Designed & Developed by <span className="font-normal">Isneha</span>
              </p>
              <p className="text-xs text-gray-500 mt-1 font-light">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="#hero" 
                className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-light tracking-wide uppercase relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#about" 
                className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-light tracking-wide uppercase relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#projects" 
                className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-light tracking-wide uppercase relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#contact" 
                className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-light tracking-wide uppercase relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}