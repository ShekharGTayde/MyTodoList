import React from 'react';

export default function TodoItem({ todo, onDelete }) {
  const handleDelete = () => {
    onDelete(todo.sno); // Call onDelete function with todo.sno as argument
  };
  let TodoItemStyle = {
    display: "inline-flex",
   

    marginTop: " 20px"
  }
  let checkboxStyle = {
    height: "40px",
    width: "40px",
    margin: " 0px 10px"
  }
  let btnBtnDangerStyle = {
    width: " 70px",
    borderRadius: "10px",
    backgroundColor:"red",
    backgroundImage:"url(C:\Users\shekh\OneDrive\Desktop\WEB DEVELOPMENT\PRACTICE\todos-list\images\delete2.png)"
  }
  
  
  let ListStyle={

  }

  return (
    <>
      <ul className='List' style={ListStyle}>
        <li>
          <div className='TodoItem' style={TodoItemStyle}>


            <h4>{todo.title}</h4>
            <input type="checkbox" id="checkbox" name="checkbox" className='checkbox' style={checkboxStyle} />

            <button className=" btn btn-danger" onClick={handleDelete} style={btnBtnDangerStyle}>
             Delete
            </button>


          </div>
        </li>
      </ul>

    </>

  );
}
