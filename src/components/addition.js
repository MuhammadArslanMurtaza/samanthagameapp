import React from 'react';
import {
     Link
} from 'react-router-dom';
import  Modal  from 'react-modal';
import spsc from '../assets/Screens/class.jpg';
import backbtn from '../assets/Buttons/back.png';
import btnimg from '../assets/Buttons/btnhome.png';
import correctans from '../assets/Popups/correctans.png';
import Wrongans from '../assets/Popups/Wrongans.png';
import Gameover from '../assets/Popups/gameover.png';
import Levelcomplete from '../assets/Popups/levelcomplete.png';
import Levelcompletemsg from '../assets/Popups/lavelendmsg.png';
import {
     Randomimage,
     getRandomnumber,
     getcorrectanslist
} from './additionmathassets';
import correct_ansmusic from '../assets/music/CorrectBling1.mp3';
import gameovermusic from '../assets/music/game_over.mp3';
import wrong_ansmusic from '../assets/music/Lose1.wav';
import completegamemusic from '../assets/music/Children_Cheering.wav';
import music from '../assets/Buttons/music.png';
import offmusic_img from '../assets/Buttons/svg/offmusic.svg';


class addition extends React.Component {
  constructor(props){
          super(props);
          this.state={
               play: true,
               clicked: false,
               slctRandomnumber:getRandomnumber(),
               slctRandomimg:Randomimage(),
               lis1:[],
               lis2:[],
               anslis:[],
               corctans:false,
               changest:3,
               wonrans:false,
               questiontot:1,
               ansc:'',
               levelcompt:false,
               levelcomptmsg:false,
               gamover:false,
          }
          this.get1image = this.get1image.bind(this);
          this.get2image = this.get2image.bind(this);
          this.checkansclk = this.checkansclk.bind(this);
          this.nextquestion = this.nextquestion.bind(this);
          this.retry = this.retry.bind(this);
          this.sleep = this.sleep.bind(this);
          this.waitfunc = this.waitfunc.bind(this);
          this.waitfunc2 = this.waitfunc2.bind(this);
          this.levelendmsg = this.levelendmsg.bind(this);
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
           this.correct_ansmusicaudio = new Audio(correct_ansmusic);
        this.correct_ansmusicaudio.load()
        this.wrong_ansmusicaudio = new Audio(wrong_ansmusic);
        this.wrong_ansmusicaudio.load()
        this.gameovermusicaudio = new Audio(gameovermusic);
        this.gameovermusicaudio.load()
        this.completegamemusicaudio = new Audio(completegamemusic);
        this.completegamemusicaudio.load()
           this.get1image();
           this.get2image();
           this.setState({
                anslis:getcorrectanslist(this.state.slctRandomnumber[0]+this.state.slctRandomnumber[1])
           })
     }
     togglePlay = () => {
          this.setState({
               play: !this.state.play
          }, () => {
               this.state.play ? this.props.audiodd.play() : this.props.audiodd.pause();
          });
     }
     lis1 = [];
     lis2 = [];
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
     get1image(){
          console.log(this.state.slctRandomnumber);
          this.lis1 = [];
     for(var i = 0; i < this.state.slctRandomnumber[0]; i++){
                    this.lis1.push(<div key={i} className=" text-center">
                         <img alt="mathgame" src={this.state.slctRandomimg[0][1]} className="w-24 md:h-24" />
                    </div>)
                    }
                    this.setState({
                         lis1:this.lis1
                    })
               }
                componentWillUnmount() {
          Modal.setAppElement('body');
    this._isMounted = false;
  }
     get2image(){
          this.lis2 = [];
     for(var i = 0; i < this.state.slctRandomnumber[1]; i++){
                    this.lis2.push(<div key={i} className=" text-center">
                         <img alt="mathgame" src={this.state.slctRandomimg[0][1]} className="w-24 md:h-24" />
                    </div>)
                    }
                    this.setState({
                         lis2:this.lis2
                    })
               }
     checkansclk(event){
          let tagid = event.target.getAttribute('data-ids');
          if(parseInt(tagid) === this.state.slctRandomnumber[0]+this.state.slctRandomnumber[1]){
               if(this.state.questiontot >= 10){
                         this.completegamemusicaudio.play();
                              this.setState({
                         levelcompt:true
                         });
                         setTimeout(this.waitfunc,3000);
                         // this.props.history.push('/');
                    }else{
                         this.correct_ansmusicaudio.play();
               this.setState({
                    clicked: true,
                    ansc:tagid,
          corctans:true,
          slctRandomnumber:getRandomnumber(),
               slctRandomimg:Randomimage(),
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
                     clicked: true,
                     ansc:"",
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
                         this.setState({
                    levelcompt:true
                    });
                    setTimeout(this.waitfunc,3000);
                         // this.props.history.push('/');
                    }
                    this.get1image();
           this.get2image();
                    this.setState((prevState) =>{
                          return {questiontot:prevState.questiontot + 1}
                    })
                    this.setState({
                         ansc:"",
          corctans:false,
                anslis:getcorrectanslist(this.state.slctRandomnumber[0]+this.state.slctRandomnumber[1])
           })
               }
               retry(){
                    this.setState({
          wonrans:false,
     })
               }
               inter = '';
               sleep() {
                    console.log('dd');
                     if(this.state.corctans === true){
                 if(this.state.questiontot >= 10){
                         this.completegamemusicaudio.play();
                              this.setState({
                         levelcompt:true
                         });
                         setTimeout(this.waitfunc,3000);
                         // this.props.history.push('/');
                    }
                    this.get1image();
           this.get2image();
                    this.setState((prevState) =>{
                          return {questiontot:prevState.questiontot + 1}
                    })
                    this.setState({
                         clicked:false,
                         ansc:"",
          corctans:false,
                anslis:getcorrectanslist(this.state.slctRandomnumber[0]+this.state.slctRandomnumber[1])
           })
              }
          //     else{
          //      this.setState({
          //                wonrans:false,
          //           })
          //     }
        }
  render (){
    return(
    <div className="p-2">
         <Modal
          isOpen={this.state.corctans}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={this.toggleModal}
          ariaHideApp={false}
          style={this.customaansStyles}
        >
             {/* <button id="btns" onClick={this.nextquestion} className="block text-white bg-center bg-no-repeat mt-8" style={{ backgroundImage: "url(" + btnimg + ")",backgroundSize: "100% 100%",width: "28%", lineHeight:"57px",position:"absolute",marginLeft:"45%",bottom:"5%"}}>Next</button> */}
        </Modal>
        <Modal
          isOpen={this.state.wonrans}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={this.toggleModal}
          ariaHideApp={false}
          style={this.customaansStyles2}
        >
             <button id="btns" onClick={this.retry} className="block text-white bg-center bg-no-repeat mt-8" style={{ backgroundImage: "url(" + btnimg + ")",backgroundSize: "100% 100%",width: "20%", lineHeight:"57px",position:"absolute",marginLeft:"45%",bottom:"5%"}}>Retry</button>
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
         <Link to="/Mathgames">
          <img alt="mathgame" src={backbtn} className="smw-10" />
          </Link>
          <img alt='mathgame' src={this.state.play ?music:offmusic_img} style={{width:'8%'}} onClick={this.togglePlay} />
          </div>
          <div className="grid grid-cols-3 titl">
               <div></div>
               <h1 className=" mathqus text-white text-center">Additions</h1>
    <h5 className="mathqus text-white text-center">Chances {this.state.changest}/3</h5>
          </div>
          { this.state.levelcompt===true ?
          <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
            </div>:null}
          <div className="grid grid-flow-col sm:m-20 h-64 mainq">
               <div className="flex justify-center my-auto">
                     {this.state.lis1.map((value, index) => {
                              return value })}
               </div>
               <div className="text-center my-auto">
                    <h1 className="mathqus text-white">+</h1>
               </div>
               <div className="flex justify-center my-auto">
                    {this.state.lis2.map((value, index) => {
                              return value })}
               </div>
               <div className="flex justify-center my-auto">
                    <div className="text-center w-20 my-auto">
                         <h1 className="mathqus text-white">=</h1>
                    </div>
                    <div className=" text-center my-auto h-20 md:w-20 w-32 bg-white rounded-2xl ansoptms">
                    <h1 className="mathqus text-red-600" id="btnsmth" style={{lineHeight: "5.5rem"}}>{this.state.ansc}</h1>
                    </div>
               </div>
          </div>
          <div className="flex mt-30 justify-center gap-20 ansoptm">
               <div className="flex-initial text-center my-auto h-20 w-20 bg-white rounded-2xl" onClick={this.checkansclk } data-ids={this.state.anslis[0]}>
                    <h1 className="text-red-600 mathqus" id="btnsmth" style={{lineHeight: "5.5rem"}} data-ids={this.state.anslis[0]}>{this.state.anslis[0]}</h1>
               </div>
               <div className="flex-initial text-center my-auto h-20 w-20 bg-white rounded-2xl" onClick={this.checkansclk} data-ids={this.state.anslis[1]}>
                    <h1 className="text-red-600 mathqus" id="btnsmth" style={{lineHeight: "5.5rem"}} data-ids={this.state.anslis[1]}>{this.state.anslis[1]}</h1>
               </div>
               <div className="flex-initial text-center my-auto h-20 w-20 bg-white rounded-2xl" onClick={this.checkansclk} data-ids={this.state.anslis[2]}>
                    <h1 className="text-red-600 mathqus" id="btnsmth" style={{lineHeight: "5.5rem"}} data-ids={this.state.anslis[2]}>{this.state.anslis[2]}</h1>
               </div>
          </div>
     </div>
  );
}
}

export default addition;
