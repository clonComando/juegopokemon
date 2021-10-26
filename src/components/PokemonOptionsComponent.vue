<template>
    <div class="options-container">
       <ul >
           <!--emitir el valor del padre simbolo de dolar es para llamar una variable especial $emit(nombredel evento , val) -->
           <li v-for="i in pokemons" :key="i.id" @click="$emit('selectPokemon',i.id)">{{i.name}}</li>
         
       </ul>
    </div>
</template>

<script>
export default {
    name:'PokemonPictureComponent',
    props:{
        pokemons:{
            require:true,
            type:Array
        }
    },
    data:()=>({
      
    }),
}
</script>

<style scoped>
/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    margin-top:225px;
    display: flex;
    justify-content: center;
}
</style>