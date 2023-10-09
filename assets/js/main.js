const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

$(".header .gnb .gnb-item").hover(function () {
  $(this).toggleClass("active");
});

$(".sc-visual4 .bottom-area .left-list .list-item").hover(function () {
  $(this).toggleClass("active");
});
$(".sc-visual7 .social .bottom-item").hover(function () {
  $(this).toggleClass("active");
});
$(".sc-visual8 .bottom .item").hover(function () {
  $(this).toggleClass("active");
});

$(".footer .footer-wrapper .rigth .top-list .item a").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);

$(".header .get").hover(function () {
  $(this).toggleClass("active");
});
$("#nav").mouseenter(function () {
  $(".header .rigth").addClass("on");
});

$("#nav").mouseleave(function () {
  $(".header .rigth").removeClass("on");
});
$(".sc-visual .learn-more .badge").hover(
  function () {
    $(".scroll-down").stop().animate({ opacity: 1 }, 500); // 호버 시 오파시티를 1로 애니메이션
  },
  function () {
    $(".scroll-down").stop().animate({ opacity: 0.2 }, 500); // 마우스가 벗어날 때 오파시티를 0.2로 애니메이션
  }
);
$(".list-item").click(function () {
  // 클릭한 리스트 아이템의 data-image 속성에서 이미지 파일명 가져오기
  var imageName = $(this).data("image");

  // 이미지 표시 엘리먼트의 src 속성 변경하여 이미지 표시
  $("#image-display").attr("src", imageName);
});

gsap.registerPlugin(ScrollTrigger);

// gsap.to(".sc-visual5 .img-box img", {
//   scrollTrigger: {
//     trigger: ".sc-visual5 .img-box",
//     start: "0% 100%",
//     end: "100% 50%",
//     scrub: 1,
//   },
//   // yPercent: -10,
// });

gsap.set(".sc-visual5 .img-box img", { yPercent: -50 });

$(".sc-visual5 .item").each(function (i, el) {
  gsap.to($(this).find("img"), {
    scrollTrigger: {
      trigger: el,
      start: "0% 100%",
      end: "100% 0%",
      scrub: 0,
    },
    yPercent: 20,
    ease: "none",
  });
});

gsap.to(".bar", {
  width: "100%",
  scrollTrigger: {
    start: "top 0%",
    scrub: true,
  },
});

// 요소를 클릭할 때 스크롤 애니메이션 실행
$("#project").click(function (e) {
  e.preventDefault();
  // 스크롤 애니메이션 설정
  $("html, body").animate(
    {
      scrollTop: $(".sc-visual5 .title-box").offset().top, // 스크롤 위치를 요소의 상단으로 이동
    },
    1500
  ); // 애니메이션 지속 시간 (밀리초)
});
$("#home").click(function (e) {
  e.preventDefault();
  // 스크롤 애니메이션 설정
  $("html, body").animate(
    {
      scrollTop: $(".header").offset().top, // 스크롤 위치를 요소의 상단으로 이동
    },
    1500
  ); // 애니메이션 지속 시간 (밀리초)
});

$("#contact").click(function (e) {
  e.preventDefault();
  // 스크롤 애니메이션 설정
  $("html, body").animate(
    {
      scrollTop: $(".sc-visual6").offset().top, // 스크롤 위치를 요소의 상단으로 이동
    },
    1500
  ); // 애니메이션 지속 시간 (밀리초)
});
$("#about").click(function (e) {
  e.preventDefault();
  // 스크롤 애니메이션 설정
  $("html, body").animate(
    {
      scrollTop: $(".sc-visual4").offset().top, // 스크롤 위치를 요소의 상단으로 이동
    },
    1500
  ); // 애니메이션 지속 시간 (밀리초)
});
$("#skill").click(function (e) {
  e.preventDefault();
  // 스크롤 애니메이션 설정
  $("html, body").animate(
    {
      scrollTop: $(".sc-visual2").offset().top, // 스크롤 위치를 요소의 상단으로 이동
    },
    1500
  ); // 애니메이션 지속 시간 (밀리초)
});
$("#intro").click(function (e) {
  e.preventDefault();
  // 스크롤 애니메이션 설정
  $("html, body").animate(
    {
      scrollTop: $(".sc-visual").offset().top, // 스크롤 위치를 요소의 상단으로 이동
    },
    1500
  ); // 애니메이션 지속 시간 (밀리초)
});

$(".sc-visual6 .card .content-wrapper .desc .get").click(function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $(".header-wrapper").offset().top, // 스크롤 위치를 요소의 상단으로 이동
    },
    1500
  ); // 애니메이션 지속 시간 (밀리초)
});

gsap.from(".sc-visual5 .title-box, .sc-visual5 .list .item", {
  scrollTrigger: {
    trigger: ".sc-visual5 .list",
    start: "0% 80%",
    end: "100% 0%",
  },
  opacity: 0,
  stagger: 0.2,
  yPercent: 10,
});
gsap.from(".sc-visual2, .sc-visual2 .head-line,.sc-visual2 .list-item ", {
  scrollTrigger: {
    trigger: ".sc-visual2",
    start: "0% 80%", //트리기시작기준 //윈도우기준
    end: "100% 0%",
  },
  opacity: 0,
  stagger: 0.2,
  yPercent: 10,
});

gsap.from(".sc-visual4,.sc-visual4 .img-box, .sc-visual4 .brand", {
  scrollTrigger: {
    trigger: ".sc-visual4",
    start: "0% 80%",
    end: "100% 0%",
  },
  opacity: 0,
  stagger: 0.2,
  yPercent: 10,
});

gsap.from(".sc-visual8 .top, .sc-visual8 .bottom .item", {
  scrollTrigger: {
    trigger: ".sc-visual8",
    start: "0% 80%",
    end: "100% 0%",
  },
  opacity: 0,
  stagger: 0.2,
  yPercent: 10,
});

gsap.from(".sc-visual6 .list-item", {
  scrollTrigger: {
    trigger: ".sc-visual6 .list",
    start: "0% 80%",
    end: "100% 0%",
  },
  opacity: 0,
  stagger: 0.2,
  yPercent: 10,
});

gsap.from(".sc-visual5 .list .item", {});

$("#number, #email").click(function (e) {
  e.preventDefault();
});

// $(".list-item").hover(
//   function () {
//     $(this).find(".skill-wrapper").css("display", "block").css("opacity", "1");
//   },
//   function () {
//     $(this).find(".skill-wrapper").css("display", "none").css("opacity", "0");
//   }
// );
