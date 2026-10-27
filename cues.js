/* ============================================================
   SHOW FILE — Looking Glass Land (James DeVita). Cue notes give the script page.
   ------------------------------------------------------------
   cues   = the scripted cue list, in the order GO fires them.
   extras = the button grid for unplanned / repeatable sounds.

   Fields for a sound (both lists):
     id       unique label shown on screen ("Q1", "X3")
     name     what the operator sees
     file     path to the audio file inside the sounds/ folder
              (.mp3, .m4a or .wav — avoid .ogg, iPads won't play it)
     volume   0–100 (default 100)
     fadeIn   seconds to fade in (default 0 = starts instantly)
     fadeOut  seconds to fade out when stopped (default 0)
     loop     true = repeats until faded/stopped (default false)
     note     optional: the line or action the cue is called on
     key      extras only: keyboard shortcut ("1", "q", etc.)
     retrigger  what tapping a sound that's already playing does:
              "overlap" = play another copy on top (default for one-shots)
              "restart" = stop it and start over
              "toggle"  = fade it out (default for loops)

   Cue-list-only actions that control another cue:
     { id:"Q8", action:"fade", target:"Q3", fade:6, name:"Rain out" }
     { id:"Q9", action:"stop", target:"Q3", name:"Rain cut" }

   editPasscodeHash: scrambled form of the Edit-mode passcode.
     The sample passcode is 2468. Change it on the board itself:
     unlock Edit > Change passcode > Export show file, then paste
     the exported file over this one. Delete this line to remove the lock.

   wallpaper: optional background image, e.g. "images/wallpaper.jpg".
     Use a .jpg about 1600 px wide and under 500 KB. Delete the line
     for the plain dark background.
   wallpaperDim: 0–100, how much the wallpaper is darkened (default 55).
     Keep it 50 or higher so the screen doesn't light up the booth
     and the buttons stay readable.

   Words, volumes and fades changed in Edit mode on a device are saved on
   that device only. Use "Export show file" to copy them back here.
   ============================================================ */
