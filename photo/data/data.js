var data = [];
var dataStr = '1、震惊的我<br>\
<br>\
爱我少一点，但爱我久一点。<br>\
<br>\
<br>\
2、冰雪大世界<br>\
<br>\
我闭着眼睛看不到自己，但是我却可以看见你。<br>\
<br>\
<br>\
3、这表情<br>\
<br>\
老婆，给你抓羊吃！<br>\
<br>\
<br>\
4、美美的媳妇<br>\
<br>\
自从爱上你，我看天下的姑娘全“多长了一只眼”。<br>\
<br>\
<br>\
5、哈尔滨<br>\
<br>\
真的，一辈子这样，真的就挺好。<br>\
<br>\
<br>\
6、购物大厦<br>\
<br>\
我莫名其妙的笑了，只因想到了你。<br>\
<br>\
<br>\
7、元奶奶包饭<br>\
<br>\
愉悦其实真的狠简单，有你有事做，有所期盼。<br>\
<br>\
<br>\
8、我要当柠檬<br>\
<br>\
咱们坚信，咱们永远一起。<br>\
<br>\
<br>\
9、候车室<br>\
<br>\
我想触动你的心，就像你触动了我的心那样。<br>\
<br>\
<br>\
10、女神范<br>\
<br>\
性命那么短，世界那么乱，我不想争吵，不想冷战，不愿和你有一秒遗憾。<br>\
<br>\
<br>\
11、雪中自拍<br>\
<br>\
每一天早上看到阳光就想见到你。<br>\
<br>\
<br>\
12、全州拌饭<br>\
<br>\
我不想做你性命的插曲，只想做你性命最完美的结局。<br>\
<br>\
<br>\
13、阳光美少女<br>\
<br>\
人生最开心的，就是发现我爱的人正好也爱我。<br>\
';
var d = dataStr.split('<br><br><br>');
for (var i = 0; i < d.length; i++) {
    var c = d[i].split('<br><br>');
    data.push({
        img: c[0].replace('、', ' ') + '.jpg',
        caption: c[0].split('、')[1],
        desc: c[1]
    });
    console.log(c[0].replace('、', ' ') + '.jpg');
}
