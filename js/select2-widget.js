(function ($) {

  Drupal.behaviors.optionsSelect2Widget = {

    attach: function (context, settings) {

      var selector = Drupal.settings.select2_widget.selector;
      var cardinality = Drupal.settings.select2_widget.cardinality;
      var placeholder = Drupal.settings.select2_widget.placeholder;

      $(selector).select2({
        placeholder: placeholder,
        maximumSelectionSize: cardinality
      });

    }
  }

})(jQuery);

