<template>
    <div  >
        <div class="table-container"  v-for="(table, tableIndex) in tables">
                    <div>
                        <label class="col-1.5">Table Name:</label>                        
                        <input v-model="table.tableName" type="text" col-2>
                         <button class="btn btn-default col-2 addTable" @click="addTable()" >Add Table</button>
                         <button class="btn btn-default " v-if="table.foreignTableRltn == true" @click="deleteTable(tableIndex)" >X</button>
                    </div>
                    <div v-if="table.foreignTableRltn == true" class="foreign-content">
                        
                        <label class="col-1.5">Foreign tables:</label>
                        <select class="col-1.5" @change="assignForeignColumns(table.foreignTable,tableIndex)" v-model="table.foreignTable">
                    
                            <option disabled value="">Please select category</option>
                            <option v-for="(eachTable, index2) in tables"  v-bind:value="eachTable.tableName">{{eachTable.tableName}}</option>
                        
                        </select>
                        
                        <label >Column:</label>
                        <label >{{table.foreignTableColumn}}</label>
                       
                        <label class="col-1.5">value to Relate :</label>
                        <select class="col-2"  v-model="table.foreignTableValue">
                        
                            <option disabled value="">Please select category</option>
                            <option v-for="(column, index2) in foreignColumns"  v-bind:value="column">{{column}}</option>
                        
                        </select>
                        
                    </div>
                    <div  >
                        
                        <label  class="col-2">Category</label>
                        <label  class="col-2">Type</label>
                        <label  class="col-2">Field Name</label>                      
                        <button class="btn btn-default col-2" @click="addField(tableIndex)" id="addField">Add Field</button>
                        
                    </div>
                    
                    

                    <div v-for="(input, index) in table.inputs" class="form-row">
                        
                        <select class="col-2" @change="assignTypes(tableIndex,index)" v-model="input.category">
                        
                            <option disabled value="">Please select category</option>
                            <option v-for="category in categories"  v-bind:value="category">{{category}}</option>
                        
                        </select>
                        
                        <select class="col-2" v-model="input.type">
                        
                            <option disabled value="">Please select type</option>
                            <option v-for="type in types[index]" v-bind:value="type">{{type}}</option>
                        
                        </select>   
                        
                        <input type="text" v-model="input.fieldName" class="col-2" @change="assignColumn(tableIndex, input.fieldName)" placeholder="Please enter column name">                    
                    
                        <button class="btn btn-default" @click="deleteField(tableIndex,index)" id="deleteField">X</button>
                    
                    </div>
            
                    <label for="row">Rows : </label>
                    <input v-model.number='table.rows' type="number" id="row"  class="col-1">
                    
                    <label >primary Key: </label>
                    
                     <select class="col-2" v-model="table.primaryKey">
                       
                         <option disabled value="">Please select type</option>
                        <option v-for="column in table.columns" v-bind:value="column">{{column}}</option>
                    
                     </select> 
                    
                    <button  class="btn btn-primary" @click="generateData(tableIndex) " data-toggle="modal" data-target="#myModal" id="generate" >Generate</button> 
                    <button  class="btn btn-primary"  data-toggle="modal" data-target="#myModal"  >Show</button>
                    <Result v-bind:table="table"  v-bind:columns="table.columns" v-bind:colWidth="colWidth " ></Result>
        </div>
    </div>
</template>

