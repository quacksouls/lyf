require(["gitbook", "jquery"], function (gitbook, $) {

  var init = function () {
    var aceCount = 0;

    $('.ace').each(function () {
      var $ace = $(this).children('.aceCode');
      var config = $ace.data('config');
      var id = 'ace' + (aceCount++);
      $ace.attr('id', id);

      var editor = ace.edit(id);

      // All options are here:
      //
      // https://github.com/ajaxorg/ace/wiki/Configuring-Ace
      editor.setOptions({
        // Editor options
        autoScrollEditorIntoView: false,
        highlightActiveLine: true,
        maxLines: 100,
        readOnly: true,
        // Renderer options
        highlightIndentGuides: true,
        showPrintMargin: false
      });

      if (!config.edit)
        editor.setReadOnly(true);

      if (!config.theme)
        editor.setTheme('ace/theme/chrome');
      else
        editor.setTheme('ace/theme/' + config.theme);

      if (!config.check)
        editor.session.setOption("useWorker", false);

      editor.getSession().setMode('ace/mode/' + config.lang);
    });
  };

  gitbook.events.bind("page.change", init);
});
