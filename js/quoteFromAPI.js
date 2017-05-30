$(document).ready(function () {
    function f(data) {
        var quote = '"' + data["quoteText"] + '"';
        quoteAuthor = '&#8212 ' + data["quoteAuthor"];
        console.log(quote);
        $(".quote").html(quote);
        $(".author").html(quoteAuthor);


        var shortenedQuote = quote;
        if (quote.length > 140) {
            shortenedQuote = shortenedQuote.substring(0, 138) + '\u2026' + '"';
        }
        var message = encodeURI(shortenedQuote);
        var tweetIntent = "https://twitter.com/intent/tweet?text=" + message;
        // set the Tweet button to link to the proper URL
        $('#tweet').attr('href', tweetIntent);
    }

    function getQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
            dataType: 'jsonp',
            jsonp: 'jsonp',
            success: f
        });
    }
    /*function getQuote() {
        $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp', f)
        }*/

    getQuote();

    $("#getQuote").on("click", function () {

        getQuote();

        //$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?', myCallback)
        /*
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
         if (xhttp.readyState == 4 && xhttp.status == 200) {
         // var quote = xhttp.responseXML.getElementsByTagName('quoteText').childNodes[0].nodeValue;
         console.log(xhttp.responseXML);
         //$(".quote").html(xhttp.quote);
         }
         };
         xhttp.open("GET", "https://jsonp.afeld.me/?url=http://api.forismatic.com/api/1.0/?method=getQuote&format=xml&lang=en", true);
         xhttp.send();
         */


    });
});
