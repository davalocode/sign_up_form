function altur() {
document.getElementById("form").style.height=window.innerHeight+"px";
}

altur();

window.addEventListener("resize", function(){
    let altura=this.window.innerHeight;
    console.log(altura);
    let contenedor=document.getElementById("form");
    contenedor.style.height=altura+"px";
});

