var leafletUtils = window.leafletUtils || {};
(function (ns) {
    leafletUtils.SkTiles = function (options) {
        /**
         Tiles from Statkart. Available layers are:
         - matrikkel_bakgrunn
         - topo2
         - topo2graatone
         - europa
         - toporaster2
         - sjo_hovedkart2
         - kartdata2
         - norges_grunnkart
         - norges_grunnkart_graatone

         See http://statkart.no/Kart/Kartverksted/Visningstjenester/
         **/
        return L.tileLayer(
            'http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=' + options.layers + '&zoom={z}&x={x}&y={y}',
            {
                attribution: "Converter: <a href='http://github.com/kartverket/sosi.js' title='a node.js utility to parse SOSI files'>sosi.js</a> - Maps: <a href='http://statkart.no' title='The National Mapping Authority of Norway'>Kartverket</a>"
            }
        );

    };
}(leafletUtils));
