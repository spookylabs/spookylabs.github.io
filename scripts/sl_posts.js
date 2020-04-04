function loadPost(id) {
	var postDiv = $("#post");
	postDiv.html("<h3>" + posts[id][1] + "</h3>" + posts[id][2] + "<div class='postFooter'>－－－－－－－－－－</div><div class='postFooter'>" + posts[id][0] + "</div><div class='postFooter'>ｓｐｏｏｋ</div>");
}

function loadPostsList() {
	var postTable = $("#postsTable");
	var i = posts.length - 1;
	for(i; i >= 0 ; i--) {
		postTable.append("<tr onclick=\"loadPost(" + i + ")\"><td>v" + (i + 1) + ".0</td><td>" + posts[i][0] + "</td><td>" + posts[i][1] + "</td></tr>");
	}
}