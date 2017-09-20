<template>
    <div class="detail">
        <v-header title="详情页">
            <a href="javascript:;" class="iconfont icon-caidan1" slot="uu-right"></a>
            <a href="javascript:window.history.go(-1);" class="iconfont icon-fanhui" slot="left"></a>
        </v-header>
        <div class="content">
            <div class="content-swiper">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(ele,index) in swiperList.pics" :key="index">
                        <router-link to="javascript:;"><img :src="'http://image.loho88.com/'+ele" alt=""></router-link>
                    </mt-swipe-item>
                </mt-swipe>
                <div class="jianbian"></div>
            </div>
            <div class="shopinfo">
                <p>{{swiperList.goodsName}}</p>
                <div>

                    <span class="iconfont icon-iconfontmall02"></span>
                    <span>分享</span>
                </div>
            </div>
            <div class="shopprice">
                <span>￥{{swiperList.shopPrice}}</span>
                <div>快递：免运费</div>
                <p>{{swiperList.salesNum}}人已买</p>
            </div>
            <ul class="shopstore">
                <li v-for="(ele,index) in swiperList.promiseTag">
                    {{ele}}
                </li>
            </ul>
            <div class="shopcolor">
                <p>颜色选择</p>
                <ul class="clr">
                    <li v-for="(ele,index) in dataList.models">
                        {{ele.color}}
                    </li>
                </ul>
            </div>
            <ul class="shopmessage">
                <li>
                    <a href="">图文详情</a>
                </li>
                <li>
                    <a href="" class="lia">商品评价</a>
                </li>
                <li>
                    <a href="">商品参数</a>
                </li>
            </ul>
            <ul class="tuwen">
                <li v-for="(ele,index) in array">
                    <img v-lazy="'http://image.loho88.com/'+ele" alt="">
                </li>
            </ul>
        </div>
        <div class="footer">
            <a href="">
                <span class="iconfont icon-xiaoxi1"></span>
                <span>客服</span>
            </a>
            <a href="">
                <span class="iconfont icon-shoucang"></span>
                <span>收藏</span>
            </a>
            <a href=""> 加入购物车</a>
            <a href="">预约附近验光点</a>
        </div>
        <div class="iconfont icon-huidingbu" @click="gobackTop" v-show="goback"></div>
    </div>
</template>

<script>
export default {
    name: 'detail',
    data() {
        return {
            swiperList: [],
            dataList: [],
            goback: false,
            array:[]
        }
    },
    methods: {
        gobackTop() {
            this.goback = false;
            document.documentElement.scrollTop = 0;
        }
    },
    mounted() {
        var that=this
        const gid = this.$route.params.gid
        this.$http.get("/loho88/goods/"+gid).then(res => {
            // console.log(res.data.result)
            that.swiperList = res.data.result.info
            that.dataList = res.data.result
            // console.log(res.data.result.txtcontent)
            // console.log(res.data.result.txtcontent.split("</p>"))
            var arr=res.data.result.txtcontent.split('</p>')       
            arr.map(function(ele,index){
                var brr=ele.split('="')[2].split('" ')[0]
                that.array.push(brr)
            })
            console.log(that.array)
            
        })

    },
    updated() {
        var that = this;
        document.body.onscroll = function() {
            let scroll = document.documentElement.scrollTop
            if (scroll > 200) {
                that.goback = true
            } else {
                that.goback = false
            }
        }
    }
}   
</script>

