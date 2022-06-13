function validation(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="admin"){
        alert("Login Successful !!!");
        window.location.href="Form.html";
        return false;
    }else{
        alert("Please Enter Valid User Name or Password");
        window.location.href="Login.html";
    }
}


const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
        });


const tel = document.querySelector('#tel');
const telError = document.querySelector('.tel-error');
tel.addEventListener('input', function(){
    let telRgx = RegExp('^[0-9]{2}\\s{0,1}[0-9]{10}$');
    if(telRgx.test(tel.value))
    telError.textContent= "";
    else telError.textContent = "Phone No Is Incorrect";
});

function myFunction() {
    alert("Added Successful !!!");
       }
       