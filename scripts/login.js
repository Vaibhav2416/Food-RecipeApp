document.querySelector('#form').addEventListener("submit",hello)
    
   

function hello(){
        event.preventDefault();
        let email=form.email.value;
        let pass=form.pw.value;
        let consume=JSON.parse(localStorage.getItem("Data"))
        console.log(consume)
if(consume){

    for(let i=0;i<consume.length;i++)
      {
      if(consume[i].email==email && consume[i].pw==pass)
      {
        alert("Sign In Successfuly") 
        
     return location.replace("index.html");
      }
      }
} 
else if(consume===null) {
    alert("No User Exists")
    return;
// localStorage.setItem('Data', '[]');
}

return alert('Invalid Credentials');
 }
