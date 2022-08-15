import icon_1 from '../assets/subtract/1x/icon_1.png';
import icon_3 from '../assets/subtract/1x/icon_3.png';
import icon_5 from '../assets/subtract/1x/icon_5.png';
import icon_7 from '../assets/subtract/1x/icon_7.png';
import icon_9 from '../assets/subtract/1x/icon_9.png';
import icon_11 from '../assets/subtract/1x/icon_11.png';
import icon_13 from '../assets/subtract/1x/icon_13.png';
import icon_15 from '../assets/subtract/1x/icon_15.png';
import icon_17 from '../assets/subtract/1x/icon_17.png';
import icon_19 from '../assets/subtract/1x/icon_19.png';
import icon_21 from '../assets/subtract/1x/icon_21.png';
// cuttu images
import icon_12 from '../assets/subtract/1x/icon_2.png';
import icon_34 from '../assets/subtract/1x/icon_4.png';
import icon_56 from '../assets/subtract/1x/icon_6.png';
import icon_78 from '../assets/subtract/1x/icon_8.png';
import icon_910 from '../assets/subtract/1x/icon_10.png';
import icon_1112 from '../assets/subtract/1x/icon_12.png';
import icon_1314 from '../assets/subtract/1x/icon_14.png';
import icon_1516 from '../assets/subtract/1x/icon_16.png';
import icon_1718 from '../assets/subtract/1x/icon_18.png';
import icon_1920 from '../assets/subtract/1x/icon_20.png';
import icon_2122 from '../assets/subtract/1x/icon_22.png';

var Randomimage = function (sid) {
     var cut = [
          [0, icon_1],
          [1, icon_3],
          [2, icon_5],
          [3, icon_7],
          [4, icon_9],
          [5, icon_11],
          [6, icon_13],
          [7, icon_15],
          [8, icon_17],
          [9, icon_19],
          [10, icon_21],
     ];
     cut.sort(function () {
          return .5 - Math.random();
     });
     return cut.splice(0, 1);
};
var cuttyimage = function (sid) {
     var slctimg = [];
     var cut = [
          [0, icon_1],
          [1, icon_3],
          [2, icon_5],
          [3, icon_7],
          [4, icon_9],
          [5, icon_11],
          [6, icon_13],
          [7, icon_15],
          [8, icon_17],
          [9, icon_19],
          [10, icon_21],
     ];
     cut.sort(function () {
          return .5 - Math.random();
     });
     slctimg[0] = cut.splice(0, 1);
     var cut2 = [
          [0, icon_12],
          [1, icon_34],
          [2, icon_56],
          [3, icon_78],
          [4, icon_910],
          [5, icon_1112],
          [6, icon_1314],
          [7, icon_1516],
          [8, icon_1718],
          [9, icon_1920],
          [10, icon_2122],
     ];
     console.log(slctimg[0][0][0]);
     slctimg[1] = cut2[slctimg[0][0][0]];
     return slctimg;
};
var getRandomnumber = function () {
     var getRandomnumber = [
          6,5,4,3,2,1
     ];
     var addsub = [];
     var addsub2 = [];
     getRandomnumber.sort(function () {
          return .5 - Math.random();
     });
     addsub = getRandomnumber.splice(0, 2);
     if(addsub[0]>addsub[1]){
          return addsub;
     }else{
          addsub2[0] = addsub[1];
          addsub2[1] = addsub[0];
          return addsub2;
     }
     // return getRandomnumber.splice(0, 2);
};
var getcorrectanslist = function (cort) {
     var cut = [
          cort+Math.floor(Math.random() * 10) + 1,
          cort+Math.floor(Math.random() * 10) + 1,
          cort
     ];
     var A = cut;
     A.sort(function () {
          return .5 - Math.random();
     });
     return A.splice(0, 3);
}

export {
     Randomimage,
     getRandomnumber,
     getcorrectanslist,
     cuttyimage
     }