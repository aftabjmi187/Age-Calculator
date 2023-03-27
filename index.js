
function calculate() {
   let date = document.getElementById("dateField").value;
   let month = document.getElementById("monthField").value;
   let year = document.getElementById("yearField").value;
   if (date > 31) {
      alert("input valid date");
      return;
   }
   //parse
   let dob = new Date(`${date} ${month} ${year}`);
   console.log(dob)
   //current date Now
   let dateNow = new Date();
   let diffrence = dateNow - dob;// will give outpun in miliseconds
   //now convert into days
   let days = Math.round((diffrence / (1000 * 60 * 60 * 24)));
   console.log(days);
   window.alert("your Age is " + convertDaysToYearsMonthsDays(days));
   //converting funtion 
   function convertDaysToYearsMonthsDays(days) {
      const year = 365;
      const month = 30;
      const years = Math.floor(days / year);
      const remainingDaysAfterYears = days % year;
      const months = Math.floor(remainingDaysAfterYears / month);
      const daysLeft = remainingDaysAfterYears % month;
      return `${years} years, ${months} months, ${daysLeft} days`;
   }
   let result=convertDaysToYearsMonthsDays(days);
   document.getElementById("outputFeild").innerHTML=result;

}