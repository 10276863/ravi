// import React, { useState } from "react";

// const Theme = () => {
//   const [darkmode, whitemode] = useState({
//     color: "white",
//     backgroundColor: "black",
//   });
//   const [btntext, setbtntext] = useState("Dark mode");
//   const togglestyle = () => {
//     if (darkmode.color == "black") {
//       whitemode({
//         color: "white",
//         backgroundColor: "black",
//       });
//       setbtntext("Dark mode");
//     } else {
//       whitemode({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setbtntext("enable white Mode");
//     }
//   };
// };
// return (
//   <div className="block rounded-5g bg-yellow-500 p-6">
//     <button
//       onClick={togglestyle}
//       type="button"
//       className="bg-red-700 p-6 font-bold text-left justify-center"
//     >
//       {btntext}
//     </button>

//     <button
//       onClick={togglestyle}
//       type="button"
//       className="bg-lime-600 p-6 font-bold text-left justify-center "
//     >
//       {btntext}
//     </button>
//   </div>
// );
// };
// export default Theme;
