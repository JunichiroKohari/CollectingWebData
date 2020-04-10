var client = require('cheerio-httpcli');
var URL = require('url');

// URLとパラメーター
var url = 'http://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C';
var param = {};
client.fetch(url, param, function (err, $, res) {
    if (err) {
        console.error('error:', err);
        return;
    }
    // リンクを抽出して表示
    $('img').each(function (idx) {
        var src = $(this).attr('src');
        src = URL.resolve(url, src);
        // 結果を表示
        console.log(src);
    })
});