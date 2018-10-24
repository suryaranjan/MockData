<template>
    <div>
        <Header></Header>
        <TableForm></TableForm>
        
        
    </div>
</template>

<script>
import Header from '../BasicComponent/Header.vue';
import TableForm from '../BasicComponent/TableForm.vue';


export default{
        name:'Home',
        data(){
            return{
                showData:false
            }
        },
        components:{
            Header,
            TableForm
           
        },
        methods:{
            
        }
}
</script>

<style>
    
</style>