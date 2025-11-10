import React from 'react';
import { motion } from 'framer-motion';
import './ProjectFilter.css';

const ProjectFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory,
  categories 
}) => {
  return (
    <div className="project-filter" role="region" aria-label="Project filters">
      {/* Search Input */}
      <motion.div 
        className="search-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div role="search" aria-label="Search projects">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Search projects"
          />
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div 
        className="category-filters"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
          aria-pressed={selectedCategory === 'all'}
        >
          All
        </button>
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            aria-pressed={selectedCategory === category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectFilter;