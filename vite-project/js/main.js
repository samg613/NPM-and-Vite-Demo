import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;