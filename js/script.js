window.onload = function() {
	document.querySelector('#dugmePotvrdi').addEventListener("click", provera);
}
function provera() {

	var Ime = document.querySelector('#formaIme');
	var Prezime = document.querySelector('#formaPrezime');
	var Email = document.querySelector('#formaEmail');
	var Sifra = document.querySelector('#formaSifra');
	var SifraPr = document.querySelector('#formaSifraPr');
	var SlazemSe = document.querySelector('#formaSlazemSe');
	
	var kiksIme = document.querySelector('#formaImeKiks');
	var kiksPrezime = document.querySelector('#formaPrezimeKiks');
	var kiksEmail = document.querySelector('#formaEmailKiks');
	var kiksSifra = document.querySelector('#formaSifraKiks');
	var kiksSifraPr = document.querySelector('#formaSifraPrKiks');
	var kiksSlazemSe = document.querySelector('#formaSlazemSeKiks');
	
	var reIme = /^([A-Z][a-z]{2,12}\s)+$/;
	var rePrezime = /^([A-Z][a-z]{2,17}\s)+$/;
	var reEmail = /^[a-z]{3,13}\.[a-z]{3,17}\.[1-9][0-9]{0,3}\.[0-1][0-9]@(gmail.com|yahoo.com|hotmail.com|ict.edu.rs)$/;
	var reSifra = /[A-Z]+[a-z]+[.,@/$%^&*()!#]/;
	var reSifraPr = /[A-Z]+[a-z]+[.,@/$%^&*()!#]/;
	// ime
	if(!reIme.test(Ime.value)) {
		formaImeKiks.textContent = "Ime nije napisano u dobrom formatu!";
	 }
	 else if(Ime == ""){
		formaImeKiks.textContent = "Ime nije napisano!";
	}else{
		formaImeKiks.textContent = "";
	}
	// prezime
	if(!rePrezime.test(Prezime.value)) {
		formaPrezimeKiks.textContent = "Prezime nije napisano u dobrom formatu!";
	}else if(Prezime == ""){
		formaPrezimeKiks.textContent = "Prezime nije napisano!";
	}else{
		formaPrezimeKiks.textContent = "";
	}
	// email
	if(!reEmail.test(Email.value)) {
		formaEmailKiks.textContent = "Email nije napisano u dobrom formatu!";
	}else if(Email == ""){
		formaEmailKiks.textContent = "Email nije napisano!";
	}else{
		formaEmailKiks.textContent = "";
	}
	// sifra
	if(!reSifra.test(Sifra.value)) {
		formaSifraKiks.textContent = "Sifra nije napisana u dobrom formatu!";
	}else if(Sifra == ""){
		formaSifraKiks.textContent = "Sifra nije napisana!";
	}else{
		formaSifraKiks.textContent = "";
	}
	// sifra provera
	if(!reSifraPr.test(SifraPr.value)) {
		formaSifraPrKiks.textContent = "Sifra nije napisana u dobrom formatu!";
	}else if(SifraPr == ""){
		formaSifraPrKiks.textContent = "Sifra nije napisana!";
	}else{
		formaSifraPrKiks.textContent = "";
	}
}


//SKROL NA GORE
$(window).scroll(function(){
		if($(this).scrollTop() > 800){
			$("#scrollToTop").show(500);
		}
		else{
			$("#scrollToTop").hide(500);
		}
	});
	$("#scrollToTop").click(function(){
		$(window).scrollTop(0);
	});
	
// ISPIS NA INDEX STRANI

var ispis1 = '';
var ispis2 = '';
var ispis1p = '';
var ispis2p = '';

// ISPIS BELOPOLJE 1 - INDEX STRANA

var nizDivova1=[
	{klasaI:"ssSlika",
	slika:{
		src:"images/limenke.png",
		alt:"Slika limenki zajedno"
	},
	
	klasaT:"ssbTekst",
	h:{
		klasa:"podnaslov",
		sadrzaj:"ĆUK DAJE SNAGU"
	},
	p:{
		klasa:"pPodnaslov",
		sadrzaj:"Šta je zapravo Ćuk energetski napitak, kako ovaj napitak deluje na vas, odakle potiču sastojci ovog pića, i ko ga sve konzumira?"
	},
	a:{
		href:"proizvodi.html",
		klasa:"aDugme",
		sadrzaj:"POGLEDAJ ĆUK PROIZVODE"
	},
	}
];
$(document).ready(function(){
	for(var i=0; i<nizDivova1.length; i++){
		ispis1+='<div class="'+nizDivova1[i].klasaI+'">'
		+'<img src="'+nizDivova1[i].slika.src+'" alt="'+nizDivova1[i].slika.alt+'"/></div>'
		+'<div class="'+nizDivova1[i].klasaT+'">'
		+'<h2 class="'+nizDivova1[i].h.klasa+'">'
		+ nizDivova1[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizDivova1[i].p.klasa+'">'
		+ nizDivova1[i].p.sadrzaj + '</p>'
		+'<a href="'+nizDivova1[i].a.href+'" class="'+nizDivova1[i].a.klasa+'">'+nizDivova1[i].a.sadrzaj+'</a></div>'
	}
	ispis1+= '<div class="cleaner"></div>'
	
	$('.dinamicki1').html(ispis1);
});

// ISPIS BELOPOLJE 2 - INDEX STRANA
var nizDivova2=[
	{klasaI:"ssSlika",
	slika:{
		src:"images/dresovi.png",
		alt:"Slika prve limenke kompanije"
	},
	
	klasaT:"ssbTekst",
	h:{
		klasa:"podnaslov",
		sadrzaj:"NAJBOLJI!"
	},
	p:{
		klasa:"pPodnaslov",
		sadrzaj:"Biti najbolji u nečemu, u nekoj disciplini, u nekom sportu, u poslu, biti najbolja verzija sebe. Ćuk i Sinovi podrćavaju najbolje od najboljih!"
	},
	a:{
		href:"#",
		klasa:"aDugme",
		sadrzaj:"POGLEDAJ NAJBOLJE"
	},
	}
];

 $(document).ready(function(){
	for(var i=0; i<nizDivova2.length; i++){
		ispis2+='<div class="'+nizDivova2[i].klasaI+'">'
		+'<img src="'+nizDivova2[i].slika.src+'" alt="'+nizDivova2[i].slika.alt+'"/></div>'+
		'<div class="'+nizDivova2[i].klasaT+'">'
		+'<h2 class="'+nizDivova2[i].h.klasa+'">'
		+ nizDivova2[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizDivova2[i].p.klasa+'">'
		+ nizDivova2[i].p.sadrzaj + '</p>'
		+'<a href="'+nizDivova2[i].a.href+'" class="'+nizDivova2[i].a.klasa+'">'+nizDivova2[i].a.sadrzaj+'</a></div>'
	}
	ispis2+= '<div class="cleaner"></div>'
	
	$('.dinamicki2').html(ispis2);
});

// ISPIS PLAVOPOLJE 1 - INDEX STRANA
var nizDivova1p=[
	{klasaT:"ssTekst",
	h:{
		klasa:"podnaslovP",
		sadrzaj:"ĆUK I SINOVI?"
	},
	p:{
		klasa:"pPodnaslovP",
		sadrzaj:"Ćuk i sinovi je kompanija koja se bavi proizvodnjom i prodajom energetskih napitaka, sa sedištem u Beogradu. Osnovana je daleke 1919.godine, a njen pokretač, direktor i vlasnik, Igor 'Stari' Ćuk je čovek sa neverovatnom pričom o ovoj divnoj kompaniji."
	},
	a:{
		href:"oKompaniji.html",
		klasa:"aDugme",
		sadrzaj:"O KOMPANIJI"
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizDivova1p.length; i++){
		ispis1p+='<div class="'+nizDivova1p[i].klasaT+'">'
		+'<h2 class="'+nizDivova1p[i].h.klasa+'">'
		+ nizDivova1p[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizDivova1p[i].p.klasa+'">'
		+ nizDivova1p[i].p.sadrzaj + '</p>'
		+'<a href="'+nizDivova1p[i].a.href+'" class="'+nizDivova1p[i].a.klasa+'">'+nizDivova1p[i].a.sadrzaj+'</a></div>'
	}
	
	$('.dinamicki1p').html(ispis1p);
});

// ISPIS PLAVOPOLJE 2 - INDEX STRANA
var nizDivova2p=[
	{klasaT:"ssTekst",
	h:{
		klasa:"podnaslovP",
		sadrzaj:"DOGAĐAJI"
	},
	p:{
		klasa:"pPodnaslovP",
		sadrzaj:"Najveći muzički festivali u svetu i ove godine spremni su da prihvate MILIONE posetilaca i pruže dane vrhunske zabave i uživanja u muzici i najraznovrsnijoj ponudi hrane i pića. Ove godine smo već dostigli rekord od prošle, gde je naše festivale posetilo preko 800 hiljada ljudi. Do kraja nije ostalo mnogo, tako da pogledajte šta je i dalje u ponudi, pa dođite da se provedemo."
	},
	a:{
		href:"dogadjaji.html",
		klasa:"aDugme",
		sadrzaj:"POGLEDAJ DOGAĐAJE"
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizDivova2p.length; i++){
		ispis2p+='<div class="'+nizDivova2p[i].klasaT+'">'
		+'<h2 class="'+nizDivova2p[i].h.klasa+'">'
		+ nizDivova2p[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizDivova2p[i].p.klasa+'">'
		+ nizDivova2p[i].p.sadrzaj + '</p>'
		+'<a href="'+nizDivova2p[i].a.href+'" class="'+nizDivova2p[i].a.klasa+'">'+nizDivova2p[i].a.sadrzaj+'</a></div>'
	}
	
	$('.dinamicki2p').html(ispis2p);
});

// ISPIS NA STRANI PROIZVODI
var ispis1proizvod = '';
var ispis2proizvod = '';
var ispis1pProizvod = '';
var ispis2pProizvod = '';

// ISPIS BELOPOLJE 1 - PROIZVODI STRANA
var nizProizvodi1=[
	{klasaI:"ssSlika",
	slika:{
		src:"images/cover08.jpg",
		alt:"Slika limenki poredjanih u redu"
	},
	
	klasaT:"sspTekst",
	h:{
		klasa:"podnaslov",
		sadrzaj:"STARTNA LINIJA SPREMNA"
	},
	p:{
		klasa:"pPodnaslov",
		sadrzaj:"FORMACIJA, TRI SLOVA, JEDNA REČ!"
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizProizvodi1.length; i++){
		ispis1proizvod+='<div class="'+nizProizvodi1[i].klasaI+'">'
		+'<img src="'+nizProizvodi1[i].slika.src+'" alt="'+nizProizvodi1[i].slika.alt+'"/></div>'
		+'<div class="'+nizProizvodi1[i].klasaT+'">'
		+'<h2 class="'+nizProizvodi1[i].h.klasa+'">'
		+ nizProizvodi1[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizProizvodi1[i].p.klasa+'">'
		+ nizProizvodi1[i].p.sadrzaj + '</p>'
		+'</div>'
	}
	
	$('.dinamicki1proizvodi').html(ispis1proizvod);
});

//ISPIS BELO POLJE 2 - PROIZVODI STRANA
var nizProizvodi2=[
	{klasaI:"ssSlika",
	slika:{
		src:"images/cover09.jpg",
		alt:"Slika limenki poredjanih u redu"
	},
	
	klasaT:"sspTekst",
	h:{
		klasa:"podnaslov",
		sadrzaj:"ZGRABI PRILIKU!"
	},
	p:{
		klasa:"pPodnaslov",
		sadrzaj:"Ako imaš nedoumicu oko toga koji ukus prvi da probaš, mi te savetujemo da uzmeš uvek verni original!"
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizProizvodi2.length; i++){
		ispis2proizvod+='<div class="'+nizProizvodi2[i].klasaI+'">'
		+'<img src="'+nizProizvodi2[i].slika.src+'" alt="'+nizProizvodi2[i].slika.alt+'"/></div>'
		+'<div class="'+nizProizvodi2[i].klasaT+'">'
		+'<h2 class="'+nizProizvodi2[i].h.klasa+'">'
		+ nizProizvodi2[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizProizvodi2[i].p.klasa+'">'
		+ nizProizvodi2[i].p.sadrzaj + '</p>'
		+'</div>'
	}
	
	$('.dinamicki2proizvodi').html(ispis2proizvod);
});
// ISPIS PLAVOPOLJE 5 - PROIZVODI
var nizProizvodi1p=[
	{klasaT:"ssTekst",
	h:{
		klasa:"podnaslovP",
		sadrzaj:"UKUSI KOJE IMAMO U PONUDI"
	},
	p:{
		klasa:"pPodnaslovP",
		sadrzaj:"Od ove godine u našoj ponudi imamo čak 5 energetskih napitaka: Crni Original, Plava Borovnica, Crvena Jagoda, Zelena Jabuka i Narandžasti Oranž."
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizProizvodi1p.length; i++){
		ispis1pProizvod+='<div class="'+nizProizvodi1p[i].klasaT+'">'
		+'<h2 class="'+nizProizvodi1p[i].h.klasa+'">'
		+ nizProizvodi1p[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizProizvodi1p[i].p.klasa+'">'
		+ nizProizvodi1p[i].p.sadrzaj + '</p></div>'
	}
	
	$('.dinamicki1pproizvodi').html(ispis1pProizvod);
});
// ISPIS PLAVOPOLJE 5 - PROIZVODI
var nizProizvodi2p=[
	{klasaT:"ssTekst",
	h:{
		klasa:"podnaslovP",
		sadrzaj:"ZAŠTO KONZUMIRATI OVO PIĆE?"
	},
	p:{
		klasa:"pPodnaslovP",
		sadrzaj:"Svakodnevni život može da bude jako stresan, imate osećaj kao da nemate dovoljno snage da bi ste izašli na kraj sa svim obazvezama. Tada na scenu stupa energetski napitak! Student si i spremaš ispit ili kolokviju, radiš kao vozač na dugim relacijama, baviš se nekom fizičkom aktivnošću. Ma šta god da je, za dodatni bust energije, ovo je pravo piće za tebe."
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizProizvodi2p.length; i++){
		ispis2pProizvod+='<div class="'+nizProizvodi2p[i].klasaT+'">'
		+'<h2 class="'+nizProizvodi2p[i].h.klasa+'">'
		+ nizProizvodi2p[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizProizvodi2p[i].p.klasa+'">'
		+ nizProizvodi2p[i].p.sadrzaj + '</p></div>'
	}
	
	$('.dinamicki2pproizvodi').html(ispis2pProizvod);
});

// ISPIS O KOMPANIJI STRANA
var ispis1okompaniji = '';
var ispis2okompaniji = '';
var ispis1pokompaniji = '';
var ispis2pokompaniji = '';

// ISPIS BELOPOLJE 1 - O KOMPANIJI
var nizKompanija1=[
	{
	klasaT:"ssbTekst",
	h:{
		klasa:"podnaslov",
		sadrzaj:"POSTOJIMO VEĆ 99 GODINA"
	},
	p:{
		klasa:"pPodnaslov",
		sadrzaj:"Još malo pa će i ceo vek postojanja kompanije Ćuk i sinovi! Ko bi rekao da će naš brend i naša kompanija doživeti ovoliki svetski uspeh! Da je 'Stari' tu sada da vidi šta je započeo, i da vidi dokle smo dogurali bio bi ponosan. No, hteli bi smo da vam prenesemo kako je sve nastalo."
	},
	}
];
$(document).ready(function(){
	for(var i=0; i<nizKompanija1.length; i++){
		ispis1okompaniji+='<div class="'+nizKompanija1[i].klasaT+'">'
		+'<h2 class="'+nizKompanija1[i].h.klasa+'">'
		+ nizKompanija1[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizKompanija1[i].p.klasa+'">'
		+ nizKompanija1[i].p.sadrzaj + '</p></div>'
	}
	
	$('.dinamicki1okompaniji').html(ispis1okompaniji);
});

// ISPIS PLAVOPOLJE 3 - O KOMPANIJI
var nizKompanija2=[
	{klasaT:"ssTekst",
	h:{
		klasa:"podnaslovP",
		sadrzaj:"KAKO JE SVE NASTALO?"
	},
	p:{
		klasa:"pPodnaslovP",
		sadrzaj:"Bila je to 1919.godina, i deda je nakon Prvog Svetskog rata izgubio sve. Nije mu ostalo ništa. Onako raspadnut, bez doma, odlučio je da mora nešto da napravi od svog života, kako bi obezbedio za porodicu. Radio je nekoliko godina u fabrici pića ovde u Beogradu i godinama je analizirao kako se prave različiti napitci. Od sokova i mlečnih proizvoda, do piva, vina, rakije i viskija. Od svega toga shvatio je da tržištu fali neki napitak koji će ljudima da da energiju. Eksperimentisao je jako dugo, da bi na kraju kreirao sada već legendarni 'ĆUK ENERGETSKI NAPITAK'!"
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizKompanija2.length; i++){
		ispis2okompaniji+='<div class="'+nizKompanija2[i].klasaT+'">'
		+'<h2 class="'+nizKompanija2[i].h.klasa+'">'
		+ nizKompanija2[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizKompanija2[i].p.klasa+'">'
		+ nizKompanija2[i].p.sadrzaj + '</p></div>'
	}
	
	$('.dinamicki1pokompaniji').html(ispis2okompaniji);
});

// ISPIS BELOPOLJE 2 - O KOMPANIJI
var nizKompanija3=[
	{
	klasaT:"ssbTekst",
	h:{
		klasa:"podnaslov",
		sadrzaj:"SNABDEVANJE VOJSKE"
	},
	p:{
		klasa:"pPodnaslov",
		sadrzaj:"Ono što je dedin brend poguralo i u drugim zemljama su bile zapravo vojne trupe Jugoslovenske Narodne Armije. Deda je potpisao ugovor sa vojskom kojim je imao specijalne pogodbe da snabdeva vojsku sa njegovim pićem, dok je država njemu obezbedila razne fabrike i brdo radnika. Gde god da je vojska išla, sa sobom je nosila limenke energetskog napitka, a ne retko su ga delili sa saveznicima. Drugi Svetski rat je za mnoge bio poguban, ali je deda profitirao tako što je izvezao svoj proizvod u druge zemlje. Potražnja je skočila."
	},
	}
];
$(document).ready(function(){
	for(var i=0; i<nizKompanija3.length; i++){
		ispis1pokompaniji+='<div class="'+nizKompanija3[i].klasaT+'">'
		+'<h2 class="'+nizKompanija3[i].h.klasa+'">'
		+ nizKompanija3[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizKompanija3[i].p.klasa+'">'
		+ nizKompanija3[i].p.sadrzaj + '</p></div>'
	}
	
	$('.dinamicki2okompaniji').html(ispis1pokompaniji);
});

// ISPIS PLAVOPOLJE 4 - O KOMPANIJI
var nizKompanija4=[
	{klasaT:"ssTekst",
	h:{
		klasa:"podnaslovP",
		sadrzaj:"U PREKO 100 DRŽAVA NA SVETU"
	},
	p:{
		klasa:"pPodnaslovP",
		sadrzaj:"Danas, uz pomoć mog oca, a on uz pomoć svog oca, uspeli smo da dedin brend podignemo na još veći nivo. Trenutno se nalazimo u preko 100 država širom sveta, gde u nekima imamo i po više fabrika. Ćuk Energetski Napitak napravio je pravi bum u svetu, a sada zajedno sa tatom, na čelu kao mojim prvim pomoćnikom pravimo još jedan veliki korak!"
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizKompanija4.length; i++){
		ispis2pokompaniji+='<div class="'+nizKompanija4[i].klasaT+'">'
		+'<h2 class="'+nizKompanija4[i].h.klasa+'">'
		+ nizKompanija4[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizKompanija4[i].p.klasa+'">'
		+ nizKompanija4[i].p.sadrzaj + '</p></div>'
	}
	
	$('.dinamicki2pokompaniji').html(ispis2pokompaniji);
});

// ISPIS O SARADNICIMA STRANA
var ispis1saradnici = '';
var ispis2saradnici = '';
var ispis2psaradnici = '';

//ISPIS BELOPOLJE 1 - SARADNICIMA

var nizSaradnici1=[
	{
	klasaT:"ssbTekst",
	h:{
		klasa:"podnaslov",
		sadrzaj:"NAJVEĆI SVETSKI SPORTISTI"
	},
	p:{
		klasa:"pPodnaslov",
		sadrzaj:"Sa nama sarađuju najveći svetski sportisti, za njih je ovo piće posalo svakodnevnica. Pomaže im u igri i u performansama na tereu, a i van njega."
	},
	}
];
$(document).ready(function(){
	for(var i=0; i<nizSaradnici1.length; i++){
		ispis1saradnici+='<div class="'+nizSaradnici1[i].klasaT+'">'
		+'<h2 class="'+nizSaradnici1[i].h.klasa+'">'
		+ nizSaradnici1[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizSaradnici1[i].p.klasa+'">'
		+ nizSaradnici1[i].p.sadrzaj + '</p></div>'
	}
	
	$('.dinamicki1saradnici').html(ispis1saradnici);
});

// ISPIS PLAVOPOLJE 7 - SARADNICIMA
var nizSaradnici2=[
	{klasaT:"ssTekst",
	h:{
		klasa:"podnaslovP",
		sadrzaj:"ZLATAN IBRAHIMOVIĆ"
	},
	p:{
		klasa:"pPodnaslovP",
		sadrzaj:"''Kada sam pričao sa Igorom, obeća mi je da će mi doneti nešto što nikada nisam probao. Na naš prvi susret me je pozvao do kola, otvorio gepek i rekao nosi. U njemu je bilo 2000 limenki. Mislim da je i sam znao koliko će mi se svideti, pa mi je zato još draže što smo potpisali zajednički ugovor. Ovo je saradnja veka!''"
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizSaradnici2.length; i++){
		ispis2saradnici+='<div class="'+nizSaradnici2[i].klasaT+'">'
		+'<h2 class="'+nizSaradnici2[i].h.klasa+'">'
		+ nizSaradnici2[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizSaradnici2[i].p.klasa+'">'
		+ nizSaradnici2[i].p.sadrzaj + '</p></div>'
	}
	
	$('.dinamicki1psaradnici').html(ispis2saradnici);
});


// ISPIS PLAVOPOLJE 8 - SARADNICIMA
var nizSaradnici3=[
	{klasaT:"ssTekst",
	h:{
		klasa:"podnaslovP",
		sadrzaj:"ODEL BECKHAM JR"
	},
	p:{
		klasa:"pPodnaslovP",
		sadrzaj:"''Kada smo igrali protiv reprezentacije Srbije, njihov stručni štab nas je obezbedio svime potrebnim. Na pauzi sam prišao da se osvežim i video sam da se neka gužva pravi. Svi igrači su pojurili pravo na ovo piće. Sutradan sam zvao agenta i rekao mu da sredi sve. Ostalo je istorija.''"
	},
	}
];

$(document).ready(function(){
	for(var i=0; i<nizSaradnici3.length; i++){
		ispis2psaradnici+='<div class="'+nizSaradnici3[i].klasaT+'">'
		+'<h2 class="'+nizSaradnici3[i].h.klasa+'">'
		+ nizSaradnici3[i].h.sadrzaj+'</h2>'
		+ '<p class="'+nizSaradnici3[i].p.klasa+'">'
		+ nizSaradnici3[i].p.sadrzaj + '</p></div>'
	}
	
	$('.dinamicki2psaradnici').html(ispis2psaradnici);
});


//DOGADJAJI KOLAPS
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//ULETANJE DIVOVA
$(window).scroll(function(){
	$('.sakrivanje').each( function(i){
            
            var dnoObj = $(this).offset().top + $(this).outerHeight();
            var dnoProz = $(window).scrollTop() + $(window).height();

            if( dnoProz > dnoObj ){
                $(this).animate({'opacity':'1'},2000);   
            }
        });
	});
// FORMA DIV DESNO
function openNav() {
    document.getElementById("LogInForma").style.width = "600px";
}

function closeNav() {
    document.getElementById("LogInForma").style.width = "0";
}
