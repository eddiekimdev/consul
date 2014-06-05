Ember.Handlebars.helper('panelBar', function(status) {
  var highlightClass;

  if (status == "passing") {
    highlightClass = "bg-green";
  } else {
    highlightClass = "bg-orange";
  }
  return new Handlebars.SafeString('<div class="panel-bar ' + highlightClass + '"></div>');
});

Ember.Handlebars.helper('listBar', function(status) {
  var highlightClass;

  if (status == "passing") {
    highlightClass = "bg-green";
  } else {
    highlightClass = "bg-orange";
  }
  return new Handlebars.SafeString('<div class="list-bar-horizontal ' + highlightClass + '"></div>');
});
