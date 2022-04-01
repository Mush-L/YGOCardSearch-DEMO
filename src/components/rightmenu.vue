<template>
    <div v-if="show"
         class="menu_style" 
         :style="{top:y-120+'px',left:x+'px'}">
        <ul class="menu_reset">
            <!-- 分别传递事件给父元素调用 -->
            <!-- <li @click="()=>{$emit('open')}">打开</li>
            <li @click="()=>{$emit('update')}">编辑</li> -->
            <li @click="()=>{$emit('del')}">删除</li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'right_menu',
        props:{
            x:{
                type:[Number],
                default:0
            },
            y:{
                type:[Number],
                default:0
            },
            showMenu:{
                type:[Boolean],
                default:false
            }
        },
        data(){
            return {
                show:false,
            }
        },
        methods:{
            // 点击别处时隐藏目录，并传递一个关闭事件
            closeMenu(e){
                this.show = false;
                this.$emit("close",false)
            },
        },
        mounted(){
            // 监听body上的点击
            document.querySelector("body").addEventListener("click",this.closeMenu)
        },
        beforeDestroy(){
            // 移除监听
            document.querySelector("body").removeEventListener("click",this.closeMenu)
        },
        watch:{
            // 监听，保持显示状态与父元素一致
            showMenu(val){
                this.show = val;
            }
        },
    }
</script>
<style scoped>
    .menu_style{
        /* 位置属性 */
        position: fixed;
        /* top: 35%;
        left: 65%; */
        z-index: 10;
        width: 100px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 2px 2px 14px #d0d0d0;
    }
    .menu_reset{
        /* 删除列表默认设置 */
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .menu_reset li{
        text-indent: 25px;
        height: 38px;
        line-height: 38px;
        border-bottom: 1px dashed #f0f0f0;
        cursor: pointer;
    }
    .menu_reset li:hover{
        background: #E0EEFF;
    }
</style>