import './DataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../DataTableSource';
import {Link} from 'react-router-dom';
import { useState } from 'react';


const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item)=> item.id !== id));
  }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                      <Link to='/user/single'>
                        <div className="viewbutton">View</div>
                        </Link>
                        <div className="deletebutton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]
    
  return (
    <div className='datatable'>
      <div className="dataUserInfo">
        <p>Add New User</p>

        <Link to="/user/new" className='newuser'>
          Add New
        </Link>
      </div>
      
        <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable