function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");
	n = parseInt(n);
	if (n < 2) {
		if (n === 0) {
			value = 0;
		}
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	}
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute('class');
		left.html.setAttribute('class', clas + ' fib-left');

		var right = fibHelper(n - 2);
		clas = right.html.getAttribute('class');
		right.html.setAttribute('class', clas + ' fib-right');

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}

	return { 'value': value, 'html': div };
}

var fib = function (n, node) {
	var fibTree = node.querySelector('div.fib');
	if (fibTree) {
		node.removeChild(fibTree);
	}
	var tree = fibHelper(n);
	node.appendChild(tree.html);
}
function pellHelper(n) {
	var value;
	n = parseInt(n);
	var div = document.createElement('div');
	div.setAttribute("class", "fib");
	if(n < 2) {
		if(n === 0){
			value = 0;
		}
		else if ( n === 1 ){
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Pell('+ n + ') = ' + value;
		div.appendChild(p);
	}
	else {
		var left = pellHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = pellHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = (2*left.value) + right.value;
		var p = document.createElement('p');
		p.textContent = 'Pell(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
var pell = function (n, node) {
	var pellTree = node.querySelector('div.fib');
	if (pellTree) {
		node.removeChild(pellTree);
	}
	var tree = pellHelper(n);
	node.appendChild(tree.html);
}
//Function tribHelper
 function tribHelper(n) {
 	var value;
 	n = parseInt(n);
 	var div = document.createElement('div');
 	div.setAttribute("class", "fib");
	if (n < 4) {
 		if (n === 0) {
			value = 0;
 		 } 
 		else if (n === 1) {
 			value = 0;
 		}
    	else if (n === 2) {
    	value = 1;
    	}
    	else if (n === 3) {
    	value = 1;
    	}
		var p = document.createElement('p');
		p.textContent = 'Trib('+ n + ') = ' + value;
		div.appendChild(p);
	} 
  else {
		var left = tribHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
        
    	var middle = tribHelper(n - 2);
    	var clas = middle.html.getAttribute("class");
    	middle.html.setAttribute("class", clas + " fib-middle");
		
		var right = tribHelper(n - 3);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + middle.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Trib(' + n + ') = ' + value ;
		div.appendChild(p);

		div.appendChild(left.html);
    	div.appendChild(middle.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
};
var trib = function (n, node) {
	var tribTree = node.querySelector('div.fib');
	if (tribTree) {
		node.removeChild(tribTree);
	}
	var tree = tribHelper(n);
	node.appendChild(tree.html);
}

var fibButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	fib(value, form.parentNode);
}

var fibSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Fib(' + me.value + ')';
}
var pellButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	pell(value, form.parentNode);
}

var pellSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Pell(' + me.value + ')';
}
var tribButton = function(me) {
	var form = me.parentNode;
	var slider = form.querySelector('input');
	var value = slider.value;
	trib(value, form.parentNode);
}

var tribSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Trib(' + me.value + ')';
}