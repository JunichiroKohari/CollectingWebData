var client = require('cheerio-httpcli');

var url = 'http://www.aozora.gr.jp/index_pages/person81.html';
var param = {};
client.fetch(url, param, function (err, $, res) {
    if (err) {
        console.error('error:', err);
        return;
    }
    // リンクを抽出して表示
    $('a').each(function (idx) {
        var txt = $(this).text();
        var href = $(this).attr('href');
        console.log(txt + ':' + href);
    })
});