
const genBtn = document.getElementById('gen-btn');
genBtn.addEventListener('click', function(){
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";


    for(let i = 0; i < 20; i++){
        let genPass = letters[Math.floor(Math.random() * 64)];
        password += genPass;
    }

    document.querySelector('.passTest').innerHTML = password;
    console.log(password);
})


