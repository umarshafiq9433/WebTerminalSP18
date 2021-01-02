$(document).ready(function () {
  $.get(
    "https://sp18-terminal-backend.herokuapp.com/showProducts",
    function (data) {
      data.map((dat) => {
        let str =
          "<div class='col-md-3 py-4'><div class='col-10'><img src='./images/1566405003-uniqlo-tee-1566404997.jpg' alt='Shirt Image' class='w-100 image'/><div class='text-primary text-center' style='font-size: 1.5rem'>" +
          dat.prName +
          "</div><div class='container text-center'><span data-id='1' id='1' class='reviews'><i class='fa fa-star'></i></span><span data-id='2' id='2' class='reviews'><i class='fa fa-star'></i></span><span data-id='3' id='3' class='reviews'><i class='fa fa-star'></i></span><span data-id='4' id='4' class='reviews'><i class='fa fa-star'></i></span><span data-id='5' id='5' class='reviews'><i class='fa fa-star'></i></span></div><div class='container text-center'><b>" +
          dat.prPrice +
          "</b></div><div class='container text-center'><button class='btn btn-dark'>Add to cart</button></div></div></div>";
        $(".data").append(str);
      });
    }
  );

  $(document).on("mouseenter", ".reviews", function () {
    let id = $(this).data("id");
    for (let i = id; i > 0; i--) {
      $("#" + i).addClass("review-star");
    }
    for (let i = id + 1; i <= 5; i++) {
      $("#" + i).removeClass("review-star");
    }
  });
});
