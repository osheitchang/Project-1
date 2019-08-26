//curl -s https://api.spacexdata.com/v3/launches/latest
axios.get("https://api.spacexdata.com/v3/launches/latest").then(result=>{
    console.log(result)
} )

axios.get("https://api.spacexdata.com/v3/history").then(result=>{
    console.log(result)
} )

axios.get("https://api.spacexdata.com/v3/info").then(info =>{

    console.log(info)
})