import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: '🛍️' },
    { id: 'apparel', name: 'Apparel', icon: '👕' },
    { id: 'accessories', name: 'Accessories', icon: '💎' },
    { id: 'music', name: 'Music & Media', icon: '🎵' },
    { id: 'equipment', name: 'Dance Equipment', icon: '🩰' }
  ];

  const products = [
    {
      id: 1,
      category: 'apparel',
      name: 'Flamenco Practice Skirt',
      price: '$89.99',
      image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg',
      description: 'Traditional practice skirt for flamenco dance'
    },
    {
      id: 2,
      category: 'accessories',
      name: 'Castanets Set',
      price: '$45.99',
      image: 'https://images.pexels.com/photos/3662848/pexels-photo-3662848.jpeg',
      description: 'Professional quality castanets'
    },
    {
      id: 3,
      category: 'music',
      name: 'Flamenco Guitar Album',
      price: '$19.99',
      image: 'https://images.pexels.com/photos/3662849/pexels-photo-3662849.jpeg',
      description: 'Traditional flamenco guitar compositions'
    },
    {
      id: 4,
      category: 'equipment',
      name: 'Dance Practice Mat',
      price: '$34.99',
      image: 'https://images.pexels.com/photos/3662850/pexels-photo-3662850.jpeg',
      description: 'Non-slip mat for safe practice'
    },
    {
      id: 5,
      category: 'apparel',
      name: 'Flamenco Shawl',
      price: '$65.99',
      image: 'https://images.pexels.com/photos/3662851/pexels-photo-3662851.jpeg',
      description: 'Elegant silk shawl for performances'
    },
    {
      id: 6,
      category: 'accessories',
      name: 'Hair Accessories Set',
      price: '$29.99',
      image: 'https://images.pexels.com/photos/6173891/pexels-photo-6173891.jpeg',
      description: 'Traditional hair combs and flowers'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3662842/pexels-photo-3662842.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            Arte Flamenco <span className="text-flamenco-500">Shop</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Authentic flamenco apparel, accessories, and equipment to support your dance journey
          </p>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-flamenco-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-flamenco-500">
                      {product.price}
                    </span>
                    <button className="bg-flamenco-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-flamenco-400 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
