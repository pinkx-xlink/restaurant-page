alert("oh hell /:");


window.onload=function loadPage() {
    const headline = document.getElementById('h1');
    const h1 = document.createElement('h1');
    h1.innerText = "Dreamy Oyster Bar";
    content.appendChild(h1);

    const img = document.createElement("img");
    img.src = "./oysters.jpg";
    const src = document.getElementById("content");
    src.appendChild(img);
}


function selectTab(tabIndex) {
    //hide tabs
    const tab1 = document.createElement(div);
    document.getElementById("content").style.display = "none";
    tab1.appendChild(div); 

    const tab2 = document.createElement(div);
    document.getElementById("tab2Content").style.display = "none";
    tab2.appendChild(div);

    document.getElementById("tab3Content").style.display = "none";
   
    //show tab when selected
    document.getElementById("tab" + tabIndex).style.display = 
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


