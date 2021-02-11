import Challenge from "./src/pages/challenge/challenge";
import Home from "./src/pages/home/home";
import { cardProfile } from "./src/components/cardProfile";
import Sobre from "./src/pages/sobre/sobre";
import "./src/styles/reset.styles.scss";
import "./src/styles/fonts.styles.scss";

const app = document.querySelector("#app");
app.innerHTML += Home();
app.innerHTML += Sobre();
app.innerHTML += Challenge();
cardProfile();
