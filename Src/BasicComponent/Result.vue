<template>
    <div class="container">
       
        
        
        <div  class="modal" id="myModal">

            
                    <div class="modal-header" text-align="center" style="background-color: white;">
                        <h4 class="modal-title" >Mockdata</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body ">
                        <table class="table table-dark table-hover">
                            <colgroup>
                               <col v-for="column in columns" style="width: colWidth%" />
                            </colgroup>
                            <tr text-align="center">
                                <th colspan="columns.length+1">{{table.tableName}}</th>
                            </tr>
                            <tr >
                                <th v-for="column in columns">{{column}}</th>                
                            </tr>

                            <tr v-for="row in table.results">

                                <td v-for="columnData in row">
                                    {{columnData}}
                                </td>

                            </tr>

                        </table>

                    </div>

                    <div class="modal-footer">

                        <button type="button" class="btn btn-danger" data-dismiss="modal"  >Close</button>

                     </div>

        </div>
        
    </div>
</template>
<script>
    export default{
            name:'Result',
            data(){
                return{
                   
                }
            },
            created(){
                
            },
            props:{
                table: Object,
                columns:Array,
                colWidth:[String,Number]
            },
            methods:{
              
            }
           
    }
</script>
<style>
    table{
        width:80%;
        margin:auto;
        
    }
    td,th,tr{
        text-align:center;
    }
    div{
        
        margin:auto;
    }
    h4{
        margin: auto;
    }
</style>