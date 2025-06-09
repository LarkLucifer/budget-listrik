import React from 'react';

function Summary({ totalConsumption = 0, estimatedCost = 0, isOverCapacity = false }) {
  return (
    <div className="mb-6 p-5 bg-indigo-50 rounded-xl shadow flex flex-col gap-2 border border-indigo-100">
      <h2 className="text-lg font-semibold mb-1 text-indigo-700">Ringkasan</h2>
      <div className="flex flex-col md:flex-row md:gap-8 gap-1">
        <span className="text-gray-700">Total Konsumsi Bulanan: <span className="font-bold text-indigo-700">{totalConsumption.toFixed(2)} kWh</span></span>
        <span className="text-gray-700">Estimasi Biaya: <span className="font-bold text-green-700">Rp {estimatedCost.toLocaleString()}</span></span>
      </div>
      {isOverCapacity && (
        <div className="mt-2 p-2 bg-red-100 border border-red-300 rounded text-red-700 font-semibold text-sm">
          Peringatan: Total daya aktif bersamaan melebihi kapasitas VA yang dipilih!
        </div>
      )}
    </div>
  );
}

export default Summary; 