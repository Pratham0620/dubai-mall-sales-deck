import React from 'react';
import { motion } from 'motion/react';

/**
 * Placeholder for the Interactive Leasing Module.
 * Would feature floor plans, availability data, and unit specs.
 */
export const LeasingDashboard: React.FC = () => {
  return (
    <div className="p-8 border-4 border-black bg-white">
      <h3 className="text-3xl font-black uppercase mb-4">LEASING_CORE // ACTIVE_UNITS</h3>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="aspect-square bg-gray-100 border-2 border-black flex items-center justify-center font-black">
            UNIT_{String(i).padStart(3, '0')}
          </div>
        ))}
      </div>
    </div>
  );
};
