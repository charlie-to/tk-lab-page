//画面に表示されたコンテンツをフェードインさせる関数
$(function () {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var position = $(this).offset().top
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll > position - windowHeight + 500) {
        $(this).addClass('active')
      }
    })
  })
})

//画像をアニメーションのように切り替える関数
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    var imageCount = 51 //使ってない変数だけどメモがわりにいる
    var ImageIndex = Math.ceil(scrollTop / 10) - 2
    var imageUrl = '/aviation/aviationPageTop' + ImageIndex + '.png'
    if (scrollTop < 20) {
      $('.scroll-image').attr('src', '/aviation/aviationPageTop1.png')
    } else if (scrollTop >= 20 && scrollTop < 530) {
      $('.scroll-image').attr('src', imageUrl)
    } else if (scrollTop >= 530) {
      $('.scroll-image').attr('src', '/aviation/aviationPageTop51.png')
    }
  })
})

//window.addEventListener("load", function () {
//    var text = document.getElementById("text");
//    text.style.display = "block";
//});

//window.addEventListener("scroll", function () {
//    var scrollTop =
//        window.pageYOffset !== undefined
//            ? window.pageYOffset
//            : (document.documentElement || document.body.parentNode || document.body)
//                .scrollTop;

//    //var windowHeight = window.innerHeight;
//    //var imageHeight = windowHeight * 10; // 10 times the window height
//    //var imageIndex = Math.floor(scrollTop / windowHeight) + 1;
//    //var imageName = "sampleImage" + imageIndex + ".jpeg";

//    //document.body.style.backgroundImage = "url(" + imageName + ")";
//    //document.body.style.height = imageHeight + "px";
//    //document.getElementById("text").style.marginTop = imageHeight + "px";
//    document.body.style.backgroundImage = "url(sampleImage" + Math.ceil(scrollTop/50) + ".jpeg)";
//});

//window.onload = function () {
//    for (var i = 1; i <= 10; i++) {
//        var img = document.createElement("img");
//        img.src = "sampleImage" + i + ".jpeg";
//        img.style.display = "none";
//        document.body.appendChild(img);
//    }
//};

//window.addEventListener("load", function () {
//    var text = document.getElementById("text");
//    text.style.display = "block";
//});

//window.addEventListener("scroll", function () {
//    var scrollTop =
//        window.pageYOffset !== undefined
//            ? window.pageYOffset
//            : (document.documentElement || document.body.parentNode || document.body)
//                .scrollTop;

//    if (scrollTop >= 0 && scrollTop <= 50) {
//        document.body.style.backgroundImage = "url(sampleImage1.jpeg)";
//    } else if (scrollTop > 50 && scrollTop <= 100) {
//        document.body.style.backgroundImage = "url(sampleImage2.jpeg)";
//    } else if (scrollTop > 100 && scrollTop <= 150) {
//        document.body.style.backgroundImage = "url(sampleImage3.jpeg)";
//    } else if (scrollTop > 150 && scrollTop <= 200) {
//        document.body.style.backgroundImage = "url(sampleImage4.jpeg)";
//    } else if (scrollTop > 200 && scrollTop <= 250) {
//        document.body.style.backgroundImage = "url(sampleImage5.jpeg)";
//    } else if (scrollTop > 250 && scrollTop <= 300) {
//        document.body.style.backgroundImage = "url(sampleImage6.jpeg)";
//    } else if (scrollTop > 300 && scrollTop <= 350) {
//        document.body.style.backgroundImage = "url(sampleImage7.jpeg)";
//    } else if (scrollTop > 350 && scrollTop <= 400) {
//        document.body.style.backgroundImage = "url(sampleImage8.jpeg)";
//    } else if (scrollTop > 400 && scrollTop <= 450) {
//        document.body.style.backgroundImage = "url(sampleImage9.jpeg)";
//    } else if (scrollTop > 450 && scrollTop <= 500) {
//        document.body.style.backgroundImage = "url(sampleImage10.jpeg)";
//    }
//});
