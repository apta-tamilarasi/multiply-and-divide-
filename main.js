

let btn1=document.getElementById("div")
console.log(btn1)

let btn2=document.getElementById("mul")
console.log(btn2)

let ans=document.getElementById("ans")

btn2.addEventListener("click",mul=()=>{

    let num1=document.getElementById("no1").value
    let num2=document.getElementById("no2").value
    
    console.log(num1,num2)

    let c=(parseInt(num1))*(parseInt(num2))
    ans.innerHTML=c
})


btn1.addEventListener("click",div=()=>{

    let num1=document.getElementById("no1").value
    let num2=document.getElementById("no2").value
    
    
    console.log(num1,num2)
    
    let c=(parseInt(num1))/(parseInt(num2))
    ans.innerHTML=c
})

