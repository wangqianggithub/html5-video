$(function (){


    //video.playbackRate  播放速度


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


    //
    $('.currLocal').click(function (){
        //console.log(video.currentTime);
    });

    //快退
    $('.backPlay').click(function (){
        //video.currentTime = video.currentTime - 2;
        //console.log(video.currentTime);
    });

    //快进
    $('.goPlay').click(function (){
        console.log('当前资源长度：'+video.duration);
        console.log(video.currentTime);
        video.currentTime = video.currentTime + 2;

    });

    //更新当前播放时间
    $('.v1').on('timeupdate',function (d){

        var currTime = video.currentTime;
        var curPecent = (currTime/allTime).toFixed(2)*100;
        //console.log(video.currentTime);

        $('.barGo').css({width:curPecent+'%'});
    });

    //注意：音量区间：0-1之间
    var voNum = 0;                  //最低音量
    var voMax = 100;                //最高音量
    var voCurr = 50;
    video.volume = voCurr/100;     //设置当前音量
    $('.volumes span').css({height:voCurr+'%'});        //当前音量高度默认赋值
    //音量--
    $('.volumeReduce').click(function (){
        voCurr-= 10;
        if(voCurr <= 0){
            voCurr = 0;
        }
        video.volume = voCurr/voMax;
        console.log(video.volume);
        $('.volumes span').css({height:(voCurr/voMax)*100+'%'});
    });

    //音量++
    $('.volumeAdd').click(function (){
        voCurr += 10;
        if(voCurr >= voMax){
            voCurr = voMax;
        }
        video.volume = voCurr/voMax;
        console.log((voCurr/voMax));
        $('.volumes span').css({height:(voCurr/voMax)*100+'%'});
    });


    //获取当前音量
    $('.currVolume').click(function (){
        console.log('当前音量：'+video.volume);
    });


    //拖拽
    var allWid = $('.bar').outerWidth();
    $('.barGo').mousedown(function (e){
        var isMove = true;
        var offsetLeft = $('.barGo').offset().left;
        $('.bar').mousemove(function (e){
            if(isMove){
                var currWid = e.pageX-offsetLeft;
                $('.barGo').css({width:currWid});

                //console.log(allTime);
                //console.log(currWid);
                video.currentTime = (allTime*(currWid/allWid)).toFixed(2);
                //console.log(allTime*(currWid/100).toFixed(2));
            }

        });
        $(document).mouseup(function (e){
            isMove = false;
        });
    });


    //播放速度
    $('.seleSpeed').change(function (d){
        console.log($(this).val());
        video.playbackRate = parseInt($(this).val());
    });


    //回调事件

    //播放
    $('.v1').on('play',function (){
        console.log('开始播放了');
        console.log('当前播放速度：'+video.playbackRate);
    });

    //暂停
    $('.v1').on('pause',function (){
        console.log('暂停了');
    });

    //播放速度改变
    $('.v1').on('ratechange',function (){
        console.log('速度改变了');
    });


    //获取资源长度
    $('.v1').on('loadedmetadata',function (d){
        //console.log(d);
        //console.log(video.duration);
        allTime = video.duration;
        //console.log(video.currentSrc);

    });

});



