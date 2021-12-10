var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3281192023528592
      },
      "linkHotspots": [
        {
          "yaw": -0.8137987229362729,
          "pitch": 0.05501255786476378,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8129659067898398,
          "pitch": 0.04288889800052331,
          "title": "Faculty of Engineering",
          "text": "welcome to the faculty of engineer"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3281192023528592
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0.07044840996459101,
          "pitch": 0.29508302558099686,
          "title": "Engineering Auditorium Atrium",
          "text": "Enjoy the Atrium of Engineering!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.20366946094232397,
        "pitch": -0.18506579049179095,
        "fov": 1.3281192023528592
      },
      "linkHotspots": [
        {
          "yaw": -1.8136443499556698,
          "pitch": -0.005453615863597605,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.12426302196949734,
          "pitch": -0.05099597623582497,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6172283973026254,
          "pitch": 0.09604806739149296,
          "title": "Engineering Auditorium",
          "text": "You are at Engineering Auditorium now! Have a nice time here!"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
