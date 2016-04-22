Element.prototype.remove = function() {
	if ( !this.parentNode ) 
		throw new Error(`Element ${this.outerHTML} isn't parentNode`)
	
	this.parentNode.removeChild(this)
}
