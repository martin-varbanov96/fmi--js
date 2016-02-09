$(function(){
    function toRadians (angle) {
        return angle * (Math.PI / 180);
    }
		var d1 = [];
		for (var i = 0; i < 360; i += 1) {
			d1.push([i, Math.sin(toRadians(i))]);
		}
		$.plot("#graph", [ d1 ]);
});