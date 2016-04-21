Element.prototype.remove = function() {
	if ( this.parentNode ) parent.removeChild(this)
	
	throw new Error(`Element ${el.outerHTML} isn't parentNode`)
}
