#Rich Text Editor with Tiptap

A feature-rich text editor built with React, Vite, and Tiptap. This project extends the basic editor functionality with custom nodes, marks, and extensions.

#Features

Custom Nodes
1. HighlightBox
A container node that adds a highlighted background to its content. Perfect for emphasizing important sections of text.

Creates a visually distinct box with custom background
Can contain any other editor content
Useful for important notes or callouts

2. CommentBox
A specialized node for adding comments or annotations to your content.

Distinct styling for comment sections
Helps organize feedback and notes
Perfect for collaborative editing

Custom Mark
1.PinkHighlight
A text-level mark that adds pink background highlighting to selected text.

Adds visual emphasis to specific words or phrases
Customizable highlight color
Great for marking important terms or phrases

Extensions
1. AutoFormat
Automatically formats text as you type, similar to Markdown shortcuts:

Convert **text** to bold
Convert *text* to italic
Convert # to headings
And more auto-formatting features

#Tech Stack

React + Vite
Tiptap for rich text editing
Tailwind CSS for styling

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#Contributing

Feel free to submit issues and enhancement requests!
License
This project is licensed under the MIT License - see the LICENSE file for details.
