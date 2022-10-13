import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// icon
import { MdKeyboardArrowDown, MdOutlineModeEditOutline } from "react-icons/md";
import { BsInputCursor, BsPlusCircleFill } from "react-icons/bs";
import { BiRadioCircleMarked, BiHelpCircle, BiParagraph } from "react-icons/bi";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "@/components/molecules/modal";
import { TbHeading } from "react-icons/tb";

const options = [
  {
    name: "Header",
    type: "text",
    label: "header",
    helpText: "",
    placeHolder: "Header",
    fontSize: "h4",
  },
  {
    name: "Paragraph",
    type: "text",
    label: "paragraph",
    helpText: "h3",
    placeHolder: "Paragraph",
    fontWeight: "base",
  },
  {
    name: "Input",
    type: "text",
    label: "input",
    require: false,
    helpText: "",
    placeHolder: "Place Holder",
  },
  {
    name: "Radio",
    type: "radio",
    label: "radio",
    helpText: "",
    placeHolder: "Place Holder",
  },
  {
    name: "Checkbox",
    type: "checkbox",
    label: "checkbox",
    helpText: "",
    placeHolder: "Place Holder",
  },
];

const FormPage = () => {
  const [selected, setSelected] = useState("");
  const [selectedInputs, setSelectedInputs] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState([
    { name: "Option-1", value: "option1", selected: true },
    { name: "Option-2", value: "option2", selected: false },
    { name: "Option-3", value: "option3", selected: false },
  ]);

  console.log(selectedRadio);
  const [index, setGetId] = useState(null);
  let [isOpenModal, setIsOpenModal] = useState(false);

  let rand_number = Math.floor(Math.random() * 100000);
  let rand_time = new Date().getTime();

  const handleChange = (e) => {
    setSelected(e);
    setSelectedInputs([
      ...selectedInputs,
      { ...e, id: rand_number, fieldName: e.name + "-" + rand_time },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const ValidationIfRequire = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required !"),
    password: Yup.string().required("Password is required !"),
  });

  return (
    <div className="z-40 w-full mt-4 px-8">
      <Modal
        open={isOpenModal}
        close={setIsOpenModal}
        title={selectedInputs}
        setTitle={setSelectedInputs}
        index={index}
        selectedRadio={selectedRadio}
        setSelectedRadio={setSelectedRadio}
      />
      <p className="font-semibold text-center tracking-tighter md:text-xl md:text-left">
        Complete your form
      </p>
      <div className="flex flex-col md:flex-row  gap-2 mt-8">
        <div className="md:w-[75%] md:flex-row gap-4 md:items-center md:justify-between md:px-4  shadow border text-gray-700 font-medium tracking-tight p-2 text-sm rounded relative">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between md:px-4  shadow border text-gray-700 font-medium tracking-tight p-2 text-sm rounded relative">
            <p className="text-center underline text-sky-600 md:text-base md:text-black ">
              Select Form
            </p>
            <div className="w-full md:w-40">
              <p className="text-xs font-semibold">Add Option:</p>
              <Listbox value={selected} onChange={handleChange}>
                <div className="relative mt-1 border rounded-md shadow">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2  sm:text-sm">
                    <span className="pointer-events-none absolute inset-y-0 left-2 flex items-center pr-2">
                      {selected.name == "Header" ? (
                        <TbHeading
                          className="h-4 w-4 text-gray-500"
                          aria-hidden="true"
                        />
                      ) : selected.name == "Paragraph" ? (
                        <BiParagraph
                          className="h-4 w-4 text-gray-500"
                          aria-hidden="true"
                        />
                      ) : selected.name == "Input" ? (
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
                                {option.name == "Header" ? (
                                  <TbHeading
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
                                ) : option.name == "Paragraph" ? (
                                  <BiParagraph
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
                                ) : option.name == "Input" ? (
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
            className={`flex flex-col gap-4 mt-6 w-full  ${
              selectedInputs.length != 0 ? "" : "hidden"
            }`}
          >
            <span className="font-semibold text-red-500">Result:</span>

            <form onSubmit={handleSubmit} className=" text-gray-700 text-sm">
              <div className=" w-full flex flex-col">
                {selectedInputs.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex flex-col gap-1 shadow p-2 rounded ${
                        item.name == "Header" || item.name == "Paragraph"
                          ? ""
                          : "my-2"
                      }`}
                    >
                      {item.name == "Header" ||
                      item.name == "Paragraph" ? null : (
                        <div className="flex justify-between ">
                          <div className="flex items-center cursor-pointer hover:text-bold duration-100 ease-in-out gap-1">
                            <label>
                              {item.label == "paragraph" ||
                              item.label == "header"
                                ? null
                                : item.label}
                              : {""}
                            </label>
                            {item.helpText ? (
                              <div
                                className="tooltip"
                                data-tip={`${item.helpText}`}
                              >
                                <BiHelpCircle />
                              </div>
                            ) : null}
                          </div>
                          <div className="flex gap-2">
                            <div className="tooltip" data-tip="Edit">
                              <MdOutlineModeEditOutline
                                onClick={() => {
                                  setGetId(index);
                                  setIsOpenModal(true);
                                }}
                                className="text-gray-700 hover:scale-110 duration-150 cursor-pointer group"
                              />
                            </div>
                            <div className="tooltip" data-tip="Delete">
                              <IoCloseSharp
                                className="text-red-500 hover:scale-110 duration-150 cursor-pointer group"
                                onClick={() => {
                                  console.log(item);
                                  setValues({
                                    ...values,
                                    [item.fieldName.toLowerCase() +
                                    "__" +
                                    index]: "deleted",
                                  });

                                  setSelectedInputs(
                                    selectedInputs.filter(
                                      (item, i) => i != index
                                    )
                                  );
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        {item.name == "Radio" ? (
                          <div className="form-control">
                            {selectedRadio.map((opt, index) => {
                              return (
                                <label
                                  key={index}
                                  className="label cursor-pointer flex gap-2"
                                >
                                  <input
                                    name={`radio-input`}
                                    // value={opt.selected}
                                    placeholder={`${item.placeHolder}`}
                                    type={item.type}
                                    className="radio checked:bg-sky-500 radio-xs"
                                    checked={opt.selected}
                                    onChange={(e) => {
                                      console.log(e.target);
                                      opt.selected = e.target.checked;

                                      // setSelectedRadio([
                                      //   ...selectedRadio,
                                      // ]);
                                    }}
                                  />
                                  <span className="label-text">{opt.name}</span>
                                </label>
                              );
                            })}
                          </div>
                        ) : (
                          <input
                            name={item.fieldName.toLowerCase() + "__" + index}
                            placeholder={`${item.placeHolder}`}
                            type={item.type}
                            className={`radio ${
                              item.name == "Header" || item.name == "Paragraph"
                                ? "border-none  focus:outline-none w-[75%] "
                                : "border rounded-md w-full"
                            } ${
                              item.name == "Header"
                                ? "font-bold text-xl"
                                : item.name == "Paragraph" && "text-base"
                            } border-black px-2 py-1 text-black ${
                              item.fontSize == "h1"
                                ? "text-[32px]"
                                : item.fontSize == "h2"
                                ? "text-[24px]"
                                : item.fontSize == "h3"
                                ? "text-[18px]"
                                : item.fontSize == "h4"
                                ? "text-[16px]"
                                : "text-base"
                            } ${
                              item.fontWeight == "b"
                                ? "font-bold"
                                : item.fontWeight == "sb"
                                ? "font-semibold"
                                : item.fontWeight == "md"
                                ? "font-medium"
                                : item.fontWeight == "base"
                                ? "font-normal"
                                : "font-normal"
                            } `}
                            required={item.require}
                          />
                        )}

                        {item.name == "Header" || item.name == "Paragraph" ? (
                          <div className={`flex gap-2 `}>
                            <div className="tooltip" data-tip="Edit">
                              <MdOutlineModeEditOutline
                                onClick={() => {
                                  setGetId(index);
                                  setIsOpenModal(true);
                                }}
                                className="text-gray-700 hover:scale-110 duration-150 cursor-pointer group"
                              />
                            </div>
                            <div className="tooltip" data-tip="Delete">
                              <IoCloseSharp
                                className="text-red-500 hover:scale-110 duration-150 cursor-pointer group"
                                onClick={() => {
                                  setValues({
                                    ...values,
                                    [item.fieldName.toLowerCase() +
                                    "__" +
                                    index]: "deleted",
                                  });
                                  setSelectedInputs(
                                    selectedInputs.filter(
                                      (item, i) => i != index
                                    )
                                  );
                                }}
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="bg-sky-500 text-white px-2 py-1 rounded mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-[25%] bg-red-300">p</div>
      </div>
    </div>
  );
};

export default FormPage;
