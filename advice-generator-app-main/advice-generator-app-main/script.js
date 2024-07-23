window.addEventListener("DOMContentloaded", fetchData);

const ad_title = document.querySelector("#ad-id");
const ad_body = document.querySelector("#ad-body");
const dice = document.querySelector("#dice");
async function fetchData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    console.log(json.slip);
    ad_title.innerText = "Advice " +
        json.slip.id;
    ad_body.innerText = json.slip.advice;
}
dice.addEventListener("click", fetchData);