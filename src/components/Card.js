import styleCard from './card.module.css'
import {IoPlayCircleOutline,IoPlayBackCircleOutline,IoPlayForwardCircleOutline, IoPauseCircleOutline} from 'react-icons/io5'
import img from './../assets/download.jpeg'
import { useEffect, useState } from 'react';
import musicList from './../assets/music.json';
import ses1 from './../assets/a.mp3';

export default function Card () {

    const [playing, setPlaying] = useState(false);
    const [list, setList] = useState({})
    const [currentM, setCurrentM] = useState(0);
    const [currentS, setCurrentS] = useState(0);
    const [durationM, setDurationM] = useState(0);
    const [durationS, setDurationS] = useState(0);
    const [progress, setProgress] = useState(0);
    const [id, setId] = useState(1);
    const [music, setMusic] = useState(new Audio(ses1));

    useEffect(() => {
        if(music){
            if(playing){
                music.play();
            } else {
                music.pause();
            }
        }
    }, [playing, musicList])

    useEffect(() => {
        musicList.map(item => {
            if(item.id == id){
                setList(item);
                // setMusic(new Audio("https://soundcloud.com/dirtyworkzofficial/dj-mii-aurede-ft-zhiko-calls-your-name-electric-fox?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"));
            }
        })
    }, [id])

    music?.addEventListener('timeupdate', () => {
        if(music){
            setCurrentM(Math.floor(music.currentTime/60));
            setCurrentS(Math.floor(music.currentTime%60));
            setDurationM(Math.floor(music.duration/60));
            setDurationS(Math.floor(music.duration%60));
            setProgress(Math.floor(music.currentTime/music.duration*100));
        }
    })

    return(
        <>
            <section className={styleCard.box}>
                <div className={styleCard.header}>
                    <h2>Now Playing</h2>
                </div>
                <div className={styleCard.imgBox}>
                    <img src={img}/>
                </div>
                <div className={styleCard.mainBox}>
                    <h2>{list.title}</h2>
                    <div className={styleCard.progressBar}>
                        <div className={styleCard.progress} style={{width: `${progress}%`}}>

                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between"}} className={styleCard.timeBox}>
                        <h4>{`${currentM}:${currentS}`}</h4>
                        <h4>{`${durationM ? durationM : "0"}:${durationS ? durationS : "0"}`}</h4>
                    </div>
                </div>
                <div className={styleCard.playBox}>
                    <IoPlayBackCircleOutline onClick={() => {
                        music.currentTime = 0;
                    }}/>
                    {playing ? <IoPauseCircleOutline onClick={() => {
                        setPlaying(false);
                    }}/> : <IoPlayCircleOutline onClick={() => {
                        setPlaying(true);
                    }}/>}
                    <IoPlayForwardCircleOutline onClick={() => {
                        setId(id + 1)
                    }}/>
                </div>
            </section>
        </>
    );
}