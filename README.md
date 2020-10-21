# Traeth WebMap

A web app interactive map of "Traeth" - A homebrew D&D campaign setting.

I'm brushing up on some web-dev skills. Be gentle.

## Resources

* [Leaflet.js](https://leafletjs.com/) - JavaScript library for mobile-friendly interactive maps
* [GDAL](https://gdal.org/) - translator library for raster and vector geospatial data formats

#### Tile an image using GDAL:

```
Install Homebrew:
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
Install GDAL via brew:
  brew install gdal --HEAD
Install GDAL (probably not required, whatevs):
  brew install gdal
Validate install (need output version in a bit):
  gdal-config --version 
Upgrade python PIP:
  pip3 install —-upgrade pip
GDAL python binding:
  pip3 install gdal==version.from.output
Validate binding (should succeed with no message):
  python3 -c "from osgeo import gdal"
Validate GDAL version via pip:
  python3 -c 'import gdal; print(gdal.VersionInfo())''
Display GDAL commands in terminal:
  gdal +tab
Generate Tiles from raw tiff:
  gdal2tiles.py --profile=mercator -z 1-8 --s_srs EPSG.xyz -p 'raster' /path/to/file.tiff /tile/destination/dir/
```