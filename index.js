const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    check();
});

function check()
{
    const fnameValue=fname.value.trim();
    const lnameValue=lname.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();

    if(fnameValue==="")
    {
        setError(fname,"First Name cannot be blank");
    }
    else
    {
        setSuccess(fname);
    }


    if(lnameValue==="")
    {
        setError(lname,"Last Name cannot be blank");
    }
    else
    {
        setSuccess(lname);
    }



    if(emailValue==="Last Name cannot be blank")
    {
        setError(email,"");
    }
    else if(!checkMail(emailValue))
    {
        setError(email,"Looks like this is not an email");
    }
    else
    {
        setSuccess(email);
    }



    if(passwordValue==="")
    {
        setError(password,"Password cannot be blank");
    }
    else
    {
        setSuccess(password);
    }

}

function setError(input,message)
{
    const inputControl=input.parentElement;
    const em=inputControl.querySelector("em");
    
    input.setAttribute("placeholder","");
    inputControl.className="input-control error";
    em.innerText=message;
}

function setSuccess(input){
    const inputControl=input.parentElement;
    const em=inputControl.querySelector("em");

    inputControl.className="input-control";
    em.innerText="";
}
function checkMail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
