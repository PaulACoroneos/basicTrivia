// Import game questions, answers and photo name from csv file
//parse the data file
// var csvfile = "assets/data/ffquiz.csv";

// $.get(csvfile, function (data) {
//     var csvdata = Papa.parse(data);
//     console.log(csvdata);
// });

// // loop through data object and append containers with questions to page
// for(var i=0; i<data.length; i++)
// {
//     $("<div class='row'></div>").appendTo("#questions");
// }
$( document ).ready(function() {

    //start the timer
    $(".game-display").text("Time remaining: ");
    setTimeout(triviaGame, 3000)

    function triviaGame() {
        //define global vars for game
        var correct =0;
        var incorrect =0;

        var trivia = [ 
        {question:"What is the name of the Garden Squall trains at in Final Fantasy VIII?",answer1:"Balamb Garden",answer2:"Galbadia Garden",answer3:"Secret Garden",answer4:"Esther Garden",rightanswer:"1",imgurl:"balamb",},
        {question:"What is the name of the sports game Tidus plays in Final Fantasy X?",answer1:"Triple Triad",answer2:"Gwent",answer3:"Blitzball",answer4:"Crossfire",rightanswer:"3",imgurl:"blitzball"},
        {question:"What is the name of the feathered bird players ride in the final fantasy series?",answer1:"Tonberry",answer2:"Chocobo",answer3:"Cactuar",answer4:"Moogle",rightanswer:"2",imgurl:"chocobo"},
        {question:"What is the secret name of the princess in Final Fantasy IX?",answer1:"Rinoa",answer2:"Dagger",answer3:"Quistis",answer4:"Sera",rightanswer:"2",imgurl:"dagger"},
        {question:"What is Squall's weapon type in Final Fantasy VIII",answer1:"Chain whip",answer2:"Gun Blade",answer3:"Heavy Sword",answer4:"Blitz Ball",rightanswer:"2",imgurl:"gunblade"},
        {question:"What is the name of the group that protects Noctis in Final Fantasy XV?",answer1:"The Galbadia Red",answer2:"Order of the Rose",answer3:"Guardians of the Crown",answer4:"Kingsguard",rightanswer:"4",imgurl:"kingsguard"},
        {question:"What is Squall's final limit break in Final Fantasy VIII called?",answer1:"Grand Finale",answer2:"Lionheart",answer3:"Armageddon",answer4:"Chain of memories",rightanswer:"2",imgurl:"lionheart"},
        {question:"Which of the following is NOT a type of mage?",answer1:"Black mage",answer2:"Purple mage",answer3:"White mage",answer4:"Red mage",rightanswer:"2",imgurl:"vivi"},
        {question:"The Mage Masher in Final Fantasy IX is a type of?",answer1:"two bladed staff",answer2:"twin blades",answer3:"crossbow",answer4:"staff",rightanswer:"2",imgurl:"magemasher"},
        {question:"Which of the following is a composer of Final Fantasy music?",answer1:"Koichi Sugiyama",answer2:"Nobout Uematsu",answer3:"Yasunori Mitsuda",answer4:"Jack Wall",rightanswer:"2",imgurl:"nobou"},
        {question:"Which of the following is NOT a Final Fantasy Summon?",answer1:"Doomtrain",answer2:"Shiva",answer3:"Quistis",answer4:"Ifrit",rightanswer:"3",imgurl:"quistis"},
        {question:"What is the flying ship in Final Fantasy VIII?",answer1:"Ragnarok",answer2:"Highwind",answer3:"Gallant",answer4:"Gallily",rightanswer:"1",imgurl:"ragnarok"},
        {question:"What is the name of Lightning's sister in Final Fantasy XIII?",answer1:"Serah",answer2:"Shannon",answer3:"Rinoa",answer4:"Garnet",rightanswer:"1",imgurl:"serah"},
        {question:"What is the name of the corporation in Final Fantasy VII",answer1:"Shinra",answer2:"Mako",answer3:"Reliant",answer4:"Biggs",rightanswer:"1",imgurl:"shinra"},
        {question:"Who is the lead character of Final Fantasy VIII?",answer1:"Squall",answer2:"Rinoa",answer3:"Zidane",answer4:"Kefka",rightanswer:"1",imgurl:"squall"},
        ];


        //now let's setup the game

        //if we are doing "display all format", dynamically fill page depending on question count (or passed trivia file). This is fully dynamic!!!

        for(var i=0; i< trivia.length; i++) {

            $("#questions").append('<div class="row col-12 pb-2 question-formatting border mb-2 mt-2"> ' +trivia[i].question + '</div>');   //add row with question content
            $("#questions").append('<div class="row question'+(i+1)+'"> </div>'); //create row for answers to be placed into

            //answer1
            $("#questions").find('.question'+(i+1)).append('<div class="col-3 div-question'+(i+1)+'-answer1">');    //generate div of size col-3
            $("#questions").find('.div-question'+(i+1)+'-answer1').append('<label for="q'+i+'">'+trivia[i].answer1+'</label>');    //create label for radial input
            $("#questions").find('.div-question'+(i+1)+'-answer1').append('<input type="radio" name="q'+i+'" value="1" />'); //create radial inoput attached to col-3 div

            //answer2
            $("#questions").find('.question'+(i+1)).append('<div class="col-3 div-question'+(i+1)+'-answer2">');    
            $(".question"+(i+1)).find('.div-question'+(i+1)+'-answer2').append('<label for="q'+i+'">'+trivia[i].answer2+'</label>');
            $(".question"+(i+1)).find('.div-question'+(i+1)+'-answer2').append('<input type="radio" name="q'+i+'" value="2" />');

            //answer3
            $("#questions").find('.question'+(i+1)).append('<div class="col-3 div-question'+(i+1)+'-answer3">');
            $("#questions").find('.div-question'+(i+1)+'-answer3').append('<label for="q'+i+'">'+trivia[i].answer3+'</label>');
            $("#questions").find('.div-question'+(i+1)+'-answer3').append('<input type="radio" name="q'+i+'" value="3" />');

            //answer4
            $("#questions").find('.question'+(i+1)).append('<div class="col-3 div-question'+(i+1)+'-answer4">');
            $("#questions").find('.div-question'+(i+1)+'-answer4').append('<label for="q'+i+'">'+trivia[i].answer4+'</label>');
            $("#questions").find('.div-question'+(i+1)+'-answer4').append('<input type="radio" name="q'+i+'" value="4" />');

        }

    $("form").submit(function(){
        if(timeoutID != 0)  //if timer isn't done
            finish_game();
    });
    if(timeoutID === 0) //if timer runs out before button pressed
        finish_game();

    function finish_game() {
        
        for(var i=0;i<trivia.length;i++)
        {
            var temp1 = $('input[name=q'+(i+1)+']:checked').val();
            var temp = trivia[i].rightanswer;
            console.log(temp1);
            if(trivia[i].rightanswer === 1) //does user entry for this question match answer?
                correct++;
            else
                incorrect++;
        }
        console.log(correct);
        console.log(incorrect);
    }
});