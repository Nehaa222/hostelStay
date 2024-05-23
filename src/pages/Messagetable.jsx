const Messagetable = () => {
  const messages = [];
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h2 className="my-6 text-2xl font-bold">Message Details</h2>
      <div className="w-full max-w-6xl overflow-hidden bg-white rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
              <th className="px-6 py-3 text-left">Id</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Subject</th>
              <th className="px-6 py-3 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-3 text-center">
                  No messages available
                </td>
              </tr>
            ) : (
              messages.map((message) => (
                <tr
                  key={message.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="px-6 py-3 text-left">{message.id}</td>
                  <td className="px-6 py-3 text-left">{message.email}</td>
                  <td className="px-6 py-3 text-left">{message.subject}</td>
                  <td className="px-6 py-3 text-left">{message.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messagetable;
