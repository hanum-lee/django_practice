let data_frame = {
    "trial_num": null,
    "lane_start":null,
    "stim":null,
    "stim_onset":null,
    "inter_trial":null,
    "loop_speed":null,
    "lane_change_onset":null,
    "sled_status":null,
    "grab_time":null,
    "accuracy":null,
    "switch_timer":null,
}


let reactiontimes = [];
function getRandomColor() {
        
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    } //ends for loop 
    return color; 


} // ends getRandomColor Function
    

var clickedTime; var createdTime; var reactionTime; 
    
function makeBox() {
    var time=Math.random();
    time=time*3000;
    
    setTimeout(function() {
    
        if (Math.random()>0.5) {
        
            document.getElementById("box").style.borderRadius="100px";
            
            } else {
            
                document.getElementById("box").style.borderRadius="0";
            }
            
        var top= Math.random();
            top= top*300;
        var left= Math.random();
            left= left*500; 
            
        document.getElementById("box").style.top = top + "px";
        document.getElementById("box").style.left = left + "px"; 
    
        document.getElementById("box").style.backgroundColor=getRandomColor();
    
        document.getElementById("box").style.display="block";
        
        createdTime=Date.now();
        
    }, time); 

}
    
document.getElementById("box").onclick=function() {

    clickedTime=Date.now();
    
    reactionTime=(clickedTime-createdTime)/1000;
    
    document.getElementById("printReactionTime").innerHTML="Your Reaction Time is: " + reactionTime + "seconds";
    
    this.style.display="none";
    console.log("Testing");
    makeBox();
    
    
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');
    
document.addEventListener('keydown',function(event){
    if(event.key == "ArrowLeft" || event.key == "ArrowRight"){
    clickedTime=Date.now();
    
    reactionTime=(clickedTime-createdTime)/1000;
    
    document.getElementById("printReactionTime").innerHTML="Your Reaction Time is: " + reactionTime + "seconds";
    
    document.getElementById("box").style.display="none";
    reactiontimes.push(reactionTime);
    makeBox();
    console.log("Testing2");
    }
    if(event.key == "Enter"){
        console.log("Testing3");
        document.getElementById("arrayofTime").innerHTML = "List: " + reactiontimes;
        document.getElementById("jsonTest").innerHTML = "JSON: " + data_frame["accuracy"]; 
        $.ajax({
            url:'event/',
            type: 'POST',
            contentType: 'application/json; charset=uft-8',
            data: JSON.stringify(data_frame),
            dataType: 'text',
            success: function(result){
                alert(result.Result);
            }
        })
    }
});

makeBox(); 