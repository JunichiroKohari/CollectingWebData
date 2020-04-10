var client = require('cheerio-httpcli');
var URL = require('url');

// URLとパラメーター
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
        if (!href) return;
        // 相対パスを絶対パスに直す
        var hrefAbsolutely = URL.resolve(url, href);
        // 結果を表示
        console.log(txt + ':' + href);
        console.log('  => ' + hrefAbsolutely + '\n');
    })
});