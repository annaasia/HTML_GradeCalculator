function CalculateGrade() {
  var ParticipationPercent = parseInt(document.getElementById("PercentageGrade").innerHTML);
  var MidtermPercent = parseInt(document.getElementById("MidtermGrade").innerHTML);
  var Milestone1Percent = parseInt(document.getElementById("Milestone1Grade").innerHTML);
  var Milestone2Percent = parseInt(document.getElementById("Milestone2Grade").innerHTML);
  var FinalExamPercent = parseInt(document.getElementById("FinalExamGrade").innerHTML);
}

var ParticipationGrade = parseFloat(document.getElementById("MyParticipationGrade").value);
var MidtermGrade = parseFloat(document.getElementById("MyMidtermGrade").value);
var Milestone1Grade = parseFloat(document.getElementById("MyMilestone1Grade").value);
var Milestone2Grade = parseFloat(document.getElementById("MyMilestone2Grade").value);
var FinalExamGrade = parseFloat(document.getElementById("MyFinalExamGrade").value);

var FinalGrade = MyParticipationGrade/100 * ParticipationPercent + MyMidtermGrade/100 * MidtermPercent + MyMilestone1Grade/100 * Milestone1Grade + MyFinalExamGrade/100 * FinalExamPercent

document.getElementById("CurrentGrade").innerHTML = CurrentGrade
