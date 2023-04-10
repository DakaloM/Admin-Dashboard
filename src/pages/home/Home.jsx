import React from 'react';
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import FeaturedChart from '../../components/featuredChart/FeaturedChart';
import NormalChart from '../../components/normalChart/NormalChart';
import ListTable from '../../components/listTable/ListTable';


const Home = () => {
  return (
    <div className='home'>
        <Sidebar /> 

        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>

          <div className="charts">
            <FeaturedChart />
            <NormalChart aspect={2/1} title="Last  Months Revenue"/>
          </div>

          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <ListTable />
          </div>
        </div>
    </div>
  )
}

export default Home