const time_counter = document.getElementById('time_counter');
const word = document.getElementById('word');
const button = document.getElementById('button');
const input = document.getElementById('input');
const settime = document.getElementById('settime');
const score_counter = document.getElementById('score-counter');
const words = ['typing','youtube','word','minecraft','skyrim','programming','sally','sam','hand','student','head',
'pank','rock','bird','rain','terrain','school','study','book','face','work','facebook','book','ukraine',
'sound','paragon','overwatch','egor','letov','bald','john','sense','razer','mouse','keyboard','quite',
'search','reality','back','oblivion','math','history','mad','man','zoo','crazy','guy','element','time','paper',
'about','contact','may','april','july','october','november','summer','biology','chemistry','physics','education',
'teacher','cube','laptop','robot','legacy','steam','origin','throne','water','blender','car','theory','random',
'star','war','google','asia','america','europe','russia','usa','germany','spain','italy','china','japan','korea',
'rainbow','potato','melon','watermelon','piano','lamp','style','cup','watch','idea','paper','table','chair',
'thumb','desktop','score','event','interval','function','passive','active','cloud','cartoon','cat','dog',
'plane','ship','integration','disintegration','last','god','plank','simple','hard','normal','easy','language',
'staff','stuff','environment','start','finish','ask','reward','task','transition','spanish','english',
'russian','country','state','electron'];

let score = 0;
let time = 60;

button.addEventListener('click', function(){
	if (time === 60){
		word.innerHTML = words[Math.floor(Math.random() * words.length)];
		input.style.display = 'block';
		button.style.display = 'none';
		let Interval = setInterval(function(){
			if (time > 0) {
				time--;
				time_counter.innerHTML = `${time.toString()} s`;
				input.oninput = function(){
					if (input.value === word.innerHTML) {
						word.innerHTML = words[Math.floor(Math.random() * words.length)];
						input.value = '';
						score += 1;
						score_counter.innerHTML = score;
					}
				}
			}else if(time === 0) {
				alert('Your score is ' + score);
				score_counter.innerHTML = '0';
				time_counter.innerHTML = "60 s";
				time = 60;
				score = 0;
				word.innerHTML = '';
				input.value = '';
				input.style.display = 'none';
				button.style.display = 'block';
				clearInterval(Interval);
			}
		},1000);
	}
});