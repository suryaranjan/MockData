<template>
    <div>
        <Header></Header>
        <router-link class="btn btn primary" :to="{name:'OneToMany'}">Single Value</router-link>
         <router-link class="btn btn primary"  :to="{name:'ManyToOne'}">Multi value</router-link>
        <router-view  :key="$route.fullPath" ></router-view>
        
        
    </div>
</template>

<script>
import Header from '../BasicComponent/Header.vue';
import OneToMany from '../BasicComponent/OneToMany.vue';
import ManyToMany from '../BasicComponent/ManyToMany.vue';

export default{
        name:'Home',
        data(){
            return{
                showData:false
            }
        },
        components:{
            Header,
            OneToMany,
            ManyToMany
           
        },
        methods:{
            
        }
}
</script>

<style>
    
</style>