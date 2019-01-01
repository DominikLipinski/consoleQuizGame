(()=> {

    var score = 0;

    var Question = function(newQuestion, answers, theAnswer) { 
        this.newQuestion = newQuestion,
        this.answers = answers,
        this.theAnswer = theAnswer,

        this.asking = function(){
            console.log(newQuestion);
            for (var i=0;i<answers.length;i++){
                console.log(answers.indexOf(answers[i]) +': '+ answers[i]);
            }
            var answer = prompt(newQuestion + ' -please type number of correnct answer.')
            return answer;
        },

        this.verify = function(answer){
            console.log('Your answer is: ' + answer);
            if(answer == 'exit' ) {
                console.log('Thank you for playing. Your score is: ' +score);
                return;
            } else if (answer==theAnswer) {
                score++;
                console.log('Great! Your answer is correct. Your score is: ' +score);
            }
            else {
                console.log('Sad face! This is not a correct answer. Your score is: ' +score);
            }
        }
    };


    var q1 = new Question('How many sexes there are?', [3, 12, 2, 5], 2);
    var q2 = new Question('How many gods there are?', [1,2,3], 1);
    var q3 = new Question('Who let the dogs out?', ['you', 'she', 'he', 'me'], 'me');
    var q4 = new Question('Better pierogi or hamburgers?', ['pierogi', 'hamburgers'], 'pierogi');
    var allQuestions = [q1, q2, q3, q4];
    
    function run() {
        var nextQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        var answer = nextQuestion.asking();
        nextQuestion.verify(answer);
        if(answer!=='exit'){
            run();
        }
    }

    run();

})();

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends 
(Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. 
So include the option to quit the game if the user writes 'exit' instead of the answer. 
In this case, DON'T call the function from task 8.
+ 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, 
but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/


/*
--- Let's build a fun quiz game in the console! ---
+ 1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
+ 2. Create a couple of questions using the constructor
+ 3. Store them all inside an array
+ 4. Select one random question and log it on the console, together with the possible answers 
(each question should have a number) (Hint: write a method for the Question objects for this task).
+ 5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).
+ 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

