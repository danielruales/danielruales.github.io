$(function() { 
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    var totalDays = isLeapYear(now) ? "366" : "365";
    $(".yearday").html( day + "/" + totalDays)
});

function isLeapYear(now) {
    const date = new Date(now.getFullYear, 1, 29);
    console.log(date)
    return date.getMonth() === 1;
}