import "./Widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
  let data;

  //temperary
  let amount = 200;
  let diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: <PersonOutlineOutlinedIcon className="icon" style={
            {
                
                backgroundColor: "rgba(220, 20, 60, 0.329)", color: "crimson"
               
            }
        }/>,
      };
      break;

    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "view all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" style={
            {
                
                backgroundColor: "rgba(255, 217, 0, 0.329)", color: "goldenrod"
               
            }
        }/>,
      };
      break;

    case "earning":
      data = {
        title: "EARNING",
        isMoney: false,
        link: "view net earnings",
        icon: <MonetizationOnOutlinedIcon className="icon" 
        style={
            {
                
                backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green"
               
            }
        }
        />,
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "see details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" 
        style={
            {
                
                backgroundColor: "rgba(128, 0, 128, 0.253)", color: "purple"
               
            }
        }/>,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
