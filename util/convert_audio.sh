#!/bin/bash

ffmpeg -i Theme.mp3 -c:a aac -vbr 4 m4a/theme.m4a
ffmpeg -i Storytelling.mp3 -c:a aac -vbr 4 m4a/storytelling.m4a
ffmpeg -i Town.mp3 -t 41.143 -c:a aac -vbr 4 m4a/town.m4a
ffmpeg -i Forest.mp3 -c:a aac -vbr 4 m4a/forest.m4a
ffmpeg -i Underpass.mp3 -t 60 -c:a aac -vbr 4 m4a/underpass.m4a
ffmpeg -i Catacomb.mp3 -t 57.6 -c:a aac -vbr 4 m4a/catacomb.m4a
ffmpeg -i Temple.mp3 -t 115.2 -c:a aac -vbr 4 m4a/temple.m4a
ffmpeg -i Under\ Temple.mp3 -t 57.6 -c:a aac -vbr 4 m4a/under_temple.m4a
ffmpeg -i Battle1.mp3 -c:a aac -vbr 4 m4a/battle1.m4a
ffmpeg -i Battle2.mp3 -t 72 -c:a aac -vbr 4 m4a/battle2.m4a
ffmpeg -i Battle3.mp3 -t 83.2 -c:a aac -vbr 4 m4a/battle3.m4a

ffmpeg -i Theme.mp3 -vbr 4 ogg/theme.ogg
ffmpeg -i Storytelling.mp3 -vbr 4 ogg/storytelling.ogg
ffmpeg -i Town.mp3 -t 41.143 -vbr 4 ogg/town.ogg
ffmpeg -i Forest.mp3 -vbr 4 ogg/forest.ogg
ffmpeg -i Underpass.mp3 -t 60 -vbr 4 ogg/underpass.ogg
ffmpeg -i Catacomb.mp3 -t 57.6 -vbr 4 ogg/catacomb.ogg
ffmpeg -i Temple.mp3 -t 115.2 -vbr 4 ogg/temple.ogg
ffmpeg -i Under\ Temple.mp3 -t 57.6 -vbr 4 ogg/under_temple.ogg
ffmpeg -i Battle1.mp3 -vbr 4 ogg/battle1.ogg
ffmpeg -i Battle2.mp3 -t 72 -vbr 4 ogg/battle2.ogg
ffmpeg -i Battle3.mp3 -t 83.2 -vbr 4 ogg/battle3.ogg

