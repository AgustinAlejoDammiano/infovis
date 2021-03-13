const url_prefix = "pages/"
let makeovers = [
    {'title': "Makeover Mondays - Week 9", "url": "makeoverMondayWeek9.html"},
]

d3.select("#pages-list")
    .selectAll("li")
    .data(makeovers)
    .enter()
    .append("li")
    .append("a")
    .text(d => d.title)
    .attr("href", d => url_prefix + d.url);
