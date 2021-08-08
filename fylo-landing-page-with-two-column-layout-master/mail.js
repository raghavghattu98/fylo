function validate()
{
    var text = document.getElementById("text1").value;
    var regx = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+).([a-z]{2,20})$/;

    if(regx.test(text))
    {
        document.getElementById("lbltext").innerHTML="valid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="green"
    }
    else{
        document.getElementById("lbltext").innerHTML="invalid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="red"
    }

}