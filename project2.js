const number = document.querySelector("#tasbih")
const increament = document.querySelector("#incBtn")
const Resert = document.querySelector("#resBtn")
const big=document.querySelector("#big")
let initialvalue=0;
increament.addEventListener("click", function(){

    // if(initialvalue==10){
    //     increament=0
    // }
    initialvalue++
   number.innerHTML=initialvalue
    if(initialvalue==4){
        big.style.backgroundColor="green"
    }
    else if(initialvalue==5){
        big.style.backgroundColor="orange"
   }
    else if(initialvalue==2){
        increament.style.color="yellow"
   }
    else if(initialvalue==6){
        big.style.backgroundColor="blue"
   }
    else if(initialvalue==7){
        big.style.backgroundColor="yellow"
   }
   else{
   big.style.backgroundColor="black"
   }
   
})


Resert.addEventListener("click", function(){
   initialvalue=0
   number.innerHTML=initialvalue
})