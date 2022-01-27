$(function () {
  let $window = $(window);

  /************************
   * Scroll
   ************************/
  let $header = $(".header");
  let $transPos;

  $window.on("scroll", function () {
    $transPos = $header.outerHeight();
    console.log($transPos, $header.height());
    if ($window.scrollTop() > $transPos) {
      $header.addClass("is-active");
    } else {
      $header.removeClass("is-active");
    }
  });

  /************************
   * Mobile Menu
   ************************/
  let $burgerMenu = $(".burger-menu");
  let $globalNav = $(".nav-wrapper");
  $burgerMenu.on("click", function () {
    $burgerMenu.toggleClass("is-click");
    $globalNav.toggleClass("is-show");
    $("body").toggleClass("is-noscroll");
  });

  /************************
   * ページ内スクロール
   ************************/
  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  /************************
   * Page Top
   ************************/
  // let appear = false;
  let $pageTop = $("#js-page-top");
  //一定幅スクロールしたら表示
  $window.scroll(function () {
    if ($(this).scrollTop() > 100) {
      // if (appear == false) {
      //   appear = true;
      $pageTop.stop().animate({ bottom: "20px" }, 500);
      // }
    } else {
      // 隠れる
      // if (appear) {
      //   appear = false;
      $pageTop.stop().animate({ bottom: "-100px" }, 400);
      // }
    }
  });
  //トップへ戻る
  $pageTop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  /************************
   * inview
   ************************/
  $(".js-fadeInUp").on("inview", function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $(this).addClass("animate__animated animate__fadeInUp");
      // } else {
      //   //表示領域から出た時
      //   $(this).removeClass("animate__animated animate__fadeInUp");
      //   $(this).css("opacity", 0); //非表示にしておく
    }
  });
});
