//text on book covers
var coverBooks = [
    {
        title: "Giver",
        author: "Dude",
        stars: 4,
        x: 13, y: 15
    },
    {
        title: "Dune",
        author: "Guy",
        stars: 5,
        x: 94, y: 15
    },
    {
        title: "Fish",
        author: "Captiain",
        stars: 2,
        x: 175, y: 15
    },
];

var spineBooks = [
    {   title: "Hunt",
        author: "Wild",
        stars: 1,
        x: 260, y: 20
    },
    {   title: "Moon",
        author: "Hole",
        stars: 1,
        x: 260, y: 51
    },
    {   title: "Climb",
        author: "On",
        stars: 1,
        x: 260, y: 30
    }
];
    
    
// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

//draw book bodies title cover
var drawBook = function(coverBook)
{
    var bookX = coverBook.x;
    var bookY = coverBook.y;
    fill(199, 4, 199);
    rect(bookX, bookY, 78, 96);
    fill(5, 4, 4);
    textSize(17);
    text(coverBook.title, bookX+6, bookY+20);
    textSize(13);
    text(coverBook.author, bookX+5, bookY+40);   


};

//draw book spines
var drawSpine = function(spineBook)
{
    var spineX = spineBook.x;
    var spineY = spineBook.y;
    fill(13, 0, 255);
    rect(spineX, spineY, 114, 22);
   
     
};

for (var i = 0; i < coverBooks.length; i++){
    drawBook(coverBooks[i]);
}

for (var i = 0; i < drawSpine.length; i++){
    drawSpine(spineBooks[i]);
 
     
}