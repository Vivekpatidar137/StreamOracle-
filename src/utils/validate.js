export const checkValidData = (name, email, password) => {
  const isUserNameValid = /^[a-zA-Z ]{2,40}$/.test(name);
  const isEmailValid =
    /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  if (!isUserNameValid) return "User name is not valid";

  return null;
};
