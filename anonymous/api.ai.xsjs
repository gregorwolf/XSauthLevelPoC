var bookstore = $.import("de.linuxdozent.gittest.anonymous", "bookstore");var speech;var apiResponse = {    "speech": "",    "displayText":""};$.response.contentType = "application/json";if($.request.method === $.net.http.POST) {    var content = $.request.body.asString();    var request = JSON.parse(content);    if(request.result.action === "ListBooks") {        var books = bookstore.readBooks();        if(books.length > 0) {            speech = "Wir führen: ";            var arrayLength = books.length;            for (var i = 0; i < arrayLength; i++) {                speech += books[i].BookTitle + " ";            }        } else {            speech = "Leider sind noch keine Bücher gelistet.";        }        apiResponse.speech = speech;        apiResponse.displayText = speech;        $.trace.error("Response: " + speech);    }    $.response.setBody(JSON.stringify(apiResponse));}