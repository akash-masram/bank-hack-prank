import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Simulate a "hacking" alert after 3 seconds
    const timeout = setTimeout(() => {
      alert("Critical Alert!\nYour bank account has been hacked!");
    }, 3000); // Show alert after 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bank Account Security Breach!</h1>
      <p className="text-lg mb-6">Warning! Your account may have been compromised.</p>
      <button className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300">
        Check Account Status
      </button>
      <div className="mt-10 p-4 border border-gray-300 rounded shadow-md bg-white">
        <h2 className="text-xl font-semibold">Important Notice:</h2>
        <p>Your account is currently under investigation for unauthorized access.</p>
        <p className="text-red-500 font-bold">Please contact customer support immediately!</p>
      </div>
    </div>
  );
}

export default App;
