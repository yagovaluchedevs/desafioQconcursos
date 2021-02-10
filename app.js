import Challenge from "./src/pages/challenge/challenge";
import Home from "./src/pages/home/home";
import { cardProfile } from "./src/components/cardProfile";
import Sobre from "./src/pages/sobre/sobre";

const app = document.querySelector("#app");
app.innerHTML += Home();
app.innerHTML += Sobre();
app.innerHTML += Challenge();
cardProfile();
