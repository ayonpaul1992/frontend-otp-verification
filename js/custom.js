let stringVal = "";
let btnsGroup = document.querySelectorAll(".btns");
Array.from(btnsGroup).forEach((bttn)=>{
    bttn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            try{
                stringVal = eval(stringVal);
                document.querySelector(".inpt_digit").value = stringVal;
            }
            catch(err){
                document.querySelector(".inpt_digit").value = "Error";
                stringVal = "";
            }
        } else if(e.target.innerHTML == "AC"){
            stringVal = "";
            document.querySelector(".inpt_digit").value = stringVal;
        }else if(e.target.id == "sqrtBtn"){
            stringVal = Math.sqrt(parseFloat(document.querySelector(".inpt_digit").value)).toString();
            document.querySelector(".inpt_digit").value = stringVal;
        }else if(e.target.innerHTML == "%"){
            stringVal = (parseFloat(stringVal)/100).toString();
            document.querySelector(".inpt_digit").value = stringVal;
        }else if(e.target.classList.contains("mprtn")){
            stringVal = (parseFloat(stringVal)*-1).toString();
            document.querySelector(".inpt_digit").value = stringVal;
        }
        else{
            console.log(e.target);
            stringVal = stringVal+e.target.innerHTML;
            document.querySelector(".inpt_digit").value = stringVal;
        }
    });
});
