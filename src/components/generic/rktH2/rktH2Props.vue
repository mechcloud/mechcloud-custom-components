<!--
   Copyright 2020-2023 Shailendra Singh (shailendra.singh@mechcloud.io)

   This file is part of MechCloud Custom Components.

   MechCloud Custom Components is free software: you can redistribute it and/or modify
   it under the terms of the GNU Affero General Public License as
   published by the Free Software Foundation, either version 3 of the
   License, or (at your option) any later version.

   MechCloud Custom Components is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Affero General Public License for more details.

   You should have received a copy of the GNU Affero General Public License
   along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->
<!--
   Usage
   -----
   
   <rkt-h2
      msg="Heading 2"
   >
   </rkt-h2>
-->
<template>
   <div 
      class="mc-controls"
   >
      <mc-text 
         label="Message" 
         v-model="selectedControl.metadata.props.msg" 
      />
   </div>
</template>

<script setup>
   import { 
      inject
   } from 'vue'
   
   const selectedControl = inject('selectedControl')
</script>

