// import React, { useState } from "react";
// import AuthenticationModel from "./Modal";

// function ParentComp() {
//   const [modalShow, setModalShow] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     expiresInMins: 30,
//   });
//   const [res, setResponse] = useState(false);

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setFormData((a) => {
//       return {
//         ...a,
//         [name]: value,
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         res.accessToken ? setResponse(true) : setResponse(false);
//         setModalShow(true);
//       });
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", flexDirection: "column", width: "50vw" }}
//       >
//         <input
//           type="text"
//           name="username"
//           placeholder="Enter username"
//           value={formData.username}
//           onChange={handleInput}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           value={formData.password}
//           onChange={handleInput}
//         />
//         <input
//           type="number"
//           name="expiresInMins"
//           placeholder="Token expiration in mins"
//           value={formData.expiresInMins}
//           onChange={handleInput}
//         />
//         <input type="submit" />
//       </form>
//       {res ? (
//         <AuthenticationModel
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//           user={formData.username}
//         />
//       ) : (
//         <AuthenticationModel
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//           user="Unauthorized user"
//         />
//       )}
//     </div>
//   );
// }

// export default ParentComp;


import React, { useState } from "react";
import AuthenticationModel from "./Modal";
import axios from "axios";

function ParentComp() {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  });
  const [res, setResponse] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((a) => {
      return {
        ...a,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", formData);
      if (response.data.accessToken) {
        setResponse(true);
      } else {
        setResponse(false);
      }
      setModalShow(true);
    } catch (error) {
      console.error("Error during login:", error);
      setResponse(false);
      setModalShow(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "50vw" }}
      >
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInput}
        />
        <input
          type="number"
          name="expiresInMins"
          placeholder="Token expiration in mins"
          value={formData.expiresInMins}
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
      {res ? (
        <AuthenticationModel
          show={modalShow}
          onHide={() => setModalShow(false)}
          user={formData.username}
        />
      ) : (
        <AuthenticationModel
          show={modalShow}
          onHide={() => setModalShow(false)}
          user="Unauthorized user"
        />
      )}
    </div>
  );
}

export default ParentComp;