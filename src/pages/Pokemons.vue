<template>
    <div>
    <h1 v-if="!Pokeminaleatorio">Cargando...</h1>
        <div id="pokemons" v-else>
            <h1>¿Cual es este pokemon?</h1>
            <pokemon-picture-component :pokemonId="Pokeminaleatorio.id" :showPokemon='showPokemons' />
            <!-- el event lo que trae es el valor que estoy emitiendo-->
            <pokemon-options-component v-if="showOptions" @selectPokemon="mostrarRespuesta($event)" :pokemons="pokemonArray" />
            <div style="margin-top:250px" v-if="PokemonMessage.show">
                     <h2>{{PokemonMessage.message}}</h2>
                     <button class="btn" @click="reset">Reiniciar</button>
            </div>
        </div>
    </div>
   
</template>

<script>
import PokemonPictureComponent from '../components/PokemonPictureComponent.vue'
import PokemonOptionsComponent from '../components/PokemonOptionsComponent.vue'
import getPokemonsOptions from '@/helpers/pokemons.js'
export default {
    name:'Pokemons',
    components:{PokemonPictureComponent,PokemonOptionsComponent},
    data:()=>({
      pokemonArray:[],
      mostrar:false,
      Pokeminaleatorio:0,
      showPokemons:false,
      showOptions:true,
      PokemonMessage:{
          message:null,
          show:false
      }
      
    }),
    methods:{
       async  getPokemonsRandom(){
            this.pokemonArray= await getPokemonsOptions();
            this.Pokeminaleatorio=this.pokemonArray[this.generateRandomItem(0,3)]
        },
        // numeros aleatorios
        generateRandomItem(minimo, maximo) {
        return Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);
        },
        mostrarRespuesta(event){
            if (event!=null) {
                    if (event === this.Pokeminaleatorio.id) {
                        this.PokemonMessage.message = 'Respuesta correcta'
                        
                    }else{
                       this.PokemonMessage.message = `Respuesta incorrecta, la opcion era ${this.Pokeminaleatorio.name.toUpperCase()}`
                    }
                    this.PokemonMessage.show = true
                    this.showPokemons = true
                    this.showOptions = false;
            }     
        } ,
        reset(){
            this.PokemonMessage.show = false
            this.showOptions = true;
            this.pokemonArray =[];
            this.Pokeminaleatorio =null;
            this.showPokemons = false;
            this.getPokemonsRandom();
        }
    },
  async mounted(){
      this.getPokemonsRandom();

    }
}
</script>

<style scoped>
 .btn{
     background: red;
     color: white;
     padding:20px;
     border:0
 }
 .btn:hover{
     background:black;
 }
</style>