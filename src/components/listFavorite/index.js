import { consumeApiPaths } from "../services/api";

export async function listFavorite() {
  const favoriteAdress = "starred";
  const favorites = await consumeApiPaths(favoriteAdress);

  const containerFavorite = document.querySelector(".favorite");

  containerFavorite.addEventListener("click", () => {
    const listFavorite = document.querySelector(".list-repo");
    listFavorite.innerText = "";

    favorites.map((res) => {
      listFavorite.style.display = "flex";
      listFavorite.style.flexDirection = "column";
      listFavorite.style.justifyContent = "space-around";
      listFavorite.style.height = "400px";

      function positionFlexListFavorite(xAxis) {
        if (xAxis.matches) {
          listFavorite.style.height = "560px ";
          listFavorite.style.justifyContent = "center ";
          listFavorite.style.alignItems = "center ";
        }
      }
      const xAxis = window.matchMedia("(max-width: 700px)");
      positionFlexListFavorite(xAxis);

      const span = document.createElement("span");

      span.style.border = "1px solid rgb(19, 197, 182)";
      span.style.fontFamily = "roboto-bold-italic";
      span.style.color = "white";
      span.style.backgroundColor = "rgba(19, 197, 182, 0.404)";
      span.style.width = "200px";
      span.style.textAlign = "center";

      listFavorite.appendChild(span);
      span.innerText = res.name;
    });
  });
}
