const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
    else if(event.code === "NumpadEnter"){
        search();
    }
})

function search(){
    const input = searchInput.value
    window.location.href = "https://www.google.com/search?q=" + input
}