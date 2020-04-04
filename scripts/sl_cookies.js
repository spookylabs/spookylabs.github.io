$(document).ready(function() {
	$("#cookieBugger").hide();
	var cookieBuggerState = sessionStorage.getItem('cookieBuggerClosed');

	if (cookieBuggerState == null) {
		sessionStorage.setItem('cookieBuggerClosed', '0');
		cookieBuggerState = sessionStorage.getItem('cookieBuggerClosed');
	}

	if (cookieBuggerState && cookieBuggerState != 1) {
		$("#cookieBugger").show();
	}
})

function annihilateTheCookieBugger() {
	sessionStorage.setItem('cookieBuggerClosed', '1');
	$("#cookieBugger").hide();
}