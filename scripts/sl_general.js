$(document).ready(function() {
	setRandomBackground();

	$("body").css("opacity", "1");
	$("#authorName").html("ｓｐｏｏｋ");

	loadPostsList();

	if (posts.length > 0) {
		loadPost(posts.length - 1);
	}

	setInterval("disturbFooter()", 256);
	setInterval("disturbLogo()", 900000);
})

function disturbFooter() {
	$("#authorName").html(replaceCharAt($("#authorName").html(), getRandomCharFromAlphabet(), getRandomIntBetween(0, $("#authorName").html().length)));
}

function disturbLogo() {
	if (Math.random() > 0.5) {
		$("#imgLogo").attr("src", "resources/spookylabs_logo.png");
	} else {
		$("#imgLogo").attr("src", "resources/spookylabs_logo_alt.png");
	}
}

function replaceChar(string, newChar, index) {
    var newStringArray = string.split("");
    newStringArray[index] = newChar;
    var newString = newStringArray.join("");
    return newString;
}

function setRandomBackground() {
	$("html").css('background-image', 'url("resources/backgrounds/bg_' + getRandomIntBetween(1, 8) + '.jpg")');
}