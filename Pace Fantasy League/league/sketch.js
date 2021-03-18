var BUMRAH = 226; //chiggy,zuber,sid,wanjari,kuch,popli,chole,ashu,dubey(vc),ritesh,nimesh(vc)
var PUJARA = 271; //chole,sid,dubey,nimesh,zuber(vc),kuch,ashu(vc),yog(vc)
var JADEJA = 225; //sid,ashu,ritesh,chiggy,zuber
var RAHANE = 268; //wanjari(vc)
var VIHARI = 72; //chiggy
var ASHWIN = 318; //ritesh(vc)
var KLR = 0; //chiggy(c),zuber,sid,wanjari,kuch(vc),popli,chole(c),yog,ashu(c),dubey(c),ritesh
var HARDIK = 0; //nimesh
var DHAWAN = 0; //nimesh
var CHAHAL = 0; //chole,ritesh
var VIRAT = 78; //wanjari,ashu,dubey
var SHAMI = 1; //yog,dubey,nimesh
var MAYANK = 78; //yog,ritesh

var SMITH = 313; //chiggy(vc),zuber,sid(c),wanjari(c),kuch,popli,chole(vc),yog,dubey,ritesh(c),nimesh(c)
var LABUSCHAGNE = 426; //chiggy,zuber,yog(c),sid(vc),popli,kuch,wanjari,chole
var CUMMINS = 481; //chiggy,zuber(c),wanjari,kuch,popli,dubey
var STARC = 301; //sid,yog,ashu
var LYON = 250; //popli(vc)
var FINCH = 0; //ashu
var WARNER = 67; //kuch(c),popli(c),chole,nimesh


var scores = {
    "Zuber": 1409.5,
    "Sid": 1625,
    "Wanjari": 1730,
    "Ashu": 1186,
    "Chole": 1558,
    "Ritesh": 1309,
    "Kuchewar": 1311,
    "Dubey": 1515,
    "Popli": 1397.5,
    "Yog": 887.5,
    "Chiggy": 1518,
    "Nimesh": 1415,
}

var Leaderboard = {};

function swap(arr, first_Index, second_Index) {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr, arr2) {

    var len = arr.length,
        i, j, stop;

    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] >= arr[j + 1]) {
                swap(arr, j, j + 1);
                swap(arr2, j, j + 1);
            }
        }
    }

    return arr;
}

