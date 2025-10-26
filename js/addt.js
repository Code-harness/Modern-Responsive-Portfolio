// nav_toggle js

const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector("nav ul");
menuBtn.onclick = () => {
  if (navList.style.display === "flex") {
    navList.style.display = "none";
  } else {
    navList.style.display = "flex";
  }
};

// faq_toggle js

const faqItems = document.querySelectorAll(".faq_item");

faqItems.forEach((item) => {
  item.querySelector("h3").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
