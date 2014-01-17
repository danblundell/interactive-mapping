var LayerCollectionController = Backbone.View.extend({
    el: "body",

    events: {
      "submit #add": "addItem",
      "keyup #filter": "filterLayers",
      "click #clear-filter": "clearFilter"
    },

    initialize: function(c) {
      this.layerCollection = new LayerCollectionView(c);
    },

    addItem: function(e) {
      e.preventDefault();
      this.layerCollection.addItem();
    },

    filterLayers: function(e) {
      this.layerCollection.filterByName();
    },

    clearFilter: function(e) {
      e.preventDefault();
      this.layerCollection.clearFilter();
    }
});