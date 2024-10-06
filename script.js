

var btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    var weight = document.getElementById('weight').value;
       var height = document.getElementById('height').value;
    var bmi = weight/(height *height);
    
    var category;
    if(bmi<18.5){
        category = 'underweight'
    }
    else if(18.5>=bmi <=24.9){
        category = 'normal'
    }
    else  if(25 <= bmi < 29.9){
        category = 'overweight'
    }
    else if (bmi  >= 30)
       category = 'obesity'

   
    alert(`${category}`)
    
    
});