import React, { useState } from 'react';
import PowerSelector from './components/PowerSelector';
import DeviceInput from './components/DeviceInput';
import DeviceList from './components/DeviceList';
import Summary from './components/Summary';
import UsageChart from './components/UsageChart';

const TARIFFS = {
  '900': 1352,
  '1300': 1444.7,
  '2200': 1444.7,
  '3500': 1699.53,
  '4400': 1699.53,
  '5500': 1699.53,
  '6600': 1699.53,
};

function App() {
  const [power, setPower] = useState('900');
  const [devices, setDevices] = useState([]);

  const addDevice = (newDevices) => {
    setDevices([...devices, ...newDevices]);
  };

  const totalKwhPerDay = devices.reduce(
    (sum, d) => sum + (Number(d.watt) * Number(d.hours)) / 1000,
    0
  );
  const totalKwhPerMonth = totalKwhPerDay * 30;
  const estimatedCost = totalKwhPerMonth * (TARIFFS[power] || 0);
  const totalActiveWatt = devices.reduce((sum, d) => sum + Number(d.watt), 0);
  const isOverCapacity = totalActiveWatt > Number(power);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center tracking-tight drop-shadow">PLN Tracker</h1>
        <PowerSelector value={power} onChange={setPower} tariff={TARIFFS[power] || 0} />
        <DeviceInput onAdd={addDevice} />
        <DeviceList devices={devices} />
        <Summary
          totalConsumption={totalKwhPerMonth}
          estimatedCost={estimatedCost}
          isOverCapacity={isOverCapacity}
        />
        <UsageChart devices={devices} />
      </div>
      <footer className="mt-8 text-gray-400 text-xs text-center">
        &copy; {new Date().getFullYear()} PLN Tracker | Dibuat dengan ❤️ oleh <a href="https://github.com/LarkLucifer" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700">LarkLucifer</a>
      </footer>
    </div>
  );
}

export default App; 