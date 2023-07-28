// import html from "./core.js";
//test============
// const cars = ["BMW", "Porsche", "Mec"];
// const isSuccess = false;
// const output = html`
//     <ul>
//         <h1>${false}</h1>
//         ${cars.map((car) => `<li>${car}</li>`)}
//     </ul>
// `;
// console.log(output);
// ================ =================
import { attach } from "./store.js";
import App from "./component/App.js";
attach(App, document.getElementById("root"));
