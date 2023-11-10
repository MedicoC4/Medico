import React, { useEffect, useState } from "react";
import "./addProduct.css";
import SideNav from "../../components/sideNav/SideNav";
import {
  addDoc,
  getDocs,
  collection,
  serverTimestamp,
  doc,
} from "firebase/firestore";
import { DB, storage } from "../../firebase-config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  DocumentReference,
} from "firebase/storage";
import ImgUpload from "../../components/img/ImgUpload";
import { notification } from "antd";
import axios from "axios";
import useForm from "../../hooks/useForm";
import validate from "../../utils/validate";
import Input from "../../components/Input/Input";

const initialState = {
  name: {
    value: "",
    required: true,
  },
  email: {
    value: "",
    required: true,
    requiredMessage: "Email address is required!",
    email: true,
    emailMessage: "Email address is not valid!",
  },
  password: {
    value: "",
    required: true,
    minLength: 6,
    minLengthMessage: "Password must be at least 6 characters long!",
    maxLength: 16,
    maxLengthMessage: "Too many characters!",
  },
  confirmPassword: {
    value: "",
    required: true,
    matchWith: "password",
    matchWithMessage: "Password values must be equal!",
  },
  gender: {
    value: "",
    required: true,
  },
  difficulty: {
    value: "",
    required: true,
  },
  image: {
    value: {},
    required: true,
    file: true,
    allowedTypes: ["jpg", "jpeg", "png", "gif"],
    maxFileSize: 1024,
  },
  description: {
    value: "",
  },
  terms: {
    value: false,
    required: true,
    requiredMessage: "You need to accept our Terms and Conditions!",
  },
};

const AddProduct = () => {
  const { formData, errors, changeHandler, setErrors } = useForm(
    initialState,
    validate
  );

  const submitHandler = (e) => {
    e.preventDefault();
    let formErrors = validate(formData, true);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const data = new FormData();
      data.append("name", formData.name.value);
      data.append("email", formData.email.value);
      data.append("password", formData.password.value);
      data.append("gender", formData.gender.value);
      data.append("difficulty", formData.difficulty.value);
      data.append("image", formData.image.value);
      data.append("description", formData.description.value);
      data.append("terms", formData.terms.value);

      console.log("form can be submitted now...");
      for (let pair of data.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
    }
  };

  // const [api, contextHolder] = notification.useNotification();
  // const openNotificationWithIcon = (type) => {
  //   api[type]({
  //     message: "Notification Title",
  //     description:
  //       "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
  //   });
  // };

  // const removeBackground = async (imageFile) => {
  //   const apiKey = "4Ed3fDDjriV6SC24Rg1eMZnj";
  //   const removeBgApiUrl = "https://api.remove.bg/v1.0/removebg";

  //   const formData = new FormData();
  //   formData.append("size", "auto");
  //   formData.append("image_file", imageFile);

  //   try {
  //     const response = await axios({
  //       method: "post",
  //       url: removeBgApiUrl,
  //       data: formData,
  //       responseType: "arraybuffer",
  //       headers: {
  //         "X-Api-Key": apiKey,
  //         "Content-Type": "multipart/form-data",
  //       },
  //       encoding: null,
  //     });

  //     if (response.status === 200) {
  //       const processedImageBlob = new Blob([response.data], {
  //         type: "image/png",
  //       });
  //       return processedImageBlob;
  //     } else {
  //       console.error(
  //         "Error removing background:",
  //         response.status,
  //         response.statusText
  //       );
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error("Request failed:", error);
  //     return null;
  //   }
  // };

  // const [file, setFile] = useState("");
  // const [perc, setPerc] = useState(null);
  // const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // const FileAdd = (event) => {
  //   const file = event.target.files[0];
  //   setFile(file)
  // };

  return (
    <div className="holy-container">
      {/* {contextHolder} */}
      <div className="side">
        <SideNav />
      </div>
      <div className="biggest_container_ever">
        <div className="left_div_add_details">
          <h1>Add Products</h1>
          <div className="product_information_add">
            <p className="addproduct_title">Product Information</p>
            <div className="addproduct_input_div">
              <p className="input_title_add">Product Name</p>
              <input
                type="text"
                placeholder="Enter product name"
                className="big_add_inputs"
                name="productName"
                // value={formData.productName}
                // onChange={handleInputChange}
              />
            </div>
            <div className="addproduct_input_div">
              <p className="input_title_add">Product Description</p>
              <input
                type="text"
                placeholder="Enter a brief description"
                className="big_add_inputs"
                name="productDescription"
                // value={formData.productDescription}
                // onChange={handleInputChange}
              />
            </div>
            <div className="add_side_effects">
              <p className="input_title_add">Side Effects</p>
              <div className="side_effects_inputs">
                <input
                  type="text"
                  placeholder="Enter a side effect"
                  className="sub_add_inputs"
                  name="sideEffect1"
                  // value={formData.sideEffect1}
                  // onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter a side effect"
                  className="sub_add_inputs"
                  name="sideEffect2"
                  // value={formData.sideEffect2}
                  // onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter a side effect"
                  className="sub_add_inputs"
                  name="sideEffect3"
                  // value={formData.sideEffect3}
                  // onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter a side effect"
                  className="sub_add_inputs"
                  name="sideEffect4"
                  // value={formData.sideEffect4}
                  // onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="product_information_add">
            <p className="addproduct_title">Add Product Image</p>
            <div className="image_container_and_title">
              <div className="white_image_holder">
                <div>{/* <ImgUpload file={file} FileAdd={FileAdd} /> */}</div>
              </div>
            </div>
          </div>
          <div className="product_information_add">
            <p className="addproduct_title">Product Price</p>
            <div className="addproduct_input_div">
              <p className="input_title_add">Price</p>
              <input
                type="text"
                placeholder="  $"
                className="big_add_inputs"
                name="productPrice"
                // value={formData.productPrice}
                // onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="product_information_add">
            <p className="addproduct_title">Product Category</p>
            <div className="addproduct_input_div">
              <p className="input_title_add">Category</p>
              <select
                id=""
                className="big_add_inputs"
                name="productCategory"
                // onChange={handleInputChange}
              >
                {/* {categories.map((category) => (
                  // <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))} */}
              </select>
            </div>
          </div>
        </div>
        <div className="right_div_add_details" style={{ marginTop: "5.85rem" }}>
          <div className="product_information_add">
            <div className="top_preview_add_image">
              <p className="addproduct_title">Product Preview</p>
              <i className="material-icons">&#xe5d0;</i>
            </div>
            <img src="" alt="" className="image_preview_holder" />
            <div className="bottom_preview_add_image">
              <p className="addproduct_title">Article Details</p>
              <button type="button" className="save_draft_image">
                Save
              </button>
            </div>
          </div>
          <div className="product_information_add">
            <div className="buttons_save_add_collection">
              <button
                // disabled={perc !== null && perc < 100}
                className="saving_buttons_add"
                // onClick={handleSubmit}
              >
                Publish
              </button>
              <button className="saving_buttons_add">Schedule</button>
              <p className="addproduct_title" id="belong_to_buttons">
                Save Draft
              </p>
            </div>
          </div>
              <input type="text" onChange={(e) => {
                  console.log(e.target.value);
              }} />
              <input type="file" onChange={(e) => {
                  console.log(e.target.files[0]);
              }} />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
