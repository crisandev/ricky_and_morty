const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numberRegex = /\d/;

export const validationEmail = (email) => {
   if (emailRegex.test(email) || email.length || email.length > 35) {
      return "Invalid email";
   }
   return "";
};

export const validationPassword = (password) => {
   if (numberRegex.test(password) || !(password >= 6 && password <= 10)) {
      return "Invalid password, must contain a number and have to be between 6 and 10 characters";
   }
   return "";
};
