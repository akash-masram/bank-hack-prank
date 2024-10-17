import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [hacked, setHacked] = useState(false);

  useEffect(() => {
    // Simulate loading for 3 seconds before showing the hacked state
    const timeout = setTimeout(() => {
      setLoading(false);
      setHacked(true);
    }, 3000); // Simulate a loading time of 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 px-4 sm:px-8 lg:px-16">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader mb-4"></div>
          <p className="text-lg text-white">Checking account status...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {/* Fake Bank Header */}
          <div className="bg-red-700 text-white p-4 w-full max-w-md text-center rounded-t-lg">
            
            <h1 className="text-2xl font-bold">YourBank</h1>
            <p className="text-lg">Important Security Notice</p>
            <div className="bg-red-600 p-2 text-sm font-semibold rounded mt-2">
              ⚠️ Urgent: Security Breach Detected!
            </div>
          </div>
          <div className="bg-gray-800 shadow-md rounded-b-lg w-full max-w-md p-4 text-white">
            <h1 className="text-3xl font-bold mb-4 text-red-400 text-center">
              ALERT: Your Account Has Been Compromised!
            </h1>
            <p className="text-base mb-6 text-center">
              **Immediate action required!** Unauthorized access detected on your account.
            </p>
            <div className="mb-4 border border-red-400 bg-red-600 p-3 rounded">
              <p className="text-white font-bold">
                ⚠️ Your account has been locked for security reasons!
              </p>
            </div>
            <h2 className="text-lg font-semibold">Recent Security Alerts:</h2>
            <ul className="list-disc list-inside mb-4">
              <li className="text-red-400">⚠️ Suspicious login attempt detected.</li>
              <li className="text-red-400">⚠️ Your password was recently changed.</li>
              <li className="text-red-400">⚠️ Multiple failed login attempts.</li>
            </ul>
            <div className="mt-6 p-2 bg-red-600 border border-red-400 text-white rounded">
              <p className="text-sm">⚠️ Your account is under investigation!</p>
              <p className="text-xs">Please contact customer support immediately!</p>
            </div>
            {/* Added space-y-4 for gap between buttons */}
            <div className="space-y-4 mt-4">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
                Secure My Account
              </button>
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100 transition duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;
