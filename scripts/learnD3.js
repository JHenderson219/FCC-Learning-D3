/*const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500;
const h = 500;

const svg = d3.select('body')
	.append("svg")	
	.attr("width", w)
	.attr("height", h);

	svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("width", 25)
	.attr("height", (d) => d*3)
	.attr('x', (d,i) => i*30)
	.attr('y', (d) => h-d*3)
	.attr ('fill', "navy")
	.attr("class","bar")
	.append('title')
	.text((d) => d);

	svg.selectAll('text')
		.data(dataset)
		.enter()
		.append('text')
		.attr('x', (d,i) => i*30)
		.attr('y', (d) => h-d*3+3);
		

    */

const dataset = [
	[ 34,    78 ],
	[ 109,   280 ],
	[ 310,   120 ],
	[ 79,    411 ],
	[ 420,   220 ],
	[ 233,   145 ],
	[ 333,   96 ],
	[ 222,   333 ],
	[ 78,    320 ],
	[ 21,    123 ]
    ];
    
    
const w = 500;
const h = 500;
    
const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);
    
svg.selectAll("circle")
	.data(dataset)
	.enter()
	.append("circle")
    .attr("cx", (d, i) => d[0])
    .attr("cy", (d, i) => h - d[1])
    .attr("r", 5);

svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text((d, i) => d[0]+", "+d[1])
	.attr("x", (d, i) => d[0]+5)
    .attr("y", (d, i) => h - d[1]);
	
