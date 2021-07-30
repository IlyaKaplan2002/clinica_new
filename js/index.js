$(document).ready(function() {
  for(let i = 1; i <= 5; i++) {
    $(`.open[name=b${i}]`).bind("click", function() {
      $(`.info-item[name=li${i}]`).attr("class", "info-item opened");
    });
    $(`.close[name=b${i}]`).bind("click", function() {
      $(`.info-item[name=li${i}]`).attr("class", "info-item closed");
    });
  }
});
