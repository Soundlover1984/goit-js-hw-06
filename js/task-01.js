const categoriesRoster = document.querySelector("#categories");
const categoriesItem = document.querySelectorAll(".item");
const categoriesCount = categoriesItem.length;

console.log(`Number of categories: ${categoriesCount}`);

categoriesItem.forEach ((item) => {
const categoriesTitle = item.querySelector("h2").textContent;
const categoriesElementCount = item.querySelectorAll("li").length;
console.log(`Category: ${categoriesTitle}`);
console.log(`Elements: ${categoriesElementCount}`);
});
