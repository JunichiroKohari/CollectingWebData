var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var URL = require('url');

// ダウンんロード先のディレクトリを作る
var savedir = __dirname + '/img';
if (!fs.existsSync(savedir)) {
    fs.mkdirSync(savedir);
}

// URLとパラメーター
var url = 'http://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C';
var param = {};

client.fetch(url, param, function (err, $, res) {
    if (err) {
        console.error('error:', err);
        return;
    }
    // 画像を抽出して表示
    $('img').each(function (idx) {
        var src = $(this).attr('src');
        src = URL.resolve(url, src);

        // 保存先のファイル名を作成
        var fname = URL.parse(src).pathname;
        fname = savedir + '/' + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');
        // ダウンロード
        request(src).pipe(fs.createWriteStream(fname));
    })
});