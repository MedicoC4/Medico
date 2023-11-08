import "./dataGrid.css";
import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Timestamp } from "firebase/firestore";
import {
  collection,
  doc,
  deleteDoc,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { DB } from "../../firebase-config";
import {
  SearchOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Tag } from "antd";

export default function DataGridDemo({ data }) {
  const [filteredRows, setFilteredRows] = useState(data);
  const [categoryNames, setCategoryNames] = useState({});
  const [toggle, setToggle] = useState(true);
  const [iconPress, setIconPress] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(filteredRows);

  const columns = [
    {
      field: "productImage",
      headerName: "Product",
      width: 280,
      renderCell: (params) => {
        const imageUrl = params.row.imgUrl;
        const productName = params.row.productName;

        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={imageUrl}
              alt="Image"
              style={{ width: 60, height: 40, objectFit: "contain" }}
            />
            <div style={{ marginLeft: "1rem" }}>{productName}</div>
          </div>
        );
      },
    },
    {
      field: "productPrice",
      headerName: "Price",
      width: 150,
      editable: true,
      headerClassName: "custom-header-class",
    },
    {
      field: "categories",
      headerName: "Categories",
      width: 200,
      editable: true,
      headerClassName: "custom-header-class",
      renderCell: (params) => {
        const categoryName = categoryNames[params.row.productCategory.id];
        console.log(categoryName);
        return categoryName ? categoryName : "Loading...";
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 150,
      editable: true,
      headerClassName: "custom-header-class",
    },
    {
      field: "isActive",
      headerName: "isActive",
      width: 150,
      editable: true,
      headerClassName: "custom-header-class",
    },
    {
      field: "timeStamp",
      headerName: "Created At",
      width: 200,
      editable: true,
      headerClassName: "custom-header-class",
    },
    {
      field: "update",
      headerName: "Update",
      width: 90,
      editable: true,
      headerClassName: "custom-header-class",
      renderCell: () => (
        <IconButton variant="contained" color="primary" size="small">
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 90,
      renderCell: (params) => (
        <IconButton
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  function timestampToDate(timestamp) {
    if (timestamp instanceof Timestamp) {
      const date = timestamp.toDate();
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      return `${day}/${month}/${year}`;
    }
    return null;
  }

  useEffect(() => {
    setFilteredRows(data);
  }, [data]);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setFilteredRows(data); 
      return;
    }

    const productsQuery = query(
      collection(DB, "products"),
      where("productName", ">=", searchTerm),
      where("productName", "<=", searchTerm + "\uf8ff")
    );

    const querySnapshot = await getDocs(productsQuery);
    const searchData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setFilteredRows(searchData);
  };

  const handleDelete = async (productId) => {
    try {
      const productRef = doc(DB, "products", productId);
      await deleteDoc(productRef);

      const updatedData = data.filter((row) => row.id !== productId);
      setFilteredRows(updatedData);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    // Fetch and cache category names
    const fetchCategoryNames = async () => {
      const categoryNamesData = {};

      for (const row of filteredRows) {
        const categoryRef = row.productCategory;

        if (!categoryNames[categoryRef.id]) {
          const categoryDoc = await getDoc(categoryRef);

          if (categoryDoc.exists()) {
            categoryNamesData[categoryRef.id] = categoryDoc.data().name;
          }
        }
      }

      setCategoryNames(categoryNamesData);
    };

    fetchCategoryNames();
  }, [filteredRows]);

  console.log(categoryNames);

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <div className="sidebar"></div>
      <div className="table-container">
        <div className="main_container_header">
          <div className="product_search">
            <div className="group">
              <SearchOutlined style={{ color: "#6e6e6e" }} />
              <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="icons_toggle">
            <UnorderedListOutlined
              onClick={() => setToggle(true)}
              className="iconBtn"
            />
            <AppstoreOutlined
              onClick={() => setToggle(false)}
              className="iconBtn"
            />
          </div>
        </div>
        <div className={`component ${toggle ? "visible" : "hidden"}`}>
          {toggle ? (
            <DataGrid
              rows={filteredRows}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
              sx={{
                "&, [class^=MuiDataGrid]": {
                  border: "none",
                  borderRadius: "1rem",
                  gap: "0.6rem 0rem",
                },
                height: 560,
                border: "none",
                "[class^=MuiDataGrid-cellContent]": { borderRadius: "0" },
              }}
              getRowClassName={(params) => {
                return params.row.image ? "image-row" : "";
              }}
              getRowHeight={() => 60}
            />
          ) : (
            <div className="products-cards">
              <div className="card_main_conatainer">
                {filteredRows.map((item, index) => {
                  return (
                    <Cards
                      key={index}
                      index={index}
                      categoryNames={categoryNames}
                      item={item}
                      iconPress={iconPress}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Box>
  );
}
