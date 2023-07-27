alert("oh hell /:");


window.onload=function loadPage() {
    const headline = document.getElementById('h1');
    const h1 = document.createElement('content');
    h1.innerText = "Dreamy Oyster Bar";
    content.appendChild(h1);

    const img = document.createElement("img");
    img.src = "./oysters.jpg";
    const src = document.getElementById("content");
    src.appendChild(img);
}


function selectTab(tabIndex) {
    //hide tabs
    document.getElementById(tab1).style.display = "none";
    document.getElementById(tab2).style.display = "none";
    document.getElementById(tab3).style.display = "none";
    //show tab when selected
    document.getElementById("tab" + tabIndex + "Content").style.display = 
    "block";
}




// import {loadPage} from "./page.js"

// function loadPage();

// window.onload=function(){
//     const headline = document.getElementById('h1');
//     const h1 = document.createElement('content');
//     h1.innerText = "Dreamy Oyster Bar";
//     content.appendChild(h1);

//     const img = document.createElement("img");
//     img.src = "./oysters.jpg";
//     const src = document.getElementById("content");
//     src.appendChild(img);
// }


