$(document).ready(function () {

    $("#getQuote").on("click", function () {
        $.getJSON("json/quotes.json", function (json) {
            var html = "";
            var htmlAuthor = "";
            var n = json.length;
            var index = Math.floor(Math.random() * n);
            html = '"'+json[index]["quote"]+'"';
            htmlAuthor = '&#151 ' + json[index]["author"];
            console.log(html);
            $(".quote").html(html);
            $(".author").html(htmlAuthor);
        });
    });
});
