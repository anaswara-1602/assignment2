function validate(callback){
    var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

if( username==="admin"&& password==="12345" ){
callback();
}
else{
    alert("invalid username or password");
}



}
   function callnext(){
    window.location.href="page.html"
   }

