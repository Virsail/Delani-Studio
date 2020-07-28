prompt("Are you ready for the ultimate Delani experience?");
$(document).ready(function() {
  $(".toggle").click(function() {
    $("#shown-design").toggle();
    $("#hidden-design").toggle();
  });
});
$(document).ready(function() {
  $(".toggle1").click(function() {
    $("#shown-development").toggle();
    $("#hidden-development").toggle();
  });
});
$(document).ready(function() {
  $(".toggle2").click(function() {
    $("#shown-product").toggle();
    $("#hidden-product").toggle();
  });
});
 
$(document).ready(function() {
  $(".cruiser").mouseover(function() {
    $("#j1").show()
  })
  $(".cruiser").mouseleave(function(){
    $("#j1").hide()
  })
  $(".cruiser1").mouseover(function() {
    $("#j2").show()
  })
  $(".cruiser1").mouseleave(function(){
    $("#j2").hide()
  })
  $(".cruiser2").mouseover(function() {
    $("#j3").show()
  })
  $(".cruiser2").mouseleave(function(){
    $("#j3").hide()
  })
  $(".cruiser3").mouseover(function() {
    $("#j4").show()
  })
  $(".cruiser3").mouseleave(function(){
    $("#j4").hide()
  })
  $(".cruiser4").mouseover(function() {
    $("#j5").show()
  })
  $(".cruiser4").mouseleave(function(){
    $("#j5").hide()
  })
  $(".cruiser5").mouseover(function() {
    $("#j6").show()
  })
  $(".cruiser5").mouseleave(function(){
    $("#j6").hide()
  })
  $(".cruiser6").mouseover(function() {
    $("#j7").show()
  })
  $(".cruiser6").mouseleave(function(){
    $("#j7").hide()
  })
  $(".cruiser7").mouseover(function() {
    $("#j8").show()
  })
  $(".cruiser7").mouseleave(function(){
    $("#j8").hide()
  })
})
$(document).ready(function(){
  $(".section6").submit(function(){
    alert("WE have received your message ,thank you for reaching out to Delani studio");
  });
});
