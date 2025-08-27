export const id = 'geojson';

export const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';

export const template = {
  title: 'Earthquake Info',
  content: 'Magnitude {mag} {type} hit {place} on {time}',
  fieldInfos: [
    {
      fieldName: 'time',
      format: {
        dateFormat: 'short-date-short-time',
      },
    },
  ],
};

export const renderer = {
  type: 'simple',
  field: 'mag',
  symbol: {
    type: 'simple-marker',
    color: 'orange',
    outline: {
      color: 'white',
    },
  },
  visualVariables: [
    {
      type: 'size',
      field: 'mag',
      stops: [
        {
          value: 2.5,
          size: '4px',
        },
        {
          value: 8,
          size: '40px',
        },
      ],
    },
  ],
};
