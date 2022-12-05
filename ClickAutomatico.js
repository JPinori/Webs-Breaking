for(let contador = 0;contador<101;contador++){
setTimeout(
function() {
document.getElementsByTagName('Input')[contador].click()
},0.1*contador);
}