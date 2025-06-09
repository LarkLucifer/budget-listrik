import React from 'react';

const powerCategories = [
  { value: '900', label: 'R-1/TR 900 VA' },
  { value: '1300', label: 'R-1/TR 1.300 VA' },
  { value: '2200', label: 'R-1/TR 2.200 VA' },
  { value: '3500', label: 'R-2/TR 3.500 VA' },
  { value: '4400', label: 'R-2/TR 4.400 VA' },
  { value: '5500', label: 'R-2/TR 5.500 VA' },
  { value: '6600', label: 'R-3/TR 6.600 VA ke atas' },
];

function PowerSelector({ value, onChange, tariff }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-1">Golongan Daya PLN</label>
      <select
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg shadow-sm bg-white"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {powerCategories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      <div className="mt-2 text-xs text-indigo-700 font-semibold bg-indigo-50 rounded px-3 py-2 border border-indigo-100">
        Tarif: <span className="font-bold">Rp {tariff.toLocaleString('id-ID', { minimumFractionDigits: 2 })}</span> / kWh
      </div>
    </div>
  );
}

export default PowerSelector; 