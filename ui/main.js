//Counter code
var button=document.getElementbyId('counter');
var counter=0;
button.onclick=function(){  
  //make req to counter endpoint
  
  //capture response and store it in variable
  
  //render the variable in correct span 
  
  counter =counter +1;
  var pan = document.getElementbyId('count');
  span.innerHtml=counter.toString();
 };