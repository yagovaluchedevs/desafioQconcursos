import { consumeApiPaths } from "../../services/api";

export async function listRepo() {
  const repositoryAddress = "repos";
  const apiRepositoryData = await consumeApiPaths(repositoryAddress);

  const repository = document.querySelector(".repository");

  repository.addEventListener("click", () => {
    const list = document.querySelector(".list-repo");
    list.innerText = "";

    apiRepositoryData.map((res) => {
      list.style.display = "flex";
      list.style.flexDirection = "column";
      list.style.alignItems = "center";
      list.style.justifyContent = "space-between";
      list.style.height = "400px";

      function positionFlexList(x) {
        if (x.matches) {
          list.style.height = "770px ";
          list.style.justifyContent = "center ";
          list.style.alignItems = "center ";
        }
      }
      const x = window.matchMedia("(max-width: 700px)");
      positionFlexList(x);

      const span = document.createElement("span");

      span.style.border = "1px solid rgb(19, 197, 182)";
      span.style.fontFamily = "roboto-bold-italic";
      span.style.color = "white";
      span.style.backgroundColor = "rgba(19, 197, 182, 0.404)";
      span.style.width = "200px";
      span.style.textAlign = "center";

      list.appendChild(span);
      span.innerText = res.name;
    });
  });
}
