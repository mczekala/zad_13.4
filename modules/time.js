function time(input) {
  var secs="";
  var mins="";
  var hrs="";
  var answer="";
  if(input!==null){
    secs = input%60+' sek.';
    if (input>=60) {
      input=Math.floor(input/60);
      mins = input%60+' min. ';
      if (input>=60) {
        input=Math.floor(input/60);
        hrs = input+' godz. ';
      }
    }
    answer = hrs+mins+secs;
  }
  return answer;
}
exports.timeFormat = time;
