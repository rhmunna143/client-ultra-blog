"use strict";(self.webpackChunkclient_ultra_blog=self.webpackChunkclient_ultra_blog||[]).push([[747],{"./src/components/SignUp/SignUpForm.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCustomProps:()=>WithCustomProps,WithCustomSubmit:()=>WithCustomSubmit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SignUpForm_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),AllContext=__webpack_require__("./src/context/AllContext.jsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");const SignUpForm=()=>{const{signUp,signUpUser}=(0,react.useContext)(AllContext.d),{register,handleSubmit,watch,formState:{errors}}=(0,index_esm.mN)();return(0,jsx_runtime.jsx)("div",{className:"hero min-h-screen bg-base-200",children:(0,jsx_runtime.jsxs)("div",{className:"hero-content flex-col lg:flex-row-reverse",children:[(0,jsx_runtime.jsxs)("div",{className:"text-center lg:text-left",children:[(0,jsx_runtime.jsx)("h1",{className:"text-5xl font-bold",children:"Sign UP now!"}),(0,jsx_runtime.jsxs)("p",{className:"py-6",children:["Provident cupiditate voluptatem et in. ",(0,jsx_runtime.jsx)("br",{})," Quaerat fugiat ut assumenda excepturi exercitationem quasi. ",(0,jsx_runtime.jsx)("br",{})," In deleniti eaque aut repudiandae et a id nisi."]})]}),(0,jsx_runtime.jsx)("div",{className:"card shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:(0,jsx_runtime.jsxs)("form",{className:"card-body",onSubmit:handleSubmit((data=>{signUp(data.username,data.password)})),children:[(0,jsx_runtime.jsxs)("div",{className:"form-control",children:[(0,jsx_runtime.jsx)("label",{className:"label",children:(0,jsx_runtime.jsx)("span",{className:"label-text",children:"Username"})}),(0,jsx_runtime.jsx)("input",{...register("username",{required:!0}),type:"text",placeholder:"username",className:"input input-bordered"}),errors.username&&(0,jsx_runtime.jsx)("span",{className:"text-red-500",children:"Username is required"})]}),(0,jsx_runtime.jsxs)("div",{className:"form-control",children:[(0,jsx_runtime.jsx)("label",{className:"label",children:(0,jsx_runtime.jsx)("span",{className:"label-text",children:"Password"})}),(0,jsx_runtime.jsx)("input",{...register("password",{required:!0}),type:"password",placeholder:"password",className:"input input-bordered"}),errors.password&&(0,jsx_runtime.jsx)("span",{className:"text-red-500",children:"Password is required"})]}),(0,jsx_runtime.jsx)("div",{className:"form-control mt-6",children:(0,jsx_runtime.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign UP"})}),(0,jsx_runtime.jsxs)("p",{className:"text-center",children:["Already have an account? ",(0,jsx_runtime.jsx)(link_default(),{href:"/login",className:"text-blue-600 hover:text-blue-900",children:"Login now"})]})]})})]})})},SignUp_SignUpForm=SignUpForm;SignUpForm.__docgenInfo={description:"",methods:[],displayName:"SignUpForm"};__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs");var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_WithCustomSubmit_parameters,_WithCustomSubmit_parameters_docs,_WithCustomSubmit_parameters1,_WithCustomProps_parameters,_WithCustomProps_parameters_docs,_WithCustomProps_parameters1,console=__webpack_require__("./node_modules/console-browserify/index.js");const SignUpForm_stories={title:"Authentication-Form/SignUpForm",component:SignUp_SignUpForm,argTypes:{onSubmit:{action:"submitted"}},tags:["autodocs"]};function customSubmitHandler(){console.log("submitted")}const Default=args=>(0,jsx_runtime.jsx)(AllContext.A,{children:(0,jsx_runtime.jsx)(SignUp_SignUpForm,{...args})}),WithCustomSubmit=()=>(0,jsx_runtime.jsx)(AllContext.A,{children:(0,jsx_runtime.jsx)(SignUp_SignUpForm,{onSubmit:customSubmitHandler})}),WithCustomProps=()=>(0,jsx_runtime.jsx)(AllContext.A,{children:(0,jsx_runtime.jsx)(SignUp_SignUpForm,{username:"JohnDoe"})});Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"args => <AllContextProvider>\r\n        <SignUpForm {...args} />\r\n    </AllContextProvider>",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},WithCustomSubmit.parameters={...WithCustomSubmit.parameters,docs:{...null===(_WithCustomSubmit_parameters=WithCustomSubmit.parameters)||void 0===_WithCustomSubmit_parameters?void 0:_WithCustomSubmit_parameters.docs,source:{originalSource:"() => <AllContextProvider>\r\n        <SignUpForm onSubmit={customSubmitHandler} />\r\n    </AllContextProvider>",...null===(_WithCustomSubmit_parameters1=WithCustomSubmit.parameters)||void 0===_WithCustomSubmit_parameters1||null===(_WithCustomSubmit_parameters_docs=_WithCustomSubmit_parameters1.docs)||void 0===_WithCustomSubmit_parameters_docs?void 0:_WithCustomSubmit_parameters_docs.source}}},WithCustomProps.parameters={...WithCustomProps.parameters,docs:{...null===(_WithCustomProps_parameters=WithCustomProps.parameters)||void 0===_WithCustomProps_parameters?void 0:_WithCustomProps_parameters.docs,source:{originalSource:'() => <AllContextProvider>\r\n        <SignUpForm username="JohnDoe" />\r\n    </AllContextProvider>',...null===(_WithCustomProps_parameters1=WithCustomProps.parameters)||void 0===_WithCustomProps_parameters1||null===(_WithCustomProps_parameters_docs=_WithCustomProps_parameters1.docs)||void 0===_WithCustomProps_parameters_docs?void 0:_WithCustomProps_parameters_docs.source}}};const __namedExportsOrder=["Default","WithCustomSubmit","WithCustomProps"]},"./src/app/lib/constant.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>imgBBApiKey,p:()=>baseUrl});const baseUrl="https://server-ultra-blog.vercel.app/api",imgBBApiKey="8dde3e3ff1f547a16312413a213e875a"},"./src/context/AllContext.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,d:()=>AllContext});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_app_lib_constant__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/app/lib/constant.js"),axios__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/axios/lib/axios.js"),next_navigation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_hot_toast__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-hot-toast/dist/index.mjs"),console=__webpack_require__("./node_modules/console-browserify/index.js");const AllContext=(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null),AllContextProvider=param=>{let{children}=param;const[signUpUser,setSignUp]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),[loginUser,setLoginUser]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),[currentUser,setCurrentUser]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),[loading,setLoading]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),[refetchCurrentUser,setRefetchCurrentUser]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),router=(0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{setLoading(!0),axios__WEBPACK_IMPORTED_MODULE_4__.A.get("".concat(_app_lib_constant__WEBPACK_IMPORTED_MODULE_5__.p,"/auth/check-login"),{withCredentials:!0}).then((res=>{res.data&&(setCurrentUser(res.data),setLoading(!1))})).catch((err=>{console.error(err)}))}),[loginUser,signUpUser,refetchCurrentUser]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>signUpUser?router.push("/login"):loginUser?router.push("/"):void 0),[signUpUser,router,loginUser]);const value={signUp:(username,password)=>{axios__WEBPACK_IMPORTED_MODULE_4__.A.post("".concat(_app_lib_constant__WEBPACK_IMPORTED_MODULE_5__.p,"/auth/register"),{username,password},{withCredentials:!0}).then((res=>{res.data.id&&(setSignUp(res.data),react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Ay.success("User created successfully"))})).catch((err=>{console.error(err),react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Ay.error("Failed to create user")}))},login:(username,password)=>{axios__WEBPACK_IMPORTED_MODULE_4__.A.post("".concat(_app_lib_constant__WEBPACK_IMPORTED_MODULE_5__.p,"/auth/login"),{username,password},{withCredentials:!0}).then((res=>{var _res_data;res.data.user_id&&(setLoginUser(res.data),react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Ay.success("".concat(null==res||null===(_res_data=res.data)||void 0===_res_data?void 0:_res_data.username," logged in successfully")))})).catch((err=>{console.error(err),react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Ay.error("Failed to log in user.")}))},signUpUser,loginUser,currentUser,logout:()=>{axios__WEBPACK_IMPORTED_MODULE_4__.A.post("".concat(_app_lib_constant__WEBPACK_IMPORTED_MODULE_5__.p,"/auth/logout"),{withCredentials:!0}).then((res=>{res.data&&(setCurrentUser(null),react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Ay.success("Logged out successfully"))})).catch((err=>{console.error(err),react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Ay.error("Failed to log out user")}))},loading,router,setRefetchCurrentUser};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AllContext.Provider,{value,children})},__WEBPACK_DEFAULT_EXPORT__=AllContextProvider;AllContextProvider.__docgenInfo={description:"",methods:[],displayName:"AllContextProvider"}}}]);