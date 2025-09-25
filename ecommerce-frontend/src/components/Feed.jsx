import React from 'react';
import { Card, CardContent, CardHeader, Typography, CardMedia} from "@mui/material"

function Feed(props) {
    return(
        <div style={style.feed}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={props.product.name}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={props.product.image ? props.product.image : 'https://pbs.twimg.com/media/F1mwhmZWcAA_Tz6.jpg'}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.product.description}
                    </Typography>
                    <p>
                        {props.product.price}
                    </p>
                </CardContent>
            </Card>

        </div>
    )
}

const style = {
    feed: {

    }
}

export default Feed