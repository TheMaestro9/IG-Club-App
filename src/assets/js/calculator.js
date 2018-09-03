function olevels() {
  var e = document.getElementById("olevelS");
  var olevelS = e.options[e.selectedIndex].value;

  var e = document.getElementById("olevelA");
  var olevelA = e.options[e.selectedIndex].value;

  var e = document.getElementById("olevelB");
  var olevelB = e.options[e.selectedIndex].value;

  var e = document.getElementById("olevelC");
  var olevelC = e.options[e.selectedIndex].value;

  var olevelscore = new Array(2);

  olevelscore[0] = (parseInt(olevelS) * 100) + (parseInt(olevelA) * 95) + (parseInt(olevelB) * 85) + (parseInt(olevelC) * 67.5);

  olevelscore[1] = (parseInt(olevelS)) + (parseInt(olevelA)) + (parseInt(olevelB)) + (parseInt(olevelC));

  return olevelscore;


}

function aslevels() {


  var e = document.getElementById("aslevelA");
  var aslevelA = e.options[e.selectedIndex].value;

  var e = document.getElementById("aslevelB");
  var aslevelB = e.options[e.selectedIndex].value;

  var e = document.getElementById("aslevelC");
  var aslevelC = e.options[e.selectedIndex].value;

  var e = document.getElementById("aslevelD");
  var aslevelD = e.options[e.selectedIndex].value;

  var aslevelscore = new Array(2);

  aslevelscore[0] = (parseInt(aslevelA) * 95) + (parseInt(aslevelB) * 85) + (parseInt(aslevelC) * 67.5) + (parseInt(aslevelD) * 60);

  aslevelscore[1] = (parseInt(aslevelA) + parseInt(aslevelB) + parseInt(aslevelC) + parseInt(aslevelD));

  return aslevelscore;
}

function alevels() {
  var e = document.getElementById("alevelS");
  var alevelS = e.options[e.selectedIndex].value;

  var e = document.getElementById("alevelA");
  var alevelA = e.options[e.selectedIndex].value;

  var e = document.getElementById("alevelB");
  var alevelB = e.options[e.selectedIndex].value;

  var e = document.getElementById("alevelC");
  var alevelC = e.options[e.selectedIndex].value;

  var e = document.getElementById("alevelD");
  var alevelD = e.options[e.selectedIndex].value;

  var alevelscore = new Array(2);
  alevelscore[0] = (parseInt(alevelS) * 100) + (parseInt(alevelA) * 95) + (parseInt(alevelB) * 85) + (parseInt(alevelC) * 67.5) + (parseInt(alevelD) * 60);
  alevelscore[1] = (parseInt(alevelS) + parseInt(alevelA) + parseInt(alevelB) + parseInt(alevelC) + parseInt(alevelD));


  return alevelscore;
}

function calculate() {

  olevelscore = olevels();
  aslevelscore = aslevels();
  alevelscore = alevels();

  if (document.getElementById('factor').checked) {
    aslevelscore[0] = aslevelscore[0] * 1.5;
    alevelscore[0] = alevelscore[0] * 2;
  }

  totalscore = (parseInt(olevelscore[0]) + parseInt(aslevelscore[0]) + parseInt(alevelscore[0]));

  totalsubjects = (parseInt(olevelscore[1]) + parseInt(aslevelscore[1]) + parseInt(alevelscore[1]));

  scorepercentage = totalscore / totalsubjects;
  govscore = Math.round((scorepercentage * 4.1000000001) * 1000) / 1000;
  if (!scorepercentage == 0) {
    document.getElementById("scorepercentage").innerHTML = Math.round(scorepercentage * 100) / 100;
    document.getElementById("govscore").innerHTML = Math.round(govscore * 100) / 100;

    var govunis = document.getElementById('govunis');
    var elements = govunis.getElementsByTagName('li');
    for (var i = 0; i < elements.length; i++) {

      var input = elements[i].id;
      if (govscore >= input) {
        document.getElementById(input).style.background = "lightblue";
        document.getElementById(input).id = document.getElementById(input).id + 0;
      } else {

        document.getElementById(input).style.background = "lightsalmon";
        document.getElementById(input).id = document.getElementById(input).id + 0;

      }
    }



    var pvtunis = document.getElementById('pvtunis');
    var elements2 = pvtunis.getElementsByTagName('li');
    for (var x = 0; x < elements2.length; x++) {

      var input = elements2[x].id;
      if (scorepercentage >= input) {

        document.getElementById(input).style.background = "lightblue";
        document.getElementById(input).id = document.getElementById(input).id;
      } else {

        document.getElementById(input).style.background = "lightsalmon";
        document.getElementById(input).id = document.getElementById(input).id;

      }
    }
  } else {

    alert('Hi, I can not work like this. Get a life.');

  }


}

function colorlist() {



}
