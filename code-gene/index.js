// EN JAVASCIPT on n'a pas besoin de declarer les ids 
const dataLowerCase = "qwertyuiopasdfghjklzxcvbnm";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123546789";
const dataSymbols = "~!@#$%^&*()_+'\";:,.èçàù?";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById('password-output')

function generatePassword() {
    let data =[];
    let password = "";

    if (lowercase.checked) data.push(...dataLowerCase);
    if (uppercase.checked) data.push(...dataUpperCase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);
    
    if (data.length === 0) {
        alert("veuillez selectionner des caracteres");
        return;
    }
    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }
    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand('copy');

    generateButton.textContent = "Copié !!";

    setTimeout(() => {
        generateButton.textContent ="Générer Mot De Passe";
    }, 2000);
}

generateButton.addEventListener("click", generatePassword);

