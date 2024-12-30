import { Node } from '@tiptap/core'
import { ReactNodeViewRenderer, NodeViewWrapper, NodeViewContent } from '@tiptap/react'

const HighlightBoxComponent = ({ node, updateAttributes }) => {
  const boxType = node.attrs.type || 'info'
  
  return (
    <NodeViewWrapper className={`highlight-box highlight-box-${boxType}`}>
      <div className="highlight-box-header" contentEditable={false}>
        <select 
          value={boxType}
          onChange={e => updateAttributes({ type: e.target.value })}
        >
          <option value="info">ℹ️ Info</option>
          <option value="warning">⚠️ Warning</option>
          <option value="success">✅ Success</option>
        </select>
      </div>
      <NodeViewContent className="highlight-box-content" />
    </NodeViewWrapper>
  )
}

export const HighlightBox = Node.create({
  name: 'highlightBox',
  
  group: 'block',
  
  content: 'block+',
  
  defining: true,

  addAttributes() {
    return {
      type: {
        default: 'info',
        renderHTML: attributes => ({
          'data-type': attributes.type,
        }),
        parseHTML: element => element.getAttribute('data-type'),
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type]',
        getAttrs: dom => ({
          type: dom.getAttribute('data-type'),
        }),
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', HTMLAttributes, 0]
  },

  addCommands() {
    return {
      setHighlightBox: attributes => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: attributes,
          content: [
            {
              type: 'paragraph'
            }
          ]
        })
      }
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Alt-h': () => this.editor.commands.setHighlightBox(),
    }
  },

  addNodeView() {
    return ReactNodeViewRenderer(HighlightBoxComponent)
  },
})

export const highlightBoxStyles = `
.highlight-box {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid;
}

.highlight-box-info {
  background-color: #e3f2fd;
  border-color: #90caf9;
}

.highlight-box-warning {
  background-color: #fff3e0;
  border-color: #ffb74d;
}

.highlight-box-success {
  background-color: #e8f5e9;
  border-color: #81c784;
}

.highlight-box-header {
  margin-bottom: 0.5rem;
}

.highlight-box-header select {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}

.highlight-box-content {
  margin-top: 0.5rem;
}
`