let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
 
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("bnt","bnt-primary");
button.innerHTML="serach";
button.addEventListener("click",foo);
 
let active=document.createElement("div");
active.setAttribute("id","active");
let confirm=document.createElement("div");
confirm.setAttribute("id","confirm");
let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");
div.append(input,button,active,confirm,deaths);
document.body.append(div);


async function foo(){
    let countryname=document.getElementById("country").value;
    // console.log(countryname);
    let url=` https://api.covid19api.com/dayone/country/${countryname}`
    let res= await fetch(url);
    let res1= await res.json();
    console.log(res1);
    let index=res1.length-1;
    // console.log(res1[index].active);
    
    active.innerHTML=`total active case:${res1[index].Active}`;
    confirm.innerHTML=`total active case:${res1[index].Confirmed}`;
    deaths.innerHTML=`total active case:${res1[index].Deaths}`;


}



