function checkGrade (evt) {
var Grade = parseFloat(evt.currentTarget.value);

  if (Grade > 100 || Grade <0) {
    console.log("Wrong Value")
    evt.currentTarget.style.color = "red"
  }
}

function CalculateGrade() {
	var ParticipationPercent = parseInt(document.getElementById("ParticipationGrade").innerHTML);
	var MidtermPercent = parseInt(document.getElementById("MidtermGrade").innerHTML);
	var Milestone1Percent = parseInt(document.getElementById("Milestone1Grade").innerHTML);
	var Milestone2Percent = parseInt(document.getElementById("Milestone2Grade").innerHTML);
	var FinalExamPercent = parseInt(document.getElementById("FinalExamGrade").innerHTML);

	var ParticipationGrade = parseFloat(document.getElementById("MyParticipationGrade").value);
	var MidtermGrade = parseFloat(document.getElementById("MyMidtermGrade").value);
	var Milestone1Grade = parseFloat(document.getElementById("MyMilestone1Grade").value);
	var Milestone2Grade = parseFloat(document.getElementById("MyMilestone2Grade").value);
	var FinalExamGrade = parseFloat(document.getElementById("MyFinalExamGrade").value);

	var FinalGrade = ParticipationGrade/100 * ParticipationPercent + 
					 MidtermGrade/100 * MidtermPercent + 
					 Milestone1Grade/100 * Milestone1Percent + Milestone2Grade/100 * Milestone2Percent+
					 FinalExamGrade/100 * FinalExamPercent

	document.getElementById("CurrentGrade").innerHTML = FinalGrade
}


function LetterGrade() {
  var ParticipationPercent = parseInt(document.getElementById("ParticipationGrade").innerHTML);
  var MidtermPercent = parseInt(document.getElementById("MidtermGrade").innerHTML);
  var Milestone1Percent = parseInt(document.getElementById("Milestone1Grade").innerHTML);
  var Milestone2Percent = parseInt(document.getElementById("Milestone2Grade").innerHTML);
  var FinalExamPercent = parseInt(document.getElementById("FinalExamGrade").innerHTML);

  var ParticipationGrade = parseFloat(document.getElementById("MyParticipationGrade").value);
  var MidtermGrade = parseFloat(document.getElementById("MyMidtermGrade").value);
  var Milestone1Grade = parseFloat(document.getElementById("MyMilestone1Grade").value);
  var Milestone2Grade = parseFloat(document.getElementById("MyMilestone2Grade").value);
  var FinalExamGrade = parseFloat(document.getElementById("MyFinalExamGrade").value);

  var FinalGrade = ParticipationGrade/100 * ParticipationPercent + 
            MidtermGrade/100 * MidtermPercent + 
            Milestone1Grade/100 * Milestone1Percent + Milestone2Grade/100 * Milestone2Percent +
            FinalExamGrade/100 * FinalExamPercent

if (FinalGrade <= 100 && FinalGrade >=93) {letter_grade = "A"}
if (FinalGrade < 93 && FinalGrade >=90) {letter_grade = "A-"}
if (FinalGrade < 90 && FinalGrade >=83) {letter_grade = "B"}
if (FinalGrade < 83 && FinalGrade >=80) {letter_grade = "B-"}
if (FinalGrade < 80 && FinalGrade >=73) {letter_grade = "C"}
if (FinalGrade < 73 && FinalGrade >=70) {letter_grade = "C-"}
if (FinalGrade < 70 && FinalGrade >=63) {letter_grade = "D"}
if (FinalGrade < 63 && FinalGrade >=60) {letter_grade = "D-"}
if (FinalGrade <60) {letter_grade = "F"}

  var print = document.getElementById('YourLetterGrade');
            print.innerHTML= letter_grade;
}
