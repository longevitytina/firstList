
/*
(function() {

    function Question(question, answers, correct) {
        this.question = question; 
        this.answers = answers;
        this.correct = correct; 
    }

    Question.prototype.displayQuestion =
    function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correct){
            console.log('Correct answer!');
        } else {
            console.log('Wrong. Try Again')
        }
    }

    var q1 = new Question('Is pnut butter delicous?',
                            ['yes', 'no'], 0 );   

    var q2 = new Question('What\'s the name of teaher?',
                            ['John',
                            'Mike',
                            'Jonas'], 2);
    var q3 = new Question('What does best describe coding?',
                            ['Boring',
                            'Hard', 
                            'Fun', 
                            'Tedious'], 2);

    var questions = [q1, q2, q3];

    var n = Math. floor (Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt (prompt('Select correct answer.'));

    questions[n].checkAnswer(answer);

})();
*******************************************

(function() {

    function Question(question, answers, correct) {
        this.question = question; 
        this.answers = answers;
        this.correct = correct; 
    }

    Question.prototype.displayQuestion =
    function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correct){
            console.log('Correct answer!');
        } else {
            console.log('Wrong. Try Again')
        }
    }

    var q1 = new Question('Is pnut butter delicous?',
                            ['yes', 'no'], 0 );   

    var q2 = new Question('What\'s the name of teaher?',
                            ['John',
                            'Mike',
                            'Jonas'], 2);
    var q3 = new Question('What does best describe coding?',
                            ['Boring',
                            'Hard', 
                            'Fun', 
                            'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score(){
        var sc = 0;
        return function(correct){
            if (correct){
                sc++
            }
            return score;
        }
    }

    var keepScore = score();

    function nextQuestion(){
        
        var n = Math. floor (Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Select correct answer.');

        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer));
            nextQuestion();

        }

    }

    nextQuestion();
})();


************************************************/

//Write a program that counts from 1 to 20 in fizzbuzz fashion.
//To do so, loop from 1 to 20 (inclusive). Each time through,
// if the number is evenly divisible by 3, say ‘fizz’. 
// If the number is evenly divisible by 5, say ‘buzz’. 
// If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. 
// Otherwise, say the number.
//

//use random math function to select 1 to 20
//use a for loop, if else statments to print either fizz, buzz, fizzbuzz or number
//evenly divisible by 3 = divide by 3 === whole number

// var num = Math.floor(Math.random()* (20 - 1 + 1) + 1);

// function fizzbuzz(){
//     if (num % 3){
//         console.log( 'fizz')
//     } else if (num % 5){
//         console.log( 'buzz')
//     } else if (num === 15){
//         console.log( 'fizzbuzz')
//     } else {
//         console.log()
//     }

// }
// fizzbuzz(num);
//********************************************************** */
//Given a word, return True if that word contains only unique characters. Return False otherwise.
// has_unique_chars("Monday")
// True

// >>> has_unique_chars("Moonday")
// False

// >>> has_unique_chars("")
// True
// Uppercase and lowercase letters should be considered separately:

// >>> has_unique_chars("Bob")
// True

function hasUniqueChars(word){
//if word has no repeating characters, return true
//if word has repeating character, return false

}