var operation = "";
function queu(id){
  var num = $("#" + id).text();
  operation += num;
  $("#screen").html(operation);
}
function operation(id){
  var operator = $("#" + id).text();

}

 $(document).ready(function(){
  $(".num").click(function(){
    queu(this.id);
  });

  $(".op").click(function(){
    operation(this.id)
  });
});
