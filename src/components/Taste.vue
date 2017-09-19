<template>
    <div>
        <v-header title="查找体验店">
            <span class="iconfont icon-fanhui" slot="left"></span>
            <span class="iconfont icon-shopcar1" slot="uu-left"></span>
            <span class="iconfont icon-caidan1" slot="uu-right"></span>
        </v-header>
        <div class="content">
            <div class="top">
                <div class="left">
                    <a href="javascript:;">列表</a>
                </div>
                <div class="right">
                    <a href="javascript:;">地图</a>
                </div>
            </div>
            <div class="bottom">
                <div class="count">
                    <div class="left flt">
                        北京共17{{bj}}家体验店（全国<span>233{{zg}}</span>家）
                    </div>
                    <div class="right frt">
                        <a href="javascript:;">
                            北京
                            <b class="iconfont icon-left"></b>
                        </a>
                    </div>
                </div>
                <div class="list">
                    
                </div>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    name: "Content"
}
</script>
<style lang = "scss" scoped>
.header~ .content{
    padding-top:0.6rem;
}
.content {
    width: 100%;
    text-align: center;
    font-size:0.14rem;
    color:#444;
    .top {
        width: 100%;
        display: flex;
        height: 0.49rem;
        background: #fff;
        div{
            flex:1;
            width: 50%;
        }
        .left {
            a {
                :after{
                    border-right: 1px solid #ccc;
                }
                :before{
                    border-right: 2px solid #f00;                    
                }
            }
        }
        a {
            padding: 0.12rem 0.24rem;
            line-height: inherit;
            display: block;
        }
    }
    .bottom {
        .count{
            margin: 0.1rem 0;
            padding: 0.07rem 0.1rem;
            height: 0.25rem;
            line-height: 0.25rem;
            background: #fff;
            .left{
                width: 75%;
                text-align:left;
                span{
                    color:#e8343b;
                }
            }
            .right{
                width: 25%;
                text-align:right;
                b{
                    font-size:0.12rem;
                    line-height: 0.25rem;
                }
            }
        }
    }
}
</style>