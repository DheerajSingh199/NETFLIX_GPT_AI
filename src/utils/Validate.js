export const Validate = (email, password) => {
  const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  const passwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Ahh haa! Email id is not valid";
  if (!passwordValid) return "Ahh haa! Password  is not valid";
  return null;
};
