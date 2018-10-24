<template>
    <div class="mainContainer">
   <Home/>
   </div>
</template>

<script>
    import Home from './Src/Feed/Home.vue'
    export default{
            name:'App',
            data(){
                return{
                    
                }
            },
            components:{
                Home
            }
    }
</script>

<style >   
    div{
        
        margin:auto;
    }
    .mainContainer{
        width:80%;
    }
</style>