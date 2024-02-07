import React from 'react'
import css from "./Navbar.module.css"
import { Logout, Person } from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className={css.container}>
      <div className={css.sectionHeader}>
        <h2>Logo</h2>
        <div className={css.actions}>
          <div className={css.adminroute}>
          <h2>ADMIN</h2>
          <Person/>
          </div>
         <div className={css.signOutRoute}>
         <h2>SIGN OUT</h2>
         <Logout/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
