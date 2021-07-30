function getName(){
  var year=document.getElementById("Year").value; 

  var month=document.getElementById("Month").value; 

  var day=document.getElementById("Day").value; 

  var male=document.getElementById("male").checked;

  var female=document.getElementById("female").checked;
  var firstName=document.getElementById("fname").value

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
  
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 

  var birthDate = new Date(day+ '/' +month + '/' + year);

  var dayOfTheWeek = birthDate.getDay(); 

  if (day <= 0 || day > 31) { 
  console.log("Please enter a valid date!");
  }

  
  else if ((month === "September" || month === "April" || month === "June" || month === "November") && (day <= 0 || day > 30)) { 
      console.log("Please enter a valid date!");
  }

  else if ((month === "February") && (day <= 0 || day > 29) && (year %4 ==0)) {
  console.log("Please enter a valid date!");
  }

  else if ((month === "February") && (day <= 0 || day > 28) && (year %4 !=0)) {
  console.log("Please enter a valid date!")

  }
  else if (month === "------") {
  console.log("Please select a month!") 
  }

  else if (year < 1900 || year > 2021) { 
      console.log("Please enter a valid year!") 
  }
 
  else if ((female === false) && (male === false)) { 
  console.log("Please select gender!")

}

  else if (male === true) { 
      document.getElementById("akanName").innerHTML ="Hello" + " " + firstName + " " + "You were born on a " + days[dayOfTheWeek] + ". " + " Your Akan name is " + maleNames[dayOfTheWeek] + "!"
  }

  else if (female === true) { 
      document.getElementById("akanName").innerHTML ="Hello" + " " + firstName + "" + "You were born on a " + days[dayOfTheWeek] + "." + " Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
  }   
}   