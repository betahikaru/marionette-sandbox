// Application
App = new Backbone.Marionette.Application();

// Event
//   Usage: App.vent.trigger("someEvent", "a");
App.vent.on("someEvent", function(someData){
  alert("Received", someData);
});

// Regions
App.addRegions({
  mainRegion: "#main-content",
  navigationRegion: "#navigation"
});
