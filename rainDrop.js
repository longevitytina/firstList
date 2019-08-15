var xPositions = [0]; 
var yPositions = [0];


draw = function() {
    background(204, 247, 255);
    var randomX = random(0, 400);
    xPositions.push(randomX);
    yPositions.push(0);
    
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(24, 30, 143);
        ellipse(xPositions[i], yPositions[i] % 400, 10, 10);
        image(getImage("avatars/mr-pink"), xPositions[i], yPositions[i] % 400, -26, 21);
        yPositions[i] += 1;
    }
    
};

//1.What do I want to repeat?
//raindrops
//2.what do I want to change each time?
//position of drop starting point x-axis
//3.How long should it repeat? Continuous

