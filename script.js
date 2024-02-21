var arr = [
    {name:"Sourav Jamdhade",post:"Developer",about:"kjvgsdkjrgkjsrhf",stat:"Stranger"},
    {name:"Shushant",post:"Developer",about:"kjvgsdkjrgkjsrhf",stat:"Stranger"},
    {name:"Deepak",post:"Developer",about:"kjvgsdkjrgkjsrhf",stat:"Stranger"},
    {name:"Shreyans",post:"Developer",about:"kjvgsdkjrgkjsrhf",stat:"Stranger"},
    {name:"Gourav Raghuwanshi",post:"Developer",about:"kjvgsdkjrgkjsrhf",stat:"Stranger"},
]


function show(){
    var clutter ="";

arr.forEach(function(val,index){
    clutter += `<div id="card">
    <h1>${val.name}</h1>
    <h3>${val.post}</h3>
    <p>${val.about}</p>
    <h2 id="${val.stat.split(" ").join("")}">${val.stat}</h2>
    <button id="${index}">${val.stat ==="Stranger" ?"Add":"Remove"}</button>
</div>`
});

document.querySelector("#cards").innerHTML=clutter;

}
show();

document.querySelector("#cards").addEventListener("click",function(dets){
    if(arr[dets.target.id].stat ==="Stranger"){
        arr[dets.target.id].stat ="Friend Request Sent";
        setTimeout(function(){
            arr[dets.target.id].stat ="Friend"
            show();
        })
    }
    else{
        arr[dets.target.id].stat ="stranger"
    }
    show();
});
