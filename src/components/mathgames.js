import React from 'react';
import {
     Link
} from 'react-router-dom';
import spsc from '../assets/Screens/math.jpg';
import sltopt from '../assets/Buttons/selectoption.png';
import btnimg from '../assets/Buttons/btnhome.png';
import backbtn from '../assets/Buttons/back.png';
import mathbckvideo from '../assets/music/math.mp4';
import music from '../assets/Buttons/music.png';
import offmusic_img from '../assets/Buttons/svg/offmusic.svg';

class mathgames extends React.Component {
  constructor(props){
          super(props);
          this.state={
               play: true
          }
     }
     componentDidMount() {
           document.getElementById('bodys').style.backgroundImage = "url(" + spsc + ")";
           var x = document.createElement("VIDEO");
           
           x.setAttribute("src",mathbckvideo);
           x.setAttribute("autoplay", "true");
  x.setAttribute("muted",'true');
//   x.setAttribute("loop",'true');
   x.setAttribute("id",'myVideo');
           document.getElementById('bodys').insertBefore(x ,document.getElementById('bodys').childNodes[0]);
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
  render (){
    return(
    <div className="container p-2 content">
         <div className="flex justify-between">
         <Link to="/selectgame">
          <img alt="mathgame" src={backbtn} />
          </Link>
          <img alt='mathgame' src={this.state.play ?music:offmusic_img} style={{width:'8%'}} onClick={this.togglePlay} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-40 md:m-20 selectgriddiv">
               <div></div>
               <div className="bg-blacklight rounded-3xl shadow-lg text-center text-white">
                    <img alt="mathgame" src={sltopt} className="w-2/4" style={{marginTop: "-30px"}}/>
                    <Link to="/Addition" id="btns" className="block  bg-center bg-no-repeat mt-8" style={{backgroundImage:"url("+btnimg+")",backgroundSize: "100% 100%",width: "75%", height: "85px",lineHeight:'85px'}}>ADDITIONS</Link> 
                    <Link to="/Substraction" id="btns" className="block bg-center bg-no-repeat mt-8" style={{backgroundImage:"url("+btnimg+")",backgroundSize: "100% 100%",width: "75%", height: "85px",lineHeight:'85px'}}>SUBTRACTION</Link> 
                    <Link to="/Multiplication" id="btns" className="block bg-center bg-no-repeat mt-8" style={{backgroundImage:"url("+btnimg+")",backgroundSize: "100% 100%",width: "75%", height: "85px",lineHeight:'85px'}}>MULTIPLICATION</Link> 
                    <Link to="/Division" id="btns" className="block bg-center bg-no-repeat my-8" style={{backgroundImage:"url("+btnimg+")",backgroundSize: "100% 100%",width: "75%", height: "85px",lineHeight:'85px'}}>DIVISION</Link> 

               </div>

          </div>
     </div>
  );
}
}

export default mathgames;
