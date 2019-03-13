$(document).ready(function () {


    //Declare our variables 
    var correct = 0;
    var incorrect = 0;
    var time = 120;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1200);
    }

    function decrement() {
        time--;
        $("#timer").text(time);
        //when time is over display correct, incorrect, unaswered
        if (time === 0) {
            $("form").css("display", "none");
            $("#gameOver").css("display", "block");
            $("#correctCounter").text(correct);
            $("#incorrectCounter").text(incorrect);
        }
    }
    //on button click 
    $("#start").on("click", function () {
        //display the qustions 
        $(this).css("display", "none");
        $("form").css("display", "block");
        //start the timer
        run();

    })

    $("#done").on("click", function (event) {
        event.preventDefault();
        $("form").css("display", "none");
        $("#gameOver").css("display", "block");
        $("#correctCounter").text(correct);
        $("#incorrectCounter").text(incorrect);
        
        
    })

    $("input").on("click", function(){
        var inputValue = $(this);
        if (inputValue.val() === "incorrect"){
            incorrect++;
            $(this).parents("#question").nextAll();
        }
        else {
            correct++;
            $(this).parents("#question").nextAll();''            
        }
       
        
    })





})