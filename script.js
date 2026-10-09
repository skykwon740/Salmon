const juan = document.querySelector(".juan");
const figures = document.querySelectorAll(".gallery figure");

let figureHasReachedCat = false;

function changeJuan() {
  const catRect = juan.getBoundingClientRect();

  const touchingCat = [...figures].some((figure) => {
    const figureRect = figure.getBoundingClientRect();

    return (
      figureRect.top < catRect.bottom &&
      figureRect.bottom > catRect.top
    );
  });

  if (touchingCat) {
    figureHasReachedCat = true;
    juan.src = "images/juan-cropped.png";
  } else if (figureHasReachedCat) {
    juan.src = "images/juan-closed.png";
  }
}

window.addEventListener("scroll", changeJuan);
window.addEventListener("resize", changeJuan);