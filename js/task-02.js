const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRoster = document.querySelector('#ingredients');
const ingredientsElements = ingredients.map((ingredient) =>{
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  listElement.classList.add('item');
  listElement.classList.add('font');
  return listElement;
})
ingredientsRoster.append(...ingredientsElements);

const paragElements = ingredients.map((ingredient) =>{
const paragElement = document.createElement('h1');
  paragElement.textContent = `Hello, I am ${ingredient}`;
  paragElement.classList.add('font');
  return paragElement;
})
ingredientsRoster.append(...paragElements);