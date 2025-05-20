// write js code here if 
const updateTimer=()=>{
	let timer= document.getElementById("timer");
	let now = new Date();
	const day = String(now.getDate()).padStart(2,'0');
	const month= String(now.getMonth()+1).padStart(2,'0');
	const year= String(now.getFullYear());

	const hour= String(now.getHours()).padStart(2,'0');
	const sec= String(now.getSeconds()).padStart(2,'0');
	const min= String(now.getMinutes()).padStart(2,'0');

	const format=`${day}/${month}/${year}, ${hour}:${min}:${sec}`
	timer.textContent= format;
	
}
updateTimer();
setInterval(updateTimer, 1000);

