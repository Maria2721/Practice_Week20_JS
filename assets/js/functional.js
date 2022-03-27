function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'block') ? 'none' : 'block';
}

const changeOnNumber = elem => {
    const value = elem.value;
    elem.value = value.replace(/\D/g, '');
}

function addRating(obj) {
    let name = obj.id;
    let rating = document.getElementById(obj.id).value;
    if (localStorage.getItem(name)) {
        let a = JSON.parse(localStorage.getItem(obj.id));
        let sum = (Number(rating) + Number(a)) / 2;
        let sumround = Math.round(sum * 10) / 10;
        localStorage.setItem(name, JSON.stringify(sumround));
        let x = document.getElementById(`new${name}`);
        x.innerHTML = `<span class='title'>Рейтинг:</span> ${sumround}/10`;
    } else {
        localStorage.setItem(name, JSON.stringify(rating));
        let x = document.getElementById(`new${name}`);
        x.innerHTML = `<span class='title'>Рейтинг:</span> ${rating}/10`;
    }
    document.getElementById(obj.id).value = "";
}

document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(json);
    ratingArray = localStorage.getItem('rating') ? JSON.parse(localStorage.getItem('rating')) : [];

    let heroesContent = "";
    for (let heroe of heroes) {
        heroesContent += `<div class='heroe'>
        <h2>${heroe.name}</h2>` +
            (localStorage.getItem(heroe.ratingname) ? `<div class='rating' id='new${heroe.ratingname}'><span class='title'>Рейтинг:</span> ${JSON.parse(localStorage.getItem(heroe.ratingname))}/10</div>` : `<div class='rating' id='new${heroe.ratingname}'><span class='title'>Рейтинг:</span> 10</div>`) +
            `<div class='rating'><input id='${heroe.ratingname}' class='inputbox' oninput="changeOnNumber(this)"
            placeholder="max = 10"><button id='${heroe.ratingname}' onclick="addRating(this)">Отправить оценку</button></div>` +
            `<img src="/assets/images/${heroe.photo}" class='images'>` +
            `<div><span class='title'>Вселенная:</span> ${heroe.universe}</div>
            <div><span class='title'>Альтер эго:</span> ${heroe.alter_ego}</div>
            <div><span class='title'>Род деятельности:</span> ${heroe.activity}</div>
            <div><span class='title'>Друзья:</span> ${heroe.friends}</div>
            <div><span class='title'>Суперсилы:</span> ${heroe.superpowers}</div>
            <div><a href="#${heroe.name}" onclick="view('${heroe.name}'); return false" class='title'>Подробнее:</a><div id="${heroe.name}" style="display: none;">${heroe.more}</div></div>
            </div>`;
    }
    document.getElementById("cardheroes").innerHTML = heroesContent;
});