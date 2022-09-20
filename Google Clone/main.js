const searchInput = document.querySelector("#search-input")
const searchButton = document.querySelector("#search--btn")

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
    else if(event.code === "NumpadEnter"){
        search();
    }
    else if(event.code === "Ok"){
        search();
    }
})

searchButton.addEventListener("click", function(){{
    search();
}})

function search(){
    const input = searchInput.value
    window.location.href = "https://www.google.com/search?q=" + input
}