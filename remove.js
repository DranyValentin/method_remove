Element.prototype.remove = function() {
	var parent = this.parentNode
	if (parent) parent.removeChild(this)
}
