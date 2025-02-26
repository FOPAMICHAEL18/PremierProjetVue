<template>
    <div class="bg-[url(public/bg-sidebar-desktop.svg)] rounded-none max-sm:bg-[center_400px] w-screen h-60 flex-row gap-5 bg-cover flex justify-center pt-10  max-sm:relative max-sm:z-10 sm:rounded-lg sm:w-80 sm:flex-col sm:h-17/18 sm:ml-5 sm:items-center sm:pt-10 sm:justify-normal ">
        <Choice  v-for="option in options" :number="option.number" :message1="option.text1" :message2="option.text2" :message3="option.text3"   :key="option.id" />
    </div>
</template>

<script setup>

const countStore = usecount();
const options = countStore.array;
</script>   