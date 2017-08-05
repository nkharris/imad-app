//Counter code
var button=document.getElementById('counter');

button.onclick=function(){  
  //Create a request
  var request=new XMLHttpRequest();
  request.onreadystatechange = function(){
      if(request.readystate===XMLHttpRequest.Done){
          //take some action
          if(request.status===200){
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
          }
      }
      // not done yet
  };
  //make the request
  request.open('GET', 'http://harrisnk1998.imad.hasura-app.io/counter', true);
  request.send(null);
 };