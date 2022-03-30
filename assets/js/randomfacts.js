document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://random.dog/woof.json").then(response => response.json()).then(newdog => {
        document.getElementById("dog").src = newdog.url;
    }).catch(error => console.log(error));
})

function addRandomFact() {
    let typefact = document.getElementById("typefact").value;
    let number = document.getElementById("number").value;
    console.log(typefact);
    console.log(number);
}