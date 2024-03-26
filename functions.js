
function chisiamo(){

    window.location.href="pagina_presentazione.html";
}
function lezioni (){
   
    window.location.href="pagina_lezioni.html";

}
function contattaci (){
    window.location.href="pagina_contattaci.html"
}

function indietro(){
    window.location.href="index.html"; 
}


var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}