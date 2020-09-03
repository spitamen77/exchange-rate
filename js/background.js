/**
 * Created by PhpStorm.
 * Author: Abdujalilov Dilshod
 * Telegram: https://t.me/coloterra
 * Web: http://www.websar.uz
 * Project: refresh
 * Date: 10.02.2020 16:33
 */
var stringifiedTimer = localStorage.getItem('_timers');
var _timers = stringifiedTimer ? JSON.parse(stringifiedTimer) : {};
var savedcolorSettings =
    localStorage.getItem('colorsOn') === 'true'
        ? localStorage.getItem('colorsOn')
        : false;

//Uninstall url
let uninstallUrl = 'https://www.websar.uz';
chrome.runtime.setUninstallURL(uninstallUrl);

// Restart timer because of unknown behavior
GLOBAL_TIMER_26 = setTimeout(function() {
    window.location.reload();
}, 21600 * 1000);

const details = chrome.runtime.getManifest();
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
        i[r] ||
        function() {
            (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
);

ga('create', 'UA-122390758-1', 'auto');
ga('set', 'checkProtocolTask', function() {});
ga('require', 'displayfeatures');
ga('send', 'pageview', 'background.html?v=' + details.version);

// var owa_baseUrl = 'https://static.trckingbyte.com/';
// var owa_cmds = owa_cmds || [];
// owa_cmds.push(['trackPageView']);
// (function () {
//     var _owa = document.createElement('script');
//     _owa.type = 'text/javascript';
//     _owa.async = true;
//     _owa.src =
//         owa_baseUrl +
//         'owa/modules/base/js/owa.tracker-combined-latest.minified.js?siteId=ifooldnmmcmlbdennkpdnlnbgbmfalko&apikey=cb0b3369d6e783096f8abcb32ebdaafb&v=' + details.version;
//     var _owa_s = document.getElementsByTagName('script')[0];
//     _owa_s.parentNode.insertBefore(_owa, _owa_s);
// })();

chrome.runtime.onInstalled.addListener(function listener(details) {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: 'https://www.websar.uz' });
        chrome.runtime.onInstalled.removeListener(listener);
    }
});