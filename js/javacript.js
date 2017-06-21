/**
 * Created by huy on 6/20/17.
 */
var img_Name = ["brazil.png","france.png","india.png","kurdistan.png",
                "mexico.png","paraguay.png","south-africa.png",
                "taiwan.png","turkey.png","viet-nam.png"];
var chosenFlagName = "";
var chosenFlagTag;
function setDefaultForFlags(){
    $('.img').attr("src","./image/flag.png");
    $('img').css("box-shadow","4px 4px 9px black");
}

function setImageForFlags(){
    var imgFlags = document.getElementsByClassName("img_flag");
    for(var i=0;i<img_Name.length;i++){
        imgFlags[i].src= "./image/"+img_Name[i];
    }
}

$(document).ready(function(){
    setDefaultForFlags();
    setImageForFlags();
    $('.flag').flip({
            trigger: 'manual',
            speed : 1000
    });
    $('.flag').click(function () {

        $(this).flip('toggle');
            var img_flag = $(this).children('.back').children('.img_flag')[0];
            var choosingFlagName = img_flag.src.toString();
            if (chosenFlagName !== "") {
                var sameFlag = choosingFlagName.indexOf(chosenFlagName) >= 0;
                if (sameFlag) {
                    console.log("2");
                    img_flag = "";
                    chosenFlagTag = "";
                }

                else {
                    console.log("1");
                    $(chosenFlagTag).flip('toggle');
                    choosingFlagName = "";
                }
            }
             else {
                 chosenFlagName = choosingFlagName;
                 chosenFlagTag = this;
             }


    })
});

