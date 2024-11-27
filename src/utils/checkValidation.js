export const checkValidation = (email, password) => {
  const EmailValidate =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const PasswordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!EmailValidate) return "Email is incorrect";
  if (!PasswordValidate) return "Password is incorrect";

  return null;
};

// export const checkApiKeyValidator=(key)=>{
//   if(!key)
// }
