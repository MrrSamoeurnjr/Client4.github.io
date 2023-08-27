const filtrbuttons = document.querySelectorAll(".filterButtons button");
const filterablecards = document.querySelectorAll(".filtercards .cards");
console.log( filtrbuttons , filterablecards )
const filtercard = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    console.log(e.target)
    filterablecards.forEach( cards => {
        cards.classList.add("hide");
        if( cards.dataset.name === e.target.dataset.name  || e.target.dataset.name === 'all') {
            cards.classList.remove("hide");
        }
    })
}
filtrbuttons.forEach(button => button.addEventListener('click',filtercard));
