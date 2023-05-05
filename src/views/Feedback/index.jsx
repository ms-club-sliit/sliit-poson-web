/**
 * Feedback Section
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Feedback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-neutral-900 px-10">
      <div className="flex lg:flex-row max-md:flex-col space-x-4 w-full max-w-4xl">
        <div className="w-1/2 max-md:w-full">
          <h1 className="text-3xl dark:text-white max-md:text-center">Leave Your Valuable Feedback</h1>
        </div>
        <div className="flex flex-col space-y-2 w-1/2 max-w-4xl max-md:w-full">
          <input type="text" placeholder="Your Email" className="bg-white border-2 border-black dark:border-white dark:bg-neutral-900 dark:text-white rounded-md px-4 py-2 my-3" />
          <textarea placeholder="Your Feedback" className="resize-none bg-white border-2 border-black dark:border-white dark:bg-neutral-900 dark:text-white rounded-md px-4 py-2 my-3 h-48" />
          <div className="flex justify-end">
            <button className="w-44 bg-fuchsia-950 dark:bg-white text-white dark:text-black rounded-full px-6 py-4 my-3 hover:bg-fuchsia-900 dark:hover:bg-neutral-200">
              <div className="float-left text-sm">
                Send
              </div>
              <div className="flex justify-end">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
