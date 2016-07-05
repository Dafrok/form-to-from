module.exports = {
  activate: function (state) {
    atom.commands.add('atom-workspace', {
      'form-to-from:correct': function (e) {
        const editor = atom.workspace.getActiveTextEditor()
        const row = editor.getSelectedBufferRange().end.row
        const text = editor.lineTextForBufferRow(row)
        if (/^import\s.+\sfor$/.test(text)) {
          editor.backspace()
          editor.backspace()
          editor.insertText(`rom`)
        } else {
          editor.insertText(`m`)
        }
      }
    })
  }
}
