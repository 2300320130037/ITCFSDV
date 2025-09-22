// const div=document.getElementsByTagName('div'); 
// div[0].innerText="hell0 world"
// div[0].style.backgroundColor="red"
// div[0].style.Color="green"
// console.log(div)

const container=document.getElementsByClassName("container")
// console.dir(container)
// container[0].innerHTML='<h2 style=color:red>HElloo world</h2>'


const h2=document.createElement('h2')
h2.innerText='ABES ENGINERRING COLLEGE'
h2.style.backgroundColor="BROWN"
h2.style.color="#fff"
container[0].appendChild(h2)

const img=document.createElement('img')


const button=document.getElementById('btn')
function msg(){
    img.src="https://tse3.mm.bing.net/th/id/OIP.4eNStZ6EZlVipRzd4lpDwAHaE8?pid=Api&P=0&h=180"
img.setAttribute('height','200px')
img.setAttribute('wigth','200px')
container[0].appendChild(img)
    return "welcome to ABES Engineering college"
}
button.addEventListener("click",function(){
    container=this.innerHTML=msg();
    console.log(msg())

})
