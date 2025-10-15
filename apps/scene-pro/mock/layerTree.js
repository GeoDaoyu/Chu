const data = [
  {
    key: '0f4621',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
    title: '地震',
    type: 'geojson',
  },
  {
    title: '要素服务',
    key: '3f4d6d',
    count: 2,
    children: [
      {
        key: 'f98djk',
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0',
        title: '树木',
      },
      {
        key: 'dfssff',
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/128peaks/FeatureServer',
        title: '山峰',
      },
    ],
  },
  {
    title: '动态服务',
    key: '112jdf',
    count: 1,
    children: [
      {
        key: 'ffi132',
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/MapServer',
        title: 'DamageAssessment',
      },
    ],
  },
  {
    title: '切片服务',
    key: '39fjhh',
    count: 2,
    children: [
      {
        key: 'fuie38',
        url: 'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer',
        title: '全球矢量切片',
      },
      {
        key: 'fu887d',
        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer',
        title: '地形切片',
      },
    ],
  },
  {
    title: '三维服务',
    key: '3ofhuu',
    count: 4,
    children: [
      {
        key: 'dfjkkd',
        url: 'https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Esri_Admin_Building/SceneServer',
        title: '建筑',
      },
      {
        key: 'dfiijh',
        url: 'https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/BARNEGAT_BAY_LiDAR_UTM/SceneServer',
        title: '点云',
      },
      {
        key: 'wejihh',
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Paris_3D_Local_WSL2/SceneServer',
        title: '场景',
      },

      {
        key: '2ihfh9',
        url: 'https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/Buildings_Frankfurt_2021/SceneServer',
        title: '倾斜',
      },
    ],
  },
];

export default {
  'GET /Chu/api/v1/layerTree.json': (_, res) => {
    res.json({
      success: true,
      data,
      errorCode: 0,
    });
  },
};
