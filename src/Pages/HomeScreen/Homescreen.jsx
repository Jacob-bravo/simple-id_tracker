import React from 'react'
import css from "./Homescreen.module.css"
import { Search } from '@mui/icons-material'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"


const PresentationCard = () => {
    return <div className={css.cardContainer}>
        {/* content goes here */}
    </div>
}

const cards = [
    <PresentationCard />,
    <PresentationCard />,
    <PresentationCard />,
    <PresentationCard />,
    <PresentationCard />,
    <PresentationCard />,
    <PresentationCard />,
];

const Homescreen = () => {
    return (
        <div className={css.container}>
            <Navbar/>
            <div className={css.searchSection}>
                <input type="text" placeholder='Search registartion no.s, students' />
                <Search />
            </div>
            <div className={css.cardSection}>
                {
                    cards.map((item, index) => {
                        return <div className={css.cardItem} key={index}>
                            {item}
                        </div>
                    })
                }

            </div>
            <Footer/>
        </div>
    )
}

export default Homescreen
