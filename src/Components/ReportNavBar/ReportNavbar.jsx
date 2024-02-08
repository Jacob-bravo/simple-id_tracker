import React from 'react'
import css from "./ReportNavbar.module.css"

const ReportNavbar = () => {
    return (
        <div className={css.container}>
            <div className={css.logoSection}>
                <h2>Logo</h2>
            </div>
            <div className={css.titleContainer}>
                <h2>Report</h2>
            </div>
            <div className={css.backButton}>
                <h3>Back</h3>
            </div>
        </div>
    )
}

export default ReportNavbar
