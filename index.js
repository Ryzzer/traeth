var mousePositionControl = new ol.control.MousePosition({
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});

var map = new ol.Map({
    controls: ol.control.defaults().extend([mousePositionControl]),
    target: 'map',
    layers: [
        new ol.layer.Group({
            title: 'Overlay',
            layers: [
                new ol.layer.Tile({
                    title: 'Overlay',
                    // opacity: 0.7,
                    source: new ol.source.TileImage({
                        attributions: '',
                        tileGrid: new ol.tilegrid.TileGrid({
                            extent: [0,-2000,4000,0],
                            origin: [0,-2000],
                            resolutions: [16,8,4,2,1,0.5,0.25,0.125,0.0625],
                            tileSize: [256, 256]
                        }),
                        tileUrlFunction: function(tileCoord) {
                            return ('./assets/map/{z}/{x}/{y}.png'
                                .replace('{z}', String(tileCoord[0]))
                                .replace('{x}', String(tileCoord[1]))
                                .replace('{y}', String(- 1 - tileCoord[2])));
                        },
                    })
                }),
            ]
        }),
    ],
    view: new ol.View({
        center: [2000.000000, -1000.000000],
        resolution: 16.000000,
    })
});