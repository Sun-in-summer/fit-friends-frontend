export const validateSignInForm = (email: HTMLInputElement, password: HTMLInputElement) => {
  const validPassword = /^.*(?=.{1,})(?=.*[a-zA-Z])(?=.*\d)/;
  const validLogin = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !!(password.value.match(validPassword) && email.value.match(validLogin));
};
