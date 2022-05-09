const number = document.querySelectorAll(".item");
const button = document.querySelector(".btn");
const submit = document.querySelector(".container");
const rating = document.querySelector(".rating");
const numberRating = document.querySelector("#number-rating");

number.forEach((item) => {
  item.addEventListener("click", (Event) => {
    for (const each of number) {
      if (each.classList.contains("item-background")) {
        each.classList.remove("item-background");
      }
    }
    Event.target.classList.add("item-background");
    numberRating.textContent = Event.target.textContent;
  });
});
button.addEventListener("click", () => {
  submit.classList.add("remove");
});
button.addEventListener("click", () => {
  rating.classList.add("popup");

});

