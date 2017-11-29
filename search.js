var searchBar = $('#searchBar'), searchValue = "";
$('.searchBox').css("display","none")

searchBar.change(function(){
  searchValue = searchBar.val();
  if ( searchValue.indexOf("Butler") >= 0 ) {
    let searchBox = $('.searchBox');
    searchBox.css("display","block");
    searchBox.html('<div class="row"><div class="col-md-4 mb-4"><div class="card h-100"><div class="card-body"><h5 class="card-title">Butler.Bot</h5><img class="item_2" style="max-height: 140px;" src="/Users/jonathanjames/apps/ccamp/startbootstrap-small-business/images/robot2_.png" /></div><div class="card-footer"></div></div></div></div>');
  }
});

/* NEW SEARCH JS  - STARTS
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
