/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
       
        resultData:[]
    },
    mutations:{
        
       
        searchResultData(state,result)
        {
            console.log('setting result')
            state.resultData = result;
        }
    },
   /* actions:{
        searchResult(context,result){
            console.log(result);
            context.commit('searchResult',result)
        }
    },*/
    getters:{       
        getResultData(state)
        {
            return state.resultData;
        }
        
    }
})