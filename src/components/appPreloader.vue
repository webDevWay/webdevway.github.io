<template lang="pug">
  div.container
    div.item-1
      div
    div.item-2
      div
    div.item-3
      div
    div.item-4
      div
    div.item-5
      div
    div.item-6
      div
    div.item-7
      div
    div.item-8
      div
    div.item-9
      div
</template>

<script>
  export default {
    name: "Preloader"
  }
</script>

<style lang="sass">
  $color-1: #E8DDB5
  $color-2: #E8DDB5
  $color-3: #E8DDB5
  $color-4: #B2C9AB
  $color-5: #B2C9AB
  $color-6: #B2C9AB
  $color-7: #92B6B1
  $color-8: #92B6B1
  $color-9: #92B6B1
  $color: $color-1, $color-2, $color-3, $color-4, $color-5, $color-6, $color-7, $color-8, $color-9
  
  @mixin anim($i)
    $deg: ($i + 1) * 125
    
    @keyframes right-#{$i}
      10%
        transform: rotate(#{$deg}deg) translate(0, 0px)
      50%, 65%
        transform: rotate(#{$deg}deg) translateX(-100px)
      100%
        transform: rotate(#{$deg}deg) translate(0, 0px)
  .container
    display: flex
    justify-content: center
    align-items: center
    height: 50vh
    margin-top: 20px
    overflow: hidden
  
  @for $i from 1 through 9
    $deg: $i * 36
    .item-#{$i}
      @include anim($i)
      width: 100px
      height: 100px
      position: absolute
      animation: right-#{$i} 2s infinite cubic-bezier(0, 0, 0.49, 1.02)
      animation-delay: 100ms * $i
      display: flex
      justify-content: center
      align-items: center
      > *
        width: 20px
        height: 20px
        background: #F583A1
        border-radius: 50%
        border: 1px solid red
        background-color: nth($color, $i)
</style>
