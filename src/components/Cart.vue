<template>
    <div class="cart">
        <v-header title="购物车">
            <a href="javascript:;" class="iconfont icon-caidan1" slot="uu-right" @click="cartShow"></a>
            <a href="javascript:window.history.go(-1);" class="iconfont icon-fanhui" slot="left"></a>
        </v-header>
        <div class="cartList" v-if="show">
            <a href="/">
                <span class="iconfont icon-shitidianpu"></span>
                <span>首页</span>
            </a>
            <a href="">
                <span class="iconfont icon-wode"></span>
                <span>会员中心</span>
            </a>
            <a href="">
                <span class="iconfont icon-caidan1"></span>
                <span>我的订单</span>
            </a>
            <a href="">
                <span class="iconfont icon-xiaoxi"></span>
                <span>在线咨询</span>
            </a>
        </div>
        <div class="cartTishi">
            登录后可同步电脑与手机购物车中的商品
            <a href="">登录</a>
        </div>
        <div class="cartShop">
            <span class="iconfont icon-shopcar"></span>  
            <span>您的购物车尚未添加商品</span> 
            <span>去<a class="fc-link" href="http://www.loho88.com/">Loho88眼镜生活</a>购买商品！</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "cart",
    data() {
        return {
            show: false
        }
    },
    methods: {
        cartShow() {
            this.show = !this.show
        }
    }
}
</script>
<style  lang="scss">
.cart {
    width: 100%;
    height: 100%;
        background: #f5f5f5;
    .header {
        .icon-fanhui {
            float: left;
            margin-left: 0.2rem;
            font-size: 0.25rem;
        }
        .uu {
            li {
                a {
                    font-size: 0.25rem;
                }
            }
        }
    }
    .cartList {
        margin-top: 0.6rem;
        width: 100%;
        height: 0.5rem;
        a {
            float: left;
            width: 25%;
            height: 100%;
            background: white;
            span {
                display: inline-block;
                width: 100%;
                height: 0.25rem;
                line-height: 0.25rem;
                text-align: center;
                font-size: 0.15rem;
                color: #333;
            }
            .iconfont {
                font-size: 0.18rem;
                line-height: 0.35rem;
            }
        }
    }
    .cartTishi {
        width: 100%;
        height: 0.4rem;
        color: #666;
        font-size: 0.13rem;
        vertical-align: center;
        text-align: center;
        background: #f9f9f9;
        line-height: 0.4rem;
        a{
            background: red;
            display:inline-block;
            width:0.35rem;
            height:0.16rem;
            color: white;
            text-align: center;
            line-height: 0.16rem;
            border-radius: 0.03rem;
        }
    }
    .header ~.cartTishi{
        margin-top: 0.6rem;
    }
    .cartList ~.cartTishi{
        margin-top: 0;
    }
    .cartShop{
        width:3.55rem;
        height: 1.44rem;
        background: white;
        margin: 0.2rem 0.1rem;
        border-radius: 0.1rem;

        span{
            display: inline-block;
            width:100%;
            font-size: 0.14rem;
            text-align: center;
            a{
                text-decoration: underline;
            }
        }
        .iconfont{
            font-size: 0.5rem;
            line-height: 0.8rem;
        }
    }
}
</style>
