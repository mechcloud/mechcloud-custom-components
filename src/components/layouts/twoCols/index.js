import { defineAsyncComponent } from "vue";

// export { default as RktLayoutTwoCols } from './RktLayoutTwoCols.vue'

// // this is a recursive component and so it should be in global scope
// export { default as RktLeftNavigation } from './fragments/RktLeftNavigation.vue'

const RktLayoutTwoCols = defineAsyncComponent(() =>
   import("./RktLayoutTwoCols.vue")
)

// this is a recursive component and so it should be in global scope
const RktLeftNavigation = defineAsyncComponent(() =>
   import("./fragments/RktLeftNavigation.vue")
)

export {
   RktLayoutTwoCols,
   RktLeftNavigation
}