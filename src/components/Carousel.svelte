<script>
    export let images
    let i = 0
    let button_visibility = 'opacity-100'
    let playing = false
    let icon = "fa-solid fa-play"
    let handle
    let changeBackwards= () => {
      if(i == 0){
        i = images.length-1
      }
      else{
        i--
      }
    }

    let play = () => {
      if(!handle){
          handle = setInterval(() => {
                    changeBackwards()
                  },2500)
      }
    }
    let playOnce = () => {
        button_visibility = 'opacity-0'
        playing = true
        icon = 'fa-solid fa-pause'
    }
    let checkPlayState = () => {
      if(!playing){
        playOnce()
        play()
      }
      else{
        playing = false
        icon = 'fa-solid fa-play'
        clearInterval(handle)
        handle = null
      }
    }
</script>
<div class="carousel">
    <div class="group carousel-item relative w-full">
        <img src={images[i]} class="w-full rounded-2xl max-h-[265.233px]" alt="carousel" />
        <div class="absolute flex justify-between transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
          <button 
            on:click={()=>{checkPlayState()}} 
            class={`group-hover:opacity-100 duration-700 btn btn-circle ${button_visibility}`}><i class={icon}></i></button> 
        </div>
      </div> 
  </div>