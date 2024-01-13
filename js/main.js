
var quotes = ["لااله الا انت سبحانك اني كنت من الظالمين ","سبحان الله ","الحمدلله ","للهم صلى ع سيدنا محمد ","استغفر الله العظيم"];




function quote(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];


    var quoteElement = document.getElementById("QuoteText")
    .innerHTML= randomQuote;
    
}