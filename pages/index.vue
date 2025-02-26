<template>
    <div class=" rounded-lg h-fit w-xl  px-10 py-5 bg-white max-sm:absolute max-sm:z-20 max-sm:top-38 max-sm:left-7 sm:h-17/18  sm:w-xl lg:w-2xl xl:w-3xl" >
        <div class="  mt-8 h-24 flex flex-col gap-4 sm:mb-5">
            <h1 class="text-5xl text-[#02295a] font-bold">Personal info</h1>
            <p class="  text-2xl text-[#9699ab]">Please provide your name, email address, and phone number.</p>
        </div>
        <form class="  h-4/5 flex flex-col gap-5 py-7 max-sm:mt-10 " >
            <div class="flex flex-col  gap-2">
                <div class="flex justify-between">
                    <label for="nom" class=" text-[#02295a]">Name</label>
                    <span ref="errorname" class=" font-medium text-[#ed3548] invisible ">This field is required</span>
                </div>
                <input  ref="inputname" type="text" name="nom" id="nom" placeholder="e.g. Stephen King" v-model="verifyname" class="border-1 rounded-lg h-16 px-6 placeholder:text-[#9699ab] text-xl font-medium border-[#d6d9e6] focus:outline-violet-900 hover:cursor-pointer focus:text-[#02295a]" required>
            </div>
            <div class="flex flex-col  gap-2">
                <div class="flex justify-between">
                    <label for="email" class=" text-[#02295a]">Email Address</label>
                    <span ref="erroremail" class=" font-medium text-[#ed3548] invisible">This field is required</span>
                </div>
                <input ref="inputemail" type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" v-model="verifyemail" class="border-1 rounded-lg h-16 px-6 placeholder:text-[#9699ab] text-xl font-medium border-[#d6d9e6] focus:outline-violet-900 hover:cursor-pointer focus:text-[#02295a]" required>
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between">
                    <label for="tel" class=" text-[#02295a]">Phone Number</label>
                    <span ref="errortel" class=" font-medium text-[#ed3548] invisible">This field is required</span>
                </div>
                <input ref="inputtel" type="tel" name="tel" id="tel" placeholder=" e.g. +1 234 567 890" v-model="verifytel" class="border-1 rounded-lg h-16 px-6 placeholder:text-[#9699ab] text-xl font-medium border-[#d6d9e6] focus:outline-violet-900 hover:cursor-pointer focus:text-[#02295a]" required>
            </div>
            <div class="  h-2/10 flex justify-end items-end ">
                <button  @click.prevent="next"  type="submit" id="submit" class="w-28 h-12  flex justify-center items-center rounded-md text-white font-['Ubuntu-Bold', 'sans-serif'] bg-[#02295a] hover:opacity-85 hover:cursor-pointer max-sm:absolute max-sm:top-[765px] max-sm:left-[465px] ">Next Step</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
const countStore = usecount();

let verifyname = ref("")
let verifyemail = ref("")
let verifytel = ref("")

const inputname = useTemplateRef('inputname')
const inputemail = useTemplateRef('inputemail')
const inputtel = useTemplateRef('inputtel')

const errorname = useTemplateRef('errorname')
const erroremail = useTemplateRef('erroremail')
const errortel = useTemplateRef('errortel')

const router = useRouter()

onMounted(() => {})

const testname = () => {
    if (verifyname.value === "") {
        inputname.value?.classList.remove("border-[#d6d9e6]")
        inputname.value?.classList.add("border-[#ed3548]")
        errorname.value?.classList.remove("invisible")
        errorname.value?.classList.add("visible")
    }
    else {
        inputname.value?.classList.remove("border-[#ed3548]")
        inputname.value?.classList.add("border-[#d6d9e6]")
        errorname.value?.classList.remove("visible")
        errorname.value?.classList.add("invisible")
    }
}
const testemail = () => {
    if (verifyemail.value === "") {
        inputemail.value?.classList.remove("border-[#d6d9e6]")
        inputemail.value?.classList.add("border-[#ed3548]")
        erroremail.value?.classList.remove("invisible")
        erroremail.value?.classList.add("visible")
    }
    else {
        inputemail.value?.classList.remove("border-[#ed3548]")
        inputemail.value?.classList.add("border-[#d6d9e6]")
        erroremail.value?.classList.remove("visible")
        erroremail.value?.classList.add("invisible")
    }
}
const testtel = () => {
    if (verifytel.value === "") {
        inputtel.value?.classList.remove("border-[#d6d9e6]")
        inputtel.value?.classList.add("border-[#ed3548]")
        errortel.value?.classList.remove("invisible")
        errortel.value?.classList.add("visible")
    }
    else {
        inputtel.value?.classList.remove("border-[#ed3548]")
        inputtel.value?.classList.add("border-[#d6d9e6]")
        errortel.value?.classList.remove("visible")
        errortel.value?.classList.add("invisible")
    }
}

const next = () => {
    testname()
    testemail()
    testtel()
    if (verifyname.value !== "" && verifyemail.value !== "" && verifytel.value !== "") {
        countStore.incrementactive1()
        router.push("/select")
    }

}
</script> 
