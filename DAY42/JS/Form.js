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
         window.location.href="http://programminghead.com";  
       }
       