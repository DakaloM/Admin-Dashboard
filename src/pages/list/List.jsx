import React from 'react';
import "./list.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import DataTable from '../../components/datatable/DataTable';
import Navbar from '../../components/navbar/Navbar';


const List = () => {
  return (
    <div className='list'>
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default List