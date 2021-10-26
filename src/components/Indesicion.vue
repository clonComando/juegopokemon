<template>
      <img :src="fondo" alt="bg" >
      <div class="bg-dark"></div>
      <div class="indecision-container">
          <input  v-model="question" type="text" placeholder="Hazme una pregunta" id="">
          <p>Recuerda agregar un signo de interrogacion <b>?</b> </p>
          <div v-if="validQuestion">
                <h2>{{question}}</h2>

              <h1>{{answer}}</h1>
          </div>
      </div>
</template>

<script>
export default {
    name:'Indesicion',
    data:()=>({
        question:null,
        answer:null,
        fondo:'https://via.placeholder.com/250',
        validQuestion:false
    }),
    methods:{
        async GetRespuesta(){
        this.answer='procesando....'   
        const api_url = 'https://yesno.wtf/api'
        const {answer,image} = await fetch(api_url).then(res=>res.json())
        this.answer = answer==='yes'?'SI':'NO'
        this.fondo = image
        }
    }
    ,
    //watch observando y viendo los cambios de las cosas
    watch:{
        question(val,old){
            // si no incluye nada que retorne nada
                        this.validQuestion = false;
            if(!val.includes('?')) return
            this.validQuestion = true;
            this.GetRespuesta();
        }
    },
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>