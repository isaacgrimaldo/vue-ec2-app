<script setup lang="ts" >
/**Store */
import { useStore } from '../../store'
/**Components */
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import {ref} from 'vue';
const newName = ref<string>('')
const store =  useStore()

const handleChangeName = () => {
    if(newName){
        store.setName(newName.value)
    }
}
</script>

<template>
    <div class="container">
        
      <p class="name"> name user :  {{ store.name }}</p>
        
      
      <div class="button-container">
        <InputText
            v-model="newName"
        /> 
 
        <Button @click="handleChangeName" type="submit">
            save name
        </Button>
      </div>

     
    </div>
</template>

<style scoped lang="css">
  .container {
    max-width:'80%' ;
    min-width: '50%' ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .button-container {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     gap:20px
  }

  .name {
    padding: 10px;
    margin: 20px;
  }
</style>