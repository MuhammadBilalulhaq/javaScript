function login(){
var  UserEmails=['abc60@gmail.com','bilal@gmail.com','ali80@gmail.com','ahmed2004@gmail.com','usman2005@gmail.com']
var email=document.getElementById("email").value;
if(UserEmails.includes(email)){
    window.location.href="dashboard.html";
}else{
    alert("Invalid Email")
}
}