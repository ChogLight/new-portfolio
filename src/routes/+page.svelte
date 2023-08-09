
<script>
    /** @type {import('./$types').PageData} */
    import {t, locale, locales} from '../lib/components/i18n.js'
    import Typewriter from "svelte-typewriter/Typewriter.svelte";
    import { browser } from '$app/environment';
    import NowPlaying from "../lib/components/NowPlaying.svelte";
	import { onMount } from "svelte";
    export let data
    // Initial value for spotify
    let song = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({body:{
                isPlaying:false
            }});
        }, 300)
    });
    //Dark mode
    let darkMode = true
    let languages = ['Javascript', 'HTML', 'CSS', 'TailwindCSS', 'React','Next.js', 'Express', 'Git', 'Svelte', 'Figma', 'Python']
    //Dark mode switch
    function handleSwitchDarkMode() {
        darkMode = !darkMode;

        darkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    }
    //Dark mode changer
    if (browser) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
    onMount(async() => {
        song = await getSong()
    })

    //Get playing song
    async function getSong(){
        const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;
        const res = await fetch(now_playing_endpoint, {
            headers: {
                Authorization: `Bearer ${data.body.access_token}`
            }
        })

        if (res.status === 204 || res.status > 400) {
            return {body: { isPlaying: false }}
        }

        const song = await res.json();
        const isPlaying = song.is_playing;
        const title = song.item.name;
        const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
        const album = song.item.album.name;
        const albumImageUrl = song.item.album.images[1].url;
        const songUrl = song.item.external_urls.spotify;
        const progress = song.progress_ms
        const duration = song.item.duration_ms
        return {
        body: {title, artist, album, isPlaying, albumImageUrl, songUrl, progress, duration},
        }
    }
    
    //If song is playing short interval (1s) if not long interval (60s)
    setInterval(async() => {
        song = await getSong()
        if((await getSong()).body.isPlaying){
            let songApi = setInterval(async() => {
            song = await getSong()
            if(song.body.isPlaying === false){
                clearInterval(songApi)
            }
            },1000)
        }
    },20000)

    
</script>
<svelte:head>
	<title>Juan Galvis Portfolio | Home</title>
	<meta name="portfolio" content="Portfolio home" />
