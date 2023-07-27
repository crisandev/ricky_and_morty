import { useState } from "react";
import { validation } from "./validation.js";

export default function Form({login}) {
   // const [startValidating, setStartValidating] = useState(false);
   const [userData, setUserData] = useState({
      email: "",
      password: "",
   });

   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      const { value, name } = e.target;
      setUserData({ ...userData, [name]: value });
      setErrors(validation({ ...userData, [name]: value }));
   };

   
   const handleSubmit = (e) => {
      e.preventDefault();
      login(userData);
      
      // console.log(errors);
      // console.log(!Boolean(Object.keys(errors).length));
      // if (!Object.keys(errors).length) {
      //    alert("Datos completos");
      //    setUserData({
      //       email: "",
      //       password: "",
      //    });
      //    setErrors({
      //       email: "",
      //       password: "",
      //    });
      //    document.getElementById("form-login").submit();
      // } else {
      //    setStartValidating(true);
      //    alert("Datos incompletos");
      // }
   };

   return (
      <form action="" id="form-login">
         <div>
            <label>Email</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
         </div>
         <div>
            <label>Password</label>
            <input
               type="password"
               name="password"
               value={userData.password}
               onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
         </div>
         <button type="submit" onClick={handleSubmit}>
            Submit
         </button>
      </form>
   );
}
