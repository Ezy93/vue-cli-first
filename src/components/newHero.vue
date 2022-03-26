<template>
    <div class="container-fluid px-0"> 
        <img src="../assets/img/images.jpg" alt="death stranding image" class="w-100 h-100">
    </div>
</template>

<script>
export default {
    name: 'newHero',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    div.container-fluid{
        height: 91vh;
    }

    img{
        object-fit: cover;
    }
</style>