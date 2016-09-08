$(document).ready(function() {
  $("div#dog").click(function() {
    $(this).css("background-image", "none");
  });

  $("div#cat").click(function() {
    $(this).css("background-image", "none")
    $(this).add( "<p> What about fancy pugs?</p>");
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
