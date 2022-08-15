import icon_1 from '../assets/icons/svg/can.svg';
import icon_3 from '../assets/icons/svg/bucket.svg';
import icon_4 from '../assets/icons/svg/drum.svg';
import icon_5 from '../assets/icons/svg/gas.svg';
import icon_6 from '../assets/icons/svg/glass.svg';
import icon_7 from '../assets/icons/svg/juice.svg';
import icon_8 from '../assets/icons/svg/liter.svg';
import icon_9 from '../assets/icons/svg/mug.svg';
import icon_10 from '../assets/icons/svg/pint.svg';
import icon_11 from '../assets/icons/svg/smallbottle.svg';
import icon_12 from '../assets/icons/svg/spoon.svg';
// nonelitter image
import Asset1 from '../assets/icons/mesurementmenia/SVG/q1.svg';
import Asset2 from '../assets/icons/mesurementmenia/SVG/q2.svg';
import Asset3 from '../assets/icons/mesurementmenia/SVG/q3.svg';
import Asset4 from '../assets/icons/mesurementmenia/SVG/q4.svg';
import Asset5 from '../assets/icons/mesurementmenia/SVG/q5.svg';
import Asset6 from '../assets/icons/mesurementmenia/SVG/q6.svg';
import Asset7 from '../assets/icons/mesurementmenia/SVG/q7.svg';
import Asset8 from '../assets/icons/mesurementmenia/SVG/q8.svg';
import Asset9 from '../assets/icons/mesurementmenia/SVG/q9.svg';



var getcorrectanslist = function (sid) {
     var cut = [
          [0,'true', icon_1],
          [2, 'true',icon_3],
          [3, 'true',icon_4],
          [4, 'true',icon_5],
          [5, 'false',icon_6],
          [6, 'false',icon_7],
          [7, 'true',icon_8],
          [8, 'false',icon_9],
          [9, 'false',icon_10],
          [10, 'false',icon_11],
          [11, 'false',icon_12],
     ];
     cut.sort(function () {
          return .5 - Math.random();
     });
     return cut.splice(0, 1);
};
var getcorrectansnonelist = function (sid) {
     var cut = [
          [0,'1 QUART', Asset1],
          [1, '2 PINTS',Asset5],
          [2, '1 PINT',Asset6],
          [3, '2 QUARTS',Asset8],
          [4, '2 QUARTS',Asset2],
          [5, '1 QUART',Asset5],
          [6, '3 PINTS',Asset3],
          [7, '3 PINTS',Asset7],
          [8, '1 QUART',Asset4],
     ];
     cut.sort(function () {
          return .5 - Math.random();
     });
     return cut.splice(0, 1);
};

var getoptansimg = function(sid){
     console.log(sid);
     var cut = [
          [0 ,'wrong',Asset1],
          [1,'wrong',Asset5],
          [2,'wrong', Asset6],
          [3,'wrong',Asset8],
          [4,'wrong',Asset2],
          [5,'wrong', Asset5],
          [6,'wrong', Asset3],
          [7,'wrong', Asset7],
          [8,'wrong', Asset4],
          [9,'wrong', Asset9],
     ];
     var cutw = [
          [0,'1 QUART', Asset1],
          [1, '2 PINTS',Asset5],
          [2, '1 PINT',Asset6],
          [3, '2 QUARTS',Asset8],
          [4, '2 QUARTS',Asset2],
          [5, '1 QUART',Asset5],
          [6, '3 PINTS',Asset3],
          [7, '3 PINTS',Asset7],
          [8, '1 QUART',Asset4],
     ];
     cut.splice(sid,1);
     var A = cut.slice(0);
     A.sort(function () {
          return .5 - Math.random();
     });
     var cut2 = [
          cutw[sid],
          A[0]
     ];
     var A2 = cut2.slice(0);
     A2.sort(function () {
          return .5 - Math.random();
     });
     return A2.splice(0, 2);
};

export {
     getcorrectanslist,
     getcorrectansnonelist,
     getoptansimg
     }