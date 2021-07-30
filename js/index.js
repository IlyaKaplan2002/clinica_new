$(document).ready(function() {
  let liItems = $(".info-item");
  let buttons = $(".info-item button");
  for (let i = 0; i < liItems.length; i++) {
    $(buttons[i]).bind("click", function() {
      if($(this).attr("class") == "open") {
        for(let j = 0; j < liItems.length; j++) {
            $(liItems[j]).attr("class", "info-item closed");
        }
        $(liItems[i]).attr("class", "info-item opened");
        $(buttons[i]).attr("class", "close");
      } else if($(this).attr("class") == "close") {
        $(liItems[i]).attr("class", "info-item closed");
        $(buttons[i]).attr("class", "open");
      }
    });
  }
});
