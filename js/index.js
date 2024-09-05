
var  botonCambiar = document.getElementById("boton1");

botonCambiar.addEventListener("click", function() {
   
    this.innerText = "cerrar sesion";
});
var botondefinicion = document.getElementById("botondefinicion");

botondefinicion.addEventListener("click", function() {
    this.remove();

}
)

var megusta1 =document.getElementById("megusta1");

megusta1.addEventListener("click", function() {
    alert( "Gato atrigado was like");
    var like1 =document.getElementById("like1");
    like1.textContent = Number(like1.textContent) +1;
  


})
var megusta2 =document.getElementById("megusta2");

megusta2.addEventListener("click", function() {
    alert( "Golden Retriever was like");
   
    var like2 =document.getElementById("like2");
    like2.textContent = Number(like2.textContent) +1  

})


