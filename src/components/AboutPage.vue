<template>
<div class="about bg-gradient-to-r from-violet-500 to-fuchsia-500 pt-20" id="home">
    <h1 class="text-center font-bold text-4xl text-white">About Me</h1>
    <div class="container mx-auto grid lg:grid-cols-2 gap-5 sm:grid-cols-1 box-border">
        <div class="left-content my-4 mx-6">
            <p class="text-justify text-white font-semibold mt-10 text-xl">I am Bipin Kumar, a 2023 B.Tech graduate in Computer Science. I graduated from Dronacharya Group of Institutions, Greater Noida, with 70% marks. I have a good understanding of web development technologies like HTML, CSS, JavaScript, Bootstrap, Tailwind, and Vue.js. I am also proficient in Core Java, Data Structures, and Spring Boot.
              I am known for my quick learning ability, honesty, and hard work. I bring my technical expertise, proactive attitude, and commitment to excellence to any team. If you are looking for a good candidate for roles in software development and engineering, I am confident that I am a great fit.</p>
        </div>
        <div class="right-content my-8 ">
            <div class="first-layer">
                <div class="second-layer ">
                    <img src="../assets/myimg.jpg" alt="" class="w-80 h-80 mx-auto rounded-tl-3xl rounded-br-3xl">
                </div>
            </div>
        </div>
        
    </div>
    <router-view />
    <button class="m-10  text-white font-bold bg-green-800 rounded-full px-5 py-3 bottom-2 ring-2 ring-white" @click="downloadResume">resume</button>
    <!-- <a class="lg:m-10 text-white font-bold bg-blue-500 rounded-full px-5 py-3 bottom-2 ring-2 ring-white max-sm:hidden max-md:hidden max-lg:hidden"  href="/contact" @click="showForm = !showForm">Contact Us</a> -->
</div>

</template>

<script >
//import {ref} from 'vue'

export default {
  name: 'AboutPage',
  methods: {
    downloadResume() {
      // Create a link element
      const link = document.createElement('a');
      link.href = `${process.env.BASE_URL}resume.pdf`; // Path to the resume file
      link.download = 'Bipin_Kumar_Resume.pdf'; // The name of the downloaded file
      link.click(); // Programmatically click the link to trigger the download
    }
  }
}
</script>

<style scoped>

</style>