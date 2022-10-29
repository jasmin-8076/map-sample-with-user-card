    import React from 'react'
    import './style.css'

    export default function Map() {
        let list=[

          {
          
          Name:"Shamil",
          Age:25,
          JD:"AI Product Engineer",
          Img:"data:image/png;base64,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"
          },
          
          
          
          
          {
          
          Name:"jasmin",
          Age:25,
          JD: "react Engineer",
          Img:"data:image/jpeg;base64,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"
          },
          
          
          {
          
          Name:"Thalia",
          Age:3,
          JD: "Engineer",
          Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvJ14anYdkKq4d0LRhRh0a_u_Kh6DUQGHsQ&usqp=CAU"
          },
          
          {
          
          Name:"Jameela",
          Age:25,
          JD:"doctor",
          Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-ITm1nJh-g1uzfiTT4ZOl2Pduj0ZIqsfbg&usqp=CAU"
          },
          
          ]

      return (
        <div style={{backgroundColor:"red"}}>
          {list.map((item,index) => (

<div className="card">
      <img src={item.Img} alt="Avatar" style={{ width: "50%" }} />
      <div className="container">
        <h4>
          <b>{item.Name} </b><br></br>
          <b>Age:{item.Age} </b>
        </h4>
        <p>{item.JD}</p>
        
      </div>

    </div> 

          ))}
    
    </div>
  )
}

