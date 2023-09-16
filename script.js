let apiKey = "";
let searchTerm = "";

const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", () => {
    let apiKeyValue = document.getElementById("api-input").value;
    let searchvalue = document.getElementById("movie-name-input").value;
    console.log(apiKeyValue);
    if(apiKeyValue !== "") {
        apiKey = apiKeyValue;
    } else {
        alert("Plz Enter valid API");
    }
    if( searchvalue.length < 3 ) {
        document.querySelector(".warning").innerHTML = "";
        const warning = document.querySelector(".warning");
        warning.innerText = "Search term should be at least of 3 characters";
    } else {
        searchTerm = searchvalue;
    }

    if (apiKeyValue !== "" && searchvalue.length >= 3) {
        const warning = document.querySelector(".warning");
        warning.innerText = "";
        fetchData();
    }
});

function fetchData() {
    const endPoint = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;
    document.querySelector(".cards-container").innerHTML = "";
    
}