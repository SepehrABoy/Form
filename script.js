
function reg() {
    document.getElementById('slider').style.transform='translateX(-212.5px)';
    document.getElementById('slider').style.borderRadius='10px 70px 70px 10px';
    document.getElementById('slider').style.background= 'linear-gradient(-45deg ,rgb(218, 64, 159) ,rgb(114, 0, 167))';
    document.getElementById('register').style.transform='scale(0.5)';
    document.getElementById('login').style.transform='scale(1)';
}

function log() {
    document.getElementById('slider').style.transform='translateX(212.5px)';
    document.getElementById('slider').style.borderRadius='70px 10px 10px 70px';
    document.getElementById('slider').style.background= 'linear-gradient(45deg ,rgb(218, 64, 159) ,rgb(114, 0, 167))';
    document.getElementById('register').style.transform='scale(1)';
    document.getElementById('login').style.transform='scale(0.5)';
}

function Register() {
    var regUserName = document.getElementsByName('regUserName')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var regPassWord = document.getElementsByName('regPassWord')[0].value;
    var regPassWordRe = document.getElementsByName('regPassWordRe')[0].value;

    var Register = [regUserName , email , regPassWord , regPassWordRe]

    if (regPassWord == regPassWordRe) {
        console.log(Register);
        localStorage.setItem(regUserName , Register)
    }
    else {
        alert("You didn't reapeat the password corectly.")
    }
}