function openPremium(evt, tabsPr) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabsPr).style.display = "block";
    evt.currentTarget.className += " active";
};





// smollle selector


window.onload = function () {
	  var opt = (window.location.search).replace("?", ""),
	  select = document.getElementById("nazn"),
	  options = select.options;
	  for (var i = 0; i < options.length; i++) {
	    if (options[i].id == opt) {break;}
	  }
	  i = 0 //убрать
	  select.selectedIndex = i;
	  function go() {
	    var b = {
	    1: ".one",
	    2: ".too",
	    3: ".three",
      4: ".four"
	    }, c = this.value,
	    a;
	    for (a in b)
	    {var elems = document.querySelectorAll(b[a]);
	      Array.prototype.forEach.call(elems, function(el)
	        {
	          el.style.display = c == a? "block": "none"
	        }
	      );
	    }
	  };
	  select.onchange = go;
	  go.call(select)
}
