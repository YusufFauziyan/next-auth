import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Modal = ({ open, close, title, setTitle, index }) => {
  return (
    <div>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => close(false)}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title[index]?.label}
                  </Dialog.Title>
                  <form
                    className="mt-4 flex flex-col gap-2 text-sm"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="flex items-center">
                      <label className="w-[32%]">Required</label>
                      <input
                        type="checkbox"
                        // checked="checked"
                        className="checkbox scale-[70%] border border-black"
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="w-[50%]">Label</label>
                      <input
                        type="text"
                        value={title[index]?.label}
                        onChange={(e) => {
                          title[index].label = e.target.value;
                          setTitle([...title]);
                        }}
                        className="border px-2 py-1 rounded shadow border-black w-full"
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="w-[50%]">Help Text</label>
                      <input
                        type="text"
                        className="border px-2 py-1 rounded shadow border-black w-full"
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="w-[50%]">Place Holder</label>
                      <input
                        type="text"
                        className="border px-2 py-1 rounded shadow border-black w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => close(false)}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
