#!/bin/bash
npm run build
rm -rf ../mmxcrono.github.io/assets/ ../mmxcrono.github.io/index.html
cp -r dist/* ../mmxcrono.github.io/
