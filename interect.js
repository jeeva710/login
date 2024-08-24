function calculate(){
    var fname=document.getElementById("fname");
    var lname=document.getElementById("lname");
    var email=document.getElementById("email");
    var number=document.getElementById("number");
    var address=document.getElementById("address");
    var city=document.getElementById("city");
    var count=0;
    var regex=/\d/;
    if(regex.test(fname.value)){
        fname.value="Invalid Name";
    }
    else{
        count=count+1;
    }

    if(regex.test(lname.value)){
        lname.value="Invalid Name";
    }
    else{
        count=count+1;
    }
    const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex1.test(email.value)){
        count+=1;
    }
    else{
        email.value="Invalid Email";
    }

    const regex3 = /^(?:\+?\d{1,3}[- ]?)?\d{10}$/;
    if(regex3.test(number.value)){
        count=count+1;
    }
    else {
        number.value="Invalid mobile number";
    }
    if(address.value.length>0){
        count=count+1;
    }
    else{
        address.value="Wrong data";
    }
    if(city.value.length>0){
        count=count+1;
    }
    else{
        city.value="Wrong data";
    }

    if(count==6){
       res.value="res";
    }
    
    
}
