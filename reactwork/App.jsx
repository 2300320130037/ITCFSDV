const container = document.getElementById('container');
// console.log(container);

const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{ style: { backgroundColor: "brown", color: "white", paddingLeft: "10px" } },"Welcome to React Development using CDN");
const myname = React.createElement('h3',{},"Amit Yadav");
const pic = React.createElement('img', {src: "https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",style: { height: "100px", borderRadius: "50%" }});
const same= React.createElement('div',{ style: {display:"flex",alignItems:"center",gap:"30px",backgroundColor:"pink"}},pic,myname);

const li1 = React.createElement('li', {}, "Java ");
const li2 = React.createElement('li', {}, "Python ");
const li3 = React.createElement('li', {}, "React");
const ul = React.createElement('ul', { style: { backgroundColor: "cyan" } }, li1, li2, li3);
const wrapper = React.createElement('div', {}, h2, same, ul);

//JSX
const h21= <h2 style={{backgroundColor:"brown",color:"white",paddingLeft:"10px"}}>Welcome to React Development</h2>;
const li4= <li>Angular</li>;
const li5= <li>Vue JS</li>;
const ul1= <ul style={{backgroundColor:"lightgreen"}}>{li4}{li5}</ul>
const container1=(
    <div>
     {h2}
     {same}
     {ul}
     {h21}
     {ul1}  
    </div>
)


root.render(container1);