import React from 'react'

export default function Footer() {
  let footerStyle={
    position: "relative",
    marginTop:"69vh",
    backbackgroundColor:" #605f5f"
  }
  return (
    
      <footer className='bg-dark text-light py-3' style={footerStyle}>
        <p className="text-center">Copyright &copy; MyTodoList.com

        </p>
        
      </footer>
    
  )
}
