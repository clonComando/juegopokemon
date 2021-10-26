<template>
    <div id="pokemon-container">
        <!---Image-->
            <img :src="imgSource" class="hidden-pokemon" alt="...">
            
             <img v-if="showPokemon" :src="imgSource" class="fade-in" alt="pokemon">

    </div>
</template>

<script>
export default {
    name:'PokemonOptionsComponent',
    props:{
        pokemonId:{
            type:Number,
            require:true
        },
        showPokemon:{
            type:Boolean,
            require:true,
            default:false
        }
    },

    data:()=>({
      id:null
    }),
    methods:{
    
        
    },computed:{
        imgSource(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    },
    created(){
    }
}
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
    height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}


</style>