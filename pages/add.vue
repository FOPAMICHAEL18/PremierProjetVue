<template>
    <div class="rounded-lg h-fit w-xl  px-10 py-5 bg-white max-sm:absolute max-sm:z-20 max-sm:top-38 max-sm:left-7 sm:h-17/18 sm:w-xl lg:w-2xl xl:w-3xl">
        <div class="  mt-8 h-28 flex flex-col gap-4 ">
            <h1 class="text-5xl text-[#02295a] font-bold">Pick add-ons</h1>
            <p class="  text-2xl text-[#9699ab]">Add-ons help enhance your gaming experience.</p>
        </div>
        <div class="flex flex-col gap-5 py-6 h-13/20 max-sm:mt-5">
            <div id="selectonline" class="flex  h-3/12 rounded-lg items-center justify-between px-8 border-[#d6d9e6] border-1  hover:border-violet-900 hover:cursor-pointer max-sm:py-5" @click="selectprim">
                <div class="flex items-center gap-6 ">
                    <div id="checkonline" class="size-6  border-[#d6d9e6] border-1 rounded-sm  flex justify-center items-center" > <img src="@/public/icon-checkmark.svg" alt="icon_check" class="size-4"> </div>
                    <div>
                        <p class="text-[#02295a] font-bold">Online service</p>
                        <p class="text-[#9699ab]">Access to multiplayer games</p>
                    </div>
                </div>
                <p class="font-['Ubuntu-Regular', 'sans-serif'] font-medium text-violet-900 " v-if="!isslay">+$1/mo</p>
                <p class="font-['Ubuntu-Regular', 'sans-serif'] font-medium text-violet-900 " v-if="isslay">+$10/yr</p>
            </div>
            <div id="selectlarger" class="flex  h-3/12 rounded-lg items-center justify-between px-8 border-[#d6d9e6] border-1  hover:border-violet-900 hover:cursor-pointer max-sm:py-5" @click="selectsecond">
                <div class="flex items-center gap-6 ">
                    <div id="checklarger" class="size-6  border-[#d6d9e6] border-1 rounded-sm  flex justify-center items-center"> <img src="@/public/icon-checkmark.svg" alt="icon_check" class="size-4"> </div>
                    <div>
                        <p class="text-[#02295a] font-bold">Larger storage</p>
                        <p class="text-[#9699ab]">Extra 1TB of cloud save</p>
                    </div>
                </div>
                <p class="font-['Ubuntu-Regular', 'sans-serif'] font-medium text-violet-900 " v-if="!isslay">+$2/mo</p>
                <p class="font-['Ubuntu-Regular', 'sans-serif'] font-medium text-violet-900 " v-if="isslay">+$20/yr</p>
            </div>
            <div id="selectcustomizable" class="flex  h-3/12 rounded-lg items-center justify-between px-8 border-[#d6d9e6] border-1  hover:border-violet-900 hover:cursor-pointer max-sm:py-5" @click="selectter">
                <div class="flex items-center gap-6 ">
                    <div id="checkcustomizable" class="size-6  border-[#d6d9e6] border-1 rounded-sm  flex justify-center items-center"> <img src="@/public/icon-checkmark.svg" alt="icon_check" class="size-4"> </div>
                    <div>
                        <p class="text-[#02295a] font-bold">Customizable Profile</p>
                        <p class="text-[#9699ab]">Custom theme on your profile</p>
                    </div>
                </div>
                <p class="font-['Ubuntu-Regular', 'sans-serif'] font-medium text-violet-900 " v-if="!isslay">+$2/mo</p>
                <p class="font-['Ubuntu-Regular', 'sans-serif'] font-medium text-violet-900 " v-if="isslay">+$20/yr</p>
            </div>
        </div>
        <div class="flex h-4/30 justify-between items-end ">
            <div class="  h-2/10 flex justify-end items-end ">
                <button @click.prevent="back"  type="submit" id="submit" class="flex justify-center items-center rounded-md text-[#9699ab] font-['Ubuntu-Bold', 'sans-serif'] font-bold hover:opacity-85 hover:cursor-pointer w-28 h-12 hover:text-[#02295a] max-sm:absolute max-sm:top-[765px] max-sm:left-[0px]">Go Back</button>
            </div>
            <div class="  h-2/10 flex justify-end items-end ">
                <button @click.prevent="next"  type="submit" id="submit" class="flex justify-center items-center rounded-md text-white font-['Ubuntu-Bold', 'sans-serif'] bg-[#02295a] hover:opacity-85 hover:cursor-pointer w-28 h-12 max-sm:absolute max-sm:top-[765px] max-sm:left-[465px]">Next Step</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const countStore = usecount();
const isslay = computed(() => countStore.isslay);
const router = useRouter();

const prim = computed(() => countStore.ifselectprim)
const second = computed(() => countStore.ifselectsecond)
const ter = computed(() => countStore.ifselectter)
const onlineservice = computed(() => countStore.ifonlineservice)
const largerstorage = computed(() => countStore.iflargerstorage)
const customizableprofil = computed(() => countStore.ifcustomizableprofil)

onMounted(() => {
const selectonline = document.getElementById('selectonline')
const selectlarger = document.getElementById('selectlarger')
const selectcustomizable = document.getElementById('selectcustomizable')
const checkonline = document.getElementById("checkonline")
const checklarger = document.getElementById("checklarger")
const checkcustomizable = document.getElementById("checkcustomizable")
})
const selectprim = () => {
    countStore.changeonlineservice()
    if (onlineservice.value === false) {
        selectonline.classList.remove("border-violet-900")
        selectonline.classList.add("border-[#d6d9e6]")
        checkonline.classList.remove("bg-violet-900")
    }
    else {
        selectonline.classList.remove("border-[#d6d9e6]")
        selectonline.classList.add("border-violet-900")
        checkonline.classList.add("bg-violet-900")
    }

}
const selectsecond = () => {
    countStore.changelargerstorage()
    if (largerstorage.value === false) {
        selectlarger.classList.remove("border-violet-900")
        selectlarger.classList.add("border-[#d6d9e6]")
        checklarger.classList.remove("bg-violet-900")
    }
    else {
        selectlarger.classList.remove("border-[#d6d9e6]")
        selectlarger.classList.add("border-violet-900")
        checklarger.classList.add("bg-violet-900")
    }

}
const selectter = () => {
    countStore.changecustomizableprofil()
    if (customizableprofil.value === false) {
        selectcustomizable.classList.remove("border-violet-900")
        selectcustomizable.classList.add("border-[#d6d9e6]")
        checkcustomizable.classList.remove("bg-violet-900")
    }
    else {
        selectcustomizable.classList.remove("border-[#d6d9e6]")
        selectcustomizable.classList.add("border-violet-900")
        checkcustomizable.classList.add("bg-violet-900")
    }

}

const next = () => {
    if (onlineservice.value === true || largerstorage.value === true || customizableprofil.value === true) {
        countStore.incrementactive1()
        router.push("/summary")
    }
}
const back = () => {
    if (prim.value === true) {
        countStore.changeselectprim()
    }
    if (second.value === true) {
        countStore.changeselectsecond()
    }
    if (ter.value === true) {
        countStore.changeselectter()
    }
    if (isslay.value === true) {
        countStore.changeslay()
    }
    countStore.decrementactive1()
    router.push("/select")
}
</script>