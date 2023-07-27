const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberRegex = /\d/;

export function validation({ email, password }) {
   const errors = {};
   if (!emailRegex.test(email) || !email.length || email.length > 35)
      errors.email = "Invalid email";

   if (!numberRegex.test(password) || !(password.length >= 6 && password.length <= 10))
      errors.password =
         "Invalid password, must contain a number and have to be between 6 and 10 characters";

   console.log("error before ");
   console.log(errors);
   return errors;
}

// export const validationEmail = (email) => {
//    return "";
// };

// export const validationPassword = (password) => {
//    return "";
// };
