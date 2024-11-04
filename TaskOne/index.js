function handleNameMessage(){
    const fullName=document.getElementById("fullNames").value;

    if (fullName.length < 4){
        document.getElementById("namesMessage").innerHTML="Name must be at least 3 characters long";
    }else if(fullName.length < 8){
        document.getElementById("namesMessage").innerHTML="Please enter your full name"
    } else {
        document.getElementById("namesMessage").innerHTML=""
    }
};

function hundleEmailMessage(){
    const Email=document.getElementById("email").value;

    if (Email.length <= 1){
        document.getElementById("emailMessage").innerHTML="Email is required";
    } else if(Email.length < 100){
        document.getElementById("emailMessage").innerHTML="Please enter a valid email address"
    } if (Email.includes("@" && "." ) && Email.length>5){
        document.getElementById("emailMessage").innerHTML=""
    }
};



const handlePasswordMessage =() =>{
 const password=document.getElementById("password").value;
 const passMsg=document.getElementById("passMsg");
 const passBox=document.getElementById("pasBox");


 if(password.length= 1){
    passMsg.innerHTML="Weak"
    document.getElementById("passreq").innerHTML="Password must contain: At least 8 characters, One uppercase letter, One number, <br> One special character (!@#$%^&*)";
 }
}

