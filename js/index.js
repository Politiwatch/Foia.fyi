var slide = 0;
function nextSlide(){
  $("#slide-" + slide).slideUp(function(){
    slide += 1;
    $("#slide-" + slide).slideDown();
  });
}
function ssnbox(){
  if($("#ssn-include").is(":checked")){
    $("#data-ssn").prop('disabled', false);
  }else{
    $("#data-ssn").prop('disabled', true);
  }
}

function generateLetters(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;//January is 0!`

  var yyyy = today.getFullYear();
  if(dd<10){dd='0'+dd}
  if(mm<10){mm='0'+mm}
  var today = mm+'/'+dd+'/'+yyyy;

  $(".date").text(today)

  $("#former").fadeOut(750);
  $('.body').animate(
    {
      backgroundColor: '#ffffff'
    }, 1000
  );
  $("#results").fadeIn();
  var name = $("#data-name").val();
  var aliases = $("#data-aliases").val();
  var emails = $("#data-email").val();
  var phone = $("#data-phone").val();
  var address = $("#data-address").val();
  var city = $("#data-city").val();
  var state = $("#data-state").val();
  var zip = $("#data-zip").val();
  var fee = $("#data-fee").val();
  var pob = $("#data-placeofbirth").val();
  var dob = $("#data-dateofbirth").val();
  var ssn = $("#data-ssn").val();
  var ssnInclude = $("#ssn-include").is(":checked");

  if(!ssnInclude){
    $(".ssnfull").hide()
  }else{
    $(".ssn").text(ssn);
  }
  $(".name").text(name);
  $(".aliases").text(aliases);
  $(".email").text(emails);
  $(".phone").text(phone);
  $(".address").text(address);
  $(".city").text(city);
  $(".state").text(state);
  $(".zip").text(zip);
  if(fee > 0){
    $(".fees").text("agree that I will pay up to $"+fee+" in fees, if necessary. Please notify me in advance if fees are expected to exceed that amount.");
  }else{
    $(".fees").text("request to waive all fees.");
  }
  $(".pob").text(pob);
  $(".dob").text(dob);
}
function openLetter(){
  var html = $('#letter-content').html();
  var sheet = "<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\"><style>body{font-family: 'Roboto';}</style>"
  var wi = window.open();
  $(wi.document.head).html(sheet);
  $(wi.document.body).html("<div class=\"container\">"+html+"</div>");
}
