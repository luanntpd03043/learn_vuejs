<template>
    <div class="demo-ref">
        <h1>DemoRef</h1>
        <button 
        v-on:click="handleClickInputFile"
        class="avatar">Thay doi avatar</button>
        <input 
        ref="fileInputAvatar"
        type="file" style="display: none;">
    </div>
</template>

<script>
    export default {
        name: 'demo-ref',
        data(){
            return{

            }
        },
        methods:{
            handleClickInputFile(e){
                this.$refs.fileInputAvatar.click();
            }
        }
    }
</script>

<style lang="css" scoped>
    .demo-ref{
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;
    }

    .avatar{
        color: #fff;
        border: 1px solid #333;
        padding: 12px 15px;
        background-color: #333;
        transition: all .3s ease-in-out;
        cursor: pointer;
    }

    .avatar:hover{
        color: #333;
        background-color: #fff;
    }
</style>