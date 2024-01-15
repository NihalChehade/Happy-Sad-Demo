const h2 = document.querySelector("h2");

const toggle = setInterval(function () {
  if (h2.innerText === "HAPPY") {
    h2.innerText = "SAD";
  } else if (h2.innerText === "SAD") {
    h2.innerText = "HAPPY";
  }
  h2.classList.toggle("big");
  h2.classList.toggle("small");
}, 1000);
