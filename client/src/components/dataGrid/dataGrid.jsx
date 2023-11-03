import './dataGrid.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Timestamp } from "firebase/firestore";
import { collection, doc, deleteDoc, getDocs, query, where, getDoc } from 'firebase/firestore';
import { DB } from '../../firebase-config';

export default function DataGridDemo({ data }) {
  const [filteredRows, setFilteredRows] = useState(data);

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'productName',
      headerName: 'Product Name',
      width: 150,
      editable: true,
    },
    {
      field: 'productPrice',
      headerName: 'Price',
      width: 100,
      editable: true,
    },
    {
      field: 'timeStamp',
      headerName: 'Created At',
      width: 150,
      editable: true,
    },
    {
      field: 'categories',
      headerName: 'Categories',
      width: 150,
      valueGetter: (params) => getCategoryNames(params.row.productCategory),
    },
    {
      field: 'image',
      headerName: 'Product Image',
      width: 130,
      renderCell: (params) => {
        const imageUrl = params.row.imgUrl;
        return (
          <>
            <img
              src={imageUrl}
              alt="Image"
              style={{ width: 60, height: 60, borderRadius: '50%' }}
            />
          </>
        );
      }
    },
    {
      field: 'update',
      headerName: 'Update',
      width: 90,
      renderCell: () => (
        <IconButton variant="contained" color="primary" size="small">
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
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

  const handleSearch = async (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const productsQuery = query(
      collection(DB, 'products'),
      where('productName', '>=', searchTerm),
      where('productName', '<=', searchTerm + '\uf8ff')
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
      const productRef = doc(DB, 'products', productId);
      await deleteDoc(productRef);

      const updatedData = data.filter((row) => row.id !== productId);
      setFilteredRows(updatedData);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

const getCategoryNames = async (categoryRef) => {
  try {
    const categoryDoc = await getDoc(categoryRef);
    if (categoryDoc.exists()) {
      return categoryDoc.data().categoryName;
    } else {
      console.error(`Category document with reference ${categoryRef.path} does not exist.`);
      return ''; // Return an empty string or another appropriate value in case of a missing document.
    }
  } catch (error) {
    console.error('Error fetching category:', error);
    return ''; // Return an empty string or another appropriate value in case of an error.
  }
};


  return (
    <Box sx={{ height: 400, width: 1 }}>
      <div className="sidebar"></div>
      <div className="table-container">
        <TextField
          label="Search"
          variant="outlined"
          onChange={handleSearch}
          sx={{ marginBottom: '8px', '& input': { height: '21px' } }}
        />
        <DataGrid
          rows={filteredRows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{ height: 630 }}
          getRowClassName={(params) => {
            return params.row.image ? 'image-row' : '';
          }}
          getRowHeight={() => 80}
        />
      </div>
    </Box>
  );
}
