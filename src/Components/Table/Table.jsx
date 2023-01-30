import './Table.scss';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";




const TableData = () => {
  const rows = [
    {
      id: 16264001,
      product: "Acer Nitro 5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 16264002,
      product: "Acer Nitro 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 16264003,
      product: "Acer Nitro 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 16264004,
      product: "Acer Nitro 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 16264005,
      product: "Acer Nitro 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash On Delivery",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking Id</TableCell>
            <TableCell className="tablecell">Product</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="tablecell">
                {row.id}
              </TableCell>
              <TableCell className="tablecell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
