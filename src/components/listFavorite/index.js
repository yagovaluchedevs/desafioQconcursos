import { consumeApiPaths } from "../services/api";

export async function listFavorite() {
  const favoriteAdress = "starred";
  const favorites = await consumeApiPaths(favoriteAdress);

  const containerFavorite = document.querySelector(".favorite");

  containerFavorite.addEventListener("click", () => {
    favorites.map((res) => {
      const listFavorite = document.querySelector(".list-repo");

      listFavorite.style.display = "flex";
      listFavorite.style.flexDirection = "column";
      listFavorite.style.alignItems = "center";
      listFavorite.style.justifyContent = "space-between";
      listFavorite.style.height = "400px";

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
