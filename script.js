//setting the current maximum mastery in Trove
var maxMastery=300

//setting up an array to hold the experience required per level and the total experience required to get to that point
var experienceRequiredPerLevel = []
var totalExperienceRequiredPerLevel = []
var i;
for (i=0; i < maxMastery; i++) {
	if (i <5 )
		experienceRequiredPerLevel[i]= 25;
	elseif(i < 10)
		experienceRequiredPerLevel[i]=50;
	elseif(i < 20)
		experienceRequiredPerLevel[i]=75;
	else
		experienceRequiredPerLevel[i]=100;
	if (i !=0)
		totalExperienceRequiredPerLevel[i]=totalExperienceRequiredPerLevel[i-1]+experienceRequiredPerLevel[i];
}

//Providing the Experience level cx is at
experienceCalculate = function()
{
	var level = document.getElementById("level").value;
	var currentExp = document.getElementById("currentExp").value;
	var totalXp = totalExperienceRequiredPerLevel[level-1] + currentExp;
	return totalXp;
}

//To Do: function to provide level from total xp
