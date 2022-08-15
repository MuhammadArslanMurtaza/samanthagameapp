import React from 'react';
import '../slpashscreen.css';
import spsc from '../assets/Screens/home.jpg';
import mathbckvideo from '../assets/music/main.mp4';

class splashscreen extends React.Component {
  constructor(props){
          super(props);
          this.state={
               prograss_width:1
          }
          this.updatetime = this.updatetime.bind(this);
          this.sleep = this.sleep.bind(this);
     }
     componentDidMount() {
        document.getElementById('bodys').style.backgroundImage = "url("+spsc+")";
        // let dem = ;
        // this.setState({ play: !this.state.play }, () => {
        //        this.state.play ? this.audio.play() : this.audio.pause();
        //   });
        // this.props.audiodd.play();
        if(document.getElementById('myVideo')){
                document.getElementById('myVideo').remove();
           }
        var x = document.createElement("VIDEO");
           x.setAttribute("src",mathbckvideo);
           x.setAttribute("autoplay", "true");
  x.setAttribute("muted",'true');
  x.setAttribute("loop",'true');
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
                 console.log("playback prevented");
               });
           }
           
            this.updatetime();
     }
     inter = '';
  updatetime() {
     this.inter = setInterval(() => {
        if (parseInt(this.state.prograss_width) < 11) {
          this.setState((prevState) => {
            return {
               prograss_width: prevState.prograss_width+1
            }
          })
        } else if (parseInt(this.state.prograss_width) < 50 && parseInt(this.state.prograss_width) > 10) {
          this.setState((prevState) => {
            return {
              prograss_width: prevState.prograss_width + 10
            }
          })
        }else if (parseInt(this.state.prograss_width) < 93 && parseInt(this.state.prograss_width) > 50) {
          this.setState((prevState) => {
            return {
              prograss_width: prevState.prograss_width + 14
            }
          })
        }
        else if (parseInt(this.state.prograss_width) < 100 && parseInt(this.state.prograss_width) > 92) {
          this.setState((prevState) => {
            return {
              prograss_width: prevState.prograss_width + 1
            }
          })
        }
          else if(parseInt(this.state.prograss_width) >= 100) {
            this.setState((prevState) => {
              return {
                prograss_width: prevState.prograss_width + 1
              }
            })
            this.sleep(1000);
          }
     }, 200)
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
    var video = document.getElementById("myVideo");
    if ( video.readyState === 4 ) {
             // it's loaded
             clearInterval(this.inter);
    this.props.history.push('/selectgame');
            }
  }
  render (){
    return(
    <div>
          
    </div>
  );
}
}

export default splashscreen;
