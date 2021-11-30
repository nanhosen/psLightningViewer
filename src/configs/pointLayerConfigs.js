export const fullGaccBoundaryConfig = {

  "version": "v1",
  "config": {
    "visState": {
      "filters": [],
      "layers": [
        {
          "id": "89d9dgj",
          "type": "geojson",
          "config": {
            "dataId": "gacc_boundaries",
            "label": "Gacc_Boundaries_small",
            "color": [
              255,
              203,
              153
            ],
            "columns": {
              "geojson": "_geojson"
            },
            "isVisible": true,
            "visConfig": {
              "opacity": 0.8,
              "strokeOpacity": 0.8,
              "thickness": 0.8,
              "strokeColor": [
                25,
                20,
                16
              ],
              "colorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "strokeColorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "radius": 10,
              "sizeRange": [
                0,
                10
              ],
              "radiusRange": [
                0,
                50
              ],
              "heightRange": [
                0,
                500
              ],
              "elevationScale": 5,
              "stroked": true,
              "filled": false,
              "enable3d": false,
              "wireframe": false
            },
            "hidden": false,
            "textLabel": [
              {
                "field": null,
                "color": [
                  255,
                  255,
                  255
                ],
                "size": 18,
                "offset": [
                  0,
                  0
                ],
                "anchor": "start",
                "alignment": "center"
              }
            ]
          },
          "visualChannels": {
            "colorField": null,
            "colorScale": "quantile",
            "strokeColorField": null,
            "strokeColorScale": "quantile",
            "sizeField": null,
            "sizeScale": "linear",
            "heightField": null,
            "heightScale": "linear",
            "radiusField": null,
            "radiusScale": "linear"
          }
        },
        
      ],
      "interactionConfig": {
        "tooltip": {
          "fieldsToShow": {
            "24HrLtng": [
              {
                "name": "cur",
                "format": null
              },
              {
                "name": "pol",
                "format": null
              },
              {
                "name": "ts",
                "format": null
              },
              {
                "name": "typ",
                "format": null
              },
              {
                "name": "eea",
                "format": null
              }
            ],
            "243yuwsnk": [
              {
                "name": "OBJECTID",
                "format": null
              },
              {
                "name": "GACCName",
                "format": null
              },
              {
                "name": "GACCUnitID",
                "format": null
              },
              {
                "name": "GACCAbbreviation",
                "format": null
              },
              {
                "name": "GACCLocation",
                "format": null
              }
            ]
          },
          "compareMode": false,
          "compareType": "absolute",
          "enabled": true
        },
        "brush": {
          "size": 0.5,
          "enabled": false
        },
        "geocoder": {
          "enabled": false
        },
        "coordinate": {
          "enabled": false
        }
      },
      "layerBlending": "normal",
      "splitMaps": [],
      "animationConfig": {
        "currentTime": null,
        "speed": 1
      }
    },
    "mapState": {
      "bearing": 0,
      "dragRotate": false,
      "latitude": 41.30968572099562,
      "longitude": -118.63847907889482,
      "pitch": 0,
      "zoom": 4.4929245323837295,
      "isSplit": false
    },
    "mapStyle": {
      "styleType": "custom1",
      "topLayerGroups": {},
      "visibleLayerGroups": {
        "label": true,
        "road": true,
        "building": true,
        "water": true,
        "land": true
      },
      "threeDBuildingColor": [
        194.6103322548211,
        191.81688250953655,
        185.2988331038727
      ],
      "mapStyles": {}
    }
  }
}

