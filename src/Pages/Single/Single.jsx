import "./Single.scss";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Chart from '../../Components/Chart/Chart'
import TableData from "../../Components/Table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />

      <div className="singleContainer">
        <Navbar />
        <div className="singleTop">
          
          <div className="singleLeft">
          <div className="editbtn">Edit</div>
          <h1 className="title">INFORMATION</h1>
          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU"  alt="" className="itemImage" />
            <div className="details">
              <h2 className="user">Mahesh</h2>
              <div className="items">
                <div className="key">Email:</div>
                <div className="value">mahesh@gmail.com</div>
              </div>
              <div className="items">
                <div className="key">Phone:</div>
                <div className="value">+91 9164398313</div>
              </div>
              <div className="items">
                <div className="key">Address:</div>
                <div className="value">10-A, Hyderabad</div>
              </div>
              <div className="items">
                <div className="key">Country:</div>
                <div className="value">India</div>
              </div>
            </div>
          </div>

          </div>
          <div className="singleRight">
            <Chart  aspect={3 / 1} title="User Spending (Last 6 Months Revenue)"/>
          </div>
        </div>
        <div className="singleBottom">
        <h1 className="title">Last Transition Information</h1>
          <TableData />
        </div>
      </div>

    </div>
  )
}

export default Single