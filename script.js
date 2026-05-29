/*
	setInterval을 사용하여
	wally의 키가 계속 크도록 만드세요.

	만약 wally의 키가 210이 된다면 원래대로 되돌아오도록 만드세요.
	키 Default값 160

*/

var key = 160;

function update(){
	key++;
	document.getElementById('leg').style.height = key + 'px';

	if(key == 210){
		key = 160;
	}
}

setInterval(update, 100);