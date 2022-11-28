import React from 'react'
import styles from './Pages/Destination/destination.module.css'

const Button = ({filter, button}) => {
  return (
    <div className={styles.buttons}>
      {
        button.map((name, index)=>{
          return <button  type='button' onClick={()=>filter(name)} key={index} className={styles.btn}>{name}</button>
        })
      }
    </div>
  )
}

export default Button