import React from 'react';
import {
     Link
} from 'react-router-dom';
import  Modal  from 'react-modal';
import {
     getcorrectanslist
} from './measurementlogic.js';
import Popupsimgbtn from '../assets/Buttons/close-popup.png';
import Levelcomplete from '../assets/Popups/levelcomplete.png';
import Levelcompletemsg from '../assets/Popups/lavelendmsg.png';
import correctans from '../assets/Popups/correctans.png';
import Wrongans from '../assets/Popups/Wrongans.png';
import btnimg from '../assets/Buttons/btnhome.png';
import spsc from '../assets/Screens/liter.jpg';
import morebtn from '../assets/Buttons/svg/more.svg';
import backbtn from '../assets/Buttons/back.png';
import lessbtn from '../assets/Buttons/svg/less.svg';
import Popupsimg from '../assets/Popups/literspopup.png';
import Gameover from '../assets/Popups/gameover.png';
import correct_ansmusic from '../assets/music/CorrectBling1.mp3';
import wrong_ansmusic from '../assets/music/Lose1.wav';
import completegamemusic from '../assets/music/Children_Cheering.wav';
import gameovermusic from '../assets/music/game_over.mp3';
import music from '../assets/Buttons/music.png';
import offmusic_img from '../assets/Buttons/svg/offmusic.svg';

const customStyles = {
  content : {
    backgroundImage:"url(" + Popupsimg + ")",
    backgroundSize: "100% 100%",
    textAlign: 'end'
  }
};

