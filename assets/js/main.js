// Плавный переход по кнопке
// $(".button").on("click", function () {
//   $("html, body").animate(
//     {
//       scrollTop: $("#one").offset().top,
//     },
//     700
//   );
// });
// Решил через:
// html{
// 	scroll-behavior: smooth;
// }

// Меню всплывающее
$(window).scroll(function () {
  if ($(document).scrollTop() > 900) {
    //прокручиваем страницу вниз на 900px
    $(".myHeader").css({
      "background-color": "black",
      opacity: "0.7",
      position: "fixed",
      top: "0em",
    });
  } else {
    $(".myHeader").css({
      "background-color": "transparent",
      opacity: "1",
      position: "absolute",
      top: "1.5em",
    });
  }
});

// РАЗМЫТИЕ
// Фунция принимает аргументы( размытие и id блока к которому применяется функция )

// function myBlur(blur, id) {
//   let mSec = 0;
//   id = "#" + id; // добавляем # к id
//   for (let i = blur; i > 0.1; i -= 0.1) {
//     mSec = mSec + 10;
//     setTimeout(() => {
//       $(id).css({
//         filter: `blur(${i}px)`,
//       });
//     }, mSec);
//   }
//   // в конце всех таймаутов устанавливаем 0px размытие сss
//   setTimeout(() => {
//     $(id).css({
//       filter: "blur(0px)",
//     });
//   }, mSec + 10);
// }

// // вызов по умолчанию к первому баннеру
// myBlur(12, "banner");


// Альтернативное размытие через transition css
// Стартовое размытие через transition css держит тайминг
$("#banner").css({
  filter: "blur(0px)",
});

// Размытие для элементов по событию - СКРОЛЛ  через transition css

$(window).scroll(function () {
  if ($(document).scrollTop() > 430) {
    $("#banner").css({
      filter: "blur(10px)",
    });
  } else if ($(document).scrollTop() < 530) {
    $("#banner").css({
      filter: "blur(0px)",
    });
  }

  if ($(document).scrollTop() > 1800 && $(document).scrollTop() < 3300) {
    $("#blur2").css({
      filter: "blur(0px)",
    });
  } else if ($(document).scrollTop() < 2240 || $(document).scrollTop() > 2925) {
    $("#blur2").css({
      filter: "blur(10px)",
    });
  }
  console.log($(document).scrollTop());
});
