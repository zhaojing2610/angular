;(function(win,doc){
	var rem = 20/375 * document.documentElement.clientWidth;
	doc.documentElement.style.fontSize = rem + 'px';
	win.onresize = function(){
		rem = 20/375 * document.documentElement.clientWidth;
		doc.documentElement.style.fontSize = rem + 'px';
	};
})(window,document);