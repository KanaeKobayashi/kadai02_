
//スタートボタンを押したら、音が鳴り、テキストが書き換わる
const button = document.getElementById("start_btn");
const text = document.getElementById("jankenpon");
const audio = document.getElementById("btn_audio");

button.addEventListener("click", function() {
  audio.play();
  text.innerHTML = "じゃん・けん・ぽん";
});

//配列にじゃんけんの選択肢を入れる
//jans[0]="グー",jans[1]="チョキ",jans[2]="パー"
const jans=["グー","チョキ","パー"]

const win=document.getElementById("win");
const lose=document.getElementById("lose");
//勝った回数をカウント
let winCount=0;
//負けた回数をカウントする変数を設定。初期値は０
let loseCount=0;

$('.btn').click(function(){
	// console.log("ボタン");
	//0か1か2の3つをランダムで選択（0がグー、1がチョキ、2がパー）。scoreに代入。
	//マジカルナンバーを避けるためjansの配列数を代入
	var score = Math.floor(Math.random()*jans.length);
	//scoreに値が入っているか確認
	// console.log(score);
	//クリックしたbtnのdata-scoreの値を取得。userに代入。
	var user = $(this).attr('data-score');
	//userに値が入っているか確認
	// console.log(user);
	//ユーザーが選んだグーチョキパーの画像を表示
	$('#g_btn_str_you').html('<img src="img/janken_'+ user + '.png" />');
	//コンピュータの選んだグーチョキパーの画像を表示
	$('#g_btn_str_con').html('<img src="img/janken_'+ score + '.png" />');



//じゃんけん判定
	if(+user===+score){
		result_end = "あいこです";
		// console.log("あいこ");
	//プレイヤーが勝った場合
	}else if(+user===0 &&+score===1||+user===1 && +score=== 2||+user=== 2 &&+score=== 0 ){
	  result_end = "やったね、かちました！";
	//   console.log("勝ち");
	  //勝った回数に１プラス
	  winCount++;
	  //勝った回数をテキストに表示
	  $('#win').html(winCount);
	}else{
		result_end ="残念、まけです〜"
		// console.log("負け");
		//負けた回数に１プラス
		loseCount++;
		//負けた回数をテキストに表示
		$('#lose').html(loseCount);
	}
//結果をテキストで表示
	$('#g_resultArea').html(result_end+'！')
});



