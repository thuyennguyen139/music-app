import Menu from '../../Component/Menu'
import CardMedia from '@mui/material/CardMedia';
import { Box, fontSize, width } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './style.css'
import { useEffect, useRef, useState } from 'react';
import dataSongs from '../../Audio';
import {connect} from 'react-redux'
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux'
import openReducer from '../../Reducer/music';


function PageHome() {
    const open = useSelector(state => state.data);
    let a,b;
    if(open){
        a = "380px";
        b = "top-songs";
    }else{
        b ="top-songs-2";
        a = "100%";
    }
    return (
        <div className ="box">
            <div className="trending-abum" >
                <Typography sx={{
                    fontWeight: "bold",
                    marginBottom: 3
                }} variant="h4">
                    Trending Abums
                </Typography>

                <div className="abums">
                    <ItemTreding 
                    image= "https://e-cdns-images.dzcdn.net/images/cover/40ff3e5dc83735ab3d84af3c1d46fb9a/250x250-000000-80-0-0.jpg" 
                    titel = "Nhac Trữ Tình" 
                    />
                    <ItemTreding 
                    image= "https://e-cdns-images.dzcdn.net/images/cover/1fbbdc76ccd0ac6fef7c697defa3d3a9/250x250-000000-80-0-0.jpg" 
                    titel = "Nhạc Trẻ" 
                    />
                    <ItemTreding 
                    image= "https://e-cdns-images.dzcdn.net/images/cover/48c82ad4f0c1b28e461aa0fc71c68171/250x250-000000-80-0-0.jpg" 
                    titel = "Nhạc Trẻ" 
                    />


                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography sx={{
                        fontWeight: "bold",
                        marginBottom: 3
                    }} variant="h4">
                        Popular
                    </Typography>

                    <div className="popular">
                        <CardMedia
                            component= "img"
                            sx={{
                                height: a,
                                borderRadius: 2,
                                transition: "0.5s",
                                ":hover": {
                                    opacity: 0.5
                                }
                            }}
                            
                            image="https://photo-zmp3.zadn.vn/banner/f/f/d/6/ffd65c1720bae6c4465aa1d4fd503490.jpg"
                            alt="Live from space album cover"
                        />
                    </div>

                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{
                        fontWeight: "bold",
                        marginBottom: 3
                    }} variant="h4">
                        Top Songs
                    </Typography>


                    <div  className = {b}>
                        {dataSongs.map((item,index)=>{
                            return (
                                <ItemSong
                                    image = {item.image}
                                    titel= {item.titel}
                                    singer= {item.singer}
                                    time = "2:30"
                                    src= {item.src}
                                />
                            )
                        })}
                    </div>

                </Grid>
            </Grid>

            <div>
                <Typography sx={{
                    fontWeight: "bold",
                    marginBottom: 3
                }} variant="h4">
                    Top Singer
                </Typography>
                <div className="top-singer">
                    <div className = "top-singer__boxicon">
                    <IconButton
                        aria-label="previous song"
                        sx={{
                            color: "white"
                        }}
                    >
                        <KeyboardArrowLeftIcon sx={{
                            color: "var(--navigation-text)",
                            fontSize: 35,
                        }} />
                    </IconButton>
                    <IconButton
                        aria-label="previous song"
                        sx={{
                            color: "white"
                        }}
                    >
                        <KeyboardArrowRightIcon sx={{
                            color: "var(--navigation-text)",
                            fontSize: 35,
                        }} />
                    </IconButton>
                    
                    </div>
                    <div className="top-singer__list">
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    <ItemSinger name="Nguyễn Văn Thuyên" number="200" />
                    </div>
                </div>
            </div>
         </div>
    )
}

function ItemSinger(props) {
    return (
        <>
            <div className="item-singer">
                <div className="item-singer__avatar">
                    <img src="https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/250x250-000000-80-0-0.jpg" ></img>
                </div>
                <div className="item-singer__infor">
                    <h3 className="item-singer__name" >{props.name}</h3>
                    <p className="item-singer__number">{props.number} đang nghe</p>
                </div>
            </div>

        </>
    )
}

function ItemTreding(props){
    return(
        <div className="abum__item">
                        <CardMedia
                            component="img"
                            sx={{
                                h: 151,
                                borderRadius: 2,
                                ":hover": {

                                }
                            }}
                            image= {props.image}
                            alt="Live from space album cover"
                        />
                        <Typography noWrap>
                            <b>{props.titel}</b>
                        </Typography>
        </div>
    )
}


function ItemSong(props) {
    const [paused, setPaused] = useState(false);
    let songRef = useRef(null);
    useEffect(()=>{
         
    },[])
    function handleClickPause() {
        if (!paused) {
            songRef.current.play();
        } else {
            songRef.current.pause();
        }
        setPaused(!paused);
    }
    return (
        <>
            <audio ref ={songRef} src={props.src} ></audio>
            <div className="item-song">
                <div className="item-song__boxinfo">
                    <CardMedia
                        component="img"
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 1,
                            ":hover": {
                            }
                        }}
                        image= {props.image}
                        alt="Live from space album cover"
                    />
                    <div className="item-song__infor">
                        <h4 className="item-song__titel" >{props.titel}</h4>
                        <span className="item-song__singer">{props.singer}</span>
                    </div>
                </div>

                <span>{props.time}</span>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <IconButton
                        aria-label="previous song"
                        sx={{
                            color: "white"
                        }}
                    >
                        <FastRewindRounded sx={{
                            color: "var(--navigation-text)",

                        }} />
                    </IconButton>
                    <IconButton
                        aria-label={!paused ? 'play' : 'pause'}
                        onClick={handleClickPause}
                        sx={{
                            color: "white"
                        }}
                    >
                        {!paused ? (
                            <PlayArrowRounded
                                sx={{
                                    fontSize: '1.8rem',
                                    color: "var(--navigation-text)",
                                }}
                            />
                        ) : (
                            <PauseRounded sx={{
                                fontSize: '1.8rem',
                                color: "var(--navigation-text)",
                            }} />
                        )}
                    </IconButton>
                    <IconButton
                        aria-label="next song"
                        sx={{
                            color: "white"
                        }}
                    >
                        <FastForwardRounded sx={{
                            color: "var(--navigation-text)",
                            ":hover": {
                                color: "white",
                            }

                        }} />
                    </IconButton>
                </Box>
            </div>


        </>
    )
}


function mapStateToProps(state) {
    return { ne: state.data }
  }

function Home(props){
    const a = useSelector(state => state.data);
    return (
        <>
            <Menu component={<PageHome />}></Menu>
        </>
    )
}
export default connect(mapStateToProps)(Home);