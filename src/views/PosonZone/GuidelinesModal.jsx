import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MyModal({ isOpen, closeModal }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-bold leading-6 text-gray-900 text-center"
                  >
                    These are the guidelines.
                  </Dialog.Title>
                  <div className="mt-2 text-lg">
                    <hr className="my-4" />
                    <p className="text-gray-500 font-bold">
                      Poson Lantern Button -
                    </p>
                    <li className="text-gray-500">
                      You can get the QR code for Poson Lantern in the Lobby
                      areas from 1st floor to 7th floor in the main building,
                      Lobby area from 2nd floor in the New building and Lobby
                      area in the BM.
                    </li>
                    <li className="text-gray-500">
                      When you scan the QR code you can see the object (Poson
                      Lantern).
                    </li>
                    <li className="text-gray-500">
                      When you go a few steps behind you can see the object very
                      clearly.
                    </li>
                    <li className="text-gray-500">
                      Accidently, if something happens to the app, simply click
                      the reset button and scan the QR code again and you can go
                      ahead.
                    </li>
                    <hr className="my-4" />
                    <p className="text-gray-500 font-bold">Thorana Button -</p>
                    <li className="text-gray-500">
                      You can get the QR code for Poson Thorana in the Island
                      areas.
                    </li>
                    <hr className="my-4" />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
