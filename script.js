const teks=document.querySelector('.teks');
const mis1=document.querySelector('#Mission .misi2 .mis1');
const mis2=document.querySelector('#Mission .misi2 .mis2');

mis1.addEventListener('mouseover',function(){

	teks.style.opacity='1';
	teks.style.fontSize='25px';
	teks.style.textAlign='center';
	teks.style.color='darkgray';
	teks.style.height='100px';
	teks.innerHTML='Aktif berpartisipasi dalam penyelesaian tugas.';
	teks.style.transition='0.8s';

});
mis1.addEventListener('mouseout',function(){
	teks.style.opacity='1';
	teks.style.fontSize='25px';
	teks.style.textAlign='center';
	teks.style.color='darkgray';
	teks.style.height='100px';
	teks.innerHTML='Arakan kursor ke kotak untuk melihat detailnya.';
	teks.style.transition='0.8s';
});
mis2.addEventListener('mouseover',function(){
	teks.innerHTML='Memanfaatkan setiap kesempatan yang dapat membangun keterampilan dalam hal teknologi dan komunikasi.';
	teks.style.opacity='1';
	teks.style.fontSize='25px';
	teks.style.textAlign='center';
	teks.style.color='darkgray';

	teks.style.transition='0.8s';
});
mis2.addEventListener('mouseout',function(){
	teks.style.opacity='1';
	teks.style.fontSize='25px';
	teks.style.textAlign='center';
	teks.style.color='darkgray';
	teks.style.height='100px';
	teks.innerHTML='Arahkan kursor ke kotak untuk melihat detailnya.';
	teks.style.transition='0.8s';
});
// untuk mendapatkan jwpopup
var jwpopup = document.getElementById('jwpopupBox');

// untuk mendapatkan link untuk membuka jwpopup
var mpLink = document.getElementById("jwpopupLink");

// untuk mendapatkan aksi elemen close
var close = document.getElementsByClassName("close")[0];

// membuka jwpopup ketika link di klik
mpLink.onclick = function() {
    jwpopup.style.display = "block";
}

// membuka jwpopup ketika elemen di klik
close.onclick = function() {
    jwpopup.style.display = "none";
}

// membuka jwpopup ketika user melakukan klik diluar area popup
window.onclick = function(event) {
    if (event.target == jwpopup) {
        jwpopup.style.display = "none";
    }
}
var jwpopup1 = document.getElementById('jwpopupBox1');

// untuk mendapatkan link untuk membuka jwpopup
var mpLink1 = document.getElementById("jwpopupLink1");

// untuk mendapatkan aksi elemen close
var close1 = document.getElementsByClassName("close1")[0];

// membuka jwpopup ketika link di klik
mpLink1.onclick = function() {
    jwpopup1.style.display = "block";
}

// membuka jwpopup ketika elemen di klik
close1.onclick = function() {
    jwpopup1.style.display = "none";
}

// membuka jwpopup ketika user melakukan klik diluar area popup
window1.onclick = function(event) {
    if (event.target == jwpopup1) {
        jwpopup1.style.display = "none";
    }
}