import React, { useState } from 'react'

export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title cannot be blank")
        }
        addTodo(title);
    }

    let containerStyle = {

        
    }


    let formControlStyle = {
        width: "78%",
        display: "inline-flex",
        borderRadius:"10px"
    }


    let btnBtnSuccess = {
        height:"37px",
        margin: "5px 10px",
        borderRadius: "10px",
        width: "62px"
    }


return (
    <div className='container ' style={containerStyle}>

        <form onSubmit={submit}>

            <input type="text" className="form-control" value={title}
                placeholder='Add Your Todo Here...'
                onChange={(e) => { setTitle(e.target.value) }} id="title" aria-describedby="emailHelp" style={formControlStyle} />
            <button type="submit" className="btn  btn-success" style={btnBtnSuccess}>Add Todo</button >



        </form>
    </div>
)}

