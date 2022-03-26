ratingArray = [];

function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'block') ? 'none' : 'block';
};

document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(json);
    ratingArray = localStorage.getItem('rating') ? JSON.parse(localStorage.getItem('rating')) : [];

    let heroesContent = "";
    for (let heroe of heroes) {
        heroesContent += `<div class='heroe'>
        <h2>${heroe.name}</h2>` +
            `<div class='rating'><input class='inputbox'><button class='addRating'>Оставить оценку</button></div>` +
            `<img src="/assets/images/${heroe.photo}" class='images'>` +
            `<div><span class='title'>Вселенная:</span> ${heroe.universe}</div>
            <div><span class='title'>Альтер эго:</span> ${heroe.alter_ego}</div>
            <div><span class='title'>Род деятельности:</span> ${heroe.activity}</div>
            <div><span class='title'>Друзья:</span> ${heroe.friends}</div>
            <div><span class='title'>Суперсилы:</span> ${heroe.superpowers}</div>
            <div><a href="#${heroe.name}" onclick="view('${heroe.name}'); return false" class='title'>Подробнее:</a><div id="${heroe.name}" style="display: none;">${heroe.more}</div></div>
            </div>`;
        ratingArray += `${heroe.name}`;
    }
    document.getElementById("cardheroes").innerHTML = heroesContent;
});