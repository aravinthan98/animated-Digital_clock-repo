let hour=document.getElementById('hour');
let minute=document.getElementById('minute');
let seconds=document.getElementById('second');
let ampm=document.getElementById('ampm');

let timezone12=document.getElementById('zone12');
    
let timezone24=document.getElementById('zone24');
let flag=true;
timezone12.style.backgroundColor="crimson";
timezone12.onclick=()=>{
    flag=true;
    
    timezone24.style.backgroundColor="lightcoral";
    timezone12.style.backgroundColor="crimson";
}
timezone24.onclick=()=>{
    flag=false;
    timezone24.style.backgroundColor="crimson";
    timezone12.style.backgroundColor="lightcoral";
}

function setTimeforClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    let hh=document.getElementById('hh');
    let mm=document.getElementById('mm');
    let ss=document.getElementById('ss');

    if(flag){
        ampm.style.display="block"
        if(h>12){
            h=h-12;
            ampm.innerHTML='PM';      
        }
        hh.style.strokeDashoffset=440-(440*h)/12;
       
    }
    else{
        ampm.style.display="none";
        hh.style.strokeDashoffset=440-(440*h)/24;
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;


    hour.innerHTML=h+"<br><span>hour</span>";
    minute.innerHTML=m+"<br><span>minute</span>";
    seconds.innerHTML=s+"<br><span>seconds</span>";

    
    mm.style.strokeDashoffset=440-(440*m)/60;
    ss.style.strokeDashoffset=440-(440*s)/60;

    setTimeout(()=>{
        setTimeforClock();
    },1000);

}
setTimeforClock();