BOOTH SOUNDBOARD — setup

1. Put your sound files in the sounds/ folder (.mp3, .m4a or .wav).
2. Edit cues.js: one line per cue, in script order, plus the extras grid.
3. Upload the whole folder to a GitHub Pages repo (or any https web host).
4. On each device, open the link ONCE while online. When the top bar says
   "Saved for offline", the board works with no Wi-Fi.
5. iPad: Share > Add to Home Screen, then launch it from that icon (full screen).

After changing cues.js or sounds: upload again, open the board online, reload once.
Do not double-click index.html from a computer's desktop: browsers block it from
loading the sound files. Always open it from the web link.
(app.html is the source; build.py regenerates index.html from it.)
