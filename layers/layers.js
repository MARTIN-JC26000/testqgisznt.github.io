ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([571203.097626, 6706831.389998, 727515.902374, 6807657.009998]);
var wms_layers = [];

var lyr_SCAN25TOPOWM052020_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/2pidjvd3oh54bqfml4x5b4km/geoportail/r/wms/",
    attributions: ' ',
                              params: {
                                "LAYERS": "SCAN25TOPO_PYR-JPEG_WLD_WM",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "SCAN25TOPO WM 05-2020",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SCAN25TOPOWM052020_0, 1]);
var format_COMMUNE_1 = new ol.format.GeoJSON();
var features_COMMUNE_1 = format_COMMUNE_1.readFeatures(json_COMMUNE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_COMMUNE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_1.addFeatures(features_COMMUNE_1);
var lyr_COMMUNE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNE_1, 
                style: style_COMMUNE_1,
                interactive: true,
                title: '<img src="styles/legend/COMMUNE_1.png" /> COMMUNE'
            });
var format_DEPARTEMENT_2 = new ol.format.GeoJSON();
var features_DEPARTEMENT_2 = format_DEPARTEMENT_2.readFeatures(json_DEPARTEMENT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_DEPARTEMENT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTEMENT_2.addFeatures(features_DEPARTEMENT_2);
var lyr_DEPARTEMENT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTEMENT_2, 
                style: style_DEPARTEMENT_2,
                interactive: true,
                title: '<img src="styles/legend/DEPARTEMENT_2.png" /> DEPARTEMENT'
            });

lyr_SCAN25TOPOWM052020_0.setVisible(true);lyr_COMMUNE_1.setVisible(true);lyr_DEPARTEMENT_2.setVisible(true);
var layersList = [lyr_SCAN25TOPOWM052020_0,lyr_COMMUNE_1,lyr_DEPARTEMENT_2];
lyr_COMMUNE_1.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_DEPARTEMENT_2.set('fieldAliases', {'ID': 'ID', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_COMMUNE_1.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_DEPARTEMENT_2.set('fieldImages', {'ID': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_COMMUNE_1.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'POPULATION': 'no label', 'SURFACE_HA': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'CL_ARROND': 'no label', 'CL_COLLTER': 'no label', 'CL_DEPART': 'no label', 'CL_REGION': 'no label', 'CAPITALE': 'no label', 'DATE_RCT': 'no label', 'RECENSEUR': 'no label', 'SIREN_EPCI': 'no label', 'ID_CH_LIEU': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_DEPARTEMENT_2.set('fieldLabels', {'ID': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', });
lyr_DEPARTEMENT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});