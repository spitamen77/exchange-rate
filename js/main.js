/**
 * Created by PhpStorm.
 * Author: Abdujalilov Dilshod
 * Telegram: https://t.me/coloterra
 * Web: http://www.websar.uz
 * Project: exchange
 * Date: 10.02.2020 20:36
 */


var obj = {
    child: function (id, value, code) {
        $( "#"+code+" td:nth-child("+id+")" ).text(value );
    }
};

var ajaxSetting = {
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
                    obj.child(2,value.cb_price, "eur");
                    obj.child(3,value.nbu_buy_price, "eur");
                    obj.child(4,value.nbu_cell_price, "eur");
                    $( "h3" ).text(value.date );
                    break;
                case 18:
                    obj.child(2,value.cb_price, "rub");
                    obj.child(3,value.nbu_buy_price, "rub");
                    obj.child(4,value.nbu_cell_price, "rub");
                    break;
                case 23:
                    obj.child(2,value.cb_price, "usd");
                    obj.child(3,value.nbu_buy_price, "usd");
                    obj.child(4,value.nbu_cell_price, "usd");
                    break;
            }
        });
        // console.log(result);
    },
    error: function () {
        console.log("error");
    }
}

$.ajax(ajaxSetting);