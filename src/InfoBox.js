import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './InfoBox.css'

function InfoBox({ title, cases, total }) {
    return (
        <div className="infoBox">
            <Card>
                <CardContent>
                    <Typography className="infoBox__title" color="textSecondary">
                        {title}
                    </Typography>
                    <h2>{cases}</h2>
                    <Typography className="infoBox__total" color="textSecondary">
                        {total} total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
