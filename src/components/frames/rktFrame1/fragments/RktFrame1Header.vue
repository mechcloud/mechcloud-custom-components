<template>
   <header class="header">
      <ul>
         <li v-for="siteNode in $mcContext.siteMap">
            <mc-navigation-link 
               :title="siteNode.attrs.title"
               uriPrefix=""
               :mapping="siteNode.attrs.mapping" 
            />
         </li>
      </ul>
   </header>
</template>

<script> 
export default {
   // inheritAttrs: false,
}
</script>

<script setup> 
import { 
   McNavigationLink,
} from '@mechcloud/piston-ui-sdk'
</script>

<style scoped> 
.header {
   position: fixed;
   top: 0;
   height: 3rem;
   background-color: aqua;
   width: 100vw;

   & > ul {
      list-style-type: none;
      display: inline-flex;
      gap: 1rem;

      & a {
         text-decoration: none;
      }
   }
}
</style>

