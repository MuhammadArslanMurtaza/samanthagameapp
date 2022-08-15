var getRandomnumber = function () {
     var getRandomnumber = [
          Math.floor(Math.random() * 20) + 1,Math.floor(Math.random() * 20) + 1
     ];
     getRandomnumber.sort(function () {
          return .5 - Math.random();
     });
     return getRandomnumber.splice(0, 2);
};
var getdividRandomnumber = function () {
     var getRandomnumber = [
          Math.floor(Math.random() * 20) + 1,Math.floor(Math.random() * 20) + 1
     ];
     var dividenumber = [];
     dividenumber[0] = getRandomnumber[0]*getRandomnumber[1];
     dividenumber[1] = getRandomnumber[0];
     getRandomnumber.sort(function () {
          return .5 - Math.random();
     });
     return dividenumber.splice(0, 2);
};
var getcorrectanslist = function (cort) {
     var cut = [
          cort+Math.floor(Math.random() * 50) + 1,
          cort+Math.floor(Math.random() * 50) + 1,
          cort
     ];
     var A = cut;
     A.sort(function () {
          return .5 - Math.random();
     });
     return A.splice(0, 3);
}

export {
     getRandomnumber,
     getdividRandomnumber,
     getcorrectanslist
     }