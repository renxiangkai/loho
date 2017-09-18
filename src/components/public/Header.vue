<template>
    <div class = "header">
        <!--左边功能键-->
        <div class = "left">
            <slot name = "left"></slot>
        </div>  
        <!--中间传参-->
        <div class = "center">{{title}}</div>
        <!--右边的iconfont-->
        <div class = "right">
            <ul class = "uu">
                <li>
                    <slot name = "uu-left"></slot>
                </li>
                <li>
                    <slot name = "uu-right"></slot>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:"header",
        props:{
            title:{
                type:String,
                default:"头部"
            }
        }
    }
</script>

<style lang  = "scss" scoped>
    .header{
        height: 0.6rem;
        position: fixed;
        top: 0;
        left: 0;
        background: #ffffff;
        width: 100%;
        .center{
            
        }
    }
</style>

