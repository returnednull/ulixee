<template>
  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
    <PopoverPanel class="absolute z-10 left-0 top-full transform -mt-1 w-screen sm:w-auto sm:pr-0">
      <div class="rounded-lg shadow-lg bg-white overflow-hidden whitespace-nowrap border border-gray-200 flex flex-col space-y-2 py-3">
        <div class="relative bg-white">
          <router-link to="/docs/hero" class="block px-5">Hero</router-link>
        </div>
        <div class="relative bg-white">
          <router-link to="/docs/databox" class="block px-5">Databox for Hero</router-link>
        </div>
        <div class="relative bg-white">
          <router-link to="/docs/server" class="block px-5">Server</router-link>
        </div>
      </div>
    </PopoverPanel>
  </transition>
</template>

<script lang="ts">
import * as Vue from "vue";
import { PopoverPanel } from '@headlessui/vue'

export default Vue.defineComponent({
  components: {
    PopoverPanel,
  }
});
</script>

<style lang="scss" scoped>
  a {
    @apply no-underline pr-5;
    &:hover {
      @apply bg-indigo-100;
    }
  }
</style>