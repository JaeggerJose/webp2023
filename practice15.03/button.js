function addfunction() {
	var btn = document.createElement("BUTTON");
	var counter = 1;
	btn.innerHTML = "Click me";
	btn.setAttribute("id", "btn");
	document.body.appendChild(btn);
};

function deletefunction() {
	var btc = document.createElement("BUTTON");
	btc.innerHTML = "Click me";
	btc.setAttribute("id", "btn");
	document.body.removeChild(btc[0]);
}