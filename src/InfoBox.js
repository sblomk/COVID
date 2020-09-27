import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './InfoBox.css'

function InfoBox({ title, cases, active, total, ...props }) {
    return (
        <Card className={`infoBox ${active && 'infoBox--selected'}`} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title} today
                </Typography >
                <h2 className={`infoBox__cases ${title === "Recovered" && "infoBox-green"}`}>{cases}</h2>
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
