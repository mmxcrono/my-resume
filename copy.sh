#!/bin/bash
npm run build
rm ../mmxcrono.github.io/assets/ ../mmxcrono.github.io/index.html -rf
cp dist/* ../mmxcrono.github.io/ -r
