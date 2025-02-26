<template>
  <div class="rounded-lg h-fit w-xl  px-10 py-5 bg-white max-sm:absolute max-sm:z-20 max-sm:top-38 max-sm:left-7 sm:h-17/18 sm:w-xl lg:w-2xl xl:w-3xl">
    <div class="  mt-8 h-28 flex flex-col gap-4 ">
      <h1 class="text-5xl text-[#02295a] font-bold">Select your plan</h1>
      <p class="  text-2xl text-[#9699ab]"> You have the option of monthly or yearly billing.</p>
    </div>
    <div class=" flex flex-col gap-10 pt-6 h-13/20">
      <div class="flex flex-col justify-between items-center max-sm:gap-5 sm:flex-row ">
        <div id="selectarcade" class="flex flex-row border-[#d6d9e6] border-1 w-30/30 max-sm:px-4 max-sm:py-2 rounded-lg hover:border-violet-900 hover:cursor-pointer max-sm:gap-5 max-sm:items-center sm:flex-col sm:w-9/30 sm:p-4" @click="selectprim" >
          <div class=" h-20 py-4 lg:h-30">
            <div> <img src="@/public/icon-arcade.svg" alt="img_arcade"> </div>
          </div>
          <div class="flex flex-col justify-center py-4">
            <div class="">
              <p class="text-[#02295a] font-['Ubuntu-Bold', 'sans-serif'] font-bold ">Arcade</p>
            </div>
            <div class="">
              <p class="text-[#9699ab] font-['Ubuntu-Regular', 'sans-serif'] font-medium " v-if="!isslay">$9/mo</p>
              <p class="text-[#9699ab] font-['Ubuntu-Regular', 'sans-serif'] font-medium " v-if="isslay">$90/yr</p>
              <p class="text-[#02295a] font-['Ubuntu-Regular', 'sans-serif'] font-medium" v-if="isslay">2 months free</p>
            </div>
          </div>
        </div>
        <div id="selectadvanced" class="flex flex-row border-[#d6d9e6] border-1 w-30/30 max-sm:px-4 max-sm:py-2 rounded-lg hover:border-violet-900 hover:cursor-pointer max-sm:gap-5 max-sm:items-center sm:flex-col sm:w-9/30 sm:p-4" @click="selectsecond" >
          <div class=" h-20 py-4 lg:h-30">
            <div> <img src="@/public/icon-advanced.svg" alt="img_advanced"> </div>
          </div>
          <div class="flex flex-col justify-center py-4">
            <div>
              <p class="text-[#02295a] font-['Ubuntu-Bold', 'sans-serif'] font-bold">Advanced</p>
            </div>
            <div>
              <p class="text-[#9699ab] font-['Ubuntu-Regular', 'sans-serif'] font-medium"v-if="!isslay">$12/mo</p>
              <p class="text-[#9699ab] font-['Ubuntu-Regular', 'sans-serif'] font-medium " v-if="isslay">$120/yr</p>
              <p class="text-[#02295a] font-['Ubuntu-Regular', 'sans-serif'] font-medium" v-if="isslay">2 months free</p>
            </div>
          </div>
        </div>
        <div id="selectpro" class="flex flex-row border-[#d6d9e6] border-1 w-30/30 max-sm:px-4 max-sm:py-2 rounded-lg hover:border-violet-900 hover:cursor-pointer max-sm:gap-5 max-sm:items-center sm:flex-col sm:w-9/30 sm:p-4" @click="selectter" >
          <div class=" h-20 py-4 lg:h-30">
            <div> <img src="@/public/icon-pro.svg" alt="img_pro"> </div>
          </div>
          <div class="flex flex-col justify-center py-4">
            <div>
              <p class="text-[#02295a] font-['Ubuntu-Bold', 'sans-serif'] font-bold">Pro</p>
            </div>
            <div>
              <p class="text-[#9699ab] font-['Ubuntu-Regular', 'sans-serif'] font-medium" v-if="!isslay">$15/mo</p>
              <p class="text-[#9699ab] font-['Ubuntu-Regular', 'sans-serif'] font-medium " v-if="isslay">$150/yr</p>
              <p class="text-[#02295a] font-['Ubuntu-Regular', 'sans-serif'] font-medium" v-if="isslay">2 months free</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center bg-[#f0f6ff]  rounded-lg h-14 gap-10">
        <p class="text-[#02295a] font-medium" id="month" >Monthly</p>
        <div class="bg-[#02295a] w-12 rounded-full h-6 flex items-center p-1"> <div class="bg-white rounded-full size-4 hover:cursor-pointer " @click="slay" id="slayer"></div> </div>
        <p class="text-[#9699ab] font-medium" id="year">Yearly</p>
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
const router = useRouter();

const isslay = computed(() => countStore.isslay)
const ifselectprim = computed(() => countStore.ifselectprim)
const ifselectsecond = computed(() => countStore.ifselectsecond)
const ifselectter= computed(() => countStore.ifselectter)

const prim = computed(() => countStore.ifselectprim)
const second = computed(() => countStore.ifselectsecond)
const ter = computed(() => countStore.ifselectter)

onMounted(() => {
const selectarcade = document.getElementById('selectarcade')
const selectadvanced = document.getElementById('selectadvanced')
const selectpro = document.getElementById('selectpro')
const slayer = document.getElementById('slayer')
const month = document.getElementById('month')
const year = document.getElementById('year')

})
const selectprim = () => {
  countStore.changeselectprim()
  if (prim.value === false) {
    selectarcade.classList.remove("border-violet-900")
    selectarcade.classList.add("border-[#d6d9e6]")
  }
  else {
    selectarcade.classList.remove("border-[#d6d9e6]")
    selectarcade.classList.add("border-violet-900")
    selectpro.classList.remove("border-violet-900")
    selectpro.classList.add("border-[#d6d9e6]")
    selectadvanced.classList.remove("border-violet-900")
    selectadvanced.classList.add("border-[#d6d9e6]")
  }

  if (second.value === true) {
    countStore.changeselectsecond()
  }
  if (ter.value === true) {
    countStore.changeselectter()
  }
}
const selectsecond = () => {
  countStore.changeselectsecond()
  if (second.value === false) {
    selectadvanced.classList.remove("border-violet-900")
    selectadvanced.classList.add("border-[#d6d9e6]")
  }
  else {
    selectadvanced.classList.remove("border-[#d6d9e6]")
    selectadvanced.classList.add("border-violet-900")
    selectarcade.classList.remove("border-violet-900")
    selectarcade.classList.add("border-[#d6d9e6]")
    selectpro.classList.remove("border-violet-900")
    selectpro.classList.add("border-[#d6d9e6]")
  }
  if (prim.value === true) {
    countStore.changeselectprim()
  }
  if (ter.value === true) {
    countStore.changeselectter()
  }
}
const selectter = () => {
  countStore.changeselectter()
  if (ter.value === false) {
    selectpro.classList.remove("border-violet-900")
    selectpro.classList.add("border-[#d6d9e6]")
  }
  else {
    selectpro.classList.remove("border-[#d6d9e6]")
    selectpro.classList.add("border-violet-900")
    selectadvanced.classList.remove("border-violet-900")
    selectadvanced.classList.add("border-[#d6d9e6]")
    selectarcade.classList.remove("border-violet-900")
    selectarcade.classList.add("border-[#d6d9e6]")
  }
  if (second.value === true) {
    countStore.changeselectsecond()
  }
  if (prim.value === true) {
    countStore.changeselectprim()
  }
}
const slay = () => {
  if (isslay.value === false) {
    slayer.classList.add("translate-x-6")
    slayer.classList.add("duration-200")
    month.classList.remove("text-[#02295a]")
    month.classList.add("text-[#9699ab]")
    year.classList.remove("text-[#9699ab]")
    year.classList.add("text-[#02295a]")
    countStore.changeslay()
  }
  else {
    slayer.classList.remove("translate-x-6")
    slayer.classList.add("-translate-x-0.2")
    month.classList.remove("text-[#9699ab]")
    month.classList.add("text-[#02295a]")
    year.classList.remove("text-[#02295a]")
    year.classList.add("text-[#9699ab]")
    countStore.changeslay()
  }
}
const next = () => {
  if (prim.value === true || second.value === true || ter.value === true) {
    countStore.incrementactive1()
    router.push("/add")
  }

}
const back = () => {
  countStore.decrementactive1()
  router.push("/")
}

</script>
 