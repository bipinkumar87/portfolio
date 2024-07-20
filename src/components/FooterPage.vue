<template>
    <div class="fooret bg-slate-500" id="footer">
        <div class="container grid lg:grid-cols-2 sm:grid-cols-1">
            <div class="left">
                <div class="about">
                    <div class="email flex my-8 justify-center">
                        <img src="../assets/email.png" alt="" class="w-7 h-7 mx-6">
                        <p>Email : <span>sahajsewa08@gmail.com</span></p>
                        

                    </div>
                </div>
                <div class="icons flex my-6 mx-4 justify-center">
                    <button class="mx-7" @click="visitInstagram"><img src="../assets/insta.png" alt=""></button>
                    <button class="mx-7" @click="visitTwitter"><img src="../assets/twitterx.png" alt=""></button>
                    <button class="mx-7" @click="visitYouTube"><img src="../assets/youtube.png" alt=""></button>
                </div>
                <div class="icons flex my-10 mx-4 justify-center   pt-7 ">
                    <button class="mx-7" @click="visitGfg"><img src="../assets/gfg.png" alt="GfG"></button>
                    <button class="mx-7" @click="visitGitHub"><img src="../assets/git.png" alt="github"></button>
                    <button class="mx-7" @click="visitLeetCode"><img src="../assets/leet.png" alt="LeetCode"></button>
                    <button class="mx-7" @click="visitLinkedIn"><img src="../assets/linkdin.png" alt="linkedin"></button>
                </div>
            </div>
            <div class="rig flex justify-center">
                <div class="w-80 mx-auto flex-col flex" >
                    <input type="text" placeholder="Enter your name" class="w-80 h-14 mt-7">
                    <input type="email" name="" id="" placeholder="Enter your email" class="w-80 h-14 mt-7">
                    <textarea name="" id="" placeholder="Enter your message :" class="w-80 h-14 mt-7"></textarea>
                    <button class="w-1/2 h-14 my-7 bg-blue-700 rounded-full text-white font-bold mx-auto">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name :"FooterPage",
        methods: {
        visitGitHub() {
        window.location.href = 'https://github.com/bipinkumar87';
        },
        visitGfg() {
            window.location.href = 'https://auth.geeksforgeeks.org/user/sahajsewa5533/profile';
        },
        visitLeetCode() {
        window.location.href = 'https://leetcode.com/bipin123';
        },
        visitLinkedIn() {
        window.location.href = 'https://www.linkedin.com/in/bipin-kumar-442083210';
        },
        visitInstagram() {
      window.location.href = 'https://www.instagram.com/bipinprajapati373';
    },
    visitTwitter() {
      window.location.href = 'https://twitter.com/@bipinkumar85674';
    },
    visitYouTube() {
      window.location.href = 'https://www.youtube.com/@thefreelearning720';
    }
     }
    }
</script>

<style scoped>

</style>