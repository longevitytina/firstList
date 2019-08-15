var recipeTitle = "Marc's Quinoa";
var recipe = {
    title: "Marc's Quinoa",
    servings: 10,
    ingredients: ["Quinoa", "Water", "Veggies" ]

};

fill(26, 26, 26);
textSize(20);
text(recipe.title, 10, 23);
text("Serves: " + recipe.servings, 10, 55);
text("Ingredients: " + recipe.ingredients, 10, 85);

var paintBrush = {
    x: 130,
    y: 126,
    img: getImage("avatars/duskpin-seed")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};


mouseMoved = function() {
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
    paintCanvas();
};
