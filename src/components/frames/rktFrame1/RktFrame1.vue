<template>
   <template
      v-if="!targetSiteNode.hasOwnProperty('renderFrame') || targetSiteNode.renderFrame">
      <rkt-frame1-header></rkt-frame1-header>
      <main>
         <mc-render-node />
      </main>
      
      <!-- This is required to remove focus away
      after clicking on navigation context menu -->
      <a 
         hef="#" 
         ref="navHideFocus"
         tabindex="0"
      />
   </template>
   <!-- Rendering without frame -->
   <mc-render-node v-else />
</template>

<script>
export default {
   inheritAttrs: false
}
</script>

<script setup>
import { 
   provide, 
   shallowRef, 
} from 'vue'
import { 
   McRenderNode, 
   useNavigationStore, 
   NAV_HIDE_FOCUS_REF
} from '@mechcloud/piston-ui-sdk'
import RktFrame1Header from './fragments/RktFrame1Header.vue'

const navigationStore = useNavigationStore(window.pinia)
const targetSiteNode = navigationStore.getSiteNode()

const navHideFocus = shallowRef(null);

provide(NAV_HIDE_FOCUS_REF, navHideFocus)
</script>

<style>
   /* @import '@/css/form-controls.css' */
</style>

<style scoped>
main {
   margin-top: 3rem;
   padding: 1rem;
}
</style>

