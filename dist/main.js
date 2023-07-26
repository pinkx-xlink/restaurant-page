alert("oh hell /:");

window.onload=function(){
    const headline = document.getElementById('h1');
    const h1 = document.createElement('h1');
    h1.innerText = "Dreamy Oyster Bar";
    headline.appendChild(h1);

    const img = document.createElement("img");
    img.src = "./oysters.jpg";
    const src = document.getElementById("header");
    src.appendChild(img);
}