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
