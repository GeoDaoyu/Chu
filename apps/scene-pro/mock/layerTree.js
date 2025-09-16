const data = [
  {
    key: '0f4621',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
    title: '地震',
    type: 'geojson',
  },
  {
    title: '要素类型',
    key: '3f4d6d',
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
    children: [
      {
        key: 'ffi132',
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/MapServer',
        title: 'DamageAssessment',
      },
    ],
  },
];

export default {
  'GET /api/v1/layerTree': (_, res) => {
    res.json({
      success: true,
      data,
      errorCode: 0,
    });
  },
};
