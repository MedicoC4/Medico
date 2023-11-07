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

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    imgUrl: "",
    productCategory: null,
    sideEffect1: "",
    sideEffect2: "",
    sideEffect3: "",
    sideEffect4: "",
  });

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };

  const removeBackground = async (imageFile) => {
    const apiKey = "4Ed3fDDjriV6SC24Rg1eMZnj";
    const removeBgApiUrl = "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", imageFile);

    try {
      const response = await axios({
        method: "post",
        url: removeBgApiUrl,
        data: formData,
        responseType: "arraybuffer",
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "multipart/form-data",
        },
        encoding: null,
      });

      if (response.status === 200) {
        const processedImageBlob = new Blob([response.data], {
          type: "image/png",
        });
        return processedImageBlob;
      } else {
        console.error(
          "Error removing background:",
          response.status,
          response.statusText
        );
        return null;
      }
    } catch (error) {
      console.error("Request failed:", error);
      return null;
    }
  };

  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const FileAdd = (file) => {
    setFile(file);
  };


  useEffect(() => {
    const uploadImg = async () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const processedImageBlob = await removeBackground(file);

      if (processedImageBlob) {
        const uploadTask = uploadBytesResumable(storageRef, processedImageBlob);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setPerc(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setFormData((prev) => ({ ...prev, imgUrl: downloadURL }));
            });
          }
        );
      }
    };
    file && uploadImg();
  }, [file]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesCollection = collection(DB, "categories");
        const categoriesSnapshot = await getDocs(categoriesCollection);
        const categoriesData = [];
        categoriesSnapshot.forEach((doc) => {
          const category = doc.data();
          categoriesData.push({ id: doc.id, ...category });
        });
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (
      name === "sideEffect1" ||
      name === "sideEffect2" ||
      name === "sideEffect3" ||
      name === "sideEffect4"
    ) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name === "productCategory") {
      const categoryRef = doc(DB, "categories", value);
      setSelectedCategory(categoryRef);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedCategory) {
        openNotificationWithIcon("success");
        const productData = {
          ...formData,
          productCategory: selectedCategory,
          timeStamp: serverTimestamp(),
        };
        await addDoc(collection(DB, "products"), productData);

        setFormData({
          productName: "",
          productDescription: "",
          productPrice: "",
          imgUrl: "",
          sideEffect1: "",
          sideEffect2: "",
          sideEffect3: "",
          sideEffect4: "",
          productCategory: null,
        });

        console.log("Product added successfully!");
      } else {
        console.error("Please select a category before submitting.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="holy-container">
      {contextHolder}
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
                value={formData.productName}
                onChange={handleInputChange}
              />
            </div>
            <div className="addproduct_input_div">
              <p className="input_title_add">Product Description</p>
              <input
                type="text"
                placeholder="Enter a brief description"
                className="big_add_inputs"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleInputChange}
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
                  value={formData.sideEffect1}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter a side effect"
                  className="sub_add_inputs"
                  name="sideEffect2"
                  value={formData.sideEffect2}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter a side effect"
                  className="sub_add_inputs"
                  name="sideEffect3"
                  value={formData.sideEffect3}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter a side effect"
                  className="sub_add_inputs"
                  name="sideEffect4"
                  value={formData.sideEffect4}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="product_information_add">
            <p className="addproduct_title">Add Product Image</p>
            <div className="image_container_and_title">
              <div className="white_image_holder">
                <div>
                  <ImgUpload file={file} FileAdd={FileAdd} />
                </div>
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
                value={formData.productPrice}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="right_div_add_details" style={{marginTop:'5.85rem'}}>
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
                disabled={perc !== null && perc < 100}
                className="saving_buttons_add"
                onClick={handleSubmit}
              >
                Publish
              </button>
              <button className="saving_buttons_add">Schedule</button>
              <p className="addproduct_title" id="belong_to_buttons">
                Save Draft
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