<style lang="scss" scoped>
.detail {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    .icon-huidingbu {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: white;
    text-align: center;
    line-height: 0.4rem;
    position: fixed;
    right: 0.2rem;
    bottom: 0.7rem;
    font-size: 0.25rem;
    }
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
    .content {
        width: 100%;
        margin-top: 0.6rem;
        .content-swiper {
            width: 100%;
            height: 3.15rem;
            background: white;
            position: relative;
            img {
                margin-top: 0.6rem;
                width: 100%;
                height: 1.5rem;
            }
            .mint-swipe-indicators {

                .mint-swipe-indicator {
                    background: #000;
                    opacity: 1;
                }
                .mint-swipe-indicator.is-active {
                    background: #db1917;
                    opacity: 0.9;
                }
            }


            .jianbian {

                background: -webkit-linear-gradient(bottom, #c8c8c8, rgba(255, 255, 255, 0));
                height: 0.81rem;
                width: 100%;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
        .shopinfo {
            width: 100%;
            height: 0.68rem;
            background: white;
            p {
                width: 85%;
                height: 0.4rem;
                margin-top: 0.14rem;
                margin-left: 0.08rem;
                float: left;
                border-right: 0.01rem solid #666;
                line-height: 0.2rem;
                text-align: left;
                font-size: 0.18rem;
                text-overflow: ellipsis;
                display: -webkit-box;
                /** 对象作为伸缩盒子模型显示 **/
                -webkit-box-orient: vertical;
                /** 设置或检索伸缩盒对象的子元素的排列方式 **/
                -webkit-line-clamp: 2;
                /** 显示的行数 **/
                overflow: hidden;
                /** 隐藏超出的内容 **/
            }
            div {
                float: left;
                width: 0.4rem;
                height: 0.48rem;
                margin-top: 0.05rem;
                span {
                    display: inline-block;
                    wodth: 100%;
                    font-size: 0.14rem;
                }
                .iconfont {
                    font-size: 0.3rem;
                }
            }
        }
        .shopprice {
            height: 0.48rem;
            width: 100%;
            margin-top: 0.05rem;
            background: white;
            span {
                display: block;
                height: 100%;
                width: 15%;
                text-align: center;
                line-height: 0.48rem;
                font-size: 0.18rem;
                float: left;
                color: red;
            }
            p {
                height: 100%;
                width: 20%;
                text-align: center;
                line-height: 0.48rem;
                font-size: 0.14rem;
                float: left;
            }
            div {
                height: 100%;
                width: 65%;
                text-align: center;
                line-height: 0.48rem;
                font-size: 0.14rem;
                float: left;
            }
        }
        .shopstore {
            width: 100%;
            height: 0.3rem;
            li {
                float: left;
                width: 25%;
                height: 0.3rem;
                text-align: center;
                line-height: 0.3rem;
                font-size: 0.12rem;
            }
        }
        .shopcolor {
            width: 100%;
            background: white;
            p {
                width: 100%;
                height: 0.4rem;
                margin: 0.1rem 0.1rem;
                font-size: 0.14rem;
                line-height: 0.4rem;
                text-align: left;
                background: white;
            }
            ul {
                width: 100%;
                margin: 0.1rem 0.1rem;

                li {
                    height: 0.25rem;
                    float: left;
                    line-height: 0.25rem;
                    font-size: 0.14rem;
                    margin: 0.05rem 0.05rem;
                    border-radius: 0.03rem;
                    background: #999;
                }
            }
        }
        .shopmessage{
            width:100%;
            height:0.5rem;
            margin-top: 0.15rem;
            background: white;
            li{
                height: 100%;
                width:33.33%;
                float: left;
                a{
                    display: inline-block;
                    width:100%;
                    height:0.3rem;
                    line-height: 0.3rem;
                    margin-top: 0.1rem;
                    font-size: 0.16rem;
                    color:#000;
                    box-sizing: border-box;
                }
                .lia{
                    border-right: 0.01rem solid #999;
                    border-left: 0.01rem solid #999;
                }
            }
        }
        .tuwen{
            width:100%;
            li{
                width:100%;
                img{
                    width:100%; 
                }
            }
        }
    }
    .footer{
        height: 0.6rem;
        width:100%;
        position: fixed;
        left:0;
        bottom:0;
        a{
            float: left;
            height:100%;
            color:  #333;
            span{
                display: inline-block;
                width:100%;
                height:50%;
                line-height: 0.2rem;
            }
            .iconfont{
                line-height: 0.4rem;
                font-size: 0.18rem;
            }
        }
        a:nth-child(1),a:nth-child(2){
            width:15%;
            font-size: 0.14rem;
            background: white;
        }
        a:nth-child(3){
            width:35%;
            font-size: 0.16rem;
            line-height: 0.6rem;
            color: white;
            background: #FF9500;
        }
        a:nth-child(4){
            width:35%;
            font-size: 0.16rem;
            line-height: 0.6rem;
            color: white;
            background: #e8343b;
        }
    }
}
</style>

