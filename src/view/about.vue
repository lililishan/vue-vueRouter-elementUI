<template>
    <div class='about'>
        <AboutVue msg='About Vue is 渐进性框架'></AboutVue>
    </div>
</template>
<script>
import AboutVue from "@/components/AboutVue.vue"
export default {
    name: 'about',
    components: {
        AboutVue
    }
}
</script>
