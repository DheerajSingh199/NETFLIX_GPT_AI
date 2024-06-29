export const Validate = (email, password) => {
  const passwordValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const emailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  if (!emailValid) return "Ahh haa! Email id is not valid";
  if (!passwordValid) return "Ahh haa! Password  is not valid";
  return null;
};
