var url = "https://picsum.photos/600/400"

        function getImage() {

            var imagen = document.getElementById("imagen");
            imagen.crossOrigin = "Anonymous"
            fetch(url).then(response => {
                console.log(response);
                imagen.src=response.url;
            }).catch(error => {
                console.log(error);
                alert("error")
            })
        }

        function filtros(useFiltro){
            var photo = document.getElementById("imagen");
            var filtro = document.getElementById("filtro");
            var useFiltro = LenaJS[useFiltro];
            LenaJS.filterImage(filtro,useFiltro,photo);
        }