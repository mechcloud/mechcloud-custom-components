import { defineAsyncComponent } from "vue";

const RktFrame2 = defineAsyncComponent(() =>
   import("./RktFrame2.vue")
)

// this is a recursive component and so it should be in global scope
const RktFrame2TopNavigation = defineAsyncComponent(() =>
   import("./fragments/RktFrame2TopNavigation.vue")
)

// import RktFrame2 from './RktFrame2.vue'

// // this is a recursive component and so it should be in global scope
// import RktFrame2TopNavigation from './fragments/RktFrame2TopNavigation.vue'

export {
   RktFrame2,
   RktFrame2TopNavigation
}
