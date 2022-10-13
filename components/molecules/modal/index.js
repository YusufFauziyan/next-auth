import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BiHelpCircle } from "react-icons/bi";

const Modal = ({
  open,
  close,
  title,
  setTitle,
  index,
  selectedRadio,
  setSelectedRadio,
}) => {
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
                    className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-1"
                  >
                    <span>{title[index]?.label}: </span>
                    <span>
                      {title[index]?.helpText ? (
                        <div
                          className="tooltip mt-2"
                          data-tip={`${title[index]?.helpText}`}
                        >
                          <BiHelpCircle />
                        </div>
                      ) : null}
                    </span>
                  </Dialog.Title>
                  <form
                    className="mt-4 flex flex-col gap-2 text-sm"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {title[index]?.name == "Header" ||
                    title[index]?.name == "Paragraph" ? null : (
                      <div className="flex items-center">
                        <label className="w-[32%]">Required</label>
                        <input
                          type="checkbox"
                          className="checkbox scale-[70%] border border-black"
                          value={title[index]?.require}
                          checked={title[index]?.require}
                          onChange={(e) => {
                            console.log(e);
                            title[index].require = e.target.checked;
                            setTitle([...title]);
                          }}
                        />
                      </div>
                    )}
                    {title[index]?.name == "Header" ||
                    title[index]?.name == "Paragraph" ? null : (
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
                    )}
                    {title[index]?.name == "Header" ||
                    title[index]?.name == "Paragraph" ? null : (
                      <div className="flex items-center">
                        <label className="w-[50%]">Help Text</label>
                        <input
                          type="text"
                          className="border px-2 py-1 rounded shadow border-black w-full"
                          value={title[index]?.helpText}
                          onChange={(e) => {
                            title[index].helpText = e.target.value;
                            setTitle([...title]);
                          }}
                        />
                      </div>
                    )}
                    {title[index]?.name == "Header" ? (
                      <div className="flex items-center">
                        <label className="w-[50%]">Type</label>
                        <select
                          className="border px-2 py-1 rounded shadow border-black w-full font-semibold"
                          value={title[index].fontSize}
                          onChange={(e) => {
                            title[index].fontSize = e.target.value;
                            setTitle([...title]);
                          }}
                        >
                          <option hidden>Select font size</option>
                          <option
                            value="h1"
                            className="text-[32px] font-semibold"
                          >
                            H1
                          </option>
                          <option
                            value="h2"
                            className="text-[24px] font-semibold"
                          >
                            H2
                          </option>
                          <option
                            value="h3"
                            className="text-[18px] font-semibold"
                          >
                            H3
                          </option>
                          <option
                            value="h4"
                            className="text-[16px] font-semibold"
                          >
                            H4
                          </option>
                        </select>
                      </div>
                    ) : title[index]?.name == "Paragraph" ? (
                      <div className="flex items-center">
                        <label className="w-[50%]">Font Weight</label>
                        <select
                          className={`border px-2 py-1 rounded shadow border-black w-full ${
                            title[index].fontWeight == "b"
                              ? "font-bold"
                              : title[index].fontWeight == "sb"
                              ? "font-semibold"
                              : title[index].fontWeight == "md"
                              ? "font-medium"
                              : title[index].fontWeight == "base"
                              ? "font-normal"
                              : "font-normal"
                          } `}
                          value={title[index].fontWeight}
                          onChange={(e) => {
                            title[index].fontWeight = e.target.value;
                            setTitle([...title]);
                          }}
                        >
                          <option hidden>Select font weight</option>
                          <option value="b" className="font-bold">
                            Bold
                          </option>
                          <option value="sb" className="font-semibold">
                            SemiBold
                          </option>
                          <option value="md" className="font-medium">
                            Medium
                          </option>
                          <option value="base" className="font-normal">
                            Base
                          </option>
                        </select>
                      </div>
                    ) : title[index]?.name == "Radio" ? (
                      <div className="flex justify-start">
                        <label className="w-[50%]">Options</label>
                        <div className="flex flex-col w-full justify-start items-start">
                          {selectedRadio.map((item, index) => {
                            return (
                              <label
                                key={index}
                                className="label cursor-pointer flex gap-2 items-center"
                              >
                                <input
                                  name="radio-input"
                                  type="radio"
                                  className="radio checked:bg-sky-500 outline"
                                  // value={item.selected}
                                  onChange={(e) => {
                                    selectedRadio[index].selected =
                                      e.target.checked;
                                    setSelectedRadio([...selectedRadio]);
                                    // setTitle([...title]);
                                  }}
                                  checked={selectedRadio[index].selected}
                                />
                                <span className="label-text">{item.name}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <label className="w-[50%]">Place Holder</label>
                        <input
                          type="text"
                          className="border px-2 py-1 rounded shadow border-black w-full"
                          value={title[index]?.placeHolder}
                          onChange={(e) => {
                            title[index].placeHolder = e.target.value;
                            setTitle([...title]);
                          }}
                        />
                      </div>
                    )}
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
