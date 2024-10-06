

var btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    var weight = document.getElementById('weight').value;
       var height = document.getElementById('height').value;
    var bmi = weight/(height *2);
    
    var category;
    if(bmi<18.5){
        category = 'underweight'
    }
  else   if(18.5>=bmi <=24.5){
        catagory = 'normal'
    }
    else if(25 <=bmi < 29.9){
        category = 'overweight'
    }
    else(bmi>= 30)
       category = 'obesity'

    //    document.getElementById('result').innerText= `your bmi is ${category}`;
    alert(`${category}`)
    
    
});