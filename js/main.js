const url_prefix = "pages/"
let pages = [
    {'title': "Makeover Mondays - Week 9", "url": "makeoverMondayWeek9.html"},
    {'title': "Makeover Mondays - Week 11", "url": "makeoverMondayWeek11.html"},
    {'title': "Argentina Población", "url": "argentinaPoblacion.html"},
    {'title': "TP Personal Data", "url": "TPPersonalData.html"},
]

d3.select("#pages-list")
    .selectAll("li")
    .data(pages)
    .enter()
    .append("li")
    .append("a")
    .text(d => d.title)
    .attr("href", d => url_prefix + d.url);
