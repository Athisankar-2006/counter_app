
function createCounter(){
    let count=0;
    return{
        increment:function(){
            count++;
            return count;
        },
        decrement:function(){
            count--;
            return count;
        },
        getvalue:function(){
            return count;
        }
    }
    
}




const counter=createCounter();


let count=document.getElementById("count");
let incrementbtn=document.getElementById("Increment");
let decrementbtn=document.getElementById("Decrement");

incrementbtn.addEventListener("click",()=>{
    count.innerHTML=counter.increment()
});


decrementbtn.addEventListener("click",()=>{
    count.innerHTML=counter.decrement()
});