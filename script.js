function generatePassword() {
    const length = 10;
    const characters = "G7xL29mQvA3pZt8dWsFy()";
    let password = "";

    for(let i = 0; i < length;i++){
        const randomIndex = Math.floor(Math.random()* characters.length);
        password += characters[randomIndex];

    }
    document.getElementById("password").value = password;

}

function copyPassword() {
    const passwordField = document.getElementById("password"); 
    passwordField.select(); 
    document.execCommand("copy");
    alert("Password copied to Clipboard");
}
