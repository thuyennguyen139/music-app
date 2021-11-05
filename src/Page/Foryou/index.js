import Menu from "../../Component/Menu";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import "./style.css"
function PageForyou() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
            <div className="foryou">
                <div className="foryou__img">
                    <CardMedia
                        component="img"
                        sx={{

                            borderRadius: 50,
                            width: 100,
                            ":hover": {
                            }
                        }}
                        image="https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/250x250-000000-80-0-0.jpg"
                        alt="Live from space album cover"
                    />
                    <Typography noWrap>
                        <b>Thuyen Nguyen</b>
                    </Typography>

                    <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="icon label tabs example"
                    sx ={{
                        '&.MuiTabs-indicator':{
                            backgroundColor: "white",
                            width: 200,
                        },
                        '&.MuiTabs-root':{
                            color: "red",
                            
                        }
                        
                    }}
                    >
                        <Tab 
                        icon={<PhoneIcon />} 
                        label="RECENTS"
                        sx={{
                            '&.MuiTab-labelIcon': {
                                color: "var(--text-primary)",
                            },
                            '&.MuiTab-labelIcon':{
                                color: "white",
                                border: "white",

                            }
                           
                        }}
                         />
                        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                        <Tab icon={<PersonPinIcon />} label="NEARBY" />
                    </Tabs>
                </div>
            </div>
        </>
    )
}
function Foryou() {
    return (
        <>
            <Menu component={<PageForyou />}></Menu>
        </>
    )
}
export default Foryou;