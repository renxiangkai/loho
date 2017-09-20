<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./css/base.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  overflow: hidden;
}
*{margin:0;padding:0}
 html,body{
      width:100%;
      height:100%;
      box-sizing: border-box;
    }
li{list-style: none}

a{text-decoration: none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
.clr:after {
    content:"";
    display:table;
    clear:both;
    overflow:hidden;
}
.clr {
    zoom:1; /* for ie6 & ie7 */

}

</style>
