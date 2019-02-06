<template>
    <div class="col-md-2 col-sm-12 p-0">
      <ul class="active">
        <li class="nav-list-category ">GENERAL</li>
        <li class="nav-list-item current-item"><a href="#"><i class="fas fa-user-circle fasicons"></i>Dashboard</a></li>
        <li class="nav-list-item "><a href="#"><i class="fas fa-paint-brush fasicons"></i>Layouts</a></li>
        <li class="nav-list-item "><a href="#"><i class="fas fa-leaf fasicons"></i>Pages</a></li>
        <li class="nav-list-category">ELEMENTS</li>
        <li class="nav-list-item "><a href="#"><i class="fas fa-recycle fasicons"></i>Важное</a></li>
        <li class="nav-list-item "><a href="#"><i class="fas fa-home fasicons"></i>Результаты</a></li>
        <li class="nav-list-item "><a href="#"><i class="fas fa-user-circle fasicons"></i>О нас</a></li>
        <li class="nav-list-item "><a href="#"><i class="fas fa-address-book fasicons"></i>Контакты</a></li>
      </ul>
    </div>
</template>


<script>
    export default {
        name: 'acc-leftNav',
    }
</script>


<style lang="sass">

    ul
        padding: 20px 0 0 0
        /*text-align: center*/

        a
            text-decoration: none
            color: black
            display: block
            padding: 3% 5% 3% 10%
        a:hover
            color: black
            text-decoration: none
        .nav-list-category
            padding: 3% 5% 3% 10%
            color: #757575
        .fasicons
            margin-right: 7px
            color: #757575


        .nav-list-item
            list-style-type: none
            width: 100%
            color: #424242
        .nav-list-item:hover
            background: #F1F4F5



</style>
