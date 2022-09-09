// For aside
const aside = document.querySelector(".aside-menu");
const asideOpen = document.querySelector("#aside-btn");
const asideClose = document.querySelector("#close-btn");

asideOpen.addEventListener("click", (e) => {
  aside.classList.add("show");
  asideOpen.classList.add("show");
});

asideClose.addEventListener("click", (e) => {
  aside.classList.remove("show");
  asideOpen.classList.remove("show");
});

// For category
const categories = [
  ...document.querySelectorAll(".all__categories__wrp__list__list-item"),
];

categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    categories.forEach((category) => {
      category.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// For responsive category
const btn = document.querySelector(".all__categories__menu__btn");
console.log(btn.classList);

btn.addEventListener("click", (e) => {
  if (btn.classList.contains("showMenu")) {
    btn.classList.remove("showMenu");
  } else {
    btn.classList.add("showMenu");
  }
  e.stopPropagation();
});

const listItems = [
  ...document.querySelectorAll("all__categories__menu__btn__list__list-item"),
];
listItems.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    console.log(e);
    // if (listItem.classList.contains("active")) {
    //   listItem.classList.remove("active");
    // } else {
    //   listItem.classList.add("active");
    // }
  });
});

// View all
const viewAllBtn = document.querySelector(".all__view-all__btn");
const extraCards = document.querySelector(".for-more");
const btnText = document.querySelector(".all__view-all__btn");

viewAllBtn.addEventListener("click", (e) => {
  let classes = extraCards.classList;
  if (classes.contains("view-all")) {
    classes.remove("view-all");
    btnText.textContent = "View All Products";
  } else {
    classes.add("view-all");
    btnText.textContent = "View Less Products";
  }
});

// Basket
const buttons = [...document.querySelectorAll(".basket")];
const basketCount = document.querySelector(
  ".navigation-bar__right__basket__count"
);

let data = localStorage.getItem("data-count");
let dataCount = data;

if (dataCount == null) {
  basketCount.textContent = "0";
} else {
  basketCount.textContent = dataCount;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    dataCount++;
    basketCount.textContent = dataCount;
    localStorage.setItem("data-count", dataCount);
  });
});
