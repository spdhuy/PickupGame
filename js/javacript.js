/**
 * Created by huy on 6/20/17.
 */
var img_Name = ["brazil.png","france.png","india.png","kurdistan.png",
                "mexico.png","paraguay.png","south-africa.png",
                "taiwan.png","turkey.png","viet-nam.png",
    "brazil.png","france.png","india.png","kurdistan.png",
    "mexico.png","paraguay.png","south-africa.png",
    "taiwan.png","turkey.png","viet-nam.png"];
var img_Status = [0,0,0,0,0,0,0,0,0,0,
                    0,0,0,0,0,0,0,0,0,0];
var img_Flag =[];
var chosenFlagName = "";
var chosenFlagTag;
function setDefaultForFlags(){
    $('.img').attr("src","./image/flag.png");
    $('img').css("box-shadow","4px 4px 9px black");
    while(img_Name.length>0){
        var img_Name_Get = Math.round(Math.random()*(img_Name.length-1));
        img_Flag.push(img_Name[img_Name_Get]);
        img_Name.splice(img_Name_Get,1);
    }
}

function setImageForFlags(){
    var imgFlags = document.getElementsByClassName("img_flag");
    for(var i=0;i<img_Flag.length;i++){
        imgFlags[i].src= "./image/"+img_Flag[i];
    }
}

function updateStatusFlag(){
    var imgFlags = document.getElementsByClassName("img_flag");
    for(i=0;i<img_Flag.length;i++)
        if(img_Status[i] === 1) {
            var check_if_flag_showed = -1;
            for(j=0;j<img_Flag.length;j++)
                if(img_Status[j]===1&&j!==i){
                    check_if_flag_showed = j;
                    break;
                }
            if(check_if_flag_showed!==-1) {
                var same_Flag = img_Flag[i] === img_Flag[check_if_flag_showed];
                if (same_Flag === true) {
                    img_Status[i] = -1;
                    img_Status[j] = -1;
                }
                else {
                    img_Status[i] = 2;
                    img_Status[j] = 2;
                }
            }
    }
}
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}
function updateImgFlag(){
    var imgFlags = document.getElementsByClassName("img_flag");
    for(i=0;i<img_Flag.length;i++)
        if(img_Status[i]===-1){
            imgFlags[i].src = "";
            $(imgFlags[i]).css("box-shadow","none");
            $(imgFlags[i]).css("background-color","#FFFFFF");
        }
        else if(img_Status[i]===2){
            $(imgFlags[i]).parent().parent().flip('toggle');
            img_Status[i] = 0;
        }
}
$(document).ready(function(){
    setDefaultForFlags();
    setImageForFlags();
    $('.flag').flip({
            trigger: 'manual',
    });
    $('.flag').click(function () {
        $(this).flip('toggle', function(){
            var imgFlags = document.getElementsByClassName("img_flag");
            for(i=0;i<imgFlags.length;i++)
                if($(this).children('.back').children('.img_flag')[0]===imgFlags[i]&&img_Status[i]>=0){
                    img_Status[i] = 1-img_Status[i];
                    if(img_Status[i]===1)  updateStatusFlag();
                    break;
                }
            updateImgFlag();
        });

        console.log(img_Status);
    })
});

