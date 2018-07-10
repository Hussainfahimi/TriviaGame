var questions = [{
	ques: "In which state is UC Davis univercity exist?",
	ans: ["Alabama", "California", "Edlaware", "Alaska"],
	name: "UcDavis",
	correct: "California",
	divClass: ".UcDavis"
},
{
	ques: "How much will cost UC Davis tuitition for resident living On-campus?",
	ans: ["$5000", "$12876", "$16563", "$14463"],
	name: "cost",
	correct: "$14463",
	divClass: ".cost"
},
{
	ques: "How many majors does UC Davis teaching?",
	ans: ["300", "200", "102", "80"],
	name: "majors",
	correct: "102",
	divClass: ".majors"
},
{
	ques: "How many students enrolled in UC Davis?",
	ans: ["33418", "22458", "35415", "45420"],
	name: "students",
	correct: "35415",
	divClass: ".students"
},
{
	ques: "UC Davis’ endowment reached $1 billion?",
	ans: ["2015", "2010", "1990", "2004"],
	name: "endowment",
	correct: "2015",
	divClass: ".endowment"
},
{
	ques: "Who is the CEO of UC Davis?",
	ans: ["Phil Knight", "Bill Bowerman", "Ann Madden Rice", "Hidefumi Hommyo"],
	name: "ceo",
	correct: "Ann Madden Rice",
	divClass: ".ceo"
},
{
	ques: "When the UC Davis campus had grown to 1,000 acres?",
	ans: ["2000", "1987", "1995", "1930"],
	name: "acres",
	correct: "1930",
	divClass: ".acres"
},
{
	ques: "One of the following person is a UC Davis best professor. Who is that?",
	ans: ["Hussain Fahimi", " Christiana Drake", "Mujtaba Elia", "Hazrat Najafi"],
	name: "professor",
	correct: "Christiana Drake",
	divClass: ".professor"
},
{
	ques: "Who recently recievied the Lily von Klemperer Award ?",
	ans: ["Jose", "Ron", "Zachary Zak", "Josh"],
	name: "award",
	correct: "Zachary Zak",
	divClass: ".award"
},
{
	ques: "What is the position of UC Davis in the Times Higher Education World Reputation rankings?",
	ans: ["eighty two", "twenty", "thirty four", "forty seven"],
	name: "position",
	correct: "forty seven",
	divClass: ".position"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
	$(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
	$('.container').fadeOut(500);
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unAnswered = 0;

	// loop through correctArray & radioName to match html elements & answers
	for (var i = 0; i < 10; i++) {

		if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

			correctAnswers++;
			console.log("this is correct! number:" + i)
		} else {
			wrongAnswers++;
			console.log("this is wrong! number:" + i)
		};
	}
	$('#correctTimesUp').append(correctAnswers);
	// display wrongAnswers
	$('#wrongTimesUp').append(wrongAnswers);
	$('#timesUp').fadeIn(1000).show();

	// alert("Times Up!");
	clearInterval(timer);
	return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

	correctAnswers++;
} else {
	wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz
