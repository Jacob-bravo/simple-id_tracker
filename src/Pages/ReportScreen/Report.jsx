import React from 'react'
import css from "./Report.module.css"
import ReportNavbar from '../../Components/ReportNavBar/ReportNavbar'

const Report = () => {
  return (
    <div className={css.container}>
      <div className={css.sections}>
        <div className={css.navsection}>
          <ReportNavbar />
        </div>
        <div className={css.dataSection}>
          <span>Choose data to generate report from</span>
          <div className={css.tablesections}>
            <div className={css.sectionA}>
              <div className={css.containerHeader}>
                Found IDs
              </div>
              <div className={css.tableOne}>
                <div className={css.Status}>
                  <label htmlFor="">Status</label>
                  <div>
                    <input type="radio" id="received" name="received" value="Received" />
                    <label htmlFor="Received">Received</label>
                  </div>
                  <div>
                    <input type="radio" id="notReceived" name="NotReceived" value="NotReceived" />
                    <label htmlFor="Not Received">Not Received</label>
                  </div>
                </div>

                <div className={css.School}>
                  <label htmlFor="">School</label>
                  <select name="" id="">
                    <option value="">Mathematics and Computer Science</option>
                    <option value="">Industrial Mathematics</option>
                  </select>
                </div>

                <div className={css.Department}>
                  <label htmlFor="">Department</label>
                  <select name="" id="">
                    <option value="">Pure and Applied Mathematics</option>
                  </select>
                </div>

                <div className={css.DateRange}>
                  <label htmlFor="">Date Range</label>
                  <div className={css.fromto}>
                    <div className={css.from}>
                      <span>From</span>
                      <input type="Date" />
                    </div>
                    <div className={css.to}>
                      <span>To</span>
                      <input type="Date" />
                    </div>
                  </div>
                </div>

                <div className={css.DateGenerateButton}>
                  <h5>Generate</h5>
                </div>

              </div>
            </div>
            <div className={css.sectionB}>
              <div className={css.containerHeader}>
                Lost IDs
              </div>
              <div className={css.tableTwo}>
                <div className={css.School}>
                  <label htmlFor="">School</label>
                  <select name="" id="">
                    <option value="">Mathematics and Computer Science</option>
                    <option value="">Industrial Mathematics</option>
                  </select>
                </div>

                <div className={css.Department}>
                  <label htmlFor="">Department</label>
                  <select name="" id="">
                    <option value="">Pure and Applied Mathematics</option>
                  </select>
                </div>

                <div className={css.DateRange}>
                  <label htmlFor="">Date Range</label>
                  <div className={css.fromto}>
                    <div className={css.from}>
                      <span>From</span>
                      <input type="Date" />
                    </div>
                    <div className={css.to}>
                      <span>To</span>
                      <input type="Date" />
                    </div>
                  </div>
                </div>

                <div className={css.DateGenerateButton}>
                  <span>Generate</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Report
