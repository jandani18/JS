document.addEventListener("DOMContentLoaded", () => {
    // Get elements from HTML
    const form = document.getElementById("recipe-form");
    const titleInput = document.getElementById("title");
    const ingredientsInput = document.getElementById("ingredients");
    const instructionsInput = document.getElementById("instructions");
    const cuisineSelect = document.getElementById("cuisine");
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter");
    const recipeList = document.getElementById("recipe-list");

    // Load recipes from localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Save recipes to localStorage
    function saveRecipes() {
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }

    // Display all recipes
    function displayRecipes(recipeArray = recipes) {
        recipeList.innerHTML = ""; // Clear existing list
        recipeArray.forEach((recipe, index) => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");

            recipeDiv.innerHTML = `
                <h3>${recipe.title}</h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

            recipeList.appendChild(recipeDiv);
        });

        // Add event listeners to edit and delete buttons
        document.querySelectorAll(".edit-btn").forEach(button => {
            button.addEventListener("click", () => editRecipe(button.dataset.index));
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", () => deleteRecipe(button.dataset.index));
        });
    }

    // Add a new recipe
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload

        // Get values from inputs
        const title = titleInput.value.trim();
        const ingredients = ingredientsInput.value.trim().split(",").map(i => i.trim());
        const instructions = instructionsInput.value.trim();
        const cuisine = cuisineSelect.value;

        if (!title || ingredients.length === 0 || !instructions) {
            alert("Please fill out all fields.");
            return;
        }

        // Add new recipe
        recipes.push({ title, ingredients, instructions, cuisine });
        saveRecipes();
        displayRecipes();
        form.reset();
    });

    // Edit a recipe
    function editRecipe(index) {
        const recipe = recipes[index];

        // Fill form fields with existing recipe data
        titleInput.value = recipe.title;
        ingredientsInput.value = recipe.ingredients.join(", ");
        instructionsInput.value = recipe.instructions;
        cuisineSelect.value = recipe.cuisine;

        // Remove the recipe from list
        recipes.splice(index, 1);
        saveRecipes();
        displayRecipes();
    }

    // Delete 
    function deleteRecipe(index) {
        recipes.splice(index, 1);
        saveRecipes();
        displayRecipes();
    }

    // Search recipes by ...
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
        );
        displayRecipes(filteredRecipes);
    });

    // Filter cuisine type
    filterSelect.addEventListener("change", () => {
        const selectedCuisine = filterSelect.value;
        const filteredRecipes = selectedCuisine ? 
            recipes.filter(recipe => recipe.cuisine === selectedCuisine) : 
            recipes;
        displayRecipes(filteredRecipes);
    });

    // Show all 
    displayRecipes();
});
