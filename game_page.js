pla1na = localStorage.getItem("player1_name");
pla2na = localStorage.getItem("player2_name");

The_Truth = localStorage.getItem("The_Truth");

pla1sco = 0;
pla2sco = 0;

document.getElementById("player1_name").innerHTML = pla1na + " : ";
document.getElementById("player2_name").innerHTML = pla2na + " : ";

document.getElementById("player1_score").innerHTML = pla1sco;
document.getElementById("player2_score").innerHTML = pla2sco;

document.getElementById("player_question").innerHTML = "Question Turn - " + pla1na;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + pla2na;

function send(){
    geWor = document.getElementById("word").value;
    word = geWor.toLowerCase();
    console.log("Word in Lower Case = " + word);

    cha1 = word.charAt(1);
    lediv2 = Math.floor(word.length/2);
    cha2 = word.charAt(lediv2);
    lenmi1 = word.length - 1;
    cha3 = word.charAt(lenmi1);

    remcha1 = word.replace(cha1, "_");
    remcha2 = remcha1.replace(cha2, "_");
    remcha3 = remcha2.replace(cha3, "_");

    quewor = "<h4 id='word_display'> Q. " + remcha3 + " </h4>";
    inbovar = "<br>Answer: <input type='text' id='input_check_box'>";
    chebutt = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    ro = quewor + inbovar + chebutt;
    document.getElementById("output").innerHTML = ro;
    document.getElementById("word").value = "";

    if (The_Truth == "nocheat"){
        console.clear();
    }
}

quetur = "player_1";
anstur = "player_2";

function check(){
    ans = document.getElementById("input_check_box").value;
    anslow = ans.toLowerCase();
    console.log(anslow);
 
    if (anslow == word) {
        if (anstur == "player_1") {
            pla1sco = pla1sco + 1;
            document.getElementById("player1_score").innerHTML = pla1sco;
        }
        else{
            pla2sco = pla2sco + 1;
            document.getElementById("player2_score").innerHTML = pla2sco;
        }
    }
    if (quetur == "player_1"){
        quetur = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + pla2na;
    }
    else{
        quetur = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + pla1na;
    }
    if (anstur == "player_1"){
        anstur = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + pla2na;
    }
    else{
        anstur = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + pla1na;
    }
    document.getElementById("output").innerHTML = "";

    if (The_Truth == "nocheat"){
        console.clear();
    }
}