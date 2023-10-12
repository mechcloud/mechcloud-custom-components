<template>
   <header class="header">
      <nav>
         <rkt-frame2-top-navigation
            class="mc-flex mc-flex-v-center"
            style="gap: 0.5rem;"
            uriPrefix=""
            :nodes="$mcContext.siteMap"
         />
      </nav>
      <p>{{ $mcContext.user.email }}</p> 
   </header>
</template>

<script>
export default {
   // inheritAttrs: false,
}
</script>

<script setup>
import RktFrame2TopNavigation from "./RktFrame2TopNavigation.vue"
</script>

<style scoped>
</style>

