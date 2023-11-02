import './dataGrid.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date of Birth',
    type: 'date',
    width: 150,
    editable: true,
  },
  {
    field: 'image', 
    headerName: 'Image', 
    width: 100, 
    renderCell: (params) => (
      <img
        src="https://firebasestorage.googleapis.com/v0/b/medico-5add3.appspot.com/o/doliprane-tabs-500mg-tablets-16.jpg?alt=media&token=0ff11c1a-c987-4cbd-8a8b-d35a8b149b1d"
        alt="Image"
        style={{ width: 60, height: 60, borderRadius: '50%' }}
      />
    ),
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
    renderCell: () => (
      <IconButton variant="contained" color="error" size="small">
        <DeleteIcon />
      </IconButton>
    ),
  },
];

const rows = Array.from({ length: 100 }, (_, id) => ({
  id: id + 1,
  image: '/path/to/your/image.png', 
  firstName: `Firstname${id + 1}`,
  date: new Date(1970 + id, 0, 1),
}));

export default function DataGridDemo({ data }) {
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = rows.filter((row) => {
      const firstName = row.firstName ? row.firstName.toLowerCase() : '';
      return firstName.includes(searchTerm);
    });
    setFilteredRows(filteredData);
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
