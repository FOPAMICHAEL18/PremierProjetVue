<template>
    <div class="rounded-lg h-fit w-xl  px-10 py-5 bg-white font-['Ubuntu-Regular', 'sans-serif'] font-medium max-sm:absolute max-sm:z-20 max-sm:top-38 max-sm:left-7 sm:h-17/18 sm:w-xl lg:w-2xl xl:w-3xl" >
        <div class="  mt-8 h-28 flex flex-col gap-4 ">
            <h1 class="text-5xl text-[#02295a] font-bold">Finishing up</h1>
            <p class="  text-2xl text-[#9699ab]">Double-check everything looks OK before confirming.</p>
        </div>
        <div class="flex flex-col gap-5 py-6 h-13/20 max-sm:mt-8 ">
            <div class="bg-[#f0f6ff] rounded-lg px-6 ">
                <div class="flex items-center justify-between  py-5 border-b-1 border-[#d6d9e6]">
                    <div class="">
                        <p class="text-[#02295a] font-bold text-xl" v-if="prim === true">Arcade ({{ precisiontime }})</p>
                        <p class="text-[#02295a] font-bold text-xl" v-if="second === true">Advanced ({{ precisiontime }})</p>
                        <p class="text-[#02295a] font-bold text-xl" v-if="ter === true">Pro ({{ precisiontime }})</p>
                        <p class="text-[#9699ab] underline hover:text-[#473dff] hover:opacity-50 hover:cursor-pointer" @click="returntoselect">Change</p>
                    </div>
                    <p class="font-bold text-[#02295a] text-xl" v-if="prim === true">${{ pricemonth1 }}/{{ precisionmoney }}</p>
                    <p class="font-bold text-[#02295a] text-xl" v-if="second === true">${{ pricemonth2 }}/{{ precisionmoney }}</p>
                    <p class="font-bold text-[#02295a] text-xl" v-if="ter === true">${{ pricemonth3 }}/{{ precisionmoney }}</p>
                </div>
                <div class="flex flex-col justify-center   gap-5 pt-4 pb-7">
                    <div class="flex items-center justify-between " v-if="onlineservice === true">
                        <p class="text-[#9699ab]">Online service</p>
                        <p class="text-[#02295a]">+${{ onlineprice }}/{{ precisionmoney }}</p>
                    </div>
                    <div class="flex items-center justify-between " v-if="largerstorage === true">
                        <p class="text-[#9699ab]">Larger storage</p>
                        <p class="text-[#02295a]">+${{ largerprice }}/{{ precisionmoney }}</p>
                    </div>
                    <div class="flex items-center justify-between " v-if="customizableprofil === true">
                        <p class="text-[#9699ab]">customizable profil</p>
                        <p class="text-[#02295a]">+${{ customizableprice }}/{{ precisionmoney }}</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between  p-6 rounded-lg">
                <p class="text-[#9699ab]">Total (per month/year)</p>
                <p class="text-violet-900 text-2xl font-bold">+${{ totalprice }}/{{ precisionmoney }}</p>
            </div>
        </div>
        <div class="flex h-4/30 justify-between items-end ">
            <div class="  h-2/10 flex justify-end items-end ">
                <button @click.prevent="back"  type="submit" id="submit" class="flex justify-center items-center rounded-md text-[#9699ab] font-['Ubuntu-Bold', 'sans-serif'] font-bold hover:opacity-85 hover:cursor-pointer w-28 h-12 hover:text-[#02295a] max-sm:absolute max-sm:top-[765px] max-sm:left-[0px]">Go Back</button>
            </div>
            <div class="  h-2/10 flex justify-end items-end ">
                <button @click.prevent="confirm"  type="submit" id="submit" class="flex justify-center items-center rounded-md text-white font-['Ubuntu-Bold', 'sans-serif'] bg-[#473dff] hover:opacity-50 hover:cursor-pointer w-28 h-12 max-sm:absolute max-sm:top-[765px] max-sm:left-[465px]">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const countStore = usecount();
const router = useRouter();

const onlineservice = computed(() => countStore.ifonlineservice)
const largerstorage = computed(() => countStore.iflargerstorage)
const customizableprofil = computed(() => countStore.ifcustomizableprofil)
const isslay = computed(() => countStore.isslay)

let active1 = computed(() => countStore.isactive1)
const prim = computed(() => countStore.ifselectprim)
const second = computed(() => countStore.ifselectsecond)
const ter = computed(() => countStore.ifselectter)

let pricemonth1 = ref(0)
let pricemonth2 = ref(0)
let pricemonth3 = ref(0)
let precisiontime = ref("")
let precisionmoney = ref("")
let onlineprice = ref(0)
let largerprice = ref(0)
let customizableprice = ref(0)
let totalprice = ref(0)

if (isslay.value === false) {
    precisiontime = "Monthly"
    precisionmoney = "mo"
    if (onlineservice.value === true) {
    onlineprice.value = 1
    }
    if (largerstorage.value === true) {
        largerprice.value = 2
    }
    if (customizableprofil.value === true) {
        customizableprice.value = 2
    }
    if (prim.value === true) {
        pricemonth1.value = 9
    }
    if (second.value === true) {
        pricemonth2.value = 12
    }
    if (ter.value === true) {
        pricemonth3.value = 15
    }
    totalprice.value = pricemonth1.value + pricemonth2.value + pricemonth3.value + onlineprice.value + largerprice.value + customizableprice.value
}
else {
    precisiontime = "Yearly"
    precisionmoney = "yr"
    if (onlineservice.value === true) {
    onlineprice.value = 10
    }
    if (largerstorage.value === true) {
        largerprice.value = 20
    }
    if (customizableprofil.value === true) {
        customizableprice.value = 20
    }
    if (prim.value === true) {
        pricemonth1.value = 90
    }
    if (second.value === true) {
        pricemonth2.value = 120
    }
    if (ter.value === true) {
        pricemonth3.value = 150
    }
    totalprice.value = pricemonth1.value + pricemonth2.value + pricemonth3.value + onlineprice.value + largerprice.value + customizableprice.value
};


const returntoselect = () => {
    if (onlineservice.value === true) {
        countStore.changeonlineservice()
    }
    if (largerstorage.value === true) {
        countStore.changelargerstorage()
    }
    if (customizableprofil.value === true) {
        countStore.changecustomizableprofil()
    }
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
    countStore.supdecrementactive1()
    router.push("/select")
}
const confirm = () => {
    countStore.changemediaquery()
    router.push("/confirm")
}
const back = () => {
    if (onlineservice.value === true) {
        countStore.changeonlineservice()
    }
    if (largerstorage.value === true) {
        countStore.changelargerstorage()
    }
    if (customizableprofil.value === true) {
        countStore.changecustomizableprofil()
    }
    if (isslay.value === true) {
        countStore.changeslay()
    }
    countStore.decrementactive1()
    router.push("/add")
}

</script>