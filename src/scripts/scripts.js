window.addEventListener('DOMContentLoaded', () => {
    if(!(document.URL.includes("dashboard") || document.URL.includes("register"))){
      let scrollPos = 0;
      const mainNav = document.getElementById('mainNav');
      const headerHeight = mainNav.clientHeight;
      console.log(document.cookie);
      window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
      });
    }
    

})


const peticion = (url) => {
   let proxy = 'https://damp-beach-17296.herokuapp.com/'
   //RSS de música latina de Billboard

   fetch(url)
   .then(response => response.text())
   .then(data =>{
     const parser = new DOMParser();
     const xml = parser.parseFromString(data, "application/xml");
     var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	 
	document.getElementsByClassName('noticias container')[0].innerHTML = "";
     let items =xml.getElementsByTagName('item');
     console.log(items[1].getElementsByTagName("description"))

     for(let i=1 ; i < 11 ; i++){
       let plantilla = `
        <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="" class="img-fluid img-thumbnail" alt="news_img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h3 class="card-title">Card title</h3>
                      <a href=""><p class ="card-text">More Info</p></a>
                      <p class="card-text"><small class="text-muted">Updated: {fecha}</small></p>
                    </div>
                  </div>
                </div>
              </div>
        `
      plantillaAlter = `
      <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="" class="img-fluid img-thumbnail" alt="news_img">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">Card title</h3>
                    <a href=""><p data-step="2" data-intro="Texto que al darle click o tocarle (moviles), nos lleva a la noticia completa" class ="card-text">More Info</p></a>
                    <p class="card-text"><small class="text-muted">Updated: {fecha}</small></p>
                  </div>
                </div>
              </div>
            </div>
      `
      let title = items[i].getElementsByTagName('title')[0]
      let imag = items[i].getElementsByTagName('enclosure')[0]
	    let date = new Date(items[i].getElementsByTagName('pubDate')[0].textContent)
      let enlace = items[i].getElementsByTagName("link")[0]
      
      if(i==1){
        plantillaAlter = plantillaAlter.replace('Card title', title.innerHTML).replace('<![CDATA[',"").replace(']]>','');
        plantillaAlter = plantillaAlter.replace('src=""', 'src="'+imag.getAttribute("url")+'"');
	      plantillaAlter = plantillaAlter.replace('{fecha}', date.toLocaleString('esp',opciones))
        plantillaAlter = plantillaAlter.replace('a href="','a href="'+enlace.innerHTML+'"');
        document.getElementsByClassName('noticias container')[0].innerHTML += plantillaAlter;
      }else{
        plantilla = plantilla.replace('Card title', title.innerHTML).replace('<![CDATA[',"").replace(']]>','');
        plantilla = plantilla.replace('src=""', 'src="'+imag.getAttribute("url")+'"');
	      plantilla = plantilla.replace('{fecha}', date.toLocaleString('esp',opciones))
        plantilla = plantilla.replace('a href="','a href="'+enlace.innerHTML+'"');

        document.getElementsByClassName('noticias container')[0].innerHTML += plantilla
      }
     }

     console.log(xml);
   })


   .catch(console.error)
 }

