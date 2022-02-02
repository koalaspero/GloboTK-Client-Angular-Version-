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

function cerrarSesion(){
  document.cookie = "usuario= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  window.location.assign("http://localhost:4200/");
}


function deleteRequest(correo) {
  $.ajax( {
  url : "http://localhost:3001/admin/users/",
  type : 'DELETE',
  data: jQuery.param({"Correo": correo}),
  success : function ( data ) {
  $( "p" ).append( "Delete request is Success." );
  },
  error : function ( jqXhr, textStatus, errorMessage ) {
  $( "p" ).append( "Delete request is Fail.");
  }
});

}
/*
const peticion = (categoria)=>{
  document.getElementsByClassName('noticias container')[0].innerHTML="";
  fetch('http://localhost:3001/noticias'+categoria)
  .then(response => response.json())
  .then(data =>{
    console.log(data);
    let variable = 0;
    for(let noti of data){
      let plantilla = 
      `
      <div id="not-${noti.id}">
         <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${noti.ImagenAsociada}" class="img-fluid img-thumbnail" alt="news_img">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">${noti.titulo}</h3>
                    <a href="${noti.rutaNoticia}"><p class ="card-text">Enlace a noticia</p></a>
                    <p class="card-text"><small class="text-muted">Updated: ${noti.fechaActualizacion}</small></p>
                    <button type="button" class="btn btn-primary" (click)="guardarFavorito('not-${noti.id}')">Guardar en favoritos ⭐</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
      
      `;
      document.getElementsByClassName('noticias container')[0].innerHTML += plantilla;

      if(variable=10){
        break;
      }
    }
  })
  .catch(console.error);
 }

 const cargarN = ()=>{
  var selectur = document.querySelector('#inputGroupSelect01');
  selectur.onchange = (event) => {
    peticion(event.target.value);
  }
 }
 cargarN();
/**
 *<div data-step="1" data-intro="Filtramos por género musical o simplemente vemos de todo" class="btn-group">
                <button type="button" class="btn btn-danger">Género</button>
                <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item"  onclick="peticion('pop')">Pop</a></li>
                    <li><a class="dropdown-item"  onclick="peticion('rock')">Rock</a></li>
                    <li><a class="dropdown-item"  onclick="peticion('latin')">Latin</a></li>
                    
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" onclick="peticion('musicnews')" >Music News</a></li>
                </ul>
            </div>
 */
