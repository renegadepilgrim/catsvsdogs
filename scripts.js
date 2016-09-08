$(document).ready(function() {
  $("div#dog").click(function() {
    $(this).css("background-image", "none");
    $(this).html( "<p id='tabby'>What about a cute tiny tabby?</p>").addClass("text-center tiny").css("padding-top", "200px");
    $(".tiny").click(function() {
      $(this).css("background-image", "url('img/cat.jpg')");
      $("#tabby").remove();
    });
  });

  $("div#cat").click(function() {
    $(this).css("background-image", "none")
    $(this).html( "<p id='fancy-pug'>What about a fancy pug??!@??!@</p>").addClass("text-center fancy").css("padding-top", "200px");
    $(".fancy").click(function() {
      $(this).css("background-image", "url('img/pug.jpg')");
      $("#fancy-pug").remove();
    });
  });

 $("#blanks form").submit(function(event) {
   var cat1Input = $("input#cat1").val();
   var dog2Input = $("input#dog2").val();
   var humanInput = $("input#human").val();
   var exclamationInput = $("input#exclamation").val();
   var verbInput = $("input#verb").val();
   var nounInput = $("input#noun").val();

   $(".cat1").text(cat1Input);
   $(".dog2").text(dog2Input);
   $(".human").text(humanInput);
   $(".exclamation").text(exclamationInput);
   $(".verb").text(verbInput);
   $(".noun").text(nounInput);

   $("#story").show();

   event.preventDefault();
 });
});
