<template>
    <div class="positionIndex">
        <v-header title="选择城市">
            <a href="javascript:window.history.go(-1);" class="iconfont icon-fanhui" slot="left"></a>
            <a href="#/cart" class="iconfont icon-shopcar" slot="uu-left"></a>
            <a href="" class="iconfont icon-caidan1" slot="uu-right"></a>
        </v-header>
        <div class="content">
            <div class="now_city">
                <p>
                    <span class="iconfont icon-dingwei"></span>
                    <span>当前城市：</span>
                    <span>北京</span>
                    <span class="iconfont icon-left"></span>
                </p>
            </div>
            <div class="hot_city">
                <h3>热门城市</h3>
                <ul>
                    <li v-for="(ele,index) in listData.hot">
                        <router-link to="javascript:;">
                            {{ele.cityName}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="all_city clr">
                <h3>全部城市</h3>
                <ul class="clr">
                    <li v-for="(ele,index) in listData.letters" :key="index" @click="gohere(index)">
                        {{ele}}
                    </li>
                </ul>
            </div>
            <ul class="info_city">
                <li class="info_city_li clr" v-for="(ele,key,index) in listData.list" ref='list'>
                    <h3>{{key}}</h3>
                    <ul class="clr">
                        <li v-for="(el,index) in ele">{{el.cityName}}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'position',
    data() {
        return {
            listData: [],
            scroll: -440,
            index: 0
        }
    },
    methods: {
        gohere(index) {
            this.index = index
            let top11 = this.$refs["list"][this.index].offsetTop
            document.documentElement.scrollTop = top11 - 65
        }
    },
    mounted() {
        this.$http.get("/loho88/store/clist").then(res => {
            // console.log(res.data.result.list)
            this.listData = res.data.result
        })

    },
    updated() {

    }
}

</script>
<style scoped lang="scss" scoped>
.positionIndex {
    width: 100%;
    height: 100%;
    background: #f3f3f3;

    .header {
      
        background: white;
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
        height: 100%;
        background: #f2f2f2;
        padding-top: 0.6rem;
        .now_city {
            width: 100%;
            height: 0.48rem;
            background: white;
            margin-top: 0.1rem;
            p {
                font-size: 0.16rem;
                width: 3.53rem;
                height: 0.28rem;
                padding: 0.1rem;
                span {
                    float: left;
                    margin-left: 0.04rem;
                }
                span:nth-child(1) {
                    margin-top: 0.06rem;
                }
                span:nth-child(2) {
                    margin-top: 0.03rem;
                }
                span:nth-child(4) {
                    float: right;
                    margin-top: 0.06rem;
                }
                span:nth-child(3) {
                    font-size: 0.2rem;
                }
            }
        }
        .hot_city {
            margin-top: 0.1rem;
            height: 0.9rem;
            color: #333;
            h3 {
                width: 100%;
                height: 0.4rem;
                line-height: 0.4rem;
                font-size: 0.16rem;
                text-indent: 1em;
                text-align: left;
                background: white;
                margin-bottom: 0.02rem;
                color: #333;
            }
            ul {
                height: 0.5rem;
                width: 100%;
                display: flex;
                background: white;
                li {
                    flex: 1;
                    text-align: center;
                    font-size: 0.14rem;
                    line-height: 0.5rem;
                    a {
                        color: #333;
                    }
                }
            }
        }
        .all_city {
            margin-top: 0.1rem;
            width: 100%;
            color: #333;
            h3 {
                width: 100%;
                height: 0.4rem;
                line-height: 0.4rem;
                font-size: 0.16rem;
                text-indent: 1em;
                text-align: left;
                background: white;
                margin-bottom: 0.02rem;
                color: #333;
            }
            ul {
                width: 100%;
                background: white;
                li {
                    width: 33.33%;
                    float: left;
                    height: 0.5rem;
                    text-align: center;
                    font-size: 0.16rem;
                    line-height: 0.5rem;
                    box-sizing: border-box;
                    border-bottom: 0.01rem solid #f2f2f2;
                    a {
                        color: #333;
                    }
                }
                li:nth-child(2n) {
                    border-left: 0.01rem solid #f2f2f2;
                    border-right: 0.01rem solid #f2f2f2;
                }
            }
        }
        .info_city {
            width: 100%;
            margin-top: 0.1rem;
            color: #333;

            .info_city_li {
                width: 100%;
                h3 {
                    width: 100%;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    font-size: 0.16rem;
                    text-indent: 1em;
                    text-align: left;
                    color: #333;
                }
                ul {
                    width: 100%;
                    background: white;
                    li {
                        height: 0.5rem;
                        width: 33.33%;
                        font-size: 0.14rem;
                        float: left;
                        text-align: center;
                        line-height: 0.5rem;
                        color: #333;
                        box-sizing: border-box;
                        border-bottom: 0.01rem solid #f2f2f2;
                        border-right: 0.01rem solid #f2f2f2;
                    }
                    li:nth-child(3n) {
                        border-right: none;
                    }
                }
            }
        }
    }
}
</style>
