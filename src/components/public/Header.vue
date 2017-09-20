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
        z-index: 99;
        line-height: 0.6rem;
        display: flex;
        .left{
            width:1.2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            font-size:  0.2rem;
            text-align: center; 
            color: #5a5a5a;
        }
        .center{
            text-align: center;
            line-height: 0.6rem;
            flex: 1;
            color: #5a5a5a;
            font-size:  0.2rem;
            color: black;
        }
        .right{
            width: 1.2rem;
            li{
                line-height: 0.6rem;
                height:0.6rem;
                text-align: center;
                font-size: 0.25rem;
                width: 0.6rem;
                float: left;
                color: #5a5a5a;
            }
        }
    }
</style>

