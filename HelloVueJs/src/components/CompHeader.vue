<template>
    <header>
      <ul>
        <li v-for="user in listUser" v-bind:key="user.id">{{ user.email }}</li>
      </ul>
      <h1>
        {{ title }} <br>
        <button v-on:click="changeTitleHeader">Thay doi title tu CompHeader.vue</button>
    </h1>
    </header>
  </template>
  
  <script>
    export default {
      name: 'comp-header',
      props:{
        title: {
            type: String,
            default: 'Gia tri mac dinh'
        },
        listUser:{
          type: Array,
          default: []
        }
      },
      data(){
        return {}
      },
      methods:{
        changeTitleHeader(e){
            // truyền sự kiện thông báo đên comp cha để thay đổi title.
            console.log('trước khi kích hoạt sự kiên changeTitle trong CompHeader.vue');
            var data = {
                title: 'test -> data truyền thông qua biến event'
            }
            this.$emit('changeTitleEvent', data);
            console.log('sau khi kích hoạt sự kiên changeTitle trong CompHeader.vue');
        }
      }
    }
  </script>
  
  <style lang="css" scoped>
  
  </style>
  