// stores/counter.js


export const usecount = defineStore("counter", {
  state: () => ({
    array : [
      { id: 1, number: 1, text1: "STEP1", text2: "YOUR INFO", text3: "/"},
      { id: 2, number: 2, text1: "STEP2", text2: "SELECT PLAN", text3: "/select"},
      { id: 3, number: 3, text1: "STEP3", text2: "ADD-ONS", text3: "/add"},
      { id: 4, number: 4, text1: "STEP4", text2: "SUMMARY", text3: "/summary"}
    ],

    isactive1: 1,
    ifonlineservice: false,
    iflargerstorage: false,
    ifcustomizableprofil: false,
    isslay: false,
    ifselectprim: false,
    ifselectsecond: false,
    ifselectter: false,
    mediaquery: false,
  }),
  actions: {
    incrementactive1() {
      this.isactive1++;
    },
    decrementactive1() {
      this.isactive1--;
    },
    supdecrementactive1() {
      this.isactive1 -= 2;
    },
    changeonlineservice() {
      this.ifonlineservice = !this.ifonlineservice;
    },
    changelargerstorage() {
      this.iflargerstorage = !this.iflargerstorage;
    },
    changecustomizableprofil() {
      this.ifcustomizableprofil = !this.ifcustomizableprofil;
    },
    changeslay() {
      this.isslay = !this.isslay;
    },
    changeselectprim() {
      this.ifselectprim = !this.ifselectprim;
    },
    changeselectsecond() {
      this.ifselectsecond = !this.ifselectsecond;
    },
    changeselectter() {
      this.ifselectter = !this.ifselectter;
    },
    changemediaquery() {
      this.mediaquery = !this.mediaquery;
    },
  }
} )
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usecount, import.meta.hot))
}



