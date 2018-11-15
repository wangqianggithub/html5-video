$(function (){
    var video = $('.v1').get(0);
    $('.play').click(function (){
        //console.log($('.v1'));
        //console.log($('.v1').get(0));
        //console.log(document.querySelector('.v1'));
        $('.v1').get(0).play();
    });
    $('.pause').click(function (){
        //console.log($('.v1'));
        //console.log($('.v1').get(0));
        //console.log(document.querySelector('.v1'));
        $('.v1').get(0).pause();
    });

    //console.log(video.duration);
    $('.v1').on('loadedmetadata',function (d){
        console.log(d);
        console.log(video.duration);
    });

    //
    $('.currLocal').click(function (){
        console.log(video.currentTime);
    });

    //快退
    $('.backPlay').click(function (){
        //video.currentTime = video.currentTime - 2;
        console.log(video.currentTime);
    });

    //快进
    $('.goPlay').click(function (){
        //console.log(typeof video.currentTime);
        var ctime = video.currentTime;
        video.currentTime = ctime + 2;
        console.log(ctime+2);
    });



    dragBar();

});

//拖拽
function dragBar(){
    $('.barGo').mousedown(function (e){
        var isMove = true;
        var offsetLeft = $('.barGo').offset().left;
        $('.bar').mousemove(function (e){
            if(isMove){
                var currWid = e.pageX-offsetLeft;
                $('.barGo').css({width:currWid});
            }

        });
        $('.bar').mouseup(function (e){
            isMove = false;
        });
    });
}

