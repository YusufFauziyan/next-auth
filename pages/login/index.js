// /* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { Field, Form, Formik } from "formik";
// import Image from "next/image";
// import Head from "next/head";
// import * as Yup from "yup";
// import { POST_LOGIN } from "@/utils/gql/auth/constant";
// import { setUser } from "@/redux/features/auth/authSlice";
// import HOC from "@/components/HOC";
// import { useRouter } from "next/router";

// // icon
// import { FiAlertCircle } from "react-icons/fi";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useDispatch } from "react-redux";

// const Login = () => {
//   const router = useRouter();

//   const dispatch = useDispatch();
//   const [showOldPassword, setshowOldPassword] = useState(false);

//   const [mutationLogin, { data, error, loading }] = useMutation(POST_LOGIN);

//   const SignupSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email").required("Email is required !"),
//     password: Yup.string().required("Password is required !"),
//   });
//   return (
//     <div>
//       <Head>
//         <title>Tester</title>
//         <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
//       </Head>

//       <div className={`w-full login h-screen relative`}>
//         <div className="w-[25rem] text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//           <h1 className="font-bold text-4xl">Login</h1>
//           <div className="text-base">
//             <div className="w-full max-w-sm mx-auto">
//               <Formik
//                 initialValues={{
//                   email: "",
//                   password: "",
//                 }}
//                 validationSchema={SignupSchema}
//                 onSubmit={async (values) => {
//                   const { data } = await mutationLogin({
//                     variables: {
//                       input: {
//                         email: values.email,
//                         password: values.password,
//                       },
//                     },
//                   });

//                   dispatch(
//                     setUser({
//                       login: data.login,
//                       password: values.password,
//                     })
//                   );

//                   return true;
//                 }}
//               >
//                 {({ errors, touched }) => (
//                   <Form className=" w-full max-w-lg">
//                     {error && (
//                       <div className="alert alert-error bg-red-500 shadow-lg p-3 rounded-none">
//                         <div>
//                           <div className=" text-2xl">
//                             <FiAlertCircle className="mr-2 " />
//                           </div>
//                           <span>
//                             {error.message}. Please check your Email or Password
//                             !
//                           </span>
//                         </div>
//                       </div>
//                     )}
//                     <div className=" w-full">
//                       <div className=" mb-2">
//                         <div className=" font-medium p-0.5 text-left">
//                           Email
//                         </div>
//                         <Field
//                           name="email"
//                           placeholder="Email"
//                           className=" w-full  border-[#E0E0E0] border-[1px] px-2 h-[38px] rounded-md text-black"
//                         />
//                         {errors.email && touched.email ? (
//                           <p className="text-left text-red-500">
//                             {errors.email}
//                           </p>
//                         ) : null}
//                       </div>

//                       <div className="block relative mb-4">
//                         <div className="eye_div">
//                           <div className=" font-medium p-0.5 text-left">
//                             Password
//                           </div>

//                           <Field
//                             placeholder="Password"
//                             className="w-full  border-[#E0E0E0] border-[1px] rounded-md px-2 h-[38px] text-black"
//                             id="password"
//                             name="password"
//                             type={!showOldPassword ? "password" : "text"}
//                           />
//                           {errors.password && touched.password ? (
//                             <p className="text-left text-red-500">
//                               {errors.password}
//                             </p>
//                           ) : null}

//                           <div
//                             className="icon_button absolute right-3 top-9 cursor-pointer"
//                             onClick={() => setshowOldPassword(!showOldPassword)}
//                           >
//                             {showOldPassword ? (
//                               <FaEye className="h-6 font-extralight text-black" />
//                             ) : (
//                               <FaEyeSlash className="h-6 font-extralight text-black" />
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex justify-center items-center ">
//                         {loading ? (
//                           <button disabled variant="dark">
//                             <svg
//                               role="status"
//                               className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
//                               viewBox="0 0 100 101"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                                 fill="currentColor"
//                               />
//                               <path
//                                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                                 fill="currentFill"
//                               />
//                             </svg>
//                           </button>
//                         ) : (
//                           <button
//                             type="submit"
//                             className=" p-2 w-full mt-8 outline rounded hover:bg-black hover:text-white ease-in-out duration-300"
//                           >
//                             Login
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </Form>
//                 )}
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HOC(Login, "login-register");
