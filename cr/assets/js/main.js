//初期設定
set = new Array();

flag = 0;
seiseki = "";
cnt1 = 0;
cnt2 = 0;
blank = 500;


function f_start() {
	if (flag == 0) {
		//初期値
		set[1] = Math.floor( Math.random() * (10 + 1 - 4) ) + 4 ;
		set[2] = document.flash.set3.value;
		array1 = ["攻城ババ","ランバー","マジアチャ","インドラ","ゴースト","アイゴレ","ファイボ","ザップ"];
		array2 = ["ホグ","ウッド","スケルトン","アイスピ","ファイボ","アイゴレ","大砲","マスケ"];
		array3 = ["テスラ","クロス","ウッド","スケルトン","アイスピ","ファイボ","アイゴレ","マスケ"];

			for(i = array1.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var tmp = array1[i];
			array1[i] = array1[j];
			array1[j] = tmp;
}
		count = 0;
		document.flash.b_start.disabled = true;
		kotae = 0;

		//タイマー処理
		f_count();
	} else {
		f_kotae();
	}
}

function f_count() {
	count++;
	//乱数の生成
	var r = Math.random();
	r = Math.floor( Math.random() * 4 );
	//数値の表示
	p = array1[r] ;
	document.flash.number.value = p;
	array1.splice( r, 1 );
	array1.push( p );

	timerID = setTimeout('f_blank()',set[2]*1000 - 500);
}

function f_blank() {
	//空白表示
	document.flash.number.value = "";
	if (set[1] == count) {
		f_clear();
	} else {
		timerID = setTimeout('f_count()',blank);
	}
}

function f_clear() {
	//タイマー停止
	clearInterval(timerID);
	document.flash.b_start.disabled = false;
	document.flash.b_start.value = "解答表示";
	flag = 1;
}

function f_kotae() {
	//答えの表示
	document.flash.number.value = array1.slice(0, 4) ;
	
	//初期化
	document.flash.b_start.value = "スタート";
	flag = 0;
}

function getComma(num) {
	num = new String(num).replace(/,/g, "");
	while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
	return num;
}