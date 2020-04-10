// urlにあるファイルをsavepathにダウンロードする

// ダウンロード元URLの指定
var url = 'http://kujirahand.com/';
// ダウンロード
download(
    "http://www.aozora.gr.jp/index_pages/person81.html",
    "miyazawakenji.html",
    function () {
        console.log("ok, kenji");
    }
);
download(
    "http://www.aozora.gr.jp/index_pages/person148.html",
    "natumesoseki.html",
    function () {
        console.log("ok, soseki");
    }
);

function download(url, savepath, callback) {
    // 利用モジュールの取り込み
    var http = require('http');
    var fs = require('fs');    
    // 出力先を指定
    var outfile = fs.createWriteStream(savepath);

    // 非同期でURLからファイルをダウンロード
    http.get(url, function(res) {
        res.pipe(outfile);
        res.on('end', function() {
            outfile.close();
            console.log('ok(๑˃̵ᴗ˂̵)');
        });
    })
}