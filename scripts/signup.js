document.querySelector("#form").addEventListener("submit",submitplay)

    let bio=JSON.parse(localStorage.getItem("Data")) || [];

    function Info(name,mobile,email,pass){
        this.name=name;
        this.mobile=mobile;
        this.email=email;
        this.pw=pass;
    }

    function submitplay(){
       event.preventDefault();
       let name=form.name.value;
       let mobile=form.mob.value;
       let email=form.email.value;
       let pass=form.pw.value;

       let data= new Info(name,mobile,email,pass)
       
       bio.push(data);

       localStorage.setItem("Data",JSON.stringify(bio))
       let full=document.querySelectorAll("input")
       {
           full.forEach(function(element){
                element.value=null;
           })
       }
       
     window.location.href="Login.html"

    }