

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
					 Milestone1Grade/100 * Milestone1Percent + 
					 FinalExamGrade/100 * FinalExamPercent

	document.getElementById("CurrentGrade").innerHTML = FinalGrade
}




