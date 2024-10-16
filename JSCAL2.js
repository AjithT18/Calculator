let nums=document.querySelectorAll(".num");
let sc=document.querySelector(".sc");
let sc1=document.querySelector(".sc1");
let sc2=document.querySelector(".sc2");
let sc3=document.querySelector(".sc3");

let mn=0;
let ln=0;
let result;
let equal=0;

function operator(fan,man,lan){
    switch(man){
        case '+':result=fan+lan;
                 break;
        case '-':result=fan-lan;
                 break;
        case '*':result=fan*lan;
                 break;
        case '/':result=fan/lan;
                 break;
        case '%':result=fan%lan;
                 break;
    }
}
nums.forEach((num)=>{
    num.addEventListener("click",()=>{
        let n=num.getAttribute("id");
        if((n==1||n==2||n==3||n==4||n==5||n==6||n==7||n==8||n==9||n==0||n=='.') && (mn==0)){
           fn=sc3.innerHTML+=n;
        }
        if(n=='/'||n=='*'||n=='-'||n=='+'||n=='%'){
            sc3.innerHTML+=n;
            mn=n;
        }
        if((n==1||n==2||n==3||n==4||n==5||n==6||n==7||n==8||n==9||n==0||n=='.') && (mn!=0)){
            ln+=n;
            ln1=sc3.innerHTML+=n;
        }
        fan= +fn;
        lan= +ln;
        man=mn;
        operator(fan,man,lan);
        if(n=='frac'){
            fraction=1/fan;
            sc1.innerHTML='1/'+fan;
            sc2.innerHTML='= '+fraction;
            sc3.innerHTML=null;
        }
        if(n=='sqr'){
            square=fan**2;
            sc2.innerHTML=square;
            sc3.innerHTML=null;
        }
        if(n=='sqrt'){
            sqrroot=(fan)**(1/2);
            sc2.innerHTML=sqrroot;
            sc3.innerHTML=null;
        }
        if(n=='eq'){
            equal=1;
            sc2.innerHTML='= '+result;
            sc1.innerHTML=ln1;
            sc3.innerHTML=null;
        }
        if(n=='c'||n=='ce'){
            sc1.innerHTML=null;
            sc2.innerHTML=null;
            sc3.innerHTML=null;
            fn=0;
            fan=0;
            ln=0;
            lan=0;
            mn=0;
            man=0;
            ln1=0;
            equal=0;
        }
        if((n=='b') && (equal==0)){
            if(mn==0){
                fn=sc3.innerHTML=fn--;
                fan= +fn;
            }
            else if((mn!=0)&&(ln!=null)){
                ln=sc3.innerHTML=ln--;
                lan= +ln;
            }
            else{
                mn=sc3.innerHTML=mn;
                mn=0;
            }
        }
    });
});

/*addEventListener("keypress",(e)=>{
    console.log(e)
});

/*let n=num.getAttribute("id");*/

//if((n=='/'||n=='*'||n=='-'||n=='+'||n=='%') && (mn!==0)){}
