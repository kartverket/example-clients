function initMap() {
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(0,50,35,70);

    var service = ['http://cache.kartverket.no/grunnkart/wmts',
                   'http://cache2.kartverket.no/grunnkart/wmts',
                   'http://cache3.kartverket.no/grunnkart/wmts',
                   'http://cache4.kartverket.no/grunnkart/wmts',
                   ];


    var proj   = 'EPSG:900913';
    var labels = [];
    for (var level=0; level<20; level++) {
      labels.push(proj + ":" + level);
    }
    var viewer = new Cesium.Viewer('viewerDiv', {
                   //sceneMode : Cesium.SceneMode.COLUMBUS_VIEW,
                   imageryProvider : new Cesium.WebMapTileServiceImageryProvider({
                       url : service,
                       layer : 'egk',
                       style : 'default',
                       format : 'image/png',
                       tileMatrixSetID : proj,
                       tileMatrixLabels : labels,
                       credit : new Cesium.Credit("CC-BY Kartverket","", "http://www.kartverket.no/")
                   }),
                   timeline: false,
                   geocoder: false,
                   navigationHelpButton: false,
                   creditContainer: "footer",
                   baseLayerPicker : false,
    });

    var layers = viewer.scene.imageryLayers;
    var layers = layers.addImageryProvider( new Cesium.WebMapTileServiceImageryProvider({
                   url : service,
                   layer : 'norges_grunnkart',
                   style : 'default',
                   format : 'image/png',
                   tileMatrixSetID : proj,
                   tileMatrixLabels : labels, <!-- NOTE: this parameter was introduced by https://github.com/AnalyticalGraphicsInc/cesium/pull/2275, may not be supported in an official release yet -->
                   credit : new Cesium.Credit("CC-BY Kartverket","", "http://www.kartverket.no/")
    }));

    var camera = viewer.scene.camera;
    camera.setPositionCartographic(Cesium.Cartographic.fromDegrees(15,65,3000000));

    var terrainProvider = new Cesium.CesiumTerrainProvider({
                url : '//cesiumjs.org/stk-terrain/tilesets/world/tiles'
    });
}

window.onload= initMap;
