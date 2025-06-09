import React from 'react';

function DeviceList({ devices = [] }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-indigo-700">Daftar Perangkat</h2>
      {devices.length === 0 ? (
        <p className="text-gray-400 italic">Belum ada perangkat ditambahkan.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-indigo-100 text-indigo-700">
                <th className="py-2 px-3 text-left text-xs font-bold uppercase">Nama</th>
                <th className="py-2 px-3 text-left text-xs font-bold uppercase">Daya (Watt)</th>
                <th className="py-2 px-3 text-left text-xs font-bold uppercase">Jam/Hari</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, index) => (
                <tr key={index} className="border-b last:border-b-0 hover:bg-indigo-50">
                  <td className="py-2 px-3">{device.name}</td>
                  <td className="py-2 px-3">{device.watt}</td>
                  <td className="py-2 px-3">{device.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DeviceList; 