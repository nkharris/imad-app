//Counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){  
  //Create a request
  var request=new XMLhttpRequest();
  request.onreadystatechange = function(){
      if(request.readystate===XMLhttpRequest.Done){
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