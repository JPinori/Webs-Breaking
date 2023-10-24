if (window.location.href == 'https://soysocio.bocajuniors.com.ar/comprar_plano_general.php?eNid=661'){
if(document.getElementsByClassName('section disabled').length == 60){
    setTimeout(function(){
    location.reload()
    }, 1000);
}  else{
    window.open("https://www.youtube.com/watch?v=0PMwgYXQhNk&ab_channel=DJEZE", "_blank");
        setTimeout(function(){
    location.reload()
    }, 20000);

}
}else{

if(document.getElementsByClassName('loc d').length == 0 ){
    setTimeout(function(){
    location.reload()
    }, 300);
}  else{

    document.getElementsByClassName('loc d')[0].click()
            setTimeout(function(){
    document.getElementById('btnReservar').click()
    }, 500);
    
    window.open("https://www.youtube.com/watch?v=0PMwgYXQhNk&ab_channel=DJEZE", "_blank");
        setTimeout(function(){
    location.reload()
    }, 60000);
}
}
