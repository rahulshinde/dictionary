var pageList = [1, 2, 3];

shuffle(pageList);
init();

function pageChange() {
	$( "#arrow-right" ).click(function() {
		$("#current").fadeToggle();
		$(".next-class").fadeToggle();

		$(".current-class").attr("id","previous");

		$(".next-class").attr("id","current");
		$("#current").fadeToggle();
	});
}

function init() {
	console.log(pageList);
	$( "#current" ).load( pageList[0] + ".html" );
	$("#next").load( pageList[1] + ".html" );

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