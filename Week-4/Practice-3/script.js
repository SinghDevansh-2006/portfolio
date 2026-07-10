async function getQuote() {

    try {

        let response = await fetch("https://dummyjson.com/quotes/random");

        let data = await response.json();

        document.getElementById("quote").innerHTML =
            `"${data.quote}"<br><br><strong>- ${data.author}</strong>`;

    }

    catch(error){

        document.getElementById("quote").innerHTML =
            "Failed to load quote.";

        console.log(error);

    }

}