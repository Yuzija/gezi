window.onload = function () {
    let bigbox = document.querySelector('.bigbox')
    let box = document.querySelector('.box')
    let as = document.querySelectorAll('.a')
    //鸽子
    let gezi = document.querySelector('.gezi')
    let gz = document.querySelector('.gz')
    let gz_after=document.querySelector('.gz_after')
    //建筑
    let jz1 = document.querySelector('.jianzhu1')
    let jz2 = document.querySelector('.jianzhu2')
    let jz3 = document.querySelector('.zhuzi4')
    let jz4 = document.querySelector('.fengche')
    //标志性柱子 以及标志
    let kfzhuzi = document.querySelector('.zhuzi1')
    let phone = document.querySelector('.shouji')
    let kfzhuzi2 = document.querySelector('.zhuzi2')
    let wifi = document.querySelector('.wifi')
    let kfzhuzi3 = document.querySelector('.zhuzi3')
    let coin = document.querySelector('.coin')
    //点击的柱子
    let zhuzi = document.querySelector('.zhuzi5')
    let zhuzi2 = document.querySelector('.zhuzi6')
    let zhuzi3 = document.querySelector('.zhuzi7')
    let zhuzi4 = document.querySelector('.zhuzi8')
    //路
    let active = document.querySelectorAll('.active')
    let active2 = document.querySelectorAll('.active2')
    let active3 = document.querySelectorAll('.active3')
    let active4 = document.querySelectorAll('.active4')
    //圆圈
    let circle = document.querySelector('.circle1')
    let circle2 = document.querySelector('.circle2')
    let circle3 = document.querySelector('.circle3')
    let circle4 = document.querySelector('.circle4')
    //开关
    var flag = true;
    var flag2 = true;
    //箭头
    let jts = document.querySelector('.jiantou')
    let jt = document.querySelectorAll('.jt')
    //字体
    let zt = document.querySelector('.ziti4')
    let zt2 = document.querySelector('.ziti5')
    let zt3 = document.querySelector('.ziti6')
    let zt4 = document.querySelector('.ziti1')
    let zt6 = document.querySelector('.ziti3')
    let small_phone = document.querySelector('.phone')
    let zt9 = document.querySelector('.ziti9')
    let zt10 = document.querySelector('.ziti10')
    let wifi_small = document.querySelector('.small_wifi')
    let zt11 = document.querySelector('.ziti11')
    let gets = document.querySelector('.get')
    let zt12 = document.querySelector('.ziti12')
    let zt13 = document.querySelector('.ziti13')
    let zt14 = document.querySelector('.ziti14')
    let share = document.querySelector('.share')
    let draw = document.querySelector('.draw')
    let look = document.querySelector('.look')
    //获取星球
    let star1 = document.querySelector('.star1')
    let star2 = document.querySelector('.star2')
    let star3 = document.querySelector('.star3')
    //光圈的点击事件   以及柱子的点击事件
    circle.addEventListener('click', run)//第一个光圈
    circle2.addEventListener('click', run2)//第二个光圈
    circle3.addEventListener('click', run3)//第三个光圈
    circle4.addEventListener('click', run4)//第四个光圈
    // function left_top(names,nums,dh_time){//鸽子精往左上角移动
    //     var name=names
    //     var a=1;
    //     var b=0;
    //     setTimeout(()=>{
    //         var num=0
    //         name = setInterval(function(){
    //             if(a>5) a=1;
    //             gz.setAttribute('src', '../images/gz' + b + a + '.png')
    //             a++
    //             num++
    //             if(num==nums) clearInterval(names)
    //         },100)
    //     },dh_time)
    // }
    // function right_top(names,nums,dh_time){//鸽子往右上角移动
    //     setTimeout(()=>{
    //     var c=11
    //     var num=0
    //     clearInterval(dd)
    //     names = setInterval(function () {
    //         if (c > 15) c = 11;
    //         gz.setAttribute('src', '../images/gz' + c + '.png')
    //         c++;
    //         num++;
    //         if (num == nums) clearInterval(names)
    //     }, 100)
    // }, dh_time)
    // }
    function run() {
        if (flag) {//判断开关是否为开
            circle.style.display = 'none'
            gezi.style.animationName = 'ge1'
            gezi.style.animationDuration = '6890ms'
            //第一段
            var a = 1;
            var b = '';
            var r1 = setInterval(function () {
                b = 0;
                if (a > 5) {
                    a = 1;
                }
                gz.setAttribute('src', '../images/gz' + b + a + '.png')
                a++
            }, 100)
            // left_top('rr1',10,0)
            // right_top()
            //第二段
            setTimeout(() => {
                var c = 11;
                var num = 0;
                clearInterval(r1)
                var r2 = setInterval(function () {
                    if (c > 15) c = 11;
                    gz.setAttribute('src', '../images/gz' + c + '.png')
                    c++;
                    num++;
                    if (num == 12) clearInterval(r2)
                }, 100)
            }, 1700)
            //第三段
            setTimeout(() => {
                var num = 0;
                var r3 = setInterval(function () {
                    b = 0;
                    if (a > 5) {
                        a = 1;
                    }
                    gz.setAttribute('src', '../images/gz' + b + a + '.png')
                    a++
                    num++
                    if (num == 25) clearInterval(r3)
                }, 100)
            }, 2900)
            //第四段
            setTimeout(() => {
                var num = 0;
                var c = 11;
                var r4 = setInterval(function () {
                    if (c > 15) c = 11;
                    gz.setAttribute('src', '../images/gz' + c + '.png')
                    c++;
                    num++;
                    if (num == 16) clearInterval(r4)
                }, 100)
                //电话柱子以及路的延迟升起
                setTimeout(function () {
                    move(active2)
                    kfzhuzi.style.display = 'block'
                    kfzhuzi.classList.add('animate__animated', 'animate__bounceInUp')
                    phone.style.display = 'block'
                    phone.classList.add('animate__animated', 'animate__bounceInUp')
                }, 1000)
            }, 5309)
            //第一段走完后的字体图标动画展示以及柱子升起的音频播放
            setTimeout(() => {
                flag = true
                mp2.play()
                small_phone.style.display = 'block'
                zt4.style.display = 'block'
                zt6.style.display = 'block'
                zt.style.display = 'none'
                zt2.style.display = 'none'
            }, 6890)
            //点击之后直接关闭开关flag
            flag = false
            //上面的字体图标动画展示完后(第一段整个流程走完后)，音乐停止，且开关打开
            setTimeout(() => {
                circle2.style.display = 'block'
                mp2.pause()
            }, 11390)
            //光圈过后的柱子点击事件  小鸡闪现效果
            zhuzi.onclick = function () {
                if (flag && zhuzi.getAttribute('anv') == 'true') {
                    gezi.setAttribute('class', 'gezi gezi1_1')
                    small_phone.style.display = 'block'
                    zt4.style.display = 'block'
                    zt6.style.display = 'block'
                    zt.style.display = 'none'
                    zt2.style.display = 'none'
                    zt9.style.display = 'none'
                    zt10.style.display = 'none'
                    wifi_small.style.display = 'none'
                    zt13.style.display = 'none'
                    zt12.style.display = 'none'
                }
            }
        }
    }
    function run2() {
        gezi.setAttribute('class', 'gezi')
        if (flag) {
            circle2.style.display = 'none'
            gezi.style.animationName = 'ge2'
            gezi.style.animationDuration = '3889ms'
            var a = 1;
            var b = '';
            //第一段
            var r5 = setInterval(function () {
                b = 0;
                if (a > 5) a = 1
                gz.setAttribute('src', '../images/gz' + b + a + '.png')
                a++
            }, 100)
            //第二段
            setTimeout(function () {
                var num = 0;
                var c = 11;
                clearInterval(r5)
                var r6 = setInterval(function () {
                    if (c > 15) c = 11
                    gz.setAttribute('src', '../images/gz' + c + '.png')
                    num++;
                    c++;
                    if (num == 36) clearInterval(r6)
                }, 100)
                setTimeout(function () {
                    move(active3)
                    kfzhuzi2.style.display = 'block'
                    kfzhuzi2.classList.add('animate__animated', 'animate__bounceInUp')
                    wifi.style.display = 'block'
                    wifi.classList.add('animate__animated', 'animate__bounceInUp')
                }, 3000)
            }, 400)
            setTimeout(() => {
                flag = true
                mp2.play()
                small_phone.style.display = 'none'
                zt4.style.display = 'none'
                zt6.style.display = 'none'
                zt9.style.display = 'block'
                zt10.style.display = 'block'
                wifi_small.style.display = 'block'
            }, 3889)
            //走完之后才让本柱子和前面的柱子开关打开
            setTimeout(() => {
                circle3.style.display = 'block'
                zhuzi.setAttribute('anv', 'true')
                zhuzi2.setAttribute('anv', 'true')
                mp2.pause()
            }, 8460)
            flag = false
            //圆圈点了之后 的柱子点击事件
            zhuzi2.onclick = function () {
                if (flag && zhuzi2.getAttribute('anv') == 'true') {
                    gezi.setAttribute('class', 'gezi gezi1_2')
                    small_phone.style.display = 'none'
                    zt4.style.display = 'none'
                    zt6.style.display = 'none'
                    zt9.style.display = 'block'
                    zt10.style.display = 'block'
                    wifi_small.style.display = 'block'
                    zt4.style.display = 'none'
                    zt6.style.display = 'none'
                    zt13.style.display = 'none'
                    zt12.style.display = 'none'
                }
            }
        }
    }
    function run3() {
        if (flag) {
            //点击之后就让柱子的开关关闭 在柱子升起完之后就会打开
            //这样的做法 可以避免在柱子升起时也可以闪现
            zhuzi.setAttribute('anv', 'false')
            zhuzi2.setAttribute('anv', 'false')
            gezi.setAttribute('class', 'gezi')
            circle3.style.display = 'none'
            gezi.style.animationName = 'ge3'
            gezi.style.animationDuration = '4160ms'
            //第一段
            var c = 21;
            var r7 = setInterval(function () {
                if (c > 25) c = 21
                gz.setAttribute('src', '../images/gz' + c + '.png')
                c++;
            }, 100)
            //第二段
            setTimeout(function () {
                clearInterval(r7)
                var num = 0;
                var c = 31;
                var r8 = setInterval(function () {
                    if (c > 35) c = 31
                    gz.setAttribute('src', '../images/gz' + c + '.png')
                    num++;
                    c++;
                    if (num == 10) clearInterval(r8)
                }, 100)
            }, 1343)
            //第三段
            setTimeout(function () {
                var num = 0;
                var c = 21;
                var r9 = setInterval(function () {
                    if (c > 25) c = 21
                    gz.setAttribute('src', '../images/gz' + c + '.png')
                    num++;
                    c++;
                    if (num == 16) clearInterval(r9)
                }, 100)
                setTimeout(function () {
                    move(active4)
                    kfzhuzi3.style.display = 'block'
                    kfzhuzi3.classList.add('animate__animated', 'animate__bounceInUp')
                    coin.style.display = 'block'
                    coin.classList.add('animate__animated', 'animate__bounceInUp')
                }, 1000)
            }, 2400)
            //走完之后 动画执行完后 开关打开
            setTimeout(() => {
                flag = true
                mp2.play()
                zt11.style.display = 'none'
                gets.style.display = 'none'
                zt13.style.display = 'block'
                zt12.style.display = 'block'
                wifi_small.style.display = 'none'
                zt9.style.display = 'none'
                zt10.style.display = 'none'
                zt4.style.display = 'none'
                zt6.style.display = 'none'
                small_phone.style.display = 'none'
            }, 4160)
            //三个柱子开关打开
            setTimeout(() => {
                zhuzi.setAttribute('anv', 'true')
                zhuzi2.setAttribute('anv', 'true')
                zhuzi3.setAttribute('anv', 'true')
                circle4.style.display = 'block'
                mp2.pause()
            }, 8160)
            flag = false
            zhuzi3.onclick = function () {
                if (flag && zhuzi3.getAttribute('anv') == 'true') {
                    gezi.setAttribute('class', 'gezi gezi1_3')
                    zt11.style.display = 'none'
                    gets.style.display = 'none'
                    zt13.style.display = 'block'
                    zt12.style.display = 'block'
                    wifi_small.style.display = 'none'
                    zt9.style.display = 'none'
                    zt10.style.display = 'none'
                    zt9.style.display = 'none'
                    zt10.style.display = 'none'
                    zt4.style.display = 'none'
                    zt6.style.display = 'none'
                    small_phone.style.display = 'none'
                }
            }
        }
    }
    function run4() {
        if (flag) {
            gezi.setAttribute('class', 'gezi')
            circle4.style.display = 'none'
            gezi.style.animationName = 'ge4'
            gezi.style.animationDuration = '2942ms'
            //第一段
            var c = 31
            var r10 = setInterval(function () {
                if (c > 35) c = 31
                gz.setAttribute('src', '../images/gz' + c + '.png')
                c++
            }, 100)
            //第二段
            setTimeout(function () {
                var a = 1;
                var num = 0;
                clearInterval(r10)
                var r11 = setInterval(function () {
                    var b = 0
                    if (a > 5) a = 1
                    gz.setAttribute('src', '../images/gz' + b + a + '.png')
                    a++;
                    num++;
                    if (num == 11) clearInterval(r11)
                }, 100)
            }, 1800)
            //走完之后调用函数
            setTimeout(() => {
                flag = true
                mp3.play()
                goUp()//升起动画
                goDown()//其他柱子下降动画
                star_appear()//星球开始展示动画
                star_swing()//星球晃动动画
            }, 2942)
            setTimeout(() => {
                mp3.pause()
            }, 13942)
            flag = false
            zhuzi4.onclick = function () {
                if (flag) {
                    gezi.setAttribute('class', 'gezi gezi1_4')
                }
            }
        }
    }
    //给路程做动效
    function move(road) {
        for (let i = 0; i < road.length; i++) {
            setTimeout(function () {
                setTimeout(function () {
                    road[i].style.display = 'block'
                    road[i].classList.add('animate__animated', 'animate__bounceInUp')
                }, 270 * i)
            }, 1000)
        }
    }
    // 屏幕点击事件
    document.onclick = function () {
        if (flag2) {
            flag2 = false
            jz1.style.display = 'block'
            jz2.style.display = 'block'
            jz3.style.display = 'block'
            jz4.style.display = 'block'
            jz1.classList.add('animate__animated', 'animate__fadeInUpBig')
            jz2.classList.add('animate__animated', 'animate__fadeInUpBig')
            jz3.classList.add('animate__animated', 'animate__fadeInUpBig')
            jz4.classList.add('animate__animated', 'animate__fadeInUpBig')
            jts.style.display = 'none'
            zt3.style.display = 'none'
            small_phone.style.display = 'none'
            setTimeout(() => {
                move(active)
            }, 0)
            setTimeout(() => {
                circle.style.display = 'block'
            }, 5590)
            setTimeout(() => {
                mp2.play()
            }, 1800)
            setTimeout(() => {
                mp2.pause()
            }, 5000)
        }
    }
    //箭头动效
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            jt[4 - i].setAttribute('class', 'jt jtdh')
        }, i * 100)
    }
    //音频
    function yp(a, b) {
        a.onclick = function () {
            mp4.play()
            setTimeout(() => {
                mp4.pause();
            }, b)
        }
    }
    yp(circle, 6890)//第一个光圈点击
    yp(circle2, 3889)//第二个
    yp(circle3, 4160)//第三个
    yp(circle4, 2924)//第四个
    //柱子下降动画
    function goDown() {
        setTimeout(() => {
            bigbox.setAttribute('class', 'bigbox down')
            for (let i = 0; i < as.length; i++) {
                as[i].style.animation = 'xiaoshi 1000ms linear forwards'
            }
        }, 750)
    }
    //柱子小鸡上升动画
    function goUp() {
        gezi.style.animation = ''
        gezi.setAttribute('class', 'gezi downup2')
        zhuzi4.setAttribute('class', 'zhuzi8 active4 downup')
        flag = false
        setTimeout(() => {
            box.style.animation = 'upup 3250ms linear forwards'
            box.setAttribute('class', 'box upup')
            gz.setAttribute('class','gz hid')
            gz_after.setAttribute('class','gz_after')
        }, 750)
    }
    //星球出现的动画
    function star_appear() {
        setTimeout(() => {
            zt14.style.animation = 'xianxing 1000ms linear forwards'
            share.style.animation = 'xianxing 1000ms linear forwards'
            draw.style.animation = 'xianxing 1000ms linear forwards'
            look.style.animation = 'xianxing 1000ms linear forwards'
            draw.style.display = 'block'
            look.style.display = 'block'
            zt14.style.display = 'block'
            share.style.display = 'block'
            star1.style.display = 'block'
            star2.style.display = 'block'
            star3.style.display = 'block'
            star1.setAttribute('class', 'star1 star1dh')
            star2.setAttribute('class', 'star2 star2dh')
            star3.setAttribute('class', 'star3 star3dh')
        }, 4500)
    }
    //星球晃动的动画
    function star_swing() {
        setTimeout(() => {
            star1.style.animation = 'star_updown 1000ms linear alternate-reverse infinite'
            star2.style.animation = 'star_updown 900ms linear alternate-reverse infinite'
            star3.style.animation = 'star_updown 800ms linear  alternate-reverse infinite'
        }, 5500)
    }
}