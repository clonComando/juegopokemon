<template>
<div>
      <h1>Decrementar incrmentar</h1>
  {{contador}}-{{generalNum}}
<br>
  <button @click="incrementar()">+</button>

  <button :disabled="mostrar" @click="dincrementar()">-</button>
</div>
</template>

<script>
export default {
name:'Counter',
    props:{
        start:{
            type:Number,
            default:0,
            require:true
        }
    },
  data:()=>({
      mostrar:false,
      contador:null
  }),
  computed:{
      generalNum(){
         return this.contador*3
      }
  },methods:{
      incrementar(){
          this.contador++;
      },
       dincrementar(){
          this.contador--;
          
      }
  },created(){
    this.contador = this.start
  },
}
</script>

<style>
button{
    background: red;
    padding: 20px;
    color: white;
}
</style>