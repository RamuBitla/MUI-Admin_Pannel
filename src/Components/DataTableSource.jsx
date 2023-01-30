export const userColumns = [
    { field: "id", headerName: "ID", width: 70 }, 
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return(
                <div className="cellWithImg">
                    <img src={params.row.img} alt="" className="cellImg" />
                    {params.row.customer}
                </div>
            )
        },
    },
      {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
     renderCell: (params) => {
        return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    }  
    }
]


//Temporary Data
export const userRows = [
    {
        id: 1,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 2,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Passive",
      },
      {
        id: 3,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Pending",
      },
      {
        id: 4,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 5,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 6,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 7,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 8,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 9,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 10,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 11,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 12,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
      {
        id: 13,
        customer: "John Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6uINr5YzY3ucm6EgrXMzjaTrFMy_mdnGwQ&usqp=CAU",
       email: "johnsmith@gmail.com",
       age: 35,
        status: "Active",
      },
     
      ]