// // // const div=document.getElementsByTagName('div'); 
// // // div[0].innerText="hell0 world"
// // // div[0].style.backgroundColor="red"
// // // div[0].style.Color="green"
// // // console.log(div)

// // const container=document.getElementsByClassName("container")
// // // console.dir(container)
// // // container[0].innerHTML='<h2 style=color:red>HElloo world</h2>'


// // const h2=document.createElement('h2')
// // h2.innerText='ABES ENGINERRING COLLEGE'
// // h2.style.backgroundColor="BROWN"
// // h2.style.color="#fff"
// // container[0].appendChild(h2)

// // const img=document.createElement('img')


// // const button=document.getElementById('btn')
// // function msg(){
// //     img.src="https://tse3.mm.bing.net/th/id/OIP.4eNStZ6EZlVipRzd4lpDwAHaE8?pid=Api&P=0&h=180"
// // img.setAttribute('height','200px')
// // img.setAttribute('wigth','200px')
// // container[0].appendChild(img)
// //     return "welcome to ABES Engineering college"
// // }
// // button.addEventListener("click",function(){
// //     container=this.innerHTML=msg();
// //     console.log(msg())

// // })
// // function longdata(){
// //     console.log("Start");
// //     for(i=0;i<10000000;i++){
// //         console.log(i)
// //     })
// //     console.log("End")

// // }
// // button.addEventListener('click',longdata)

// //      
// // const completemsg=msgHandler("hii",greetmsg);
// // console.log(completemsg)
// const mypromise= new Promise((resolve,reject)=>{
//     if(password.length>8){
//         resolve("password length is ok");
//     }
//     else{
//         reject("password length is not as per the policy ")
//     }
// });
// // mypromise.then((result)=>{console.log(result)})
// // .catch((err)=>{
// //     console.log("All the resources have closed sucessfully");
// // })

// async function handleData(){
//     const data=await mypromise;
//     console.log(data);

// }
// handleData();

const button = document.getElementById("btn");
const disp = document.getElementById("disp");
let table='<table border="1">';
async function fetchData() {
    disp.innerHTML = "<h2>Data is Loading...</h2>";
    const response = await fetch('https://dummyjson.com/recipes');
    const jsonData = await response.json();
    console.log(jsonData);

    // var recipe = jsonData.recipes[0];
    // disp.innerHTML = "<h2>ID: "+ recipe.id +"</h2>" +
    //                  "<h2>Name: "+ recipe.name +"</h2>" +
    //                  "<img src='"+ recipe.image +"' alt='"+ recipe.name + "'width='200'>";
    jsonData.recipes.forEach(Element => {
       table+=`<tr>
       <td><img src='${Element.image}' height=200 width=200 alt='image'></td>
       <td>${Element.id}</td>
       <td>${Element.name}</td>
       <td>${Element.ingredients}</td>
       </tr>`;
    });
    table+='</table>';
    disp.innerHTML = table;
}
button.addEventListener('click', fetchData);
 
