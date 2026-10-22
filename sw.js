/* Offline copy of the soundboard.
   Serves everything from this device's saved copy first (instant, works with no Wi-Fi),
   then quietly refreshes that copy in the background whenever there is a connection.
   After you upload a changed show, open the board once while online, then reload it. */
var CACHE = "soundboard-v1";
self.addEventListener("install", function(e){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(e){
  var req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(function(cache){
    return cache.match(req, {ignoreSearch:true}).then(function(hit){
      var net = fetch(req).then(function(res){
        if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
        return res;
      }).catch(function(){ return hit; });
      return hit || net;
    });
  }));
});
