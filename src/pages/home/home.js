import gitHubImage from "../../assets/images/icons8-github.svg";
import linkedinImage from "../../assets/images/icons8-linkedin.svg";
import "./home.styles.scss";

export default function Home() {
  return `
  <main class="home">
    <header class="container-header">
      <div class="container-name">
        <h1>Yago Valuche</h1>
      </div>
      <nav class="container-menu">
        <ul>
          <a><li >Home</li></a>
          <a href="#about-me"><li>Sobre</li></a>
          <a href="#content-card" ><li>Desafio</li></a>
        </ul>
      </nav>
    </header>

    <section>
      <div class="content-challenge">
        <h1>Desenvolvedor Front End</h1>
        <h2>
          Desafio <a href="https://www.qconcursos.com/" target="_blank">Qconcursos.com</a>
        </h2>
      </div>
    </section>

    <footer class="social-network-container">
      <div>
        <a href="https://github.com/yagovaluchedevs" target="_blank">
          <img src="${gitHubImage}" alt="imagem gitHub" />
        </a>
        <a href="https://www.linkedin.com/in/yago-valuche-95b7591ab/" target="_blank">
          <img src="${linkedinImage}" alt="imagem Linkedin" />
        </a>
      </div>
    </footer>
  </main>
  `;
}
