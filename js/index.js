let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");
let night = document.querySelector(".night");

window.addEventListener("scroll", function () {
  let value = this.scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 4 + 'px';
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value  + 'px';
  boat.style.top = value  + 'px';
  boat.style.left = value *3  + 'px';
  night.style.fontSize = value *.1  + 'rem';
  if(this.scrollY >= 67 ){
  night.style.fontSize = 67*.1  + 'rem';
  night.style.position = 'fixed';
    if( this.scrollY >= 400){
      night.style.display = 'none';
    }
    else{
      night.style.display = 'block';
    }
    if( this.scrollY >= 100){
      this.document.querySelector('.main').style.background= `linear-gradient(#376281,#10001f)` ;
    }
    else{
      this.document.querySelector('.main').style.background= `linear-gradient(#200016,#10001f)` ;
    }
  }
  

});
