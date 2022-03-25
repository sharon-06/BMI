function BMI() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));
    document.getElementById("result").innerHTML="Your BMI is " + bmio;
    if(bmio < 18.5){
        document.getElementById("condition").innerHTML = "You are unhealthy, too thin."
            }
        if(bmio > 18.5 && bmio < 25){
            document.getElementById("condition").innerHTML = "You are healthy enough."
            }
        if(bmio > 25 &&  bmio <30){
            document.getElementById("condition").innerHTML = "You have overweight."
            }
        if(bmio >= 30){
            document.getElementById("condition").innerHTML = "You have Obese."
            }
        if(bmio >= 30 && bmio<=34.9)
        {
            document.getElementById("condition").innerHTML = "You have Obese class I."
        }
        if(bmio >=30 && bmio<=39.9)
        {
            document.getElementById("condition").innerHTML = "You have Obese class II"
        }
        if(bmio >=40)
        {
            document.getElementById("condition").innerHTML = "You have obese class III."
        }
 }