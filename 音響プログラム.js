

//ClickCountを0にする（初期設定）
var ClickCount = 0;
var MusicCount = 0;

//ページ起動時
//File API に完全に対応しているかを確認
if (window.File && window.FileReader && window.FileList && window.Blob) {
} else {
    alert('お使いのブラウザがFile API に対応していないため使えません');
}

window.onload = function(){
    //ボタンをクリックしたことにする
    document.getElementById('tsuika').click();
}

//追加ボタンをクリックしたときの処理
function tsuikaClick() {
    //ClickCountCountを1増やす
    ClickCount++;

    //MusicCountを1増やして表示
    MusicCount++;
    var mp = document.getElementById("MusicCount");
    mp.innerHTML = "合計"+MusicCount+"音";

    //ClickCountを対応させる
    var DivID = 'card'+ClickCount;
    var FileID = 'InputFile'+ClickCount;
    var card =   '<div id='+DivID+' style="cursor:pointer" class="MusicBox" onMouseEnter="HoverHandler()">'+ClickCount+'<input type="file" id='+FileID+'><input type="button" value="音を削除" class="sakujo" id='+ClickCount+'></div>'

    //HTMLへ出力
    var tsuika = document.querySelector('.saisei');
    tsuika.insertAdjacentHTML('beforebegin',card);

    //削除ボタンがクリックされたときのプログラム
    $('.sakujo').on('click', function(){
        var NewButtonId =  $(this).attr("id");
        var element = document.getElementById('card'+NewButtonId); 
        element.remove();
        MusicCount--; //MusicCountを1減らす
        var mp = document.getElementById("MusicCount");
        mp.innerHTML = "合計"+MusicCount+"音";
    });
    
    //cardを自由に配置できるようにする
    $(function() {
        $('.MusicBox').draggable();
    });
};



function hozonClick() {
    var json = JSON.stringify(ClickCount);
};
