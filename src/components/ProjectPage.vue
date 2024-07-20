<template>
  <div class="project-page bg-white pt-20 my-9 box-border" id="pro">
    <h1 class="text-black font-bold text-4xl my-8">Projects</h1>
    <div class="container  grid lg:grid-rows-3 sm:grid-cols-1  flex-row  ">
      <div class="html-css-js  sm:mt-5 max-sm:mt-5 flex justify-between max-sm:flex-col md:flex-row max-sm:border-2 max-sm:py-5 max-sm:border-blue-700">
        <div
          class="inner-box w-56 border-amber-200 border-2 box-border p-4 rounded-tl-3xl rounded-br-3xl ml-4 max-sm:mx-auto max-sm:mb-3"
        >
          <div class="image w-48 h-32 mx-auto border-2 mb-3 box-border">
            <img src="../assets/background.jpg " alt="" class="box-border" />
          </div>
          <div class="info">
            <p class="text-black text-justify">
              Project are create by using of
              <span class="text-green-800 font-semibold"
                >HTML,CSS,JS and BootStrap</span
              >
            </p>
          </div>
          <!-- <div
            class="btn  h-8 rounded-full ring-2 ring-white pt-1 my-4"
          >
             <a href="HTMLCSSJS" @click="htmlCssJs" target="_self">HtmlcssJs</a> 
             <img src="../assets/arr.png" alt="" class="w-28 h-1/2">
          </div> -->
        </div>

        <div class="pro grid lg:grid-cols-4 bg-slate-500 w-4/5 sm:grid-cols-1 mx-auto">
          <div class="every-pro border-2 border-amber-300 rounded-2xl m-3 p-3">
            <p class=" my-10 text-white font-bold">This is a navBar by using of html css and js</p>
            <a href="https://brilliant-vacherin-030b4c.netlify.app" class="text-white border-2 border-cyan-300 py-3 px-5 bg-blue-900 rounded-full my-10">click Me!</a>
          </div>
          <div class="every-pro">2</div>
          <div class="every-pro">3</div>
          <div class="every-pro">4</div>
        </div>

      </div>
      <div class="vue-tailwind  sm:mt-5 max-sm:mt-5 flex justify-between max-sm:flex-col md:flex-row max-sm:border-2 max-sm:py-5 max-sm:border-blue-700">
        <div
          class="inner-box w-56 border-amber-200 border-2 box-border p-4 rounded-tl-3xl rounded-br-3xl ml-4 max-sm:mx-auto max-sm:mb-3"
        >
          <div class="image w-48 h-32 mx-auto border-2 mb-3 box-border">
            <img src="../assets/v_t.png " alt="" class="box-border" />
          </div>
          <div class="info">
            <p class="text-black text-justify">
              Project are create by using of
              <span class="text-green-800 font-semibold"
                >Vue.js and tailwind</span
              >
            </p>
          </div>
          <!-- <div
            class="btn bg-blue-600 h-8 rounded-full ring-2 ring-white pt-1 my-4"
          >
           <button class="text-white">Show Projects</button> 
          </div> -->
        </div>

        <div class="pro grid lg:grid-cols-4 bg-slate-500 w-4/5 sm:grid-cols-1 mx-auto">
          <div class="every-pro border-2 border-amber-300 rounded-2xl m-3 p-3">
            <p class=" my-10 text-white font-bold">Project name are instaCash .That ate develope by using of vue.js and tailwind .</p>
            <a href="https://splendorous-valkyrie-7bca03.netlify.app" class="text-white border-2 border-cyan-300 py-3 px-5 bg-blue-900 rounded-full my-10">click Me!</a>
          </div>
          <div class="every-pro">2</div>
          <div class="every-pro">3</div>
          <div class="every-pro">4</div>
        </div>

      </div>


      <div class="java-spring-boot flex justify-between sm:mt-5 max-sm:mt-5 w-full  max-sm:flex-col md:flex-row max-sm:border-2 max-sm:py-5 max-sm:border-blue-700 ">
        <div
          class="inner-box w-56 border-amber-200 border-2 box-border p-4 rounded-tl-3xl rounded-br-3xl justify-center ml-4 max-sm:mx-auto max-sm:mb-3 "
        >
          <div class="image w-48 h-32 mx-auto border-2 mb-3 box-border">
            <img src="../assets/spring.png " alt="" class="box-border h-28"  />
          </div>
          <div class="info">
            <p class="text-black text-justify box-border">
              Project are create by using of <span class="text-green-800 font-semibold ">Java Spring springBoot hibernate and Mysql</span>
            </p>
          </div>
          <!-- <div
            class="btn bg-blue-600 h-8 rounded-full ring-2 ring-white pt-1 my-4"
          >
            <button class="text-white">Show Projects</button> 
          </div> -->
        </div>

        <div class="pro grid lg:grid-cols-4 bg-slate-500 w-4/5 sm:grid-cols-1 mx-auto">
          <div class="every-pro border-2 border-amber-300 rounded-2xl m-3 p-3">
            <p class=" my-10 text-white font-bold">This is a navBar by using of html css and js</p>
            <a href="https://brilliant-vacherin-030b4c.netlify.app" class="text-white border-2 border-cyan-300 py-3 px-5 bg-blue-900 rounded-full my-10">click Me!</a>
          </div>
          <div class="every-pro">2</div>
          <div class="every-pro">3</div>
          <div class="every-pro">4</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
  export default {
    name:"ProjectPage",
    setup() {
    const router = useRouter();
    
    const htmlCssJs = () => {
      window.open(router.resolve({ name: 'Htmlcss' }).href, '_blank');
    }

    return {
      htmlCssJs,
    };
  },
  }
</script>

<style scoped></style>
