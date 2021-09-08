var pieColor = ["mediumturquoise", "lavender"];
var innerRadius = 32;
var outerRadius = 42;
var padding = 5; //not used yet
var pieDivs = d3.selectAll("div.single-value-pie");
var pieDataset = [];

pieDivs.each(function() {
	pieDataset.push( d3.select(this).attr("data-value-total").split(", ") ); //set every pie data
	})

pieDivs.data( pieDataset )
			.append("svg").attr("width", 2*outerRadius).attr("height", 2*outerRadius)
		//return the reference to the single svg
			.each(function(pieDatadofCurrentDiv){
				//label
				d3.select(this)
					.append("text").attr("transform", "translate(" + outerRadius + "," + (outerRadius+5) + ")")
					.text(pieDatadofCurrentDiv[0]+"/"+pieDatadofCurrentDiv[1]).attr("text-anchor", "middle");
				//draw pie
				d3.select(this).selectAll("g")
				.data(d3.pie()([pieDatadofCurrentDiv[0],pieDatadofCurrentDiv[1]-pieDatadofCurrentDiv[0]]) )
				.enter().append("g").attr("transform", "translate(" + outerRadius + "," + outerRadius + ")")
				.append("path").attr("fill", function(d, i){return pieColor[i]} ).attr("d", 
																					d3.arc()
																					.innerRadius(innerRadius)
																					.outerRadius(outerRadius));
			})