var wrapperEle= document.body.querySelector(".wrapper")

dragon=10
health=5
while (health>=1 && dragon>=1) { 
  var hits= Number(prompt("you can take up to 5 swings to damage the dragon"))
  if(hits>5){
    damage= 1
  }else{
 var damage= Math.floor(Math.random() * ((hits - 1)+ 1) + 1)
 }
 dragon = dragon - damage
   var hitpoints= Math.floor(Math.random() * ((2 - 1)+ 1) + 1)
   health= health - hitpoints
}

if(dragon<=0){
  wrapperEle.innerHTML="congrats you've killed the dragon"
}else if(health<=0){
  wrapperEle.innerHTML="You have died"
}