

document.getElementById("urlclick").addEventListener("click", myFunction);

function myFunction() {

var urlToShort = document.getElementById("urltext").value;

console.log(urlToShort)

var searchingHistory = browser.history.search({text: urlToShort})
    searchingHistory.then((results) => {
        for(var k=0; k < results.length; k++) {
        	console.log(results[k]);
          browser.history.deleteUrl({url: results[k].url});
        }
      });
}


