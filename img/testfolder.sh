#!/bin/sh
echo "WGET Script to download Icons4Menu"
echo "----------------------------------"
echo "Source: https://niebert.github.io/icons4menu/wget_icons.sh"
echo "Check if current folder name is 'img' - then script started from folder 'img'."
currentfolder=${PWD##*/}
if [ "$currentfolder" = "img" ]; then
    echo "Started in 'img' - change to parent directory"
    cd ..
    echo ${PWD##*/}
else
    echo "Not started in directory 'img' - start script directly!"
fi;
