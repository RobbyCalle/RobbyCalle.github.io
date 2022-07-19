var img = document.getElementById('img');
var img2 = document.getElementById(`img2`)
var texto = document.getElementById('text');
var texto2 = document.getElementById(`text2`)
var numero = document.getElementById('num');
var tipo = document.getElementById("tipo");
var tipo2 = document.getElementById("tipo2");
var tipo3 = document.getElementById("text3");
var tipo4 = document.getElementById("text4");
var tipo5 = document.getElementById("text5");
  numero.value = 1; 

function cargarPokemon(imagen,imagen2,name,xp,tipos,hp,atack,defense){
    img.setAttribute('src', imagen );
    img2.setAttribute('src', imagen2);
    texto.innerHTML ="Nombre: " + name;
    texto2.innerHTML ="xp: " + xp;
    tipo.innerHTML="Tipo: "+ tipos;
    tipo3.innerHTML="hp: " +hp;
    tipo4.innerHTML="Ataque: " +atack;
    tipo5.innerHTML="Defensa: " +defense;

    
    
}

 function verPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${numero.value}/`)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon.stats[0,1,2].base_stat.hp)
            var imagen = pokemon.sprites.front_default;
            var imagen2 = pokemon.sprites.front_shiny;
            var nombre = pokemon.name;
            var xp = pokemon.base_experience;
            var tipos = pokemon.types[0].type.name;
            var hp = pokemon.stats[0].base_stat;
            var atack = pokemon.stats[1].base_stat;
            var defense = pokemon.stats[2].base_stat;
            
            
            
            cargarPokemon(imagen,imagen2, nombre,xp,tipos,hp,atack,defense);
     }).catch(error => {
        console.log(error);
        alert("No encontramos tu pokemon")
    })
}