function ausdder(){
    mepalr1na = document.getElementById("caCoupWinaotf").value;
    mepalr2na = document.getElementById("caCoupWinaotf2").value;
    localStorage.setItem("player1_name", mepalr1na);
    localStorage.setItem("player2_name", mepalr2na);
    window.location.replace("game_page.html");
    
}

function cheat_none(){

    localStorage.setItem("The_Truth", "nocheat");
}