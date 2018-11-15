$(function (){
    var video = $('.v1').get(0);
    var allTime = null;
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
        //console.log(d);
        //console.log(video.duration);
        allTime = video.duration;
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
        //var ctime = video.currentTime;
        video.currentTime = 20 + 2;
        //console.log(ctime+2);
    });

    //更新当前播放时间
    $('.v1').on('timeupdate',function (d){

        var currTime = video.currentTime;
        var curPecent = (currTime/allTime).toFixed(2)*100;
        console.log(video.currentTime);

        $('.barGo').css({width:curPecent+'%'});
    });

    //注意：音量区间：0-1之间
    var voNum = 0;
    //音量--
    $('.volumeReduce').click(function (){
        voNum--;

        video.volume = voNum/10;
        console.log(video.volume);

    });

    //音量++
    $('.volumeAdd').click(function (){
        voNum++;
        video.volume = voNum/10;
        console.log(video.volume);
    });




    //拖拽


        $('.barGo').mousedown(function (e){

            var isMove = true;
            var offsetLeft = $('.barGo').offset().left;
            $('.bar').mousemove(function (e){
                if(isMove){
                    var currWid = e.pageX-offsetLeft;
                    $('.barGo').css({width:currWid});
                    video.currentTime = allTime*(currWid/100).toFixed(2);
                    console.log(allTime*(currWid/100).toFixed(2));
                } 

            });
            $(document).mouseup(function (e){
                isMove = false;
            });
        });

});



