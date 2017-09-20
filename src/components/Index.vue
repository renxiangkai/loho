<template>
    <div class="index">
        <!-- <div class="header">

                <div class="header-dingwei">
                    北京
                    <span class="iconfont icon-xiangxia"></span>
                </div>
                <div class="logo">loho</div>
                <div class="header-right">
                    <span class="iconfont icon-shopcar"></span>
                    <span class="iconfont icon-wode"></span>
                </div>
            </div> -->
        <v-header title="首页">
            <div class="header-dingwei" slot='left'>
                <router-link to="/position">
                    北京
                    <span class="iconfont icon-xiangxia"></span>
                </router-link>

            </div>
            <a href="#/cart" class="iconfont icon-shopcar" slot="uu-left"></a>
            <a href="" class="iconfont icon-wode" slot="uu-right"></a>

        </v-header>
        <div class="content">
            <div class="content-swiper">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(ele,index) in swiperList" :key="index">
                        <router-link to="javascript:;"><img :src="ele.pic" alt=""></router-link>

                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="header-nav">
                <ul>
                    <li v-for="(ele,index) in headerNav" :key="index">
                        <img :src="ele.pic" alt="">
                        <p v-html="ele.tag"></p>
                    </li>
                </ul>
            </div>
            <div class="content-ban">
                <img :src="indexData.ad[0].pic" alt="">
            </div>
            <div class="content-popular clr">
                <div class="list-li-pop">
                    <h3>
                        <span class="list-title-pre"></span>
                        <span class="list-title">{{popular.title.word}}</span>
                        <a href="">
                            {{popular.more.word}}

                        </a>
                    </h3>
                    <div class="list-img">
                        <img :src="popular.img.pic" alt="">
                    </div>
                    <ul class="list-ul" clr>
                        <li v-for="(ele,index) in popular.show">
                            <router-link :to='"/detail/"+ele.gid'>
                                <p v-html="ele.tag"></p>
                                <p v-html="ele.tag_en"></p>
                                <img :src="ele.pic" alt="">
                            </router-link>
                            
                        </li>

                    </ul>
                </div>
            </div>
            <ul class="list">
                <li class="list-li" v-for="(ele,index) in listData" :key="index">
                    <h3>
                        <span class="list-title-pre"></span>
                        <span class="list-title">{{ele.title.word}}</span>
                        <a href="">
                            {{ele.more.word}}

                        </a>
                    </h3>
                    <div class="list-img">
                        <img :src="ele.img.pic" alt="">
                    </div>
                    <ul class="list-ul">
                        <li v-for="(ele,index) in ele.show">

                        <router-link :to='"/detail/"+ele.gid'>
                            <p v-html="ele.tag"></p>
                            <p v-html="ele.tag_en"></p>
                            <img :src="ele.pic" alt="">
                        </router-link>

                        </li>

                    </ul>
                </li>

            </ul>
            <div class="content-like" @click="flag=!flag">
                <h2>你可能喜欢
                    <span class="iconfont icon-xiangxia"></span>
                </h2>
            </div>
            <ul class="content-more clr"  v-show="flag">
                <li v-for="(ele,index) in listMore">
                    <router-link :to='"/detail/"+ele.gid'>
                        <img :src="'http://image.loho88.com/'+ele.img" alt="">
                        <p>{{ele.title}}</p>
                        <p class="list-more-price">￥{{ele.price}}</p>
                    </router-link>
                </li>
                
            </ul>
            <div class="content-add" v-show="flag" @click="addMore">
                {{tishi}}
            </div>
            <div class="content-bottom">
                <div class="bottom-top">
                    <p>
                        <span class="iconfont icon-dingwei1"></span>
                        欢迎到体验店试戴
                    </p>
                    <div class="bottom-tell clr">
                        <span class="iconfont icon-dianhua"></span>
                        <div class="yyrx">预约热线：400-887-1920</div>
                        <div class="sjhw"> (服务时间 9:00~23:00)</div>

                    </div>
                </div>
                <div class="bottom-mid">
                    LOHO
                </div>
                <div class="bottom-bottom">
                    <p>©2005-2016 深圳市乐活电子商务有限公式版权所有，并保留所有权利。</p>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
        <div class="iconfont icon-huidingbu" @click="gobackTop" v-show="goback"></div>
    </div>
