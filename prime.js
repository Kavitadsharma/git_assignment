function checkPrime(num)
    let counter =0;
     for(let i=0;i<=num;i++){

     if(num%i==0){
     counter++;
     }
   }
 if(counter==2){


       return true;
    }
   return false
   }
let ans_Prime=checkPrime(13);
if(ans_Prime==true){
   console.log("prime");
}
else{
    console.log("Not prime");