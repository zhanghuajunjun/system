<template>
  <div></div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {

   },
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
     getData(){
       axios.get('http://49.233.66.125:3030/menu').then(res => {
         console.log(res);
       }).then(err => {})
     }
   },
   mounted() {
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
</style>
