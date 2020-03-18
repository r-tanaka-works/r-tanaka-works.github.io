var qa = [
  ['紙幣、貨幣', 1],
  ['他人振出小切手', 1],
  ['送金小切手', 1],
  ['送金為替手形', 1],
  ['預金手形', 1],
  ['郵便為替証書', 1],
  ['振替貯金払出証書', 1],
  ['支払期日到来の公社債利札', 1],
  ['配当金領収書', 1],
  ['期日未到来の公社債利札', 2],
  ['収入印紙', 2],
  ['郵便切手', 2],
  ['未渡小切手', 2],
  ['自己振出小切手', 2],
  ['先日付小切手', 2]
];

var count = 0;
var correctNum = 0;
var p =""

window.onload = function() {
  // 最初の問題を表示
  var question = document.getElementById('question');
  question.innerHTML =  qa[count][0] + "は現金";
};

// クリック時の答え判定
function hantei(btnNo) {
  if (qa[count][1] == btnNo) {
  var tf = document.getElementById('tf');
  tf.innerHTML = p;
  } else {
  var tf = document.getElementById('tf');
  	if (qa[count][1] == 1){
  	p = p + "<br><br>" + qa[count][0] + "は現金である。" ;
  	tf.innerHTML = p;
  	}
  	if (qa[count][1] == 2){
  	p = p + "<br><br>" + qa[count][0] + "は現金ではない。" ;
  	tf.innerHTML = p;
  	}
  }


  // 次の問題表示
  count = Math.floor( Math.random() * 15 + 1 ) ;
  var question = document.getElementById('question');
  question.innerHTML = qa[count][0] + "は現金?";
}