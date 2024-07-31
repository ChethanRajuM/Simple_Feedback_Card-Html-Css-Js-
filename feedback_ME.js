//! targeting elements
var first = document.getElementById("ficon");
var second = document.getElementById("sicon");
var third = document.getElementById("ticon");
var button = document.getElementById("btn");
var high = document.getElementById("h1");
var dis = document.getElementById("display");
var fcont = document.getElementById("hicon");
var cont = document.getElementById("container");

//! Unhappy
first.addEventListener("click", () => {
  first.style.backgroundColor = "red";
  first.style.color = "white";
  third.style.backgroundColor = "white";
  third.style.color = "black";
  second.style.backgroundColor = "white";
  second.style.color = "black";

  button.addEventListener("click", () => {
    first.style.visibility = "hidden";
    second.style.visibility = "hidden";
    third.style.visibility = "hidden";
    button.style.visibility = "hidden";
    high.innerHTML = "Thank You!";
    high.style.marginTop = "40px";
    dis.innerHTML = "Feedback : Unhappy";
    dis.style.marginTop = "40px";
    fcont.innerHTML =
      "We'll use your feedback to improve our customer support.";
    fcont.style.marginTop = "40px";
  });
});

//! Neutral
second.addEventListener("click", () => {
  second.style.backgroundColor = "blue";
  second.style.color = "white";
  first.style.backgroundColor = "white";
  first.style.color = "black";
  third.style.backgroundColor = "white";
  third.style.color = "black";

  button.addEventListener("click", () => {
    first.style.visibility = "hidden";
    second.style.visibility = "hidden";
    third.style.visibility = "hidden";
    button.style.visibility = "hidden";
    high.innerHTML = "Thank You!";
    high.style.marginTop = "40px";
    dis.innerHTML = "Feedback : Neutral";
    dis.style.marginTop = "40px";
    fcont.innerHTML =
      "We'll use your feedback to improve our customer support.";
    fcont.style.marginTop = "40px";
  });
});

//! Satisfied
third.addEventListener("click", () => {
  third.style.backgroundColor = "green";
  third.style.color = "white";
  second.style.backgroundColor = "white";
  second.style.color = "black";
  first.style.backgroundColor = "white";
  first.style.color = "black";

  button.addEventListener("click", () => {
    first.style.visibility = "hidden";
    second.style.visibility = "hidden";
    third.style.visibility = "hidden";
    button.style.visibility = "hidden";
    high.innerHTML = "Thank You!";
    high.style.marginTop = "40px";
    dis.innerHTML = "Feedback : Satisfied";
    dis.style.marginTop = "40px";
    fcont.innerHTML =
      "We'll use your feedback to improve our customer support.";
    fcont.style.marginTop = "40px";
  });
});
