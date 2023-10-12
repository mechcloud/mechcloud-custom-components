<template>
   <ul 
      mc-role="left-navigation"
      v-if="node.children"
   >
      <li 
         v-for="siteNode in node.children"
         :class="[ expandedItemIds.includes(siteNode.id) ? 'pseudo-expanded': '', (siteNode.id === siteNodeRender.id) ? 'selected': '']"
      >
         <div 
            class="mc-flex" 
            style="gap: 0.5rem;"
         >
            <mc-navigation-link
               v-if="siteNode.type.id === NODE_TYPES.Page"
               style="flex: 1 1 auto;"
               :title="siteNode.attrs.title"
               :uriPrefix="uriPrefix"
               :mapping="siteNode.attrs.mapping"
            />
            <span 
               v-else
               style="flex: 1 1 auto; cursor: default;"
            >
               {{ siteNode.attrs.title }}
            </span>
            <!-- <span>{{ siteNode.id }} : {{ siteNodeRender.id }}</span> -->
            <mc-icon-link 
               v-if="siteNode.children"
               icon="angle-right" 
               @click.prevent="addRemoveItem(siteNode.id)"
            />
         </div>
         <component
            class="pseudo-sub-menu"
            is="rkt-left-navigation" 
            :uriPrefix="uriPrefix + '/' + siteNode.attrs.mapping"
            :node="siteNode"
         />
      </li>
   </ul>
</template>

<script>
export default {
   // inheritAttrs: false
}
</script>

<script setup>
import { 
   inject
} from 'vue'
import { 
   McNavigationLink,
   NODE_TYPES,
   useNavigationStore,
} from '@mechcloud/piston-ui-sdk'

const props = defineProps({
   uriPrefix: String,
   // This will NOT be a shallowRef
   node: Object,
   icon: {
      type: String,
      default: ''
   }
})

const navigationStore = useNavigationStore(window.pinia)
const siteNodeRender = navigationStore.getSiteNode()

const expandedItemIds = inject('expandedItemIds')

function addRemoveItem(itemId) {
   if(expandedItemIds.value.includes(itemId)) {
      expandedItemIds.value.splice(expandedItemIds.value.indexOf(itemId), 1)
   } else {
      expandedItemIds.value.push(itemId)
   }
}
</script>

<style scoped>
ul[mc-role=left-navigation] {
   list-style: none;
   text-align: left;
   /* cursor: pointer; */
   background-color: white;
   padding-left: 0;
   font-size: 14px;

   & a[mc-role=navigation-link] {
      text-decoration: none;
   }

   & > li {
      margin-top: 0.3rem;

      & > div {
         padding: 0.3rem;

         &:hover {
            background-color: #F4F5F7;
         }
      }

      & [mc-role=icon]{
         transition: all .3s ease-in-out;
      }

      & > .pseudo-sub-menu {
         overflow: hidden;
         max-height: 0;
         transition: all .3s ease-in-out;
         margin-left: 0.5rem;
      }

      &.pseudo-expanded {
         & [mc-role=icon] {
            transform: rotate(90deg);
         }

         & > .pseudo-sub-menu {
            max-height: 5rem;
         }
      }

      &.selected > div {
         background-color: #F4F5F7;
      }
   }
}
</style>