<script>
    import Result from './Result.vue'
    export default{
            name:'OneToOne',
            data(){
                return{
                    tables:[{
                            tableName:'',
                            foreignTableRltn:false,
                            foreignTable:'',
                            foreignTableColumn:'',
                            foreignTableValue:'',
                            primaryKey:'',
                            inputs:[{
                                category:'',
                                type:'',
                                fieldName:'',
                            }],
                            columns:[],
                            results:[],
                            rows:0,
                    }],
                    
                    categories:[],
                    types:[],
                 
                    resultTable:[],
                    tempResult:'',
                    foreignColumns:[],
                    colWidth:''
                }
            },
            created(){
                
                var result = Object.keys(this.$faker());
                this.categories = result;
//                console.log(this.categories)
                
            },
            methods:{
                addField(tableIndex){
                    var self = this;
                    self.tables[tableIndex].inputs.push({
                        category:'',
                        type:'',
                        fieldName:''
                    })
                    document.getElementById('addField').blur();
                },
                
                addTable(){
                    
                    var self = this;                    
                    
                    self.tables.push({
                            tableName:'',
                            foreignTableRltn:true,
                            foreignTable:'',
                            foreignTableColumn:'',
                            foreignTableValue:'',
                            primaryKey:'',
                            inputs:[{
                                category:'',
                                type:'',
                                fieldName:'',
                                
                            }],
                            columns:[],
                            results:[],
                            rows:''
                    })
                      
                },
                deleteTable(index){
                     var self= this;
                     self.tables.splice(index,1)
                },
                
                deleteField(tableIndex,index){
                    var self= this;
                    self.tables[tableIndex].inputs.splice(index,1)
                    document.getElementById('deleteField').blur();
                },
                
                generateData(tableIndex)
                {
                    var self = this;
                    var tempData = new Array();
                    
                    
                    for(var i=0; i < self.tables[tableIndex].rows ;i++)
                    {
                        var tempRow = new Object();
                        self.tables[tableIndex].inputs.forEach(generate);
                            function generate(value){
//                                console.log(value.one)
//                                console.log(value.two)
//                                console.log(value.three)                                         
                                 var y = new self.$faker()[value.category][value.type]
                                    
                                  tempRow[value.fieldName] = y()
                              }
                              if(self.tables[tableIndex].foreignTableValue != "")
                                    {
                                        tempRow[self.tables[tableIndex].foreignTableColumn] = self.tables[tableIndex].foreignTableValue
                                    }
                        tempData.push(tempRow);                        
                    }
//                    console.log(tempData)
                    self.tables[tableIndex].results = tempData;
                    self.tempResult = tempData;
                    console.log("table data")
                   // console.log(self.tables[tableIndex])
                   console.log(self.tables[tableIndex].results)                  
                   self.colWidth = (100/self.tables[tableIndex].columns.length)
                    //console.log(self.colWidth)
                   document.getElementById('generate').blur(); 
                },
                
                assignTypes(tableIndex,index){
                    var self= this;  
                    var faker = self.$faker()
                   
//                    console.log(self.inputs[index])
//                    console.log(faker)
                    for(var value in faker) 
                    {
                        
                        if(self.tables[tableIndex].inputs[index].category == value)
                        {
                            if (faker.hasOwnProperty(value))
                            {
//                                console.log(faker[value])
                                self.types[index] = Object.keys(faker[value]);
                            }
                        }
                    }
                },
                
                assignColumn(tableIndex,fieldName){
//                    console.log(fieldName);
                    this.tables[tableIndex].columns.push(fieldName);
                },
                
                assignForeignColumns(foreignTable,tableIndex){
                    var self = this;
                   var table = self.tables.find(tableName);
                   var column= '';
                   
                   
                   function tableName(value){
                       if(foreignTable == value.tableName)
                       {

                           column = value.primaryKey;                          
                           self.tables[tableIndex].foreignTableColumn = value.primaryKey;
                           self.foreignColumns = value.results.map(findColumnValue);
                           
                            function findColumnValue(value1){
                                console.log(value1[column])
                               return value1[column]
                           }
                       }
                   }
                   
                   
                   
                  
                }
                
            },
            components:{
                Result
            }
    }
</script>
<style>
    input,button,select,label{
        margin:5px !important;
    }
    div{
        
        margin:5px;
    }
    .table-container{
        width:100%;
        margin: 5%;
    }
    .foreign-content{
        margin-top:10px;
        margin-bottom: 10px;
    }
</style>