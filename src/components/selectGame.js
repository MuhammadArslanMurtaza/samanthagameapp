import React from 'react';
import {
     Link
} from 'react-router-dom';
import spsc from '../assets/Screens/home.jpg';
import sltopt from '../assets/Buttons/selectoption.png';
import btnimg from '../assets/Buttons/btnhome.png';
import music from '../assets/Buttons/music.png';
import offmusic_img from '../assets/Buttons/svg/offmusic.svg';


class selectgame extends React.Component {
  constructor(props){
          super(props);
          this.state={
               play: true
          }
     }
     componentDidMount() {
           document.getElementById('bodys').style.backgroundImage = "url(" + spsc + ")";
           if(document.getElementById('myVideo')){
                document.getElementById('myVideo').remove();
           }
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
          <img alt='mathgame' src={this.state.play ?music:offmusic_img} style={{width:'8%'}} onClick={this.togglePlay} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-56 md:m-20">
               <div className="bg-blacklight rounded-3xl shadow-lg text-center text-white">
                    <img alt='mathgame' src={sltopt} className="w-2/4" style={{marginTop: "-30px"}} />
                    <Link to="/Mathgames" id="btns" className="block  bg-center bg-no-repeat mt-8" style={{ backgroundImage: "url(" + btnimg + ")",backgroundSize: "100% 100%",width: "75%", height: "85px",lineHeight:'85px'}} >MATH</Link> 
                    <Link to="/Measurementgame" id="btns" className="block bg-center bg-no-repeat my-8" style={{backgroundImage:"url("+btnimg+")",backgroundSize: "100% 100%",width: "75%", height: "85px",lineHeight:'85px'}}>MEASUREMENT</Link> 
                    {/* <Link to="/" id="btns" className="block bg-center bg-no-repeat my-8" style={{backgroundImage:"url("+btnimg+")",backgroundSize: "100% 100%",width: "75%", height: "85px",lineHeight:'85px'}}>EXIT</Link>  */}

               </div>
          </div>
     </div>
  );
}
}

export default selectgame;
