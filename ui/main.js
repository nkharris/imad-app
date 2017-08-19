
 
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
             var counter = request.responseText;
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
  
  //submit name
  //submit username/password to login
 
   var submit=document.getElementById('submit_btn');
   submit.onclick=function(){
    //Create a request
     var request=new XMLHttpRequest();
   
     //capture the response and store it in a variable
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
             console.log('user logged in');
             alert('logged in successfully');
           } else if(request.status===403){
               alert('Username/password is incorrect');
           } else if(request.status===500){
            alert('something went wrong on the server'); 
           }
             
           }
       };
         
       // not done yet
    };
   
   
   
    //make the request
 var name = nameInput.value;
  var nameInput=document.getElementById('name');
   request.open('GET', 'http://harrisnk1998.imad.hasura-app.io/submit-name?name='+name, true);
   request.send(null);
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
   console.log(username);
   console.log(password);
   request.open('POST', 'http://harrisnk1998.imad.hasura-app.io/login', true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username:username,password}));