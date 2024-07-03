let url = "https://jsonplaceholder.typicode.com/users?_page=1&_limit=6";

let container = document.getElementById("container");
function displayData(arr){
    container.innerHTML=""
    arr.forEach((ele)=>{
   let data = document.createElement("div");

   let id = document.createElement("h6");
   id.innerText=ele.id;

   let name = document.createElement("h5");
   name.innerText=ele.name;
  
   let username = document.createElement("h5");
   username.innerText=ele.username;

   let email = document.createElement("h5");
   email.innerText=ele.email;

   let phone = document.createElement("h5");
   phone.innerText=ele.phone;

   let website = document.createElement("h5");
   website.innerText=ele.website;

   data.append(id,name,username,email,phone,website);
   container.append(data);
    })

}

async function getData(url,queryparems=""){
    try {
        let res = await fetch(`${url}${queryparems}`);
        page(res.headers.get("X-Total-count"),6,queryparems)
        let data = await res.json();
        console.log(data);
        displayData(data)
    } 
    catch (error) {
        console.log(error)
    }
}
getData(url)

let pagination = document.getElementById("pagination")

function page(total,limit,queryparems){
pagination.innerHTML="";
let num = Math.ceil(total/limit);
for(let i=1;i<=num;i++){
    let btn = document.createElement("button");
    btn.innerText=i;
    btn.addEventListener("click",function(){
        getData(`https://jsonplaceholder.typicode.com/users?_page=${i}&_limit=6`,queryparems)
    })
    pagination.append(btn);
}
}
page();