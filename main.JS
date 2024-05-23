const lengthInput = document.getElementById("length");
const numbersCheckbox = document.getElementById("numbers");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const symbolsCheckbox = document.getElementById("symbols");
const excludeInput = document.getElementById("exclude");
const generateBtn = document.getElementById("generateBtn");
const passwordOutput = document.getElementById("password");

const numbers = "0123456789";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+~`|]}[{';\":/?.>,<";

function generatePassword() {
  const length = lengthInput.value;
  const includeNumbers = numbersCheckbox.checked;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;
  const excludeChars = excludeInput.value;

  if (
    !includeNumbers &&
    !includeUppercase &&
    !includeLowercase &&
    !includeSymbols
  ) {
    alert("請至少選擇一種字元類型");
    return;
  }

  let characters = "";
  if (includeNumbers) characters += numbers;
  if (includeUppercase) characters += uppercase;
  if (includeLowercase) characters += lowercase;
  if (includeSymbols) characters += symbols;

  characters = characters
    .split("")
    .filter((char) => !excludeChars.includes(char))
    .join("");

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  passwordOutput.value = password;
}

generateBtn.addEventListener("click", generatePassword);
