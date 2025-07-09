import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const classesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const eventsRef = useRef(null);
  const galleryRef = useRef(null);
  
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const classesInView = useInView(classesRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });
  const eventsInView = useInView(eventsRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.3 });

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    if (aboutInView) {
      controls.start('visible');
    }
  }, [controls, aboutInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/6173891/pexels-photo-6173891.jpeg" 
            alt="Flamenco dancer in action" 
            className="w-full h-full object-cover hero-image"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
              <span className="block">Clarita</span>
              <span className="text-flamenco-500">Arte Flamenco</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Experience the passion, rhythm, and soul of authentic flamenco dance in our studio and performances.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/classes" 
                className="px-8 py-3 bg-flamenco-600 text-white rounded-full hover:bg-flamenco-700 transition-colors text-lg font-medium"
              >
                Join Our Classes
              </Link>
              <Link 
                to="/performances" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-lg font-medium"
              >
                Upcoming Shows
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                The Art of <span className="text-flamenco-500">Flamenco</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Founded by Clarita Fernández, our studio is dedicated to preserving and celebrating the rich tradition of flamenco dance. With over 20 years of experience performing across Spain and internationally, Clarita brings authentic passion and technical expertise to every class and performance.
              </p>
              <p className="text-gray-300 mb-8">
                Our approach honors the cultural heritage of flamenco while embracing its evolution as a living art form. From the intricate footwork (zapateado) to the expressive hand movements (braceo), we teach all elements of this powerful dance tradition.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-flamenco-500 hover:text-flamenco-400 transition-colors font-medium"
              >
                Learn more about our story
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeInUp}
            >
              <div className="relative z-10 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg" 
                  alt="Flamenco dancer in traditional dress" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-flamenco-600/20 rounded-lg -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Classes Section */}
      <section ref={classesRef} className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={classesInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Our <span className="text-flamenco-500">Classes</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From beginners to advanced dancers, we offer a range of classes to suit all levels and interests. Join us to discover the passion and artistry of flamenco.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={classesInView ? "visible" : "hidden"}
          >
            {[
              {
                title: "Beginners Flamenco",
                description: "Perfect for those new to flamenco. Learn the basic posture, arm movements, and rhythmic footwork in a supportive environment.",
                image: "https://images.pexels.com/photos/8471815/pexels-photo-8471815.jpeg",
                level: "Beginner"
              },
              {
                title: "Intermediate Technique",
                description: "Refine your skills with more complex choreography and deeper understanding of compás (rhythm) and expression.",
                image: "https://images.pexels.com/photos/8471798/pexels-photo-8471798.jpeg",
                level: "Intermediate"
              },
              {
                title: "Advanced Performance",
                description: "For experienced dancers looking to perfect their art and prepare for performances with professional-level technique.",
                image: "https://images.pexels.com/photos/8471740/pexels-photo-8471740.jpeg",
                level: "Advanced"
              }
            ].map((classItem, index) => (
              <motion.div 
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden group"
                variants={fadeInUp}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-flamenco-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {classItem.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-white mb-2">{classItem.title}</h3>
                  <p className="text-gray-400 mb-4">{classItem.description}</p>
                  <Link 
                    to="/classes" 
                    className="inline-flex items-center text-flamenco-500 hover:text-flamenco-400 transition-colors font-medium"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            animate={classesInView ? "visible" : "hidden"}
          >
            <Link 
              to="/classes" 
              className="px-8 py-3 bg-flamenco-600 text-white rounded-full hover:bg-flamenco-700 transition-colors text-lg font-medium inline-block"
            >
              View All Classes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              What Our <span className="text-flamenco-500">Students Say</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from those who have experienced the transformative power of flamenco at our studio.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            {[
              {
                quote: "Clarita's passion for flamenco is contagious. As a complete beginner, I was nervous, but her patient teaching style made me feel comfortable and excited to learn.",
                name: "Maria Rodriguez",
                role: "Beginner Student",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              },
              {
                quote: "The technical precision combined with emotional expression that Clarita teaches has transformed my dancing. This studio offers the most authentic flamenco experience outside of Spain.",
                name: "James Wilson",
                role: "Intermediate Student",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              },
              {
                quote: "After years of dancing flamenco elsewhere, finding Clarita Arte Flamenco was like coming home. The community here is supportive, and the training is world-class.",
                name: "Sofia Hernandez",
                role: "Advanced Student",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 rounded-lg p-8 relative"
                variants={fadeInUp}
              >
                <svg className="w-12 h-12 text-flamenco-600/30 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <div className="flex items-center mb-4 mt-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Upcoming <span className="text-flamenco-500">Events</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join us for special performances, workshops, and cultural celebrations throughout the year.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            {[
              {
                title: "Flamenco Masterclass",
                date: "March 15, 2024",
                description: "An intensive workshop with guest artist Carmen Herrera, focusing on advanced palmas and compás techniques.",
                image: "https://images.pexels.com/photos/8471741/pexels-photo-8471741.jpeg"
              },
              {
                title: "Spring Recital",
                date: "April 20, 2024",
                description: "Our students showcase their progress in a beautiful evening of flamenco performances for family and friends.",
                image: "https://images.pexels.com/photos/8471742/pexels-photo-8471742.jpeg"
              }
            ].map((event, index) => (
              <motion.div 
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden group"
                variants={fadeInUp}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-flamenco-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <Link 
                    to="/performances" 
                    className="inline-flex items-center text-flamenco-500 hover:text-flamenco-400 transition-colors font-medium"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <Link 
              to="/performances" 
              className="px-8 py-3 bg-flamenco-600 text-white rounded-full hover:bg-flamenco-700 transition-colors text-lg font-medium inline-block"
            >
              View All Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section ref={galleryRef} className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Studio <span className="text-flamenco-500">Gallery</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Glimpse into the passion and artistry that fills our studio every day.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
          >
            {[
              "https://images.pexels.com/photos/8471743/pexels-photo-8471743.jpeg",
              "https://images.pexels.com/photos/8471744/pexels-photo-8471744.jpeg",
              "https://images.pexels.com/photos/8471745/pexels-photo-8471745.jpeg",
              "https://images.pexels.com/photos/8471746/pexels-photo-8471746.jpeg"
            ].map((image, index) => (
              <motion.div 
                key={index}
                className="aspect-square overflow-hidden rounded-lg group"
                variants={fadeInUp}
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
          >
            <Link 
              to="/gallery" 
              className="px-8 py-3 bg-flamenco-600 text-white rounded-full hover:bg-flamenco-700 transition-colors text-lg font-medium inline-block"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-flamenco-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-6">
              Begin Your Flamenco Journey
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Whether you're a complete beginner or looking to deepen your practice, our doors are open to welcome you into the passionate world of flamenco.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/classes" 
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors text-lg font-medium"
              >
                Start Your Classes
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors text-lg font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
