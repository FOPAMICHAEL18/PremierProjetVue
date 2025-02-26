<template>
  <main class="bg-white sm:bg-[#f0f6ff] sm:w-screen sm:h-screen sm:flex sm:justify-center sm:items-center">
    <section ref="section" :class="conditionalclass" class=" flex flex-col bg-[#f0f6ff] h-[890px] rounded-none sm:bg-white sm:w-3xl lg:w-5xl xl:w-7xl sm:h-3/4 sm:rounded-2xl  sm:items-center sm:gap-0 lg:gap-22 sm:flex-row">
      <navbar />
      <NuxtPage />
    </section>
  </main>
</template>

<script setup>
const countStore = usecount();
const mediaquery = computed(() => countStore.mediaquery)
const input = useTemplateRef('section')
const conditionalclass = computed(() => {
  if (mediaquery.value === true) {
    input.value?.classList.remove("h-[890px]")
    input.value?.classList.add("h-[985px]")
  }
})
</script>