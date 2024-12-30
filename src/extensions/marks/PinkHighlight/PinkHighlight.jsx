import { Mark } from '@tiptap/core'

export const PinkHighlight = Mark.create({
  name: 'pinkHighlight',
  
  addAttributes() {
    return {
      color: {
        default: '#FFB6C1'
      }
    }
  },
  
  parseHTML() {
    return [
      {
        tag: 'span[data-pink-highlight]',
      },
    ]
  },
  
  renderHTML({ HTMLAttributes }) {
    return ['span', { 
      'data-pink-highlight': '',
      style: `background-color: ${HTMLAttributes.color};` 
    }, 0]
  },
  
  addCommands() {
    return {
      setPinkHighlight: () => ({ commands }) => {
        return commands.toggleMark(this.name)
      },
    }
  },
})