function Leaders() {

    Chiggy();
    Zuber();
    Sid();
    Wanjari();
    Ashu();
    Chole();
    Ritesh();
    Kuchewar();
    Dubey();
    Popli();
    Yog();
    Nimesh();

    var players = Object.keys(scores);
    var fantasypoints = Object.values(scores);

    fantasypoints = bubble_Sort(fantasypoints, players);
    fantasypoints.reverse();
    players.reverse();
    console.log(players);
    console.log(fantasypoints);

    document.getElementById('p0').innerHTML = players[0];
    document.getElementById('p1').innerHTML = players[1];
    document.getElementById('p2').innerHTML = players[2];
    document.getElementById('p3').innerHTML = players[3];
    document.getElementById('p4').innerHTML = players[4];
    document.getElementById('p5').innerHTML = players[5];
    document.getElementById('p6').innerHTML = players[6];
    document.getElementById('p7').innerHTML = players[7];
    document.getElementById('p8').innerHTML = players[8];
    document.getElementById('p9').innerHTML = players[9];
    document.getElementById('p10').innerHTML = players[10];
    document.getElementById('p11').innerHTML = players[11];


    document.getElementById('f0').innerHTML = fantasypoints[0];
    document.getElementById('f1').innerHTML = fantasypoints[1];
    document.getElementById('f2').innerHTML = fantasypoints[2];
    document.getElementById('f3').innerHTML = fantasypoints[3];
    document.getElementById('f4').innerHTML = fantasypoints[4];
    document.getElementById('f5').innerHTML = fantasypoints[5];
    document.getElementById('f6').innerHTML = fantasypoints[6];
    document.getElementById('f7').innerHTML = fantasypoints[7];
    document.getElementById('f8').innerHTML = fantasypoints[8];
    document.getElementById('f9').innerHTML = fantasypoints[9];
    document.getElementById('f10').innerHTML = fantasypoints[10];
    document.getElementById('f11').innerHTML = fantasypoints[11];


    if (document.getElementById('p0').innerHTML == "Mane") {
        document.getElementById('mane').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('mane').style.width = "150px";
        document.getElementById('mane').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Ashu") {
        document.getElementById('ashu').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('ashu').style.width = "150px";
        document.getElementById('ashu').style.height = "150px";
    }



    if (document.getElementById('p0').innerHTML == "Chole") {
        document.getElementById('chole').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('chole').style.width = "150px";
        document.getElementById('chole').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Chiggy") {
        document.getElementById('chiggy').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('chiggy').style.width = "150px";
        document.getElementById('chiggy').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Kuchewar") {
        document.getElementById('kuchewar').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('kuchewar').style.width = "150px";
        document.getElementById('kuchewar').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Zuber") {
        document.getElementById('zuber').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('zuber').style.width = "150px";
        document.getElementById('zuber').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Sid") {
        document.getElementById('sid').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('sid').style.width = "150px";
        document.getElementById('sid').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Wanjari") {
        document.getElementById('wanjari').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('wanjari').style.width = "150px";
        document.getElementById('wanjari').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Ritesh") {
        document.getElementById('chavan').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('chavan').style.width = "150px";
        document.getElementById('chavan').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Dubey") {
        document.getElementById('dubey').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('dubey').style.width = "150px";
        document.getElementById('dubey').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Varun") {
        document.getElementById('varun').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('varun').style.width = "150px";
        document.getElementById('varun').style.height = "150px";
    }


    if (document.getElementById('p0').innerHTML == "Popli") {
        document.getElementById('popli').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('popli').style.width = "150px";
        document.getElementById('popli').style.height = "150px";
    }

    if (document.getElementById('p0').innerHTML == "Yog") {
        document.getElementById('yog').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('yog').style.width = "150px";
        document.getElementById('yog').style.height = "150px";
    }

    if (document.getElementById('p0').innerHTML == "Nimesh") {
        document.getElementById('nimesh').style.border = "15px double rgb(255, 165, 0)";
        document.getElementById('nimesh').style.width = "150px";
        document.getElementById('nimesh').style.height = "150px";
    }


}

function Chiggy() {
    scores["Chiggy"] += KLR * 2 + VIHARI + BUMRAH + JADEJA + SMITH * 1.5 + CUMMINS + LABUSCHAGNE;
}

function Zuber() {
    scores["Zuber"] += KLR + PUJARA * 1.5 + BUMRAH + JADEJA + SMITH + CUMMINS * 2 + LABUSCHAGNE;
}

function Sid() {
    scores["Sid"] += KLR + PUJARA + BUMRAH + JADEJA + LABUSCHAGNE * 1.5 + SMITH * 2 + STARC;
}

function Wanjari() {
    scores["Wanjari"] += KLR + VIRAT + BUMRAH + RAHANE * 1.5 + SMITH * 2 + CUMMINS + LABUSCHAGNE;
}

function Ashu() {
    scores["Ashu"] += KLR * 2 + VIRAT + JADEJA + BUMRAH + PUJARA * 1.5 + FINCH + STARC;
}

function Chole() {
    scores["Chole"] += KLR * 2 + LABUSCHAGNE + PUJARA + CHAHAL + BUMRAH + WARNER + SMITH * 1.5;
}

function Ritesh() {
    scores["Ritesh"] += KLR + JADEJA + BUMRAH + CHAHAL + MAYANK + ASHWIN * 1.5 + SMITH * 2;
}

function Kuchewar() {
    scores["Kuchewar"] += KLR * 1.5 + PUJARA + BUMRAH + WARNER * 2 + SMITH + LABUSCHAGNE + CUMMINS;
}

function Dubey() {
    scores["Dubey"] += KLR * 2 + PUJARA + BUMRAH * 1.5 + SHAMI + VIRAT + SMITH + CUMMINS;
}

function Popli() {
    scores["Popli"] += KLR + LYON * 1.5 + BUMRAH + WARNER * 2 + SMITH + CUMMINS + LABUSCHAGNE;
}

function Yog() {
    scores["Yog"] += MAYANK + KLR + SHAMI + LABUSCHAGNE * 2 + PUJARA * 1.5 + SMITH + STARC;
}

function Nimesh() {
    scores["Nimesh"] += DHAWAN + PUJARA + BUMRAH * 1.5 + SHAMI + WARNER + HARDIK + SMITH * 2;
}
