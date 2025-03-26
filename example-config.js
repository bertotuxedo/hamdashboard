const disableSetup = true;
var topBarCenterText = `KD2UCJ - FN23ax`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/KD2UCJ", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/39.5/-96.41",
    "1",
    "R",
  ],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=39.39961001,-96.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=39.0157&lon=-96.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-96.79,39.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KTYX_loop.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
  ],
  [
    "PUBLIC SQUARE",
    "iframe|https://www.youtube.com/embed/Zz9hMrxl20I?autoplay=1&mute=1",
  ],
  [
    "SATELLITE NORTHEAST",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/ne/EXTENT3/GOES16-NE-EXTENT3-600x600.gif",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ny.png",
  ],
  [
    "APRS.fi",
    "iframe|https://aprs-map.info/?center=43.9726,-75.8372&zoom=8",
  ],
  ["FATS YOUTUBE", "iframe|https://www.youtube.com/embed/p7PUudU_ZXE?autoplay=1&mute=1"],
  [
    "ADSB EXCHANGE",
    "iframe|https://globe.adsbexchange.com/?airport=ART",
  ],
  ["HAMCLOCK", "iframe|http://10.0.0.26:8088/live.html"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,10100,
  100000200,10500,10300,1000000600,
  300000400,600000700,60900,10800
];
