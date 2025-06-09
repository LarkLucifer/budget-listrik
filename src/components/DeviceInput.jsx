import React, { useState } from 'react';

const INITIAL_DEVICES = Array.from({ length: 10 }, () => ({ name: '', watt: '', hours: '' }));

function DeviceInput({ onAdd }) {
  const [devices, setDevices] = useState(INITIAL_DEVICES);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (idx, e) => {
    const { name, value } = e.target;
    setDevices((prev) => prev.map((d, i) => i === idx ? { ...d, [name]: value } : d));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filledDevices = devices.filter(d => d.name && d.watt && d.hours);
    if (filledDevices.length > 0) {
      filledDevices.forEach(d => d.watt = Number(d.watt));
      onAdd && onAdd(filledDevices);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
    setDevices(INITIAL_DEVICES);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-3">
        <h3 className="text-base font-bold text-indigo-700 mb-1 flex items-center gap-2">
          <span className="inline-block w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mr-1">
            <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          </span>
          Input Daftar Perangkat Elektronik (maksimal 10)
        </h3>
        <p className="text-xs text-gray-500">Isi nama, daya (Watt), dan jam/hari untuk setiap perangkat yang ingin Anda tracking. Anda bisa mengisi beberapa atau semua baris sekaligus.</p>
      </div>
      <div className="overflow-x-auto rounded-lg border border-indigo-100 shadow-sm bg-indigo-50">
        <table className="min-w-full">
          <thead>
            <tr className="bg-indigo-100 text-indigo-700">
              <th className="py-2 px-3 text-left text-xs font-bold uppercase">#</th>
              <th className="py-2 px-3 text-left text-xs font-bold uppercase">Nama Perangkat</th>
              <th className="py-2 px-3 text-left text-xs font-bold uppercase">Daya (Watt)</th>
              <th className="py-2 px-3 text-left text-xs font-bold uppercase">Jam/Hari</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, idx) => (
              <tr key={idx} className="transition hover:bg-indigo-200/40">
                <td className="py-1 px-2 text-center text-gray-400 font-semibold">{idx + 1}</td>
                <td className="py-1 px-2">
                  <input
                    type="text"
                    name="name"
                    value={device.name}
                    onChange={e => handleChange(idx, e)}
                    className="w-full border border-indigo-200 rounded px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-indigo-400 transition"
                    placeholder={`Perangkat ${idx + 1}`}
                  />
                </td>
                <td className="py-1 px-2">
                  <input
                    type="number"
                    name="watt"
                    value={device.watt}
                    onChange={e => handleChange(idx, e)}
                    className="w-full border border-indigo-200 rounded px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-indigo-400 transition"
                    min="1"
                    placeholder="Watt"
                  />
                </td>
                <td className="py-1 px-2">
                  <input
                    type="number"
                    name="hours"
                    value={device.hours}
                    onChange={e => handleChange(idx, e)}
                    className="w-full border border-indigo-200 rounded px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-indigo-400 transition"
                    min="1"
                    max="24"
                    placeholder="Jam/hari"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="submit"
        className="mt-4 w-full md:w-auto inline-flex items-center justify-center gap-2 py-2 px-6 border border-transparent shadow-md text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
        Tambah Semua Perangkat
      </button>
      {showSuccess && (
        <div className="mt-3 p-2 bg-green-100 border border-green-300 rounded text-green-700 text-sm text-center font-semibold animate-fade-in">
          Semua perangkat berhasil ditambahkan!
        </div>
      )}
    </form>
  );
}

export default DeviceInput; 