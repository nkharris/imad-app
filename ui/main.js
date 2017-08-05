//Counter code
var button=document.getElementById('counter');

button.onclick=function(){  
  //Create a request
  var request=new XMLHttpRequest();
  
  //capture the response and store it in a variablr
  request.onreadystatechange = function(){
      if(request.readystate===XMLHttpRequest.Done){
          //take some action
          if(request.status===200){
            
          }
      }
      // not done yet
  };
  //make the request
  request.open('GET', 'http://harrisnk1998.imad.hasura-app.io/counter', true);
  request.send(null);
 };
 
 //submit name
X
 var submit=document.getElementById('submit_btn');
 submit.onclick=function(){

     //Create a request
  var request=new XMLHttpRequest();
  
  //capture the response and store it in a variablr
  request.onreadystatechange = function(){
      if(request.readystate===XMLHttpRequest.Done){
          //take some action
          if(request.status===200){
            //capture a list of names and render it on a list
            var names=request.responseText;
            names=JSON.parse(names);
            var list='';
            for(var i=0;i<names.length;i++){
                list+='<li>'+names[i]+'</li>';
            }
            var ul=document.getElementById('namelist');
            ul.innerHTML=list;
            
          }
      }
      // not done yet
  };
 
 
 
  //make the request
 var nameInput=document.getElementById('name');
 var name=nameInput.value;
  request.open('GET', 'http://harrisnk1998.imad.hasura-app.io/submit-name?name'+name, true);
  request.send(null);
  
  
     
 };
 