import { cardProfile } from "../../components/cardProfile";
import "./styles/challenge.styles.css";

export default function Challenge() {
  return `
  <section  class="content-card">
      <div class="container-profile">
        <div class="profile">
          <img class="image-profile" alt="imagem perfil do repositório" />
                <a>Visitar Perfil</a>
         </div>
          <div class="content-repo">
            <h1>Repositórios:<span class="repo"></span></h1>
            <h1>Seguidores:<span class="follower"></span></h1>
            <h1>Seguindo:<span class="following"></span></h1>
          <div class="container-btn">

          <div class="button repository"><p>Listar Repositórios</p></div>

          <div class="button favorite"><p>Ver Favoritos</p></div>
            </div>
        </div>
      </div>
        </section>
        <section class="list-repo"></section>
    `;
}
