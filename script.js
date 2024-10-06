

var btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    var weight = document.getElementById('weight').value;
var height = documment.getElementById('number').value;
    var bmi = weight/height;
    
    var category;
    if(bmi<18.5){
        category = 'underweight'
    }
    if(18.5>=bmi <=24.5){
        catagory = 'normal'
    }
    if(25 <=bmi < 29.9){
        category = 'overweight'
    }
    else(bmi>= 30)
       category = 'obsity'

       document.getElementById('result').innerText= `your bmi is ${category}`;
    
});