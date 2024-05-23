import React from 'react';

const Messagetable = () => {
  const messages = []; 
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Message Details</h2>
      <div className="bg-white w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Id</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Subject</th>
              <th className="py-3 px-6 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-3 px-6 text-center">No messages available</td>
              </tr>
            ) : (
              messages.map((message) => (
                <tr key={message.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{message.id}</td>
                  <td className="py-3 px-6 text-left">{message.email}</td>
                  <td className="py-3 px-6 text-left">{message.subject}</td>
                  <td className="py-3 px-6 text-left">{message.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Messagetable;
