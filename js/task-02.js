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
  return listElement;
})

ingredientsRoster.append(...ingredientsElements);
