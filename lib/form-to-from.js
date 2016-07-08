const CompositeDisposable = require('atom').CompositeDisposable
module.exports = {
  comm: null,
  activate: function () {
    this.comm = new CompositeDisposable()
    this.comm.add(atom.commands.add('atom-workspace', {
      'form-to-from:correct': function (e) {
        const editor = atom.workspace.getActiveTextEditor()
        if (editor) {
          const row = editor.getSelectedBufferRange().end.row
          const text = editor.lineTextForBufferRow(row)
          if (~text.indexOf('{') ? /^(\s+)?import\s{.+}\sfor$/.test(text) : /^(\s+)?import\s.+\sfor$/.test(text)) {
            editor.backspace()
            editor.backspace()
            editor.insertText(`rom`)
          } else {
            editor.insertText(`m`)
          }
        }
      }
    }))
  },
  deactivate: function () {
    this.comm.dispose()
  }
}
