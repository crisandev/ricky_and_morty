import { useState } from "react";
import { validationEmail, validationPassword } from "./validation";

export default function Form() {
   let errorEmail = "";
   let errorPass = "";

   const [userData, setUserData] = useState({
      email: "",
      password: "",
   });

   const [errors, setErrors] = useState({
      email: "",
      password: "",
   });

   const handleChange = (e) => {
      const { value } = e.target;
      setUserData(value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrors({ ...errors, email: validationEmail(userData.email) });
      setErrors({ ...errors, password: validationPassword(userData.password) });
      errorEmail = errors.email.length > 0 ? <label>{errors.email}</label> : "";
      errorPass = errors.password.length > 0 ? <label>{errors.password}</label> : "";
   };

   return (
      <form action="">
         <div>
            <label>Email</label>
            <input type="email" value={userData.email} onChange={handleChange} />
            {errorEmail}
         </div>
         <div>
            <label>Password</label>
            <input type="password" value={userData.password} onChange={handleChange} />
            {errorPass}
         </div>
         <button type="submit" onClick={handleSubmit}>
            Submit
         </button>
      </form>
   );
}
