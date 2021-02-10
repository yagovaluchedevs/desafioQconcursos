export function toScroll() {
  const home = document.querySelector("#home");
  const sobre = document.querySelector("#sobre");
  const challenge = document.querySelector("#challenge");
  home.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  sobre.addEventListener("click", () => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });

    function positionFlexAxis(xAxis) {
      if (xAxis.matches) {
        window.scroll({
          top: 800,
          behavior: "smooth",
        });
      }
    }
    const xAxis = window.matchMedia("(max-width: 700px)");
    positionFlexAxis(xAxis);
  });

  challenge.addEventListener("click", () => {
    window.scroll({
      top: 1000,
      behavior: "smooth",
    });

    function positionFlexAxis(xAxis) {
      if (xAxis.matches) {
        window.scroll({
          top: 2000,
          behavior: "smooth",
        });
      }
    }
    const xAxis = window.matchMedia("(max-width: 700px)");
    positionFlexAxis(xAxis);
  });
}
