<template>
    <div class="flex items-center rounded-lg  w-fit h-fit justify-center sm:w-8/10 sm:h-2/22 sm:gap-5 sm:p-3 sm:justify-normal">
        <div ref="choix" class=" text-white border-white border-solid border-2   size-10 rounded-full flex justify-center items-center font-['Ubuntu-Regular', 'sans-serif']" :class="conditionalclass" > {{ number }} </div>
        <div>
            <p class="text-[#9699ab] font-['Ubuntu-Regular', 'sans-serif'] max-sm:hidden"> {{ message1 }}  </p>
            <p class=" text-white font-['Ubuntu-Bold', 'sans-serif']  max-sm:hidden"> {{ message2 }} </p>
        </div>
    </div>
</template>
<script setup>
const countStore = usecount();
const active1 = computed(() => countStore.isactive1)


const props = defineProps({
    number: "number",
    message1: "string",
    message2: "string",
    message3: "string",
})

const input = useTemplateRef('choix')
onMounted(() => {})
const addstyles = () => {
    input.value?.classList.add("bg-[#bfe2fd]")
    input.value?.classList.remove("text-white")
    input.value?.classList.remove("border-white")
    input.value?.classList.add("border-[#bfe2fd]")
    input.value?.classList.add("font-bold") 
}
const removestyles = () => {
    input.value?.classList.remove("bg-[#bfe2fd]")
    input.value?.classList.add("border-white")
    input.value?.classList.add("text-white")
    input.value?.classList.remove("border-[#bfe2fd]")
}
const conditionalclass = computed(() => {
    switch (active1.value) {
        case 1:
            if (props.number === 1) {
                addstyles()
            }
            if (props.number === 2 || props.number === 3 || props.number === 4) {
                removestyles()
            }
            break
        case 2:
            if (props.number === 2) {
                addstyles()
            }
            if (props.number === 3 || props.number === 1 || props.number === 4) {
                removestyles()
            }
            break
        case 3:
            if (props.number === 3) {
                addstyles() 
            }
            if (props.number === 2 || props.number === 1 || props.number === 4) {
                removestyles()
            }
            break
        case 4:
            if (props.number === 4) {
                addstyles()  
            }
            if (props.number === 2 || props.number === 1 || props.number === 3) {
                removestyles()
            }
            break
    }
})
</script>