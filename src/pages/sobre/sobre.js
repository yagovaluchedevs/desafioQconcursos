import "./styles/sobre.styles.css";
import eu from "../../assets/images/yago.jpg";
import estartandoDevs from "../../assets/images/estartando-devs.jpg";

export default function Sobre() {
  return `
    <section class="about-me">
        <h1>Sobre Mim</h1>
        <div class="content-block">
        <div>
            <img class="image" src=${eu} alt="imagem do yago valuche" />
        </div>
        <div class="my-content">
            <p>
            Olá, meu nome é Yago Valuche, tenho 20 anos!! Estou em andamento no
            ensino superior, curso de Análise e desenvolvimento de sistemas.
            Iniciei meus conhecimentos como desenvolvedor em 2019 no projeto
            Estartando Devs e fui promovido a mentor Front-End em 2020.
            </p>
        </div>
        </div>
        <div class="content-block secondary">
        <div class="my-content">
            <p>
            Sou um dos mentores Front-End do projeto social Estartando Devs.
            Nesse projeto oferecemos um ensino objetivo para o mercado
            profissional focado nas exigências do mercado de TI. Oferecemos
            também conhecimentos em métodos de gestão ágil de projetos
            utilizados no mercado para o desenvolvimento de trabalhos em equipe,
            além de assessoria no Linkedin e direcionamento de carreira.
            </p>
        </div>
        <div>
            <img
            class="image"
            src=${estartandoDevs}
            alt="imagem Estartando Devs"
            />
        </div>
        </div>
    </section>
  `;
}
