import React from 'react';
import {
     Link
} from 'react-router-dom';
import spsc from '../assets/Screens/measurment.jpg';
import sltopt from '../assets/Buttons/selectoption.png';
import backbtn from '../assets/Buttons/back.png';
import btnimg from '../assets/Buttons/btnhome.png';
import music from '../assets/Buttons/music.png';
import offmusic_img from '../assets/Buttons/svg/offmusic.svg';

class measurementgame extends React.Component {
  constructor(props){
          super(props);
          this.state={
               play: true
          }
     }
     componentDidMount() {
           document.getElementById('bodys').style.backgroundImage = "url(" + spsc + ")";
           var playPromise = this.props.audiodd.play();
           if (playPromise !== undefined) {
                playPromise
                     .then(_ => {
                          // Automatic playback started!
                          // Show playing UI.
                          console.log("audio played auto");
                     })
                     .catch(error => {
                          // Auto-play was prevented
                          // Show paused UI.
                          console.log("playback prevented");
                     });
           }
     }
     togglePlay = () => {
          this.setState({
               play: !this.state.play
          }, () => {
               this.state.play ? this.props.audiodd.play() : this.props.audiodd.pause();
          });
     }
     componentWillUnmount() {
    this._isMounted = false;
  }
  render (){
    return(
    <div className="container p-2">
          <div className="flex justify-between">
         <Link to="/selectgame">
          <img alt="mathgame" src={backbtn} />
          </Link>
          <img alt='mathgame' src={this.state.play ?music:offmusic_img} style={{width:'8%'}} onClick={this.togglePlay} />
          </div>
          <div className="flex justify-center md:gap-40 md:m-20" >
               <div className="bg-blacklight rounded-3xl shadow-lg text-center text-white" style={{width: "50%",padding: "0px 54px"}} >
                    <img alt="mathgame" src={sltopt} className="w-2/4" style={{marginTop: "-30px"}}/>
                    <Link to="/Liters" id="btns" className="block  bg-center bg-no-repeat mt-8" style={{ backgroundImage: "url(" + btnimg + ")",backgroundSize: "100% 100%",width: "100%", height: "100px",lineHeight:'100px'}} >LITERS</Link> 
                    <Link to="/Noneliter" id="btns" className="block bg-center bg-no-repeat mt-8 mb-8" style={{ backgroundImage: "url(" + btnimg + ")",backgroundSize: "100% 100%",width: "100%", height: "100px",lineHeight:'100px'}} >CUPS PINTS QUARTS</Link>
               </div>
          </div>
     </div>
  );
}
}

export default measurementgame;
