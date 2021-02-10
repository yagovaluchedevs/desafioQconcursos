import gitHubImage from "../../assets/images/icons8-github.svg";
import linkedinImage from "../../assets/images/icons8-linkedin.svg";

export default function footer() {
  return `
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
    `;
}
