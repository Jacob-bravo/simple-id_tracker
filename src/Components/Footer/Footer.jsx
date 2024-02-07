import React from 'react'
import css from "./Footer.module.css"
import { Analytics, FileOpen, PersonAddAlt1Outlined, PersonRemoveAlt1Outlined} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


const BottomCircleWidget = ({ icon, identifierName,routePath }) => {
    const navigate = useNavigate();
    return <div className={css.circleAvator} onClick={()=>{
        navigate(`/${routePath}`)
    }}>
        <div className={css.circleIcon}>
            {icon}
        </div>
        <div className={css.identifier}>
            <h4>{identifierName}</h4>
        </div>
    </div>
}

const Footer = () => {
    return (
        <div className={css.container}>
            <div className={css.sections}>
                <div className={css.label}>
                    <h2>ADMIN TOOLS</h2>
                    <div className={css.underliner}></div>
                </div>
                <div className={css.bottomActions}>
                    <BottomCircleWidget icon={<PersonAddAlt1Outlined/>} identifierName={'Register'}/>
                    <BottomCircleWidget icon={<PersonRemoveAlt1Outlined/>} identifierName={'Remove'}/>
                    <BottomCircleWidget icon={<FileOpen/>} identifierName={'Database'}/>
                    <BottomCircleWidget icon={<Analytics/>} identifierName={'Report'} routePath={'report'}/>
                
                </div>
            </div>
        </div>
    )
}

export default Footer
