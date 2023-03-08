$(function () {

  //정렬기능
  $("[data-sort]").click(function () {

    const sort = this.dataset.sort;
    if (sort === "asc") {
      resetSort();
      $(this).attr("data-sort", "desc");
      return;
    }
    if (sort === "desc") {
      resetSort();
      return;
    }
    resetSort();
    $(this).attr("data-sort", "asc");
  });

  function resetSort() {
    $("[data-sort]").attr("data-sort", "");
  }

  //모달 on off
  window.closeModal = function () {
    $("body").removeClass("modalopen");
    $(".modal_bg").removeClass("show");
    $(".modal_content").removeClass("show");
  };

  window.showModal = function (type, text) {
    $(".modal_title").text(text);
    $("body").addClass("modalopen");
    $(".modal_bg").addClass("show");
    $(`[data-modal='${type}']`).addClass("show");
  };


    // 파일 업로드
    $(document).on("change", "[data-upload]", function (input) {
      const file = input.target.files[0];
      const uploadName = `[data-uploadname=${this.dataset.upload}]`;
      $(uploadName).val(file.name);
    });

    //아코디언
    $(".accordion .list_title").click(function () {
      if($(this).hasClass('active')) return $(".accordion .list_title").removeClass("active");
      
      $(".accordion .list_title").removeClass("active");
      $(this).addClass("active");
    });


});

function onChangeMode(e) {
  const mode = e.target.value;
  const name = e.target.name;
  $(`#${name}`).attr("data-mode", mode);
}