</template>
<script>
export default {
    name: "index",
    data() {
        return {
            msg: "loho",
            swiperList: [],
            headerNav: [],
            indexData: [],
            listData: [],
            popular: [],
            flag: false,
            page: 1,
            listMore: [],
            tishi: "加载更多数据",
            goback: false
        }
    },
    methods: {
        addMore() {
            this.page++;
            if (this.page >= 6) {
                this.tishi = "没有更多数据了"
                return;
            }
            this.$http.get("/loho88/search/?sort=o6&e=249&page=" + this.page).then(res => {

                this.listMore = this.listMore.concat(res.data.result.data)

            })
           
        },
        gobackTop() {
            console.log("111")
            this.goback = false;
            document.documentElement.scrollTop = 0;
            console.log(document.documentElement)
        }
    },
    mounted() {
        this.$http.get("/loho88/index").then(res => {
            this.swiperList = res.data.result.focus
            this.headerNav = res.data.result.cates
            this.indexData = res.data.result
            this.listData = res.data.result.classify
            this.popular = res.data.result.popular
        });
     

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
.index {
    width: 100%;
    background: #f2f2f2;
}

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

    .header-dingwei {
        height: 100%;
        width: 1.18rem;
        float: left;
        line-height: 0.6rem;
    }
    .uu {
        li {
            a {
                    font-size: 0.3rem;
                }
            }
        }
    } // .logo {
    //     width: 0.64rem;
    //     height: 100%;
    //     float: left;
    //     text-align: center;
    //     margin-left: 0.38rem;
    //     line-height: 0.45rem;
    // }
    // .header-right {
    //     width: 1.2rem;
    //     height: 100%;
    //     float: right;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     span {
    //         display: inline-block;
    //         width: 0.6rem;
    //         font-size: 0.3rem;
    //     }
    // }


.content {
    margin-top: 0.6rem;
    width: 100%;
    height: 100%;
    .content-swiper {
        width: 100%;
        height: 1.86rem;
        img {
            height: 100%;
            width: 100%;
        }
        .mint-swipe-indicators {
            bottom: -0.1rem;
            .mint-swipe-indicator {
                background: #070506;
                opacity: 1;
            }
            .mint-swipe-indicator.is-active {
                background: #db1917;
                opacity: 0.9;
            }
        }
    }
    .header-nav {
        width: 100%;
        height: 2.3rem;
        background: white;
        ul {
            height: 100%;
            width: 100%;
            li {
                width: 25%;
                float: left;
                font-size: 0.13rem;
                img {
                    width: 0.5rem;
                    height: o.5rem;
                    margin: 0.25rem 0.1rem 0;
                }
                p {
                    margin-top: 0.06rem;
                }
            }
        }
    }
    .content-ban {
        height: 1.7rem;
        img {
            width: 3.5rem;
            height: 1.5rem;
            margin: 0.1rem 0;
        }
    }
    .list {
        .list-li {
            box-sizing: border-box;
            margin-bottom: 0.1rem;
            background: white;
            h3 {
                height: 0.2rem;
                font-size: 0.14rem;
                padding: 0.1rem 0.2rem;
                .list-title-pre {
                    float: left;
                    font-size: 0.3rem;
                    margin-right: 0.04rem;
                    height: 0.14rem;
                    width: 0.03rem;
                    margin-top: 0.03rem;
                    background: red;
                }
                .list-title {
                    float: left;
                    font-weight: bolder;
                    color: black;
                }
                a {
                    float: right;
                    color: #bdbdbd;
                    span {
                        font-size: 0.12rem;
                    }
                }
            }
            .list-img {
                height: 1.5rem;
                width: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .list-ul {
                height: 2.55rem;
                width: 100%;
                li:nth-child(2) {
                    border-bottom: 0.01rem solid #E6E6E6;
                }
                li {
                    box-sizing: border-box;
                    width: 50%;
                    height: 50%;
                    float: left;
                    p {
                        font-size: 0.12rem;
                        color: #333;
                    }
                    p:nth-child(1) {
                        margin-top: 0.16rem;
                    }
                    p:nth-child(2) {
                        margin: 0.05rem 0;
                        line-height: 0.15rem;
                    }
                    font-size: 0;
                    img {
                        width: 1.64rem;
                        height: 0.65rem;
                    }
                }
                li:nth-child(1) {
                    width: 50%;
                    height: 100%;
                    border-right: 0.01rem solid #E6E6E6;
                    p:nth-child(1) {
                        margin-top: 0.44rem;
                    }
                    img {
                        margin-top: 0.3rem;
                    }
                }
            }
        }
        .list-li:nth-child(6) {
            .list-ul {
                height: 2.55rem;
                width: 100%;
                li:nth-child(1) {
                    border-bottom: 0.01rem solid #E6E6E6;
                    img {
                        margin: 0;
                    }
                }
                li:nth-child(2) {
                    border-bottom: 0.01rem solid #E6E6E6;
                }
                li:nth-child(3) {
                    border-right: 0.01rem solid #E6E6E6;
                }
                li {
                    box-sizing: border-box;
                    width: 50%;
                    height: 50%;
                    float: left;
                    p {
                        font-size: 0.12rem;
                    }
                    p:nth-child(1) {
                        margin-top: 0.16rem;
                    }
                    p:nth-child(2) {
                        margin: 0.05rem 0;
                        line-height: 0.15rem;
                    }
                    font-size: 0;
                    img {
                        width: 1.64rem;
                        height: 0.65rem;
                    }
                }
            }
        }
    }
    .content-popular {
        width: 100%;
        margin-bottom: 0.1rem;
        .list-li-pop {
            box-sizing: border-box;
            margin-bottom: 0.1rem;
            background: white;
            h3 {
                height: 0.2rem;
                font-size: 0.14rem;
                padding: 0.1rem 0.2rem;
                .list-title-pre {
                    float: left;
                    font-size: 0.3rem;
                    margin-right: 0.04rem;
                    height: 0.14rem;
                    width: 0.03rem;
                    margin-top: 0.03rem;
                    background: red;
                }
                .list-title {
                    float: left;
                    font-weight: bolder;
                    color: black;
                }
                a {
                    float: right;
                    color: #bdbdbd;
                    span {
                        font-size: 0.12rem;
                    }
                }
            }
            .list-img {
                height: 1rem;
                width: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .list-ul {
                height: 2.55rem;
                width: 100%;
                li {
                    background: white;
                    border-bottom: 0.01rem solid #E6E6E6;
                }
                li:nth-child(1) {
                    img {
                        margin: 0;
                    }
                }
                li:nth-child(2) {
                    border-bottom: 0.01rem solid #E6E6E6;
                }
                li:nth-last-child(1),
                li:nth-last-child(2) {
                    border-bottom: none;
                }
                li:nth-child(2n) {
                    border-left: 0.01rem solid #E6E6E6;
                }
                li {
                    box-sizing: border-box;
                    width: 50%;
                    height: 50%;
                    float: left;
                    p {
                        font-size: 0.12rem;
                        color:#333;
                    }
                    p:nth-child(1) {
                        margin-top: 0.16rem;
                    }
                    p:nth-child(2) {
                        margin: 0.05rem 0;
                        line-height: 0.15rem;
                    }
                    font-size: 0;
                    img {
                        width: 1.64rem;
                        height: 0.65rem;
                    }
                }
            }
        }
    }
    .content-like {
        width: 100%;
        height: 0.62rem;
        background: white;
        h2 {
            height: 100%;
            width: 100%;
            text-align: center;
            line-height: 0.62rem;
            font-size: 0.18rem;
            font-weight: 400;
        }
    }
    .content-add {
        width: 100%;
        height: 0.62rem;
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.62rem;
    }
    .content-more {
        width: 100%;
        li:nth-child(2n) {
            border-left: 0.01rem solid #e1e1e1;
        }
        li {
            box-sizing: border-box;
            width: 50%;
            float: left;
            background: white;
            border-bottom: 0.01rem solid #e1e1e1;

            img {
                max-width: 80%;
                margin: 0.4rem 0;
                height: auto;
                vertical-align: top;
            }
            p {
                height: 0.4rem;
                font-size: 0.14rem;
                color: #333;

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
            .list-more-price {
                line-height: 0.4rem;
                color: red;
                font-size: 0.16;
            }
        }
    }
    .content-bottom {
        width: 100%;
        height: 2.66rem;
        background: #1d1d1d;
        margin-bottom: 0.6rem;
        .bottom-top {
            width: 100%;
            height: 0.84rem;
            border-bottom: 0.02rem solid #000;
            p {
                width: 50%;
                float: left;
                font-size: 0.14rem;
                line-height: 0.84rem;
                color: white;
                .icon-dingwei1 {
                    font-size: 0.12rem;
                    color: red;
                }
            }
            div {
                width: 50%;
                height: 100%;
                float: left;
                position: relative;
                box-sizing: border-box;
                border-left: 0.01rem solid #000;
                span {
                    position: absolute;
                    left: 0.05rem;
                    top: 0.3rem;
                    font-size: 0.20rem;
                    color: red;
                }
                div {
                    border: none;
                    width: 90%;
                    height: 0.2rem;
                    font-size: 0.14rem;
                    color: white;
                    position: absolute;
                }
                .yyrx {
                    left: 0.2rem;
                    top: 0.2rem;
                }
                .sjhw {
                    left: 0.2rem;
                    top: 0.4rem;
                }
            }
        }
        .bottom-mid {
            width: 100%;
            color: white;
            text-align: center;
            height: 0.96rem;
            line-height: 0.96rem;
            font-size: 0.4rem;
            border-bottom: 0.02rem solid #000;
        }
        .bottom-bottom {
            height: 0.86rem;
            width: 100%;
            p {
                margin: 0.25rem 0 0 0.23rem;
                width: 3.27rem;
                height: 0.36rem;
                line-height: 0.14rem;
                font-size: 0.1rem;
                text-align: center;
            }
        }
    }
}
</style>
