// cookies settings
var oneYearInSeconds = 31622400;
var url = window.location.hostname;
var cookiesDomain = extractDomainFromUrl(url);
var cookiesPreference = true;
var encodedCookiesPolicy = "%7B%22essential%22%3Atrue%2C%22usage%22%3Atrue%7D";
var cookiesPath = "/";

function initCookiesBanner() {
    $('.js-hide-cookies-banner').click(function(e) {
        $('.js-cookies-banner-form').addClass("hidden");
    });
    $(".js-cookies-banner-form").on('submit', submitCookieForm)
}

function submitCookieForm(e) {
    e.preventDefault();
    var cookiesBanner = $('.js-accept-cookies');
    
    cookiesBanner.prop('disabled')
    cookiesBanner.addClass("btn--primary-disabled");

    document.cookie = "cookies_preferences_set=" + cookiesPreference + ";" + "max-age=" + oneYearInSeconds + ";" + "domain=" + cookiesDomain + ";" + "path=" + cookiesPath + ";";
    document.cookie = "cookies_policy=" + encodedCookiesPolicy + ";" + "max-age=" + oneYearInSeconds + ";" + "domain=" + cookiesDomain + ";" + "path=" + cookiesPath + ";";

    $('.js-cookies-banner-inform').addClass('hidden');
    $('.js-cookies-banner-confirmation').removeClass('hidden');
}

function extractDomainFromUrl(url) {
    if (url.includes('localhost')) {
        return 'localhost';
    }

    // top level domains (TLD/SLD) in use
    var tlds = new RegExp('(.co.uk|.gov.uk)');

    var topLevelDomain = url.match(tlds)[0];
    var secondLevelDomain = url.replace(topLevelDomain, '').split('.').pop();

    return "." + secondLevelDomain + "." + topLevelDomain;
}

$(function() {
    initCookiesBanner();
});