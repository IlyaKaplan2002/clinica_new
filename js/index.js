$(document).ready(function() {
  let items = $(".info-item");
  console.log(items);
  for(let i = 1; i <= 5; i++) {
    $(`.open[name=b${i}]`).bind("click", function() {
      for(let j = 0; j < items.length; j++) {
        $(items[j]).attr("class", "info-item closed");
      }
      $(`.info-item[name=li${i}]`).attr("class", "info-item opened");
      // console.log($(`.info-item[name=li${i}]`).attr("class"));
    });
    $(`.close[name=b${i}]`).bind("click", function() {
      $(`.info-item[name=li${i}]`).attr("class", "info-item closed");
    });
  }
  $(".info-item");
});
