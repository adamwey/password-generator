const symbols = '!@#$%^&*';
const numbers = '0123456789';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = lowercaseChars.toUpperCase();

export function generatePassword(
  length: number,
  hasSymbols: boolean,
  hasNumbers: boolean,
  hasLowercase: boolean,
  hasUppercase: boolean
) {
  if (!hasSymbols && !hasNumbers && !hasLowercase && !hasUppercase) {
    return '';
  }

  let selections = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []),
    ...(hasLowercase ? lowercaseChars : []),
    ...(hasUppercase ? uppercaseChars : []),
  ];

  let password = '';

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * selections.length);
    password += selections[randomIndex];
  }

  return password;
}
