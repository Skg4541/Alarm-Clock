var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
sound.loop = true
// sound.play();

for(let i=0;i<60;i++){
  console.log(document.getElementById("alamin"))
  document.getElementById("alamin").innerHTML += `<option value="${i}">${i}</option>`
  document.getElementById("alasec").innerHTML += `<option value="${i}">${i}</option>`
}

setInterval(function() {
  let a = new Date();
  let month = a.getMonth()+1;
  let year = a.getFullYear();
  let date = a.getDate();
  let hour = a.getHours();
  let ampm="";
  if(hour<12){
    ampm="AM"
  }
  else{
    hour=hour-12;
    ampm="PM"
  }
  let minutes = a.getMinutes();
  let seconds = a.getSeconds();
  let day = a.getDay();
  let dayofweek = "";
  switch (day) {
    case 0: dayofweek = "Sunday";
      break;
    case 1: dayofweek = "Monday";
      break;
    case 2: dayofweek = "Tuesday";
      break;
    case 3: dayofweek = "Wednesday";
      break;
    case 4: dayofweek = "Thursday";
      break;
    case 5: dayofweek = "Friday";
      break;
    case 6: dayofweek = "Saturday";
      break;
  }

  document.getElementById("Date2").innerHTML = (date.toString() + "/" + month.toString());
  document.getElementById("Day2").innerHTML = dayofweek;
  document.getElementById("Year2").innerHTML = year.toString();
  document.getElementById("Time2").innerHTML = (hour.toString() + ":" + minutes.toString() + ":" +
    seconds.toString()+" "+ampm);
}, 900)

alarm.addEventListener("click", (e) => {
  let a = new Date();
  
  let hr = document.getElementById('alahrs');
	let min = document.getElementById('alamin');
	let sec = document.getElementById('alasec');
	let ap = document.getElementById('ampm');
  let selectedHour = hr.options[hr.selectedIndex].value;
  let selectedMin = min.options[min.selectedIndex].value;
  let selectedSec = sec.options[sec.selectedIndex].value;
  let selectedAP = ap.options[ap.selectedIndex].value;
  let alarmTime =selectedHour + ":" + selectedMin + ":" + selectedSec +" "+ selectedAP;
  document.getElementById('alahrs').disabled = true;
	document.getElementById('alamin').disabled = true;
	document.getElementById('alasec').disabled = true;
	document.getElementById('ampm').disabled = true;
  
  setInterval(function() {
  let curtime = document.getElementById("Time2").innerHTML;
  if (alarmTime === curtime) {
    console.log("done")
		sound.play();
		}
  },500)
})


clear.addEventListener("click", (e) => {
  document.getElementById('alahrs').disabled = false;
	document.getElementById('alamin').disabled = false;
	document.getElementById('alasec').disabled = false;
	document.getElementById('ampm').disabled = false;
	sound.pause();
})