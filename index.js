
let a,b,c;
document.getElementById("add").onclick=function(){
    a=document.getElementById("inp1").value;
    a=Number(a);
    b=document.getElementById("inp2").value;
    b=Number(b);
    
    c=a+b;
    document.getElementById("result").value=c;
}

document.getElementById("sub").onclick=function(){
    a=document.getElementById("inp1").value;
    a=Number(a);
    b=document.getElementById("inp2").value;
    b=Number(b);
    
    c=a-b;
    document.getElementById("result").value=c;
}

document.getElementById("mul").onclick=function(){
    a=document.getElementById("inp1").value;
    a=Number(a);
    b=document.getElementById("inp2").value;
    b=Number(b);
    
    c=a*b;
    document.getElementById("result").value=c;
}

document.getElementById("div").onclick=function(){
    a=document.getElementById("inp1").value;
    a=Number(a);
    b=document.getElementById("inp2").value;
    b=Number(b);
    
    c=a/b;
    document.getElementById("result").value=c;
}

document.getElementById("mod").onclick=function(){
    a=document.getElementById("inp1").value;
    a=Number(a);
    b=document.getElementById("inp2").value;
    b=Number(b);
    
    c=a%b;
    document.getElementById("result").value=c;
}

document.getElementById("clear").onclick=function(){
       
    c="";
    document.getElementById("inp1").value=c;
    document.getElementById("inp2").value=c;
    document.getElementById("result").value=c;
}