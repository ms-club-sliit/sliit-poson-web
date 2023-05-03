/**
 * Feedback Section
 */
const Feedback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 px-10">
      {/* <h1 className="text-3xl font-bold underline dark:text-white">Feedback</h1> */}
      <div className="flex md:flex-row max-sm:flex-col space-x-4 w-full max-w-4xl">
        <div className="w-1/2 max-sm:w-full">
          <h1 className="text-3xl dark:text-white max-sm:text-center">Leave Your Valuable Feedback</h1>
        </div>
        <div className="flex flex-col space-y-2 w-1/2 max-w-4xl max-sm:w-full">
          <input type="text" placeholder="Your Email" className="border-2 border-black dark:border-white dark:bg-gray-800 dark:text-white rounded px-4 py-2 my-3" />
          <textarea placeholder="Your Feedback" className="resize-none border-2 border-black dark:border-white dark:bg-gray-800 dark:text-white rounded px-4 py-2 my-3 h-48" />
          <div className="flex justify-end">
            <button className="w-32 bg-fuchsia-950 text-white rounded-full px-6 py-4 my-3 hover:bg-fuchsia-900">
              <div className="float-left text-sm">
                Send
              </div>
              <div className="flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" fill="#FFFFFF" /></svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
