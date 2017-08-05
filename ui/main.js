//Counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){  
  //make req to counter endpoint
  
  //capture response and store it in variable
  
  //render the variable in correct span 
  
  counter =counter +1;
  var span = document.getElementById('count');
  span.innerHTML=counter.toString();
 };