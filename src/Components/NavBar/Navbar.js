import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import logo from '../../Components/assets/shared/logo.svg'




const Navbar = (props
  ) => {
  return (

    <nav className={styles.navDesktop}>
      <div><img src={logo} alt="logo" /></div>
      <ul>
        <NavLink to='/' className={styles.navItems}>00 Home</NavLink>
        <NavLink to='/destination' className={styles.navItems}>01 Destination</NavLink>
        <NavLink to='/crew' className={styles.navItems}>02 Crew</NavLink>
        <NavLink to='/technology' className={styles.navItems}>03 Technology</NavLink>
      </ul>
    </nav>





  )
}

export default Navbar