import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ambulanceTypes = [
  {
    id: "bls",
    name: "Basic Life Support",
    description: "For non-emergency transport",
    icon: "🚑",
  },
  {
    id: "als",
    name: "Advanced Life Support",
    description: "For critical care patients",
    icon: "🏥",
  },
  {
    id: "ptr",
    name: "Patient Transport",
    description: "For scheduled medical appointments",
    icon: "🚐",
  },
];

const BookingPage = () => {
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedType(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedType) {
      navigate("/hospitals");
    }
  };

  return (
    <div className="container max-w-4xl p-4 mx-auto">
      <motion.h2
        className="mb-6 text-3xl font-bold text-center text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose Ambulance Type
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
          {ambulanceTypes.map((type, index) => (
            <AmbulanceTypeCard
              key={type.id}
              type={type}
              isSelected={selectedType === type.id}
              onSelect={() => handleSelect(type.id)}
              index={index}
            />
          ))}
        </div>
        <div className="text-center">
          <motion.button
            type="submit"
            className="px-8 py-3 text-lg text-white transition-colors duration-300 rounded-full shadow-lg bg-primary hover:bg-opacity-90 disabled:bg-gray-400"
            disabled={!selectedType}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue to Hospital Selection
          </motion.button>
        </div>
      </form>
    </div>
  );
};

const AmbulanceTypeCard = ({ type, isSelected, onSelect, index }) => (
  <motion.div
    className={`border p-6 rounded-lg cursor-pointer transition-all duration-300 ${
      isSelected
        ? "border-primary shadow-lg bg-primary bg-opacity-10"
        : "hover:shadow-md"
    }`}
    onClick={onSelect}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.01, duration: 0.05 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="mb-4 text-4xl">{type.icon}</div>
    <h3 className="mb-2 text-xl font-semibold">{type.name}</h3>
    <p className="mb-4 text-text">{type.description}</p>
    <div className="flex items-center">
      <input
        type="radio"
        id={type.id}
        name="ambulanceType"
        value={type.id}
        checked={isSelected}
        onChange={onSelect}
        className="mr-2"
      />
      <label htmlFor={type.id}>Select</label>
    </div>
  </motion.div>
);

export default BookingPage;
