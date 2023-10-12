<template>
   <div class="layout-root">
      <div class="navigation">
         <rkt-left-navigation 
            :uriPrefix="uriPrefix"
            :node="renderNode" 
         />
      </div>
      <div class="content">
         <mc-render-node />
      </div>
   </div>
</template>

<script>
export default {
   inheritAttrs: false,
}
</script>

<script setup>
import { 
   inject,
   provide,
   ref,
   onBeforeMount
} from 'vue'
import { 
   McLogUtils
} from "@mechcloud/shared-js"
import { 
   McRenderNode, 
   useNavigationStore,
   useGlobalCmpntUtils
} from '@mechcloud/piston-ui-sdk'

import RktLeftNavigation from './fragments/RktLeftNavigation.vue'

const { cmpntName } = useGlobalCmpntUtils()
McLogUtils.log(`${cmpntName} : Entering setup() ..`)

const navigationStore = useNavigationStore(window.pinia)

const renderNode = inject('render-node')
const uriPrefix = inject('uriPrefix')
McLogUtils.log(`${cmpntName} : Uri prefix : ${uriPrefix}`)

const expandedItemIds = ref([])
provide('expandedItemIds', expandedItemIds)

onBeforeMount(() => {
   McLogUtils.log(`${cmpntName} : Entering onBeforeMount() ..`)

   navigationStore.navTrail.forEach(node => {
      expandedItemIds.value.push(node.id)
   })

   McLogUtils.log(`${cmpntName} : Leaving onBeforeMount().`)
})

McLogUtils.log(`${cmpntName} : Leaving setup().`)
</script>

<style scoped>
.layout-root {
   display: grid;
   grid-template-columns: 15rem 1fr;
   gap: 0.5rem;

   & > .navigation {
      background-color: aqua;
   }

   & > .content {
      padding: 1rem;
      border: 1px dashed black;
      min-height: 20rem;
   }
}
</style>

