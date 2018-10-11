<template>
    <div class="navbar">
        <ul class="navbar-list" @click="close_label">
            <li><div style="width:100%">首&nbsp;&nbsp;&nbsp;&nbsp;页</div></li>
        </ul>
    </div>
</template>

<script>
    export default{
        methods:{
            close_label(ev){
                var ev = ev||window.event;
                var target = ev.target || ev.srcElement;
                var val = sessionStorage.getItem('key');
                val = JSON.parse(val);
                if(target.nodeName.toLowerCase() == 'i'){
                    target.parentNode.remove();

                }
                console.log(target.parentNode.childNodes[0].innerHTML)
                $('.navbar-list li').css({
                    Color: "blue"
                })
            }
        }
    }
</script>

<style>

</style>
