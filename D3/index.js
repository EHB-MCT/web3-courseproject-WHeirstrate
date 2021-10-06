const deltas = [-100, -4, -1, 0];

const svg = d3.create('svg')
    .attr('viewBox', [0, 0, width, height]);

const tile = d3.tile()
    //.extend([top-left], [bottom-right])
    .extend([
        [0, 0],
        [width, height]
    ])
    //.tilesize(256/512)
    .tileSize(512)
    // clampX(true) = "fixed" x-coördinate
    .clampX(false);

const zoom = d3.zoom()
    //.scaleExtend([min-scale, max-scale]) || ignored when limit reached
    .scaleExtend([1 << 8, 1 << 22])
    .extend([
        [0, 0],
        [width, height]
    ])
    // user-imput trigger
    .on('zoom', (e) => zoomed(e.transform));

const levels = svg.append('g')
    .attr('pointer-events', 'none')
    .selectAll('g')
    .data(deltas)
    .join('g')
    .style('opacity', showlayers ? 0.3 : null)

svg
    .call(zoom)
    .call(zoom.transform, mutable transform);

function zoomed(transform) {
    mutable transform = transform;

    levels.each(function (delta) {
        const tiles = tile.zoomDelta(delta)(transform);

        d3.select(this)
            .selectAll('image')
            .data(tiles, d => d)
            .join('image')
            .attr('xlink:href', d => url(...d3.tileWrap(d)))
            .attr("x", ([x]) => (x + tiles.translate[0]) * tiles.scale)
            .attr("y", ([, y]) => (y + tiles.translate[1]) * tiles.scale)
            .attr("width", tiles.scale)
            .attr("height", tiles.scale);
    });
}

return svg.node