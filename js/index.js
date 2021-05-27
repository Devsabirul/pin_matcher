//For Generate Pin 

function GeneratePin(){
    const generateNum = '0123456789';
        var ShowPin = "";
    for (let i = 0; i <4; i++) {
        var generatePin = Math.floor(Math.random() * generateNum.length);
        ShowPin += generateNum.substring(generatePin,generatePin+1); 
    }
    document.getElementById("pin_output").value = ShowPin; 
};
// For remove Input Value 

function removeInput(id){
    document.getElementById(id).value="";
}

//Input Number Add For Result 

let InputNum = document.getElementById('showNum');
let buttonNum = document.querySelectorAll(".button");
const InputValue = " ";
for (item of buttonNum) {
    item.addEventListener('click',(e)=>{
       const buttonText = e.target.innerText;
        InputNum.value += buttonText;
        if(buttonText == 'C'){
          InputNum.value = " ";
        }
    });
}
//Generate pin With Submit Number For Matched

document.getElementById('submit_btn').addEventListener('click',function(){
    var generatePinNum = document.getElementById("pin_output").value;
    var submitPinNum = document.getElementById('showNum').value;

     removeInput('pin_output');
     removeInput('showNum');

    if(generatePinNum == submitPinNum){
        document.getElementById('notification').innerHTML='✅ Pin Matched... Secret door is opening for you';
    }else{
        document.getElementById('notification').innerHTML = "❌ Pin Didn't Match, Please try again";
        document.getElementById('notification_alert').innerHTML = "3 try left";
    }
})
