import { useEffect, useRef } from 'react';
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
        ease: "easeOut"
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
            src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e" 
            alt="Multiple dancers performing cultural dance in traditional costumes" 
            className="w-full h-full object-cover hero-image"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6">
              <span className="block">Arte</span>
              <span className="text-flamenco-500">Flamenco</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Where movement becomes medicine, culture connects communities, and every body finds its rhythm
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/classes" 
                className="px-8 py-3 bg-flamenco-600 text-white rounded-full hover:bg-flamenco-700 transition-colors text-lg font-medium"
              >
                Explore Our Programs
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-lg font-medium"
              >
                Our Story
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
                Movement as <span className="text-flamenco-500">Medicine</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Founded by movement therapist Clarita Corona, Arte Flamenco has evolved from a traditional flamenco studio into a comprehensive movement sanctuary. We offer 26 diverse dance and movement modalities across four specialized programs designed for healing, empowerment, and artistic expression.
              </p>
              <p className="text-gray-300 mb-8">
                Our approach honors both therapeutic principles and cultural traditions, creating inclusive spaces where every body can experience the transformative power of movement. From trauma-informed dance therapy to adaptive classes, cultural celebrations to trending techniques—we meet you wherever you are in your movement journey.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-flamenco-500 hover:text-flamenco-400 transition-colors font-medium"
              >
                Discover our full story
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
                  src="https://images.pexels.com/photos/3662834/pexels-photo-3662834.jpeg" 
                  alt="Therapeutic movement session" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-flamenco-600/20 rounded-lg -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={classesRef} className="py-20 md:py-32 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={classesInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Our <span className="text-flamenco-500">Programs</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Four specialized pathways offering 26 diverse movement modalities designed for healing, empowerment, cultural connection, and artistic expression.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={classesInView ? "visible" : "hidden"}
          >
            {[
              {
                title: "Therapeutic & Somatic",
                description: "Evidence-based movement therapy, trauma-informed dance, anxiety relief, and somatic exploration for healing and wellness.",
                image: "https://images.pexels.com/photos/3662848/pexels-photo-3662848.jpeg",
                icon: "🌱",
                classes: "8 Classes"
              },
              {
                title: "Adaptive & Healing",
                description: "Inclusive programs for diverse abilities including chair-based dance, Parkinson's support, and neurodiverse movement labs.",
                image: "https://images.pexels.com/photos/3662850/pexels-photo-3662850.jpeg",
                icon: "♿",
                classes: "4 Programs"
              },
              {
                title: "Cultural & Empowering",
                description: "Celebrate global traditions through Afro-Caribbean rhythms, sacred world dance, flamenco empowerment, and Latin fusion.",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
                icon: "💃",
                classes: "5 Styles"
              },
              {
                title: "Trending & Technique",
                description: "Contemporary and classical techniques including hip-hop therapy, K-Pop, ballet, contemporary, salsa, and ecstatic dance.",
                image: "https://images.pexels.com/photos/3662851/pexels-photo-3662851.jpeg",
                icon: "🔥",
                classes: "9 Classes"
              }
            ].map((program, index) => (
              <motion.div 
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden group"
                variants={fadeInUp}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-flamenco-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {program.classes}
                  </div>
                  <div className="absolute top-4 left-4 text-3xl">
                    {program.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400 mb-4">{program.description}</p>
                  <Link 
                    to="/classes" 
                    className="inline-flex items-center text-flamenco-500 hover:text-flamenco-400 transition-colors font-medium"
                  >
                    Explore classes
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
              View All Programs
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
              Transformation <span className="text-flamenco-500">Stories</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from those who have experienced the healing and empowering journey of movement at Arte Flamenco.
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
                quote: "The trauma-informed dance classes helped me reconnect with my body after years of disconnection. Clarita's gentle approach created a safe space for healing I never thought possible.",
                name: "Sarah Chen",
                role: "Trauma-Informed Dance Student",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              },
              {
                quote: "As someone with Parkinson's, the adaptive dance program has given me back my confidence and joy in movement. The community here understands and celebrates every small victory.",
                name: "Robert Martinez",
                role: "Dance for Parkinson's Participant",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              },
              {
                quote: "The Afro-Caribbean healing rhythms class connected me to my ancestral roots while providing a powerful outlet for stress. It's therapy, culture, and celebration all in one.",
                name: "Amara Johnson",
                role: "Cultural Dance Student",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 rounded-lg p-8 relative"
                variants={fadeInUp}
              >
                <svg className="w-12 h-12 text-flamenco-600/30 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="relative z-10">
                  <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-flamenco-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Begin Your Movement Journey Today
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Whether you're seeking healing, cultural connection, adaptive support, or artistic expression—we have a program designed for you. Every body is welcome here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/classes" 
                className="px-8 py-3 bg-white text-flamenco-700 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium"
              >
                Explore Programs
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-lg font-medium"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-black py-6 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {Array(10).fill("HEALING • EMPOWERMENT • CULTURE • EXPRESSION • INCLUSION • ").map((text, index) => (
              <span key={index} className="text-xl md:text-2xl font-bold text-white mx-4">{text}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