class liters extends React.Component {
  constructor(props){
          super(props);
          this.state={
               play: true,
               isActive:true,
               corctans:false,
               changest:3,
               wonrans:false,
               ansopts:getcorrectanslist(),
               questiontot:1,
               levelcompt:false,
               levelcomptmsg:false,
          }
          this.toggleModal = this.toggleModal.bind(this);
          this.checkans = this.checkans.bind(this);
          this.nextquestion = this.nextquestion.bind(this);
          this.retry = this.retry.bind(this);
          this.sleep = this.sleep.bind(this);
          this.waitfunc = this.waitfunc.bind(this);
          this.waitfunc2 = this.waitfunc2.bind(this);
          this.levelendmsg = this.levelendmsg.bind(this);
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
           this.correct_ansmusicaudio = new Audio(correct_ansmusic);
        this.correct_ansmusicaudio.load()
        this.wrong_ansmusicaudio = new Audio(wrong_ansmusic);
        this.wrong_ansmusicaudio.load()
        this.gameovermusicaudio = new Audio(gameovermusic);
        this.gameovermusicaudio.load()
        this.completegamemusicaudio = new Audio(completegamemusic);
        this.completegamemusicaudio.load()
     }
     customaansStyles = {
  content : {
    top                   : '20%',
    left                  : '20%',
    right                 : '20%',
    bottom                : '20%',
    backgroundImage:"url(" + correctans + ")",
    backgroundSize: "100% 100%",
    border:'none',
    backgroundColor:'rgb(0 0 0 / 0%)',
  }
};
customaansStyles2 = {
  content : {
    top                   : '20%',
    left                  : '20%',
    right                 : '20%',
    bottom                : '20%',
    backgroundImage:"url(" + Wrongans + ")",
    backgroundSize: "100% 100%",
    border:'none',
    backgroundColor:'rgb(0 0 0 / 0%)',
  }
};
customaansStyles3 = {
  content : {
    top                   : '20%',
    left                  : '20%',
    right                 : '20%',
    bottom                : '20%',
    backgroundImage:"url(" + Gameover + ")",
    backgroundSize: "100% 100%",
    border:'none',
    backgroundColor:'rgb(0 0 0 / 0%)',
  }
};
customaansStyles4 = {
  content : {
    top                   : '20%',
    left                  : '20%',
    right                 : '20%',
    bottom                : '20%',
    backgroundImage:"url(" + Levelcomplete + ")",
    backgroundSize: "100% 100%",
    border:'none',
    backgroundColor:'rgb(0 0 0 / 0%)',
  }
};
customaansStyles5 = {
  content : {
    top                   : '20%',
    left                  : '30%',
    right                 : '30%',
    bottom                : '20%',
    backgroundImage:"url(" + Levelcompletemsg + ")",
    backgroundSize: "100% 100%",
    border:'none',
    backgroundColor:'rgb(0 0 0 / 0%)',
  }
};
     componentWillUnmount() {
          Modal.setAppElement('body');
    this._isMounted = false;
  }
  togglePlay = () => {
          this.setState({
               play: !this.state.play
          }, () => {
               this.state.play ? this.props.audiodd.play() : this.props.audiodd.pause();
          });
     }
   toggleModal(){
     this.setState({
          isActive:!this.state.isActive
     })
  }
  checkans(event){
       let tagid = event.target.getAttribute('data-ids');
          if(tagid === this.state.ansopts[0][1]){
               if(this.state.questiontot >= 10){
                         this.completegamemusicaudio.play();
                              this.setState({
                         levelcompt:true
                         });
                         setTimeout(this.waitfunc,3000);
                    }else{
               this.correct_ansmusicaudio.play();
               this.setState({
          corctans:true,
     })
     setTimeout(this.sleep,2000);
}
          }else{
               if(this.state.changest <= 1){
                    this.gameovermusicaudio.play();
                    this.setState({
                         gamover:true
                    });
                    setTimeout(this.waitfunc2,3000);
               }else{
                    this.wrong_ansmusicaudio.play();
                    this.setState((prevState) => {
                         return {
                         changest: prevState.changest - 1
                         }
                    })
                this.setState({
                    wonrans:true
               })
     setTimeout(this.sleep,2000);
}
          }
  }
   waitfunc(){
                    this.setState({
                         levelcomptmsg:true,
                         levelcompt:false
                         });
                         setTimeout(this.levelendmsg,15000);
        }
        levelendmsg(){
          this.completegamemusicaudio.pause();
          this.props.history.push('/');
        }
        waitfunc2(){
          this.props.history.push('/');
        }
  nextquestion(){
                    if(this.state.questiontot >= 10){
                         this.completegamemusicaudio.play();
                         this.props.history.push('/');
                    }
                    this.setState((prevState) =>{
                          return {questiontot:prevState.questiontot + 1}
                    })
                    this.setState({
          corctans:false
           })
               }
               retry(){
                    this.setState({
          wonrans:false,
     })
               }
               sleep() {
                     if(this.state.corctans === true){
                    this.setState((prevState) =>{
                          return {questiontot:prevState.questiontot + 1}
                    })
                   this.setState({
          corctans:false,
          ansopts:getcorrectanslist()
           })
              }
        }
  render (){
    return(
    <div className=" p-2">
         <Modal
          isOpen={this.state.isActive}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={this.toggleModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        ><button onClick={this.toggleModal} style={{ backgroundImage: "url(" + Popupsimgbtn + ")",backgroundSize: "100% 100%",width: "10%", height: "100px"}}></button></Modal>
        <Modal
          isOpen={this.state.corctans}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={this.toggleModal}
          ariaHideApp={false}
          style={this.customaansStyles}
        >
             {/* <button id="btns" onClick={this.nextquestion} className="block text-white bg-center bg-no-repeat mt-8" style={{ backgroundImage: "url(" + btnimg + ")",backgroundSize: "100% 100%",width: "28%", lineHeight:"57px",position:"absolute",bottom:"5%",marginLeft:"45%"}}>Next</button> */}
        </Modal>
        <Modal
          isOpen={this.state.gamover}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={this.toggleModal}
          ariaHideApp={false}
          style={this.customaansStyles3}
        >
        </Modal>
        <Modal
          isOpen={this.state.wonrans}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={this.toggleModal}
          ariaHideApp={false}
          style={this.customaansStyles2}
        >
             <button id="btns" onClick={this.retry} className="block text-white bg-center bg-no-repeat mt-8" style={{ backgroundImage: "url(" + btnimg + ")",backgroundSize: "100% 100%",width: "28%", lineHeight:"57px",position:"absolute",bottom:"5%",marginLeft:"45%"}}>Retry</button>
        </Modal>
        <Modal
          isOpen={this.state.levelcompt}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={this.toggleModal}
          ariaHideApp={false}
          style={this.customaansStyles4}
        >
        </Modal>
        <Modal
          isOpen={this.state.levelcomptmsg}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={this.toggleModal}
          ariaHideApp={false}
          style={this.customaansStyles5}
        >
        </Modal>
          <div className="flex justify-between">
         <Link to="/Measurementgame">
          <img alt="mathgame" src={backbtn} />
          </Link>
          <img alt='mathgame' src={this.state.play ?music:offmusic_img} style={{width:'8%'}} onClick={this.togglePlay} />
          </div>
          <div className="flex justify-end md:gap-40 md:mb-20 mermenttext" >
               <div className="bg-white rounded-xl shadow-lg text-center border-4 border-red-500 sm:w-9/12" style={{width: "50%",padding: "25px 0px"}} >
               <h1>Does it Hold More or Less Then <span className="text-red-500">1 Liter?</span></h1>
               </div>
               <div className="bg-white rounded-xl shadow-lg text-center border-4 border-red-500 sm:w-9/12 secddiv" style={{width: "15%",padding: "25px 0px"}}>
                    <h1>Chances {this.state.changest}/3</h1>
               </div>
          </div>
          { this.state.levelcompt===true ?
          <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
            </div>:null}
          <div className="flex justify-center md:gap-40 md:m-20 qsdiv" >
               <div className=" text-center text-white" style={{padding: "0px 54px"}} >
                    <img alt="mathgame" src={ this.state.ansopts[0][2] } style={{width: '310px',height: '360px'}} className=" qsimg"/>
               </div>
          </div>
          <div className="flex justify-center md:gap-40 md:m-20  optslctans" >
               <button className="bg-center bg-no-repeat mt-2" onClick={this.checkans} style={{ backgroundImage: "url(" + morebtn + ")",backgroundSize: "100% 100%",width: "100%", height: "105px",lineHeight:'105px'}} data-ids='true'></button>
               <button className="bg-center bg-no-repeat mt-2" onClick={this.checkans} style={{ backgroundImage: "url(" + lessbtn + ")",backgroundSize: "100% 100%",width: "100%", height: "105px",lineHeight:'105px'}} data-ids='false'></button>
          </div>
     </div>
  );
}
}

export default liters;
