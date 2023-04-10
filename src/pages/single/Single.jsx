import React from 'react';
import "./single.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import NormalChart from '../../components/normalChart/NormalChart';
import ListTable from '../../components/listTable/ListTable';

const Single = () => {
  return (
    <div className='single'>

      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />
              
              <div className="details">
                <h1 className="itemTitle">Dakalo Mbulaheni</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">dakalo@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+27 124 869 4851</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">79 Mehlomakulu str Dube 1800</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">South Africa</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
              <NormalChart aspect={3/1} title="User spending (Last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <ListTable />
        </div>
      </div>
      
    </div>
  )
}

export default Single