//window.alert("hii")
/*setInterval(()=>{
  d=new Date();
  india.innerHTML=d.toLocaleString('en-US',{
  timezone:'Asia/Koltata'
}).split(',')[1]
*/

const usa = document.getElementById("usa");
const india = document.getElementById("india");
const dubai = document.getElementById("dubai");
const china = document.getElementById("china");
const albania = document.getElementById("albania");
const antractica = document.getElementById("antractica");

function updateTime() {
  const d = new Date();

  // Time in USA (America/New_York)
  usa.innerHTML = d.toLocaleString("en-US", {
    timeZone: "America/New_York",
  }).split(",")[1];

  // Time in India (Asia/Kolkata)
  india.innerHTML = d.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  }).split(",")[1];

  // Time in Dubai (Asia/Dubai)
  dubai.innerHTML = d.toLocaleString("en-US", {
    timeZone: "Asia/Dubai",
  }).split(",")[1];

  china.innerHTML = d.toLocaleString("en-US", {
    timeZone: "Asia/Urumqi",
  }).split(",")[1];
  albania.innerHTML = d.toLocaleString("en-US", {
    timeZone: "Europe/Tirane",
  }).split(",")[1];
  antractica.innerHTML = d.toLocaleString("en-US", {
    timeZone: "Antarctica/DumontDUrville",
  }).split(",")[1];
}

setInterval(updateTime, 1000);