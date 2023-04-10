import React from 'react';
import "./featuredChart.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const FeaturedChart = () => {
  return (
    <div className='featuredChart'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'  className='icon'/>
        </div>

        <div className="bottom">
            <div className="chart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>

            <p className="title">Total sales made today</p> 
            <p className="amount">$ 1254</p> 
            <p className="desc">
                Previus transaction processing. Last payments many not be included
            </p> 
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedChart