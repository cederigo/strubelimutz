#!/bin/bash

for X in *.jpg; do convert "$X" -resize 640x480 -strip -quality 86 "$X"; done
