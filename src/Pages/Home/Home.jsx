
import React from 'react'
import Chart from '../../Components/Chart/Chart';
import Featured from '../../Components/Featured/Featured';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableData from '../../Components/Table/Table';
import Widget from '../../Components/Widget/Widget';
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="container">
            <Navbar/>
            <div className="widgetHome">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className='charts'>
              <Featured/>
              <Chart aspect={2 / 1} title="Last 6 Months (Revenue)"/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transitions</div>
              <TableData/>
            </div>
            </div>
    </div>
  )
}

export default Home