//MI
var ROHIT = 12;
var HARDIK = 14;
var BUMRAH = 20;
var QDK = 33;

//CSK
var CHAHAR = 30;
var WATSON = 4;
var DHONI = 0;
var KEDAR = 0;
var TAHIR = 0;
var JADEJA = 40;
var BRAVO = 0;

//KKR
var RUSSELL = 0;
var NARINE = 0;
var KULDEEP = 0;
var GILL = 0;
var CUMMINS = 0;

//RCB
var VIRAT = 0;
var ABD = 0;
var CHAHAL = 0;
var MOEEN = 0;
var SAINI = 0;

//DC
var IYER = 0;
var ASHWIN = 0;
var RABADA = 0;
var DHAWAN = 0;

//SRH
var RASHID = 0;
var WARNER = 0;
var WILLIAMSON = 0;
var BHUVI = 0;
var NABI = 0;

//KXIP
var KLRAHUL = 0;
var SHAMI = 0;
var POORAN = 0;

//RR
var BUTTLER = 0;
var SMITH = 0;
var ARCHER = 0;
var JAISWAL = 0;


var scores = {
    "Chiggy": 0,
    "Zuber": 0,
    "Sid": 0,
    "Wanjari": 0,
    "Ashu": 0,
    "Varun": 0,
    "Chole": 0,
    "Ritesh": 0,
    "Kuchewar": 0,
    "Dubey": 0,
    "Mane": 0,
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
            if (arr[j] > arr[j + 1]) {
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
    Varun();
    Chole();
    Ritesh();
    Kuchewar();
    Dubey();
    Mane();

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


}

function Chiggy() {
    scores["Chiggy"] += ROHIT + HARDIK + BUMRAH + CHAHAR + RUSSELL * 2 + NARINE + VIRAT + ABD + IYER + RASHID + KLRAHUL;
}

function Zuber() {
    scores["Zuber"] += HARDIK + ROHIT + WATSON + NARINE * 2 + VIRAT + CHAHAL + IYER + ASHWIN + RASHID + KLRAHUL + BUTTLER;
}

function Sid() {
    scores["Sid"] += HARDIK + BUMRAH + DHONI + KEDAR + RUSSELL * 2 + KULDEEP + VIRAT + RABADA + WARNER + KLRAHUL + SMITH;
}

function Wanjari() {
    scores["Wanjari"] += ROHIT + HARDIK + BUMRAH + TAHIR + RUSSELL + VIRAT * 2 + IYER + BHUVI + WILLIAMSON + KLRAHUL + SMITH;
}

function Ashu() {
    scores["Ashu"] += BUMRAH + HARDIK + GILL + RUSSELL * 2 + NARINE + VIRAT + ABD + IYER + RASHID + KLRAHUL + SHAMI;
}

function Varun() {
    scores["Varun"] += BUMRAH + HARDIK * 2 + QDK + JADEJA + RUSSELL + VIRAT + CHAHAL + MOEEN + BHUVI + WILLIAMSON + KLRAHUL;
}

function Chole() {
    scores["Chole"] += WARNER + DHAWAN + KLRAHUL * 2 + VIRAT + DHONI + HARDIK + RUSSELL + POORAN + TAHIR + BHUVI + SHAMI;
}

function Ritesh() {
    scores["Ritesh"] += VIRAT * 2 + KLRAHUL + ROHIT + DHONI + HARDIK + BRAVO + RUSSELL + TAHIR + RASHID + BUMRAH + CHAHAL;
}

function Kuchewar() {
    scores["Kuchewar"] += ROHIT + BUMRAH + HARDIK + JADEJA + NARINE + VIRAT * 2 + ABD + NABI + BHUVI + KLRAHUL + SHAMI;
}

function Dubey() {
    scores["Dubey"] += HARDIK * 2 + BUMRAH + GILL + CUMMINS + VIRAT + SAINI + IYER + WILLIAMSON + RASHID + ARCHER + JAISWAL;
}

function Mane() {
    scores["Mane"] += ROHIT * 2 + HARDIK + BUMRAH + JADEJA + TAHIR + CHAHAR + RUSSELL + ABD + IYER + WILLIAMSON + BHUVI;
}