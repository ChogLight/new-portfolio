<script>
    import {t, locale, locales} from '../../lib/components/i18n.js'
    import { browser } from '$app/environment';
    let darkMode = true
    if (browser) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
</script>
<svelte:head>
	<title>Juan Galvis Portfolio | Projects </title>
	<meta name="portfolio" content="Portfolio projects" />
	<html lang="en" />
</svelte:head>
<a class="absolute top-0 left-0 text-xl md:ml-6 md:mt-6 ml-4 mt-4 text-white" href="/"><i class="fa-solid fa-house"></i></a>
<div class="text-white w-5/6 m-auto md:my-10 my-16 relative">
   
    <div class="grid md:grid-cols-4 grid-cols-3 gap-5 bg-transparent">
        <!-- Poketeam -->
        <div class="md:flex gap-2 bg-purple-900 text-white rounded-xl col-span-3 relative order-1">
            <div class="flex flex-col p-10 gap-10">
                <div class="flex md:flex-row flex-col gap-4">
                    <h1 class="md:text-6xl text-4xl font-bold">PokeTeam</h1>
                    <img src="/pikachu.webp" alt="pikachu" width="90px">
                </div>
                <p class="text-sm md:text-lg">{@html $t("projects.poketeam.description")}</p>
                <div class="bg-purple-900 rounded-xl flex gap-3 text-4xl">
                    <i class="devicon-svelte-plain"></i>
                    <i class="devicon-tailwindcss-plain"></i>        
                    <i class="devicon-mongodb-plain-wordmark"></i>
                    <i class="devicon-html5-plain"></i>
                    <i class="devicon-css3-plain"></i>
    
                </div>
            </div>
            <a href="https://poketeam-chog.netlify.app/" target="_blank"><i class="fa-solid fa-arrow-right absolute top-0 right-0 mr-8 mt-5 text-xl"></i></a>
            
        </div>
        <div class="grid grid-rows-2 gap-4 order-2 md:col-span-1 col-span-3">
            <div class="bg-purple-900 rounded-xl p-2">
                <img src="/poketeam/pokedex.png" alt="pokedex">
            </div>
            <div class="bg-purple-900 rounded-xl p-2">
                <img src="/poketeam/poketeam.png" alt="pokedex">
            </div>
           
        </div>
        <!-- Expenses calculator -->
        <div class="grid grid-rows-2 gap-4 md:order-3 order-4  md:col-span-1 col-span-3">
            <div class="bg-purple-900 rounded-xl p-2">
                <img src="/expenses-control.png" alt="expenses">
            </div>
            <div class="bg-purple-900 rounded-xl p-2">
                <img src="/expenses_control2.png" alt="expenses">
            </div>
           
        </div>
        <div class="md:flex gap-2 bg-purple-900 text-white rounded-xl col-span-3 relative md:order-4 order-3">
            <div class="flex flex-col p-10 gap-10">
                <h1 class="md:text-6xl text-4xl font-bold">{@html $t("projects.expenses.title")} 💸 </h1>
                <p class="text-sm md:text-lg">{@html $t("projects.expenses.description")}</p>
                <div class="bg-purple-900 rounded-xl flex gap-3 text-4xl">
                    <i class="devicon-react-original"></i>    
                    <i class="devicon-html5-plain"></i>
                    <i class="devicon-css3-plain"></i>
    
                </div>
            </div>
            <a href="https://expenses-control-chog.netlify.app/" target="_blank"><i class="fa-solid fa-arrow-right absolute top-0 right-0 mr-8 mt-5 text-xl"></i></a>
            
        </div>
         <!-- PFC OneNet-->
        <div class="md:flex gap-2 bg-purple-900 text-white rounded-xl col-span-3 relative order-5">
            <div class="flex flex-col p-10 gap-10">
                <h1 class="md:text-6xl text-4xl font-bold">PFC OneNet 📁 </h1>
                <p class="text-sm md:text-lg">{@html $t("projects.pfc.description")}</p>
                <div class="bg-purple-900 rounded-xl flex gap-3 text-4xl">
                    <i class="devicon-express-original"></i>            
                    <i class="devicon-html5-plain"></i>
                    <i class="devicon-css3-plain"></i>
    
                </div>
            </div>
            
        </div>
        <div class="grid grid-rows-2 gap-4 order-6  md:col-span-1 col-span-3">
            <div class="bg-purple-900 rounded-xl p-2">
                <img src="/pfc-onenet.png" alt="pfc">
            </div>
            <div class="bg-purple-900 rounded-xl p-2">
                <img src="/pfc2.png" alt="pfc">
            </div>
           
        </div>
    </div>
</div>