export function makeLayerConfigWithName(hour){
  const labelHour = hour ? hour : 'missing'
  return {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [],
        "layers": [
          {
            "id": "p72yipa",
            "type": "icon",
            "config": {
              "dataId": "24HrLtng",
              "label": `${hour} Hour Lightning`,
              "color": [
                248,
                149,
                112
              ],
              "columns": {
                "lat": "lat",
                "lng": "lon",
                "icon": "icon"
              },
              "isVisible": true,
              "visConfig": {
                "radius": 21.4,
                "fixedRadius": false,
                "opacity": 0.8,
                "colorRange": {
                  "name": "Custom Palette",
                  "type": "custom",
                  "category": "Custom",
                  "colors": [
                    "#002a9c",
                    "#C22E00"
                  ]
                },
                "radiusRange": [
                  0,
                  50
                ]
              },
              "hidden": false,
              "textLabel": []
            },
            "visualChannels": {
              "colorField": {
                "name": "sign",
                "type": "integer"
              },
              "colorScale": "quantize",
              "sizeField": null,
              "sizeScale": "linear"
            }
          }
        ],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "24HrLtng": [
                {
                  "name": "cur",
                  "format": null
                },
                {
                  "name": "pol",
                  "format": null
                },
                {
                  "name": "ts",
                  "format": null
                },
                {
                  "name": "typ",
                  "format": null
                },
                {
                  "name": "eea",
                  "format": null
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": false
          },
          "coordinate": {
            "enabled": false
          }
        },
        "layerBlending": "normal",
        "splitMaps": [],
        "animationConfig": {
          "currentTime": null,
          "speed": 1
        }
      },
      "mapState": {
        "bearing": 0,
        "dragRotate": false,
        "latitude": 39.69082911501236,
        "longitude": -112.08282069910514,
        "pitch": 0,
        "zoom": 5.192235667667807,
        "isSplit": false
      },
      "mapStyle": {
        "styleType": "custom1",
        "topLayerGroups": {},
        "visibleLayerGroups": {
          "label": true,
          "road": true,
          "building": true,
          "water": true,
          "land": true
        },
        "threeDBuildingColor": [
          194.6103322548211,
          191.81688250953655,
          185.2988331038727
        ],
        "mapStyles": {}
      }
    }
  }        
}
export const fullConfigObj = {
  "version": "v1",
  "config": {
    "visState": {
      "filters": [],
      "layers": [
        {
          "id": "p72yipa",
          "type": "icon",
          "config": {
            "dataId": "24HrLtng",
            "label": "24 Hour Lightning",
            "color": [
              248,
              149,
              112
            ],
            "columns": {
              "lat": "lat",
              "lng": "lon",
              "icon": "icon"
            },
            "isVisible": true,
            "visConfig": {
              "radius": 21.4,
              "fixedRadius": false,
              "opacity": 0.8,
              "colorRange": {
                "name": "Custom Palette",
                "type": "custom",
                "category": "Custom",
                "colors": [
                  "#002a9c",
                  "#C22E00"
                ]
              },
              "radiusRange": [
                0,
                50
              ]
            },
            "hidden": false,
            "textLabel": []
          },
          "visualChannels": {
            "colorField": {
              "name": "sign",
              "type": "integer"
            },
            "colorScale": "quantize",
            "sizeField": null,
            "sizeScale": "linear"
          }
        }
      ],
      "interactionConfig": {
        "tooltip": {
          "fieldsToShow": {
            "24HrLtng": [
              {
                "name": "cur",
                "format": null
              },
              {
                "name": "pol",
                "format": null
              },
              {
                "name": "ts",
                "format": null
              },
              {
                "name": "typ",
                "format": null
              },
              {
                "name": "eea",
                "format": null
              }
            ]
          },
          "compareMode": false,
          "compareType": "absolute",
          "enabled": true
        },
        "brush": {
          "size": 0.5,
          "enabled": false
        },
        "geocoder": {
          "enabled": false
        },
        "coordinate": {
          "enabled": false
        }
      },
      "layerBlending": "normal",
      "splitMaps": [],
      "animationConfig": {
        "currentTime": null,
        "speed": 1
      }
    },
    "mapState": {
      "bearing": 0,
      "dragRotate": false,
      "latitude": 39.69082911501236,
      "longitude": -112.08282069910514,
      "pitch": 0,
      "zoom": 5.192235667667807,
      "isSplit": false
    },
    "mapStyle": {
      "styleType": "custom1",
      "topLayerGroups": {},
      "visibleLayerGroups": {
        "label": true,
        "road": true,
        "building": true,
        "water": true,
        "land": true
      },
      "threeDBuildingColor": [
        194.6103322548211,
        191.81688250953655,
        185.2988331038727
      ],
      "mapStyles": {}
    }
  }
}        