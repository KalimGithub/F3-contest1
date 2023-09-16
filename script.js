let apiKey = "";
let searchTerm = "";

const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", () => {
    let apiKeyValue = document.getElementById("api-input").value;
    let searchvalue = document.getElementById("movie-name-input").value;
    console.log(apiKeyValue);
    if(apiKeyValue !== ""){
        apiKey = apiKeyValue;
    }else{
        alert("Plz Enter valid API");
    }
    if()


})