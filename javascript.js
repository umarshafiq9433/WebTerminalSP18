$(document).ready(function () {
  $(".reviews").on("mouseenter", function () {
    let id = $(this).data("id");
    for (let i = id; i > 0; i--) {
      $("#" + i).addClass("review-star");
    }
    for (let i = id + 1; i <= 5; i++) {
      $("#" + i).removeClass("review-star");
    }
  });
});
