function GeneratePic(){
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
//Generate pin With Submit Number For Matched

document.getElementById('submit_btn').addEventListener('click',function(){
    var generatePinNum = document.getElementById("pin_output").value;
    var submitPinNum = document.getElementById('showNum').value;

     removeInput('pin_output');
     removeInput('showNum');

    if(generatePinNum == submitPinNum){
        document.getElementById('demo').innerHTML='✅ Pin Matched... Secret door is opening for you';
    }else{
        document.getElementById('demo').innerHTML = "❌ Pin Didn't Match, Please try again";
        document.getElementById('demo1').innerHTML = "3 try left";
    }
})