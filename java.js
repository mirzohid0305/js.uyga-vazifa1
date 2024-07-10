/*var strings = [];
var numbers = [];

function processInput() {
    var input = prompt("Nimadir kiriting:");

    if (!isNaN(input) && input.trim() !== "") {
        numbers.push(Number(input));
    } else {
        strings.push(input);
    }
}
alert("Strings:", strings);
alert("Numbers:", numbers); */



function convertCurrency(uzs) {
    const exchangeRates = {
        USD: 11380.00,
        EURO: 12450.00,
        RUB: 150.00,
        RUPIY: 145.00
    };

    var usd = uzs / exchangeRates.USD;
    var euro = uzs / exchangeRates.EURO;
    var rub = uzs / exchangeRates.RUB;
    var rupiy = uzs / exchangeRates.RUPIY;

    return {
        USD: usd.toFixed(1),
        EURO: euro.toFixed(1),
        RUB: rub.toFixed(1),
        RUPIY: rupiy.toFixed(1)
    };
}

var uzs = prompt("UZS summasini yozing:");
var converted = convertCurrency(Number(uzs));

alert(`UZS: ${uzs}`);
alert(`USD: ${converted.USD}`);
alert(`EURO: ${converted.EURO}`);
alert(`RUB: ${converted.RUB}`);
alert(`RUPIY: ${converted.RUPIY}`);