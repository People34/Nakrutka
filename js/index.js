
$(function() {
    $(".services__card-btn").on("click", "button:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".services__card")
        .find(".services__card-info")
        .removeClass("show")
        .eq($(this).index())
        .addClass("show");
    });
  });