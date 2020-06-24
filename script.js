const time_counter = document.getElementById('time_counter');
const word = document.getElementById('word');
const button = document.getElementById('button');
const input = document.getElementById('input');
const settime = document.getElementById('settime');
const words = ['typing','youtube','word','minecraft','skyrim','programming','sally','sam','hand','student','head',
'pank','rock','bird','rain','terrain','school','study','book','face','work','facebook','book','ukraine',
'sound','paragon','overwatch','egor','letov','bald','john','sense','razer','mouse','keyboard','quite',
'search','reality','back','oblivion','math','history','mad','man','zoo','crazy','guy','element','time','paper',
'about','contact','may','april','july','october','november','summer','biology','chemistry','physics','education',
'teacher','cube','laptop','robot','legacy','steam','origin','throne','water','blender','car','theory','random',
'star','war','google','asia','america','europe','russia','usa','germany','spain','italy','china','japan','korea',
'rainbow','potato','melon','watermelon','piano','lamp'];;

let score = 0;
let time = 60;

button.addEventListener('click', function(){

word.innerHTML = words[Math.floor(Math.random() * words.length)];
let Interval = setInterval(function(){
	if (time > 0) {
		time--;
		time_counter.innerHTML = `${time.toString()} s`;
		input.oninput = function(){
			if (input.value === word.innerHTML) {
			word.innerHTML = words[Math.floor(Math.random() * words.length)];
			input.value = "";
			score += 1;
			}
		}
	}else if(time === 0) {
		time_counter.innerHTML = "60 s";
		time = 60;
		alert('Your score is ' + score);
		word.innerHTML = "";
		clearInterval(Interval);
	}
},1000);

});