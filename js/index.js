// const container = document.getElementsByClassName("container");

// const h2 = document.createElement("h2");
// h2.innerText = "ABES Engineering College";
// h2.style.color = "white";
// h2.style.backgroundColor = "brown";
// console.log(h2);
// container[0].appendChild(h2);

// const button = document.getElementById("btn");
// console.log(button);

// function msg() {
//     container[0].innerHTML = "";

//     const loadingMsg = document.createElement('p');
//     loadingMsg.innerText = "Loading Image...";
//     loadingMsg.style.color = "blue";
//     loadingMsg.style.fontSize = "20px";
//     container[0].appendChild(loadingMsg);
//     setTimeout(() => {
//         container[0].innerHTML = "";
        
//         const img = document.createElement('img');
//         img.src = "download.jpg";
//         img.setAttribute("height", "200px");
//         img.setAttribute("width","200px");
//         console.log(img);
//         container[0].appendChild(img);

//         const h3 = document.createElement('h3');
//         h3.innerText = "Welcome to ABES ENGINEERING COLLEGE";
//         h3.style.color = "yellow";
//         h3.style.backgroundColor = "red";
//         container[0].appendChild(h3);
//     }, 3000); 
// }
// button.addEventListener("click", msg);
function longdata(){
    console.log("Start");
    for(i=0;i<10000000;i++){
        console.log(i)
    })
    console.log("End")

}
button.addEventListener('click',longdata)
