import { resolve } from "path"
import { defineConfig } from "vite"
import terser from '@rollup/plugin-terser'

import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace'
import virtual from "@rollup/plugin-virtual"

export default defineConfig({
   build: {
      // target: 'es2017',
      lib: {
         entry: resolve(__dirname, "src/index.js"),
         name: "RocketVueComponents",
         fileName: "vue-components",
         formats: ['es'],
      },
      rollupOptions: {
         // make sure to externalize deps that shouldn't be bundled
         // into your library
         external: [
            // 'vue',
            // 'pinia'
         ],
         plugins: [
            replace({
               'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
               preventAssignment: true
            }),
            terser({
               format: {
                  comments: false
               },
               mangle: {
                  keep_classnames: true,
                  keep_fnames: true,
                  module: true,
                  toplevel: true
               }
            })
         ]
      },
      // watch: {
      //    ignored: [
      //       '!**/node_modules/@mechcloud/piston-ui-sdk/dist/**'
      //    ]
      // }
   },
   plugins: [
      vue(),
      {
         ...virtual({
            'vue': `
               export const shallowRef = Vue.shallowRef
               export const inject = Vue.inject
               export const openBlock = Vue.openBlock
               export const createElementBlock = Vue.createElementBlock
               export const withModifiers = Vue.withModifiers
               export const toDisplayString = Vue.toDisplayString
               export const ref = Vue.ref
               export const computed = Vue.computed
               export const onBeforeMount = Vue.onBeforeMount
               export const onMounted = Vue.onMounted
               export const provide = Vue.provide
               export const createBlock = Vue.createBlock
               export const resolveDynamicComponent = Vue.resolveDynamicComponent
               export const unref = Vue.unref
               export const renderList = Vue.renderList
               export const Fragment = Vue.Fragment
               export const createVNode = Vue.createVNode
               export const createElementVNode = Vue.createElementVNode
               export const pushScopeId = Vue.pushScopeId
               export const popScopeId = Vue.popScopeId
               export const createCommentVNode = Vue.createCommentVNode
               export const getCurrentInstance = Vue.getCurrentInstance
               export const resolveComponent = Vue.resolveComponent
               export const normalizeClass = Vue.normalizeClass
               export const defineAsyncComponent = Vue.defineAsyncComponent
            `,
            'vue-demi': `
               export const getCurrentInstance = Vue.getCurrentInstance
               export const inject = Vue.inject
               export const toRaw = Vue.toRaw
               export const watch = Vue.watch
               export const unref = Vue.unref
               export const markRaw = Vue.markRaw
               export const effectScope = Vue.effectScope
               export const ref = Vue.ref
               export const isVue2 = Vue.isVue2
               export const isRef = Vue.isRef
               export const isReactive = Vue.isReactive
               export const set = Vue.set
               export const getCurrentScope = Vue.getCurrentScope
               export const onScopeDispose = Vue.onScopeDispose
               export const reactive = Vue.reactive
               export const toRef = Vue.toRef
               export const del = Vue.del
               export const nextTick = Vue.nextTick
               export const computed = Vue.computed
               export const toRefs = Vue.toRefs
            `
         }),
         enforce: 'pre'
      }
   ],
   resolve: {
      alias: {
         "@": resolve(__dirname, "./src"),
         // 'vue': 'Vue'
      },
   },
   // preview: {
   //    port: 30052
   // }
});
