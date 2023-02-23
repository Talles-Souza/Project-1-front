import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { AuthenticationContext } from '../../services/context/token';
import { useContext } from 'react';


function CardProfile() {
    const { userGoogle, user } = useContext(AuthenticationContext);
    const service = localStorage.getItem('service')
    var userLocal = JSON.parse(localStorage.getItem('user'));

    if (service === 'google') {
        return (
            <Card sx={{ width: "30rem", height: "30rem" }}>
                
                <CardActionArea sx={{ width: "30rem", height: "30rem" }}>
                    <CardMedia
                        component="img"
                        height="280"
                        image="https://i.imgur.com/BnAnAMP.png"
                        alt="green iguana"
                    />
                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap:'5px'  }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {userLocal.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Full stack developer    
                    </Typography>
                    <Typography  variant="body2" color="text.secondary"> You can enter my github to see </Typography>
                    <Typography variant="body2" color="text.secondary">more projects that were developed by me.</Typography>
              
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
    // preciso mudar a requisiçaõ para de retornar o serviço local
    return (
        <Card sx={{ width: "30rem", height: "30rem" }}>
            <CardActionArea sx={{ width: "30rem", height: "30rem" }}>
                <CardMedia
                    component="img"
                    height="280"
                    image="https://i.imgur.com/BnAnAMP.png"
                    alt="green iguana"
                />
                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap:'5px' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {userLocal.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Full stack developer    
                    </Typography>
                    <Typography  variant="body2" color="text.secondary"> You can enter my github to see </Typography>
                    <Typography variant="body2" color="text.secondary">more projects that were developed by me.</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );


}

export default CardProfile;