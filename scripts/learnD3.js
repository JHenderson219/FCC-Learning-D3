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

/*const dataset = [
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
*/

 const dataset = [
                  [ 50,     25],
                  [ 100,   50 ],
                  [ 150,   75 ],
                  [ 200,   100 ],
                  [ 250,   125 ],
                  [ 300,   150 ],
                  [ 350,   175 ],
                  [ 400,    200 ],
                  [ 450,    225 ],
                  [ 500,   250 ]
                ];

const data2 = [50,100,150, 200, 250, 300, 350, 400, 450, 500];
   	//Constants for Width, Height, and padding for the SVG area 
    const w = document.getElementById('chart').offsetWidth;
    const h = document.getElementById('chart').offsetHeight;
    const padding = 60;
    

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);
    
    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([h - padding, padding]);
    
    const svg = d3.select("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);
    
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
    
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    
    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);
    
    // Add your code below this line
    svg.append("g")
       .attr("transform", "translate("+ (w - padding) +",0)")
       .call(yAxis);
    
    // Add your code above this line
  	/*svg.selectAll("line")
  		.data(dataset)
  		.enter()
  		.append("line")
  		.attr("x1", d => d[0])
  		.attr("x2", 100 )
  		.attr("y1", d => d[1])
  		.attr("y2", 100)
  		.attr("stroke-width",2)
  		.attr("stroke", "black");*/

  	const lineFunction = d3.line()
  							.x(d => {return xScale(d[0])})
  							.y(d => {return  yScale(d[1])})

  	svg.append("path")
  		.attr("d", lineFunction(dataset))
  		.attr("stroke", "blue")
  		.attr("stroke-width", 2)
  		.attr("fill","none")