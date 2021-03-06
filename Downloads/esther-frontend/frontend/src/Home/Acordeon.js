import { useState } from 'react'
import './Acordeon.css'
//envolvi todo en un div para contener al h2 que quité de home.


function Acordeon({ children, title, cwks }) {
  const [visible, setVisible] = useState(false)
  
      return (
          
              <div className="acordeon buttons">
                  <button className="buttons style" onClick={() => setVisible(!visible)}>{cwks}</button>
                  {visible &&
                      <div className="expand">
                          {children}
                          
                      </div>
                  }
          
              </div>
      )
  }
  
  
  export default Acordeon;
