#!/bin/bash
for file in `\find public/img/tileset/original/*.png -maxdepth 1 -type f`; do
  cp $file ${file/original/extruded}
  npx tile-extruder --tileWidth 32 --tileHeight 32 --margin 0 --spacing 0 --input $file --output ${file/original/extruded}
done
