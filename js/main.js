/**
 * Created by PhpStorm.
 * Author: Abdujalilov Dilshod
 * Telegram: https://t.me/coloterra
 * Web: http://www.websar.uz
 * Project: exchange
 * Date: 10.02.2020 20:36
 */

// "content_security_policy": "script-src 'self' https://nbu.uz/uz/exchange-rates/json/; object-src 'self'"

// $(function() {
//
//         var xmlhttp = new XMLHttpRequest();
//         var url = "http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-1.json";
//
//         xmlhttp.open("GET", url, true);
//         xmlhttp.send();
//         xmlhttp.onreadystatechange = function() {
//             if (xmlhttp.status == 200) {
//                 var result = xmlhttp.responseText;
//                 var jsResult = JSON.parse(result);
//                 console.log(jsResult);
//             }
//         }
// });

$.ajax({
    type: "GET",
    contentType: "text/plain; charset=utf-8",
    url: "https://nbu.uz/uz/exchange-rates/json/",
    data: "{}",
    dataType: "json",
    headers: {
    // "accept": "application/json",
    "Access-Control-Allow-Origin":"*"
    },
    crossDomain: true,
    cache: false,
    success: function (result) {
        $.each(result, function (key, value) {
            switch (key) {
                case 7:
                    $( "#eur td:nth-child(2)" ).text(value.cb_price );
                    $( "#eur td:nth-child(3)" ).text(value.nbu_buy_price );
                    $( "#eur td:nth-child(4)" ).text(value.nbu_cell_price );
                    $( "h3" ).text(value.date );
                    break;
                case 18:
                    $( "#rub td:nth-child(2)" ).text(value.cb_price);
                    $( "#rub td:nth-child(3)" ).text(value.nbu_buy_price);
                    $( "#rub td:nth-child(4)" ).text(value.nbu_cell_price);
                    break;
                case 23:
                    $( "#usd td:nth-child(2)" ).text(value.cb_price);
                    $( "#usd td:nth-child(3)" ).text(value.nbu_buy_price);
                    $( "#usd td:nth-child(4)" ).text(value.nbu_cell_price);
                    break;
            }
            // if (key==1) console.log(key + "...", value);
            //alert(this.key+"..."+this.value);
        });
    // console.log(result);
    },
    error: function () {
        console.log("error");
    }
});