</svelte:head>
<div class="text-white w-5/6  m-auto my-10">
   <div class="grid md:grid-cols-4 grid-cols-3 gap-5 bg-transparent">
        <!-- About me -->
        <div class="md:flex gap-2 bg-purple-900 text-white rounded-xl col-span-3">
            <div class="flex flex-col gap-4 my-16 p-5 self-end">
                <div class="flex md:flex-row flex-col gap-5">
                    <h1 class="text-4xl font-bold">{@html $t("homepage.title")}</h1>
                    <img width='40px' height="50px" src="/hand.webp" alt="hand">
                </div>
                <p class="md:text-lg text-sm text-left">
                   {@html $t("homepage.welcome")}
                        <Typewriter  --cursor-color="#7a117f" --cursor-width="10px" mode="loop" interval="50" unwriteInterval= "50">
                            {#each languages as language}
                            <h1 class="md:text-6xl text-2xl font-bold">{language}</h1>
                            {/each}
                        </Typewriter>                    
                </p>
            </div>
            <img width="450px" height="600px" class="" src="/profile_pic.webp" alt="profile_pic"/>
        </div>
        <!-- Language and dark mode -->
        <div class="grid grid-rows-2 gap-5 place-items-stretch">
            <div class=" bg-purple-900 rounded-xl flex flex-col items-center justify-center">
                <h1 class="md:text-6xl text-4xl font-bold">
                    <select class="bg-purple-900 capitalize p-3" bind:value={$locale}>
                        {#each locales as l}
                          <option class=" capitalize text-3xl" value={l}>{l}</option>
                        {/each}
                      </select>
                </h1>
            </div>
            <div class=" bg-purple-900 rounded-xl flex flex-col gap-3 items-center justify-center p-2 md:p-0">
                <input
                    class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    bind:checked={darkMode}
                    on:click={handleSwitchDarkMode} />
                    <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer md:text-lg text-xs font-bold"
                        for="flexSwitchCheckDefault"
                        >
                        {darkMode? 'Dark mode': 'Light mode'}
                    </label>
            </div>
            
        </div>
         <!-- Email -->
         <div class=" md:flex hidden bg-emerald-300 rounded-xl items-center justify-center relative h-64 col-span-2 md:col-span-1">
            <i class="fa-solid fa-envelope text-7xl"></i>
            <a href="mailto:sebas8812@gmail.com" target="_blank" class="absolute top-0 right-0 m-5"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        <!-- LinkedIn link and email(email shows mobile only) -->
        <div class="grid md:grid-rows-1 grid-rows-2 grid-cols-1 gap-5 col-span-2 md:col-span-1">
            <div class="relative bg-[#0077b5]  rounded-xl flex flex-col gap-3 items-center justify-center px-10 py-16">
                <i class="fa-brands fa-linkedin md:text-7xl text-4xl"></i>
                <a href="https://www.linkedin.com/in/jsgalvis/" target="_blank" class="absolute top-0 right-0 m-5"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div class="md:hidden bg-emerald-300 rounded-xl flex items-center justify-center relative">
                <i class="fa-solid fa-envelope md:text-7xl text-4xl"></i>
                <a href="mailto:sebas8812@gmail.com" target="_blank" class="absolute top-0 right-0 m-5"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
        <!-- Projects -->
        <div class="md:col-span-2 bg-[url('/projects.webp')] rounded-xl relative col-span-3">
            <div class="w-full h-full flex flex-col gap-5 p-7 justify-left bg-purple-900/50 backdrop-brightness-75 rounded-xl">
                <h1 class="text-4xl font-bold">{@html $t("homepage.projects.title")}</h1>
                <p class="text-lg font-semibold">
                    {@html $t("homepage.projects.content")}
                </p>
            </div>
            <a href="/projects"><i class="fa-solid fa-arrow-right absolute top-0 right-0 mr-8 mt-5 text-xl"></i></a>
        </div>
        <!-- Github -->
        <div class="md:col-span-2 bg-[url('/github.mp4')] rounded-xl  relative col-span-3">
            <div class="w-full h-full z-1 absolute rounded-xl flex bg-white">
                <video class="rounded-xl" autoplay muted loop id="/github.mp4">
                    <source src="/github.mp4" type="video/mp4">
                  </video>
                  <video class="rounded-xl md:block hidden" autoplay muted loop id="/github.mp4">
                    <source src="/github.mp4" type="video/mp4">
                  </video>
            </div>
            <div class="w-full h-full flex flex-col gap-5 p-7 justify-between bg-black/30 backdrop-brightness-75 rounded-xl z-2">
                <i class="fa-brands fa-github left-0 top-0 text-4xl ml-2 mt-2"></i>
                <div class="flex flex-col gap-3">
                    <h1 class="text-4xl font-bold"> Github</h1>
                    <p class="text-lg">{@html $t("homepage.github.content")}</p>
                </div>
                <a href="https://github.com/ChogLight" target="_blank" class="absolute top-0 right-0 m-5"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
        <!-- Tech stack -->
        <div class="p-5 md:p-0 col-span-3 md:col-span-1 bg-pink-300 rounded-xl flex justify-center items-center">
            <div class="grid grid-cols-4 gap-4 gap-y-4 text-5xl place-content-center">
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-brands fa-python"></i>
                <i class="fa-brands fa-git-alt"></i>
                <i class="devicon-svelte-plain"></i>
                <i class="devicon-nextjs-original"></i>
                <i class="devicon-mongodb-plain-wordmark"></i>
                <i class="devicon-tailwindcss-plain"></i>
                <i class="devicon-express-original"></i>
                <i class="devicon-javascript-plain"></i>
            </div>
        </div>
        <!-- Spotify listening to:-->
        {#await song}
        <p>loading</p>
        {:then song}
            <div class="bg-slate-500 col-span-3 md:col-span-1 rounded-xl flex justify-center">
                <div 
                style={`background-image: url(${song.body.isPlaying ?song.body.albumImageUrl:'/spotify.webp'})`}
                class={`md:col-span-1 rounded-xl relative col-span-3 h-[300px] w-[300px]`}>
                    <NowPlaying song = {song.body}/>
                
                </div>
            </div>
            
        {/await}
       
        
        
   </div>
</div>





