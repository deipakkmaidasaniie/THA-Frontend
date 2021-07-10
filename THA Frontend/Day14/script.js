function generate()
{
const setHeader={
    headers:{
        Accept:"application/json"
    }
}


fetch("https://icanhazdadjoke.com",setHeader).then((res)=>res.json()).then((data)=>{
jokes.innerHTML=data.content;
})
.catch((error)=>{
    console.log(error);
})
}
const jokebtn=document.getElementById("jokebtn");
const jokes=document.getElementById("joke");

jokebtn.addEventListener('click',generateJoke);
