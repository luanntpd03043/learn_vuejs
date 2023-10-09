<template>
    <div class="comp-tabs">
        <div class="tabs-title">
            <span>{{ title }}</span>
            <i class="fa-solid fa-check"></i>
        </div>
        <div class="tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'comp-tabs',
        props: {
            title: String
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="css" scoped>
    .tabs-title{
        border: 2px solid #000;
        padding: 15px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tabs-content{
        border: 2px solid yellow;
        margin-top: 5px;
        padding: 5px;
    }
    .tabs-header{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        column-gap: 10px;
    }

    .tabs-header li{
        padding: 10px 30px;
        border: 1px solid #000;
        transition: background-color .3s ease-in-out;
        cursor: pointer;
    }

    .tabs-header li.active,
    .tabs-header li:hover{
        background-color: #ccc;
    }

    .tab-content{
        border: 2px solid green;
        padding: 5px;
        text-align: left;
        margin-top: 10px;
    }
</style>