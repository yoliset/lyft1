function validateContact () {
    var user_number = document.getElementById("user-number");
    if (/^[0-9]+$/.test(user_number.value))
        window.location.href = 'sign.html';
    else {
        console.log("error")
        //mostrar errores
    }
}

