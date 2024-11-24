import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FilterUI = ({handleFilterChange,selectedFilter, Filters}) => {
    console.log("han", handleFilterChange, selectedFilter, Filters)
  return (
    <header className="w-full bg-gradient-to-r from-[#827475] to-[#3d466a] p-6 shadow-lg mt-12">
      {/* <div className="max-w-6xl mx-auto"> */}
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {Filters.map((Filter) => (
            <label
              key={Filter.id}
              className="relative flex items-center group cursor-pointer"
            >
              <input
                type="radio"
                name="Filter"
                value={Filter.id}
                checked={selectedFilter === Filter.id}
                onChange={handleFilterChange}
                className="hidden"
              />
              <motion.div
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === Filter.id
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {Filter.label}
                {selectedFilter === Filter.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-rose-400 -z-10"
                    layoutId="highlight"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            </label>
          ))}
        </div>
      {/* </div> */}
    </header>
  );
};

export default FilterUI;