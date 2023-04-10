import React, { useState } from 'react';
import "./dataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data';
import { Link } from 'react-router-dom';



const DataTable = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width:200,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link className='routerLink' >
                            <div className='viewButton'>View</div>
                        </Link>
                        <Link className='routerLink' >
                            <div className='deleteButton'
                                onClick={() => handleDelete(params.row.id)}
                            >
                                Detele
                            </div>
                        </Link>
                    </div>
                )
            }
        }
    ]
  return (
    <div className='dataTable'>

        <div className="datatableTitle">
            Add New User
            <Link>
                <button>Add New</button>
            </Link>
        </div>
        <DataGrid
            className='dataGrid'
            rows={data}
            columns={userColumns.concat(actionColumn)}
            autoPageSize
            checkboxSelection
      />
    </div>
  ) 
}

export default DataTable