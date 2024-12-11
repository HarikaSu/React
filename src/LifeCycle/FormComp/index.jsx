import React,{useState} from "react";
import MyVerticallyCenteredModal from "./Modal"
import "./index.css"

function FormComp(){
    const [modalShow, setModalShow] =useState(false);
    const [formData,setFormData]=useState({
        user:"",
        mobile:"",
        email:"",
    });
    const handleInput=(e)=>{
        const {name,value}=e.target;
        setFormData((a)=>{
            return{
                ...a,
                [name]:value,
            };
        });
        
    };
    const handleSubmit=(e)=>{
        // alert(formData.user+""+formData.mobile+""+formData.email)
        e.preventDefault();
        setModalShow(true)

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" placeholder="enter username" value={formData.user} onChange={handleInput}/>
                <input type="texte" name="mobile" placeholder="enter mobile no" value={formData.mobile} onChange={handleInput}/>
                <input type="email" name="email" placeholder="enter an email" value={formData.email} onChange={handleInput}/>
                <input type="file" name="image" value={formData.image} onChange={handleInput}/>
                <input type="submit"/>
            </form>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={()=>setModalShow(false)}
            user={formData.user}
            mobile={formData.mobile}
            email={formData.email}
            />

        </div>
    )

}
export default FormComp;


// import React, { useState } from "react";
// import MyVerticallyCenteredModal from "./Modal";
// import "./index.css";

// function FormComp() {
//   const [modalShow, setModalShow] = useState(false);
//   const [formData, setFormData] = useState({
//     user: "",
//     mobile: "",
//     email: "",
//     image: null, // To store the selected image file
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;

//     if (name === "image") {
//       const file = e.target.files[0];
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: file,
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setModalShow(true);
//   };

//   const getImagePreview = () => {
//     if (formData.image) {
//       return URL.createObjectURL(formData.image); // Create a preview URL for the selected image
//     }
//     return null;
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="user"
//           placeholder="Enter username"
//           value={formData.user}
//           onChange={handleInput}
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Enter mobile no"
//           value={formData.mobile}
//           onChange={handleInput}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter an email"
//           value={formData.email}
//           onChange={handleInput}
//         />
//         <input
//           type="file"
//           name="image"
//           onChange={handleInput}
//         />
//         {getImagePreview() && (
//           <img
//             src={getImagePreview()}
//             alt="Preview"
//             style={{ width: "100px", height: "100px", marginTop: "10px" }}
//           />
//         )}
//         <input type="submit" />
//       </form>
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         user={formData.user}
//         mobile={formData.mobile}
//         email={formData.email}
//         image={getImagePreview()} // Pass the preview URL to the modal
//       />
//     </div>
//   );
// }

// export default FormComp;
