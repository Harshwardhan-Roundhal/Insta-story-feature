var arr = [
    {
        dp:"https://plus.unsplash.com/premium_photo-1669850858893-068d0a6bf144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1617724748068-691efeeaf542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1722019567841-fa4d11c8bab7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww"
    }
]

var storiyan = document.querySelector("#storiyan")
var clutter =""
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
                <img id = "${idx}" src="${elem.dp}" >                
            </div>`
})

storiyan.innerHTML=clutter

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display ="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
})

setTimeout(function(){
    document.querySelector("#full-screen").style.display ="none"
},5000)