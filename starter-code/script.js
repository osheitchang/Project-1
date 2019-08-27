
let rockets = {}
let i = 0; 
axios.get("https://api.spacexdata.com/v3/rockets").then(r => {
    
    rockets = r.data;
    console.log(rockets)

})



let pagerRight = document.getElementsByClassName('pager')[1]
pagerRight.onclick = function(e){
    console.log(e, rockets)
    i++;
    if(i > rockets.length-1) {
        i=0;
    }
    showRocket(rockets[i])
    
}

let pagerLeft = document.getElementsByClassName('pager')[0]
pagerLeft.onclick = function(e){
    console.log(e, rockets)
    i--;
    if(i < 0){
        i=rockets.length-1;
    }
    showRocket(rockets[i])
}

function showRocket(rocket){
            document.getElementById('rocket-name').innerText = rocket.rocket_name;
            document.getElementById('first-flight').innerText = rocket.first_flight;
            document.getElementById('rocket-description').innerText = rocket.description;
           document.getElementById('main-img').setAttribute("src", rocket.flickr_images[0]) 
}
console.log(document.getElementById("nextButton"))
let x = 0;
function nextButtom () {
    document.getElementById("nextButton").onclick = (e => {
        console.log("hello")
        x++
        if(x > moments.length-1) {
            x = 0;
        }
        assignMoments()
    })
}
nextButtom()

let moments = {}

function getMoments (e) {
  let history =  axios.get('https://api.spacexdata.com/v3/history').then(m => {
        moments = m.data
        console.log(moments)
        return moments
    })
}
getMoments()

function assignMoments () {
    document.getElementById("title-moment").innerText = moments[x].title
    document.getElementById("details-moment").innerText = moments[x].details
    document.getElementById("launch-date").innerText = moments[x].event_date_utc

}


function launch () {
    
    document.getElementById("launch-button").onmousedown = (e=> {
        //document.querySelector("#launch-button").style.backgroundColor = "#d3090d"
        //alert("Are you sure!???");
        console.log("hello")
        document.getElementsByClassName('rocket')[0].className = "rocket fly"
        // document.getElementById("launch-button").onmouseleave = (e=> {
        //     document.querySelector("#launch-button").style.backgroundColor = "#ff171b"

    })



    //document.getElementById("launch-button").onmouseup = (e) => {
        
        //document.getElementsByClassName('rocket')[0].className = "rocket"
        //e.target.style.backgroundColor = 'blue'
    //}
}
launch()

// //curl -s https://api.spacexdata.com/v3/launches/latest
// // axios.get("https://api.spacexdata.com/v3/launches/latest").then(result=>{
// //     console.log(result)
// // } )

// // axios.get("https://api.spacexdata.com/v3/history").then(result=>{
// //     console.log(result)
// // } )

// // axios.get("https://api.spacexdata.com/v3/info").then(info =>{

// //     console.log(info)
// // })

// // axios.get("https://api.spacexdata.com/v3/rockets").then(rocket =>{
// //     console.log(rocket)
// //     document.body.innerHTML += `<img src=${rocket.data[0].flickr_images[0]} />`
// // })
// let pager = document.getElementsByClassName('pager')
// //console.log(pager.length)
// function changeInfo() {
//     for(x=0;  x < pager.length ;x++){
//         console.log(pager[x])
//         console.log(x)
        

//     pager[x].onclick = (e) => {
//         console.log("INSIDE X:", x)
//           let rocket =  axios.get("https://api.spacexdata.com/v3/rockets").then(r => {
            
//           console.log("REALLY INSIDE X", x)  
//           console.log(r.data[x])  
//             document.getElementById('rocket-name').innerText = r.data[x].rocket_name;
//             document.getElementById('first-flight').innerText = r.data[x].first_flight;
//             document.getElementById('rocket-description').innerText = r.data[x].description;
//             console.log(r.data)
//            document.getElementById('main-img').setAttribute("src", r.data[x].flickr_images[0]) 
//           })
          

//         //   console.log(rocket)
//         //     console.log('Hello')
//         //     console.log(e,this)
//         //     console.log(e.path[2].children[0].getAttribute('class'))
            
//         }
//     }
// }
//    //axios.get("https://api.spacexdata.com/v3/rockets").then(rocket =>{
//       // console.log(rocket)
// //  })
//     // document.getElementById('main-img').innerHTML //= `<img id="main-img" src="" ${rocket.data[0].flickr_images[0]} alt="" />`
// //     console.log(rocket.data[0].flickr_images[0])
// //     document.getElementById('main-img').setAttribute("src",rocket.data[0].flickr_images[0])
// //     src = rocket.data[0].flickr_images[0];
// //  })   
// // }

// changeInfo()







