<template>
   <ul 
      v-if="nodes.length > 0"
      mc-role="top-navigation"
   >
      <template v-for="siteNode in nodes">
         <li
            :class="[ siteNode.children ? 'pseudo-expand-' + expand : '']"
            tabindex="0" 
         >
            <template v-if="siteNode.children">
               <div 
                  class="mc-flex mc-flex-h-space-between"
                  style="cursor: pointer; padding: 5px;"
               >
                  <mc-navigation-link
                     v-if="siteNode.type.id === NODE_TYPES.Page"
                     :title="siteNode.attrs.title"
                     :uriPrefix="uriPrefix"
                     :mapping="siteNode.attrs.mapping"
                  />
                  <span 
                     v-else
                     style="padding-right: 0;"
                  >
                     {{ siteNode.attrs.title }}
                  </span>
                  <mc-icon 
                     :icon="icon" 
                     style="margin-left: 0.5rem;"
                  />
               </div>
               <component 
                  class="pseudo-menu"
                  is="rkt-frame2-top-navigation" 
                  :uriPrefix="uriPrefix + '/' + siteNode.attrs.mapping"
                  :nodes="siteNode.children"
                  icon="caret-right"
                  expand="right"
               />
            </template>
            <mc-navigation-link
               v-else
               :title="siteNode.attrs.title"
               :uriPrefix="uriPrefix"
               :mapping="siteNode.attrs.mapping"
            />
         </li>
      </template>
   </ul>
</template>

<script>
export default {
   // inheritAttrs: false
}
</script>

<script setup>
import { 
   McNavigationLink,
   NODE_TYPES,
} from '@mechcloud/piston-ui-sdk'

const props = defineProps({
   // This will NOT be a shallowRef
   uriPrefix: String,
   nodes: Array,
   icon: {
      type: String,
      default: 'caret-down'
   },   
   expand: {
      type: String,
      default: 'bottom'
   }
})
</script>

<style scoped>
ul[mc-role=top-navigation] {
   list-style: none;
   background: #fff;
   padding: 5px;

   & a[mc-role=navigation-link] {
      padding: 5px;
      color: rebeccapurple;
      text-decoration: none;
      /* border-radius: 5px; */

      &:hover {
         background: #eee;
         outline: none;
      }

      /* &:focus-visible {
         box-shadow: inset 0 0 0 2px rebeccapurple;
      } */
   }

   & > li {
      position: relative;
      overflow: visible;

      /* & > [mc-role=navigation-link] {
         color: rebeccapurple;
         text-decoration: none;
      } */

      & [mc-role=icon]:focus {
         outline: none;
      }

      & > .pseudo-menu {
         position: absolute;
         top: 100%;
         left: 50%;
         background: #fff;
         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
         transform-origin: center top;
         transform: translateX(-50%) scale(0.8);
         z-index: 100;
         opacity: 0;
         transition: all 200ms cubic-bezier(0.5, 0, 0.5, 1);
         pointer-events: none;
         flex-direction: column;
         white-space: nowrap;
      }

      &:focus-within > .pseudo-menu {
         opacity: 1;
         transform: translateX(-50%) translateY(10px) scale(1);
         pointer-events: all;
      }

      &.pseudo-expand-right > .pseudo-menu {
         top: -10px;
         left: calc(100% - 5px);
         transform-origin: top left;
         transform: scale(0.8);
      }
      
      &.pseudo-expand-right:focus-within > .pseudo-menu {
         transform: translateY(10px) scale(1);
      }

      & > :is([mc-role=navigation-link], span) {
         display: block;
         position: relative;

         &::after {
            position: absolute;
            right: 0.5em;
            color: grey;
         }
      }
   }
}
</style>

