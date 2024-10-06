

var btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    var weight = document.getElementById('weight').value;
var height = documment.getElementById('number').value;
    var bmi = weight/height;

    if(bmi<18.5){
        alert('Underweight')
    }
    if(18.5>=bmi <=24.5){
        alert('Normal')
    }
    if(25 <=bmi < 29.9){
        alert('overWeight')
    }
    else(bmi>= 30)
        alert('obesity')
    
});