var SHOW = {
  "title": "Looking Glass Land",
  "editPasscodeHash": "920805781797e6b9ee907fe5966e00fbdd96b42c46f092b00f0928da24cef7de",
  "wallpaper": "images/wonderland.jpg",
  "wallpaperDim": 55,
  "cues": [
    {"id": "Q1", "name": "Preshow music", "file": "sounds/preshow.mp3", "loop": true, "volume": 60, "fadeIn": 3, "fadeOut": 5, "note": "House open"},
    {"id": "Q2", "action": "fade", "target": "Q1", "fade": 5, "name": "Preshow out", "note": "House to half, before LIGHTS UP (p.1)"},
    {"id": "Q3", "name": "Transformation music", "file": "sounds/transformation.mp3", "loop": true, "volume": 85, "fadeIn": 1.5, "fadeOut": 1, "note": "p.4 ALICE: \"...I wish I could put myself right through and stay there forever!\""},
    {"id": "Q4", "name": "Through the looking glass", "file": "sounds/looking-glass.mp3", "volume": 100, "note": "p.5 ALICE swirls through the frame: \"...Where is everything?\""},
    {"id": "Q5", "action": "fade", "target": "Q3", "fade": 1, "name": "Transformation music out", "note": "p.5 LIGHTS AND MUSIC STOP as Alice regains her bearings"},
    {"id": "Q6", "name": "Trumpet fanfare", "file": "sounds/fanfare.mp3", "volume": 95, "note": "p.12 TIGER-LILY: \"...The Legal Regal Royal Majesty Herself. Trumpets!\""},
    {"id": "Q7", "name": "Trumpet fanfare (Red Queen exits)", "file": "sounds/fanfare.mp3", "volume": 95, "note": "p.13 RED QUEEN: \"...don't begin it! Good-bye!\" (runs off)"},
    {"id": "Q8", "name": "Red King snore 1", "file": "sounds/snore.mp3", "volume": 90, "note": "p.20 DEE: \"The Walrus and the Carpenter—\""},
    {"id": "Q9", "name": "Red King snore 2", "file": "sounds/snore.mp3", "volume": 90, "note": "p.20 DEE (again): \"The Walrus and the Carpenter—\""},
    {"id": "Q10", "name": "Red King snore 3", "file": "sounds/snore.mp3", "volume": 90, "note": "p.21 DEE: \"...They'd eaten every one.\""},
    {"id": "Q11", "name": "Snoring (continuous)", "file": "sounds/snoring-loop.mp3", "loop": true, "volume": 75, "fadeIn": 1, "fadeOut": 2, "note": "p.21 BOTH: \"This way. Over here. Watch your step.\""},
    {"id": "Q12", "action": "fade", "target": "Q11", "fade": 2, "name": "Snoring out", "note": "p.22 after ALICE: \"Is not!\""},
    {"id": "Q13", "name": "Train", "file": "sounds/train-loop.mp3", "loop": true, "volume": 85, "fadeIn": 1, "fadeOut": 2, "note": "p.24 CONDUCTOR: \"All aboard!\" (train lurches forward)"},
    {"id": "Q14", "action": "fade", "target": "Q13", "fade": 1.5, "name": "Train stops", "note": "p.24 the train lurches to a stop"},
    {"id": "Q15", "name": "Fifth square arrival", "file": "sounds/arrival-chime.mp3", "volume": 90, "note": "p.24 CONDUCTOR: \"Everyone off for the fifth square!\""},
    {"id": "Q16", "name": "Alarm (Humpty falls)", "file": "sounds/alarm-loop.mp3", "loop": true, "volume": 80, "fadeOut": 2, "note": "p.32 Humpty rolls off the wall; chaos"},
    {"id": "Q17", "action": "fade", "target": "Q16", "fade": 2, "name": "Alarm out", "note": "p.32 ALL except ALICE exit"},
    {"id": "Q18", "name": "Sixth square arrival", "file": "sounds/arrival-chime.mp3", "volume": 90, "note": "p.32 Alice steps onto the sixth square"},
    {"id": "Q19", "name": "Intermission music", "file": "sounds/intermission.mp3", "loop": true, "volume": 60, "fadeIn": 2, "fadeOut": 5, "note": "p.32 End of Act One"},
    {"id": "Q20", "action": "fade", "target": "Q19", "fade": 5, "name": "Intermission out", "note": "House to half, top of Act Two (p.32 AT RISE)"},
    {"id": "Q21", "name": "Seventh square siren", "file": "sounds/siren.mp3", "volume": 90, "note": "p.36 ALICE: \"...I don't see anyone.\" (steps onto the seventh square)"},
    {"id": "Q22", "name": "Pageant music and bells", "file": "sounds/pageant.mp3", "loop": true, "volume": 85, "fadeIn": 0.5, "fadeOut": 3, "note": "p.41 Alice steps into the eighth square"},
    {"id": "Q23", "action": "fade", "target": "Q22", "fade": 3, "name": "Pageant music out", "note": "p.41 EMCEE: \"A few words for your public, Your Majesty?\""},
    {"id": "Q24", "name": "The Responsibilities song", "file": "sounds/responsibilities.mp3", "volume": 90, "fadeOut": 2, "note": "p.44 THE RESPONSIBILITIES ENTER"},
    {"id": "Q25", "name": "Transformation music (return)", "file": "sounds/transformation.mp3", "loop": true, "volume": 85, "fadeIn": 1.5, "fadeOut": 2, "note": "p.48 Alice throws the crown: \"...I don't want your stupid crown!\""},
    {"id": "Q26", "action": "fade", "target": "Q25", "fade": 2, "name": "Transformation out", "note": "p.48 change complete, Alice back in her chair, before \"Help!\""},
    {"id": "Q27", "name": "Bows music", "file": "sounds/bows.mp3", "loop": true, "volume": 85, "fadeOut": 5, "note": "p.49 CURTAIN (end of play)"}
  ],
  "extras": [
    {"id": "X1", "name": "Square arrival", "file": "sounds/arrival-chime.mp3", "key": "1", "volume": 90},
    {"id": "X2", "name": "Trumpet fanfare", "file": "sounds/fanfare.mp3", "key": "2", "volume": 95},
    {"id": "X3", "name": "Snore", "file": "sounds/snore.mp3", "key": "3", "volume": 90},
    {"id": "X4", "name": "Looking glass", "file": "sounds/looking-glass.mp3", "key": "4"},
    {"id": "X5", "name": "Siren", "file": "sounds/siren.mp3", "key": "5", "volume": 90},
    {"id": "X6", "name": "Transformation", "file": "sounds/transformation.mp3", "key": "6", "loop": true, "volume": 85, "fadeIn": 1, "fadeOut": 2}
  ]
};
