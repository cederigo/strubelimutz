#!/bin/bash

convert "$1" -resize 640x480 -strip -quality 86 "$1"
