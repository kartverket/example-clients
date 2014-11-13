## Example client for cesium (http://cesiumjs.org)

Cesium support WMTS services through their WebMapTileServiceImageryProvider. 
The current trunk version does not read TileMatrix IDs from the GetCapabilities document. The included Cesium client therefore accepts a parameter TileMatrixLabels, and makes use of these IDs to generate the proper tilematrix= parameter.




