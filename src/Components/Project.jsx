import React, { useState } from 'react';

export default function RecentProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Project01',
      description: 'Modern web application with responsive design and advanced features.',
      images: [
        { src: '/images/1.jpg', alt: 'Modern web application interface' },
        { src: '/images/cappa.png', alt: 'Dashboard view' },
        
      ],
      gradient: 'from-purple-100 via-blue-50 to-yellow-50'
    },
    {
      id: 2,
      title: 'Project Title 02',
      description: 'Mobile app development with cross-platform compatibility.',
      images: [
        { src: '/images/c3.avif', alt: 'Mobile app development' },
        { src: '/images/1.png', alt: 'App screens' },
        { src: '/images/2.png', alt: 'App screens' },
        { src: '/images/3.png', alt: 'App screens' },
        { src: '/images/4.png', alt: 'App screens' },
        { src: '/images/5.png', alt: 'App screens' },
        { src: '/images/6.png', alt: 'App screens' },
        { src: '/images/7.png', alt: 'App screens' },
        { src: '/images/8.png', alt: 'App screens' },
  
      ],
      gradient: 'from-gray-100 via-purple-100 to-blue-100'
    },
    {
      id: 3,
      title: 'Project Title 03',
      description: 'Data analytics dashboard with real-time visualization.',
      images: [
        { src: '/images/3.jpg', alt: 'Data analytics dashboard' },
        { src: '/images/uni.png', alt: 'Analytics view' },
      ],
      gradient: 'from-blue-50 via-gray-50 to-purple-50'
    },
    {
      id: 4,
      title: 'Project Title 04',
      description: 'E-commerce platform with secure payment integration.',
      images: [
        { src: '/images/hero1.jpg', alt: 'E-commerce platform' },
        { src: '/images/alpine.png', alt: 'Product listing' },
      
      ],
      gradient: 'from-purple-50 via-blue-50 to-yellow-50'
    },
    {
      id: 5,
      title: 'Project Title 05',
      description: 'Content management system with user-friendly interface.',
      images: [
        { src: 'images/dashboard.png', alt: 'CMS dashboard' },
        { src: 'images/wheel.png', alt: 'CMS dashboard' },
     
      ],
      gradient: 'from-purple-50 via-blue-50 to-yellow-50'
    },
    {
      id: 6,
      title: 'Project Title 06',
      description: 'Social media integration platform.',
      images: [
        { src: 'images/north.jpg', alt: 'Social media dashboard' },
        { src: 'images/nature.png', alt: 'Social media dashboard' },
      
      ],
      gradient: 'from-purple-50 via-blue-50 to-yellow-50'
    },
    {
      id: 7,
      title: 'Project Title 07',
      description: 'Project management tool with collaboration features.',
      images: [
        { src: 'images/bg.jpg', alt: 'Project dashboard' },
        { src: 'images/weather.png', alt: 'Project dashboard' },
      
      ],
      gradient: 'from-purple-50 via-blue-50 to-yellow-50'
    },
    {
      id: 8,
      title: 'Project Title 08',
      description: 'Learning management system for online education.',
      images: [
        { src: 'images/bg1.jpg', alt: 'LMS interface' },
        { src: 'images/aaramkunj.png', alt: 'LMS interface' },
      
      ],
      gradient: 'from-purple-50 via-blue-50 to-yellow-50'
    },
    {
      id: 9,
      title: 'Project Title 09',
      description: 'Healthcare management system with patient tracking.',
      images: [
        { src: 'images/bg1.jpg', alt: 'Healthcare dashboard' },
        { src: 'images/3.jpg', alt: 'Patient records' },
        { src: 'images/c3.avif', alt: 'Appointment scheduling' }
      ],
      gradient: 'from-purple-50 via-blue-50 to-yellow-50'
    },
  ];

  const openGallery = (projectId, imageIndex = 0) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const goToPrevious = () => {
    if (!selectedProject) return;
    
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const goToNext = () => {
    if (!selectedProject) return;
    
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  React.useEffect(() => {
    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <>
      <div className="bg-white p-6 md:px-12 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-normal mb-8 text-gray-900">
            Recent Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`${project.id === 2 || project.id === 4 || project.id === 8 ? 'md:row-span-2' : ''}`}
              >
                <div 
                  className={`bg-gradient-to-br ${project.gradient} overflow-hidden shadow-sm h-48 md:h-64 ${project.id === 2 || project.id === 4 || project.id === 8 ? 'md:h-full' : ''} relative group cursor-pointer`}
                  onClick={() => openGallery(project.id, 0)}
                >
                  <div className="absolute inset-0">
                    {project.images.length > 0 && (
                      <div className="relative w-full h-full">
                        {/* Main project image */}
                        <img 
                          src={project.images[0].src} 
                          alt={project.images[0].alt}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        
                        {/* Image count badge */}
                        {project.images.length > 1 && (
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-sm z-10">
                            +{project.images.length - 1} more
                          </div>
                        )}
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-20"></div>
                        
                        {/* View button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                          <button 
                            className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-white transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              openGallery(project.id, 0);
                            }}
                          >
                            View {project.images.length > 1 ? 'Gallery' : 'Project'} →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-4">
                  <h2 className="text-lg md:text-xl font-normal text-gray-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeGallery}
          ></div>
          
          {/* Gallery Container */}
          <div className="relative z-10 w-full max-w-6xl mx-4">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-20"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedProject.images[currentImageIndex].src}
                alt={selectedProject.images[currentImageIndex].alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="p-6 bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Image {currentImageIndex + 1} of {selectedProject.images.length}
                  </span>
                  <button
                    onClick={() => window.open(selectedProject.images[currentImageIndex].src, '_blank')}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Full Size →
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex overflow-x-auto space-x-2 py-2">
              {selectedProject.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}