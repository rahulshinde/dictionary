var pageList = [1, 2, 3, 4];

shuffle(pageList);
init();

var pageNum = 1;

function pageLoad() {
  $('.' + (pageNum + 1)).load(pageList[pageNum] + ".html");
  $('.' + (pageNum + 1)).toggle();
}

function pageChange() {
	$( "#arrow-right" ).click(function() {
    $('.' + pageNum).remove();
    pageNum = pageNum + 1;
    $('.' + pageNum).fadeToggle();

    if (pageNum >= 4) {
      $('#arrow-right').remove();
    }
    
    pageLoad();
	});
}

function init() {
  $('.1').load(pageList[0] + ".html");
  $('.2').load(pageList[1] + ".html");
  

  console.log(pageList);
	pageChange();

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}