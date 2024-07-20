<template>
<div class="contact bg-transparent right-24 bottom-24 w-1/4 p-4 fixed  border-indigo-600 border-2 float-right rounded-3xl" v-if="showForm">
    <form action="" class="flex flex-col  bottom-9 bg-transparent  p-2  border-indigo-600 border-none ">
        <button @click="toggleForm"><img src="../assets/close.png" alt="" class="float-end"></button>
        <span class="text-green-600 font-semibold text-left">Enter your name :</span>
        <input type="text" placeholder="Enter your full name" class="mx=4 bg-gray-700 shadow-slate-400 shadow-lg text-white font-bold text-2xl border-none px-5">
        <span class="text-green-600 font-semibold text-left">Enter your valid email :</span>
        <input type="email" name="" id="" placeholder="enter your email " class="mx=4 mt-4 bg-transparent text-white font-bold text-2xl border-none px-5  bg-gray-700 shadow-slate-400 shadow-lg">
        <span class="text-green-600 font-semibold text-left ">Write your message :</span>
        <textarea name="" id="" cols="30" rows="5" placeholder="Message :" class="mx=4 mt-4 bg-transparent text-black font-bold text-2xl border-none px-5  bg-gray-700 shadow-slate-400 shadow-lg"></textarea>
        
    </form>
    <div class="butt flex justify-between px-8">
        <button class="bg-lime-600 text-white font-bold text-lg rounded-full py-2 px-6">Submit</button>
        <button class="bg-rose-500  text-white font-bold text-lg rounded-full py-2 px-6">Reset</button>
    </div>
</div>
</template>

<script>
    export default {
  name: 'ContactUs',
  data() {
    return {
      showForm: true,
      
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    
  }
};
</script>

<style scoped>

</style>