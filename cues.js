/* ============================================================
   SHOW FILE — edit this for each production.
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

   Words, volumes and fades changed in Edit mode on a device are saved on
   that device only. Use "Export show file" to copy them back here.
   ============================================================ */
var SHOW = {
  "title": "Through the Looking Glass",
  "editPasscodeHash": "920805781797e6b9ee907fe5966e00fbdd96b42c46f092b00f0928da24cef7de",
  "cues": [
    {"id":"Q1","name":"Preshow crickets","file":"sounds/crickets-loop.wav","loop":true,"volume":55,"fadeIn":3,"fadeOut":4,"note":"House open"},
    {"id":"Q2","action":"fade","target":"Q1","fade":5,"name":"Crickets out","note":"House to half"},
    {"id":"Q3","name":"Rain","file":"sounds/rain-loop.wav","loop":true,"volume":70,"fadeIn":4,"fadeOut":6,"note":"Lights up on study"},
    {"id":"Q4","name":"Thunder","file":"sounds/thunder.wav","volume":100,"note":"EDGAR: \"...a night like this one.\""},
    {"id":"Q5","name":"Knock at the door","file":"sounds/door-knock.wav","volume":90,"note":"After Edgar sits"},
    {"id":"Q6","name":"Doorbell","file":"sounds/doorbell.wav","volume":85,"note":"MAID: \"Who could that be at this hour?\""},
    {"id":"Q7","name":"Phone rings","file":"sounds/phone-ring.wav","volume":80,"fadeOut":0.5,"note":"Visitor exits"},
    {"id":"Q8","action":"fade","target":"Q3","fade":6,"name":"Rain out","note":"Blackout, end of Act I"}
  ],
  "extras": [
    {"id":"X1","name":"Thunder","file":"sounds/thunder.wav","key":"1"},
    {"id":"X2","name":"Knock","file":"sounds/door-knock.wav","key":"2","volume":90},
    {"id":"X3","name":"Doorbell","file":"sounds/doorbell.wav","key":"3","volume":85},
    {"id":"X4","name":"Phone ring","file":"sounds/phone-ring.wav","key":"4","volume":80,"retrigger":"toggle","fadeOut":0.5},
    {"id":"X5","name":"Rain","file":"sounds/rain-loop.wav","key":"5","loop":true,"volume":70,"fadeIn":2,"fadeOut":3},
    {"id":"X6","name":"Crickets","file":"sounds/crickets-loop.wav","key":"6","loop":true,"volume":55,"fadeIn":2,"fadeOut":3}
  ]
};
