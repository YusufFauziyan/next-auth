import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// icon
import { MdKeyboardArrowDown, MdOutlineModeEditOutline } from "react-icons/md";
import { BsInputCursor, BsPlusCircleFill } from "react-icons/bs";
import { BiRadioCircleMarked } from "react-icons/bi";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "@/components/molecules/modal";

const options = [
  { id: 1, name: "Input", type: "text", label: "input" },
  { id: 2, name: "Radio", type: "radio", label: "radio" },
  { id: 3, name: "Checkbox", type: "checkbox", label: "checkbox" },
];

const FormPage = () => {
  const [selected, setSelected] = useState("");
  const [selectedInputs, setSelectedInputs] = useState([]);
  const [index, setGetIndex] = useState("");
  let [isOpenModal, setIsOpenModal] = useState(false);
  console.log(options);

  const handleChange = (e) => {
    setSelected(e);
    setSelectedInputs([...selectedInputs, e]);
  };

  return (
    <div className="z-40 w-full mt-4 px-8">
      <Modal
        open={isOpenModal}
        close={setIsOpenModal}
        title={selectedInputs}
        setTitle={setSelectedInputs}
        index={index}
      />
      <p className="font-semibold text-center tracking-tighter md:text-xl md:text-left">
        Complete your form
      </p>
      <div className="flex flex-col md:flex-row  gap-2 mt-8">
        <div className="md:w-[75%] md:flex-row gap-4 md:items-center md:justify-between md:px-4  shadow border text-gray-700 font-medium tracking-tight p-2 text-sm rounded relative">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between md:px-4  shadow border text-gray-700 font-medium tracking-tight p-2 text-sm rounded relative">
            <p className="text-center underline text-sky-600 md:text-base ">
              Select Form
            </p>
            <div className="w-full md:w-40">
              <p className="text-xs font-semibold">Add Option:</p>
              <Listbox value={selected} onChange={handleChange}>
                <div className="relative mt-1 border rounded-md shadow">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2  sm:text-sm">
                    <span className="pointer-events-none absolute inset-y-0 left-2 flex items-center pr-2">
                      {selected.name == "Input" ? (
                        <BsInputCursor
                          className="h-4 w-4 text-gray-500"
                          aria-hidden="true"
                        />
                      ) : selected.name == "Radio" ? (
                        <BiRadioCircleMarked
                          className="h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                      ) : selected.name == "Checkbox" ? (
                        <AiOutlineCheckSquare
                          className="h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsPlusCircleFill
                          className="h-4 w-4 text-gray-600"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                    <span className="block truncate pl-6">
                      {selected.name ? selected.name : "Select here.."}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <MdKeyboardArrowDown
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm font-semibold z-10">
                      {options.map((option, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 text-gray-700 ${
                              active ? "bg-black/60 text-white" : ""
                            }`
                          }
                          value={option}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {option.name}
                              </span>

                              <span
                                className={`pointer-events-none absolute inset-y-0 left-2 flex items-center pr-2`}
                              >
                                {option.name == "Input" ? (
                                  <BsInputCursor
                                    className={({ active }) =>
                                      ` ${
                                        active ? "text-white" : ""
                                      } h-4 w-4  ${
                                        selected
                                          ? "text-white hover:text-white"
                                          : "text-gray-500 hover:text-white"
                                      }`
                                    }
                                    aria-hidden="true"
                                  />
                                ) : option.name == "Radio" ? (
                                  <BiRadioCircleMarked
                                    className={({ active }) =>
                                      ` ${
                                        active ? "text-white" : ""
                                      } h-5 w-5  ${
                                        selected
                                          ? "text-white"
                                          : "text-gray-500"
                                      }`
                                    }
                                    aria-hidden="true"
                                  />
                                ) : (
                                  option.name == "Checkbox" && (
                                    <AiOutlineCheckSquare
                                      className={({ active }) =>
                                        ` ${
                                          active ? "text-white" : ""
                                        } h-5 w-5  ${
                                          selected
                                            ? "text-white"
                                            : "text-gray-500"
                                        }`
                                      }
                                      aria-hidden="true"
                                    />
                                  )
                                )}
                              </span>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div
            className={`flex flex-col gap-4 mt-6 ${
              selectedInputs.length != 0 ? "" : "hidden"
            }`}
          >
            <span className="font-semibold text-red-500">Result:</span>

            <Formik
              initialValues={{}}
              validationSchema={""}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className=" w-full max-w-lg text-gray-700 text-sm">
                  <div className=" w-full flex flex-col gap-4 ">
                    {selectedInputs.map((item, index) => {
                      return (
                        <div key={index} className="flex flex-col gap-1">
                          <div className="flex justify-between">
                            <label>{item.label}:</label>
                            <div className="flex gap-2">
                              <div className="tooltip" data-tip="Edit">
                                <MdOutlineModeEditOutline
                                  onClick={() => {
                                    setGetIndex(index);
                                    setIsOpenModal(true);
                                  }}
                                  className="text-gray-700 hover:scale-110 duration-150 cursor-pointer group"
                                />
                              </div>
                              <div className="tooltip" data-tip="Delete">
                                <IoCloseSharp
                                  className="text-red-500 hover:scale-110 duration-150 cursor-pointer group"
                                  onClick={() =>
                                    setSelectedInputs(
                                      selectedInputs.filter(
                                        (item, i) => i != index
                                      )
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <Field
                            name={item.name.toLowerCase()}
                            placeholder="place holder"
                            type={item.type}
                            className=" w-full border border-black rounded-md px-2 py-1 text-black"
                          />
                        </div>
                      );
                    })}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="md:w-[25%] bg-red-300">p</div>
      </div>
    </div>
  );
};

export default FormPage;
