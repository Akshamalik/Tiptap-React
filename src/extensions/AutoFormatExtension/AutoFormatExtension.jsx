import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from '@tiptap/pm/state'

export const AutoFormat = Extension.create({
  name: 'autoFormat',

  addInputRules() {
    return [
      // Convert --- to horizontal rule
      {
        find: /^---$/,
        replace: () => this.editor.commands.setHorizontalRule(),
      },
      // Convert >>> to blockquote
      {
        find: /^>>>$/,
        replace: () => this.editor.commands.setBlockquote(),
      },
      // Convert ** to bold
      {
        find: /\*\*([^*]+)\*\*$/,
        replace: (match) => this.editor.commands.toggleBold(),
      },
      // Convert common arrows
      {
        find: /-->/g,
        replace: '→',
      },
      {
        find: /<--/g,
        replace: '←',
      },
      // Convert (c) to ©
      {
        find: /\(c\)/gi,
        replace: '©',
      }
    ]
  },

  // Add keyboard shortcuts
  addKeyboardShortcuts() {
    return {
      'Mod-Alt-q': () => this.editor.commands.setBlockquote(),
      'Mod-Alt-c': () => this.editor.commands.setCallout(),
      'Mod-Alt-h': () => this.editor.commands.setHighlightBox(),
    }
  },

  // Add a plugin to handle paste formatting
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('autoFormatPaste'),
        props: {
          handlePaste: (view, event) => {
            const text = event.clipboardData?.getData('text/plain')
            
            if (text) {
              // Auto-format pasted URLs
              const urlRegex = /^https?:\/\/[^\s]+$/
              if (urlRegex.test(text)) {
                event.preventDefault()
                this.editor.commands.insertContent(`<a href="${text}">${text}</a>`)
                return true
              }
            }
            return false
          },
        },
      }),
    ]
  },
})