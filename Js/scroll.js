var backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if (!backToTopButton.classList.contains("visible")) {
      backToTopButton.classList.remove("invisible");
      backToTopButton.classList.add("visible");
      backToTopButton.setAttribute("aria-hidden", "false");
    }
  } else {
    if (backToTopButton.classList.contains("visible")) {
      backToTopButton.classList.remove("visible");
      backToTopButton.classList.add("invisible");
      backToTopButton.setAttribute("aria-hidden", "true");
    }
  }
}

backToTopButton.addEventListener("click", backToTopFunction);

function backToTopFunction() {
  window.scrollTo(0, 0);
  backToTopButton.classList.add("trans");
}