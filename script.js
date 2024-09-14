const recipeForm = document.getElementById('recipe-form');
const recipeList = document.getElementById('recipes');

recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const steps = document.getElementById('recipe-steps').value;
    
    const recipeItem = document.createElement('li');
    recipeItem.innerHTML = `<strong>${name}</strong><br>Ingredientes: ${ingredients}<br>Pasos: ${steps}`;
    
    recipeList.appendChild(recipeItem);
    
    recipeForm.reset();
});
