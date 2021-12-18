// IF dan Else
// var test = confirm('kamu yakin?');
// if(test===true){
//     alert('kamu menekan yakin');
// }
// else{
//     alert('kamu menekan tidak yakin');
// }

//pengulangan
alert('selamat datang di web ku');
var lagi=true;

while(lagi===true){
    // alert('selamat datang di web ku');
    var nama= prompt('siapa nama kamu, mohon diisi')
    alert('oh nama kamu' + nama);

    lagi=confirm('apakah mau coba lagi');
}

alert('terimaksih sudah mampir')