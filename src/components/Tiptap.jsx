import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  HighlightBox,
  highlightBoxStyles,
} from "../extensions/nodes/HighlightBox/HighlightBox";
import { CommentBox } from "../extensions/nodes/CommentBox/CommentBox";
import { useEffect } from "react";
import { AutoFormat } from "../extensions/AutoFormatExtension/AutoFormatExtension";
import { PinkHighlight } from "../extensions/marks/PinkHighlight/PinkHighlight";

const extensions = [
  HighlightBox,
  AutoFormat,
  PinkHighlight,
  StarterKit,
  CommentBox,
];

const content = ``;

const Tiptap = ({ onEditorContentSave }) => {
  const editor = useEditor({
    extensions,
    content,
  });

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = highlightBoxStyles;
    document.head.appendChild(styleElement);
    return () => styleElement.remove();
  }, []);

  if (!editor) {
    return null;
  }

  const handleContent = () => {
    const html = editor.getHTML();
    onEditorContentSave(html);
  };

  const buttonClass = (isActive) =>
    `p-2 rounded-md text-sm font-medium transition ${
      isActive
        ? "bg-blue-500 text-white"
        : "bg-gray-300 text-gray-800 hover:bg-gray-400"
    }`;

  return (
    <div className="m-8 space-y-4">
      <h1 className="text-center font-bold text-3xl text-blue-600 pb-5">Tiptap - With Custom Extensions,Marks and Nodes</h1>
      <div className="flex flex-wrap bg-gray-200 p-4 gap-2 rounded-lg shadow-md">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonClass(editor.isActive("bold"))}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={buttonClass(editor.isActive("italic"))}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().setPinkHighlight().run()}
          className={buttonClass(editor.isActive("pinkHighlight"))}
        >
          Pink Highlight
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={buttonClass(editor.isActive("strike"))}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={buttonClass(editor.isActive("code"))}
        >
          Code
        </button>
        <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className="p-2 rounded-md text-sm font-medium bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
        >
          Clear Marks
        </button>
        <button
          onClick={() => editor.chain().focus().clearNodes().run()}
          className="p-2 rounded-md text-sm font-medium bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
        >
          Clear Nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={buttonClass(editor.isActive("paragraph"))}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={buttonClass(editor.isActive("bulletList"))}
        >
          Bullet List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={buttonClass(editor.isActive("orderedList"))}
        >
          Ordered List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={buttonClass(editor.isActive("codeBlock"))}
        >
          Code Block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={buttonClass(editor.isActive("blockquote"))}
        >
          Blockquote
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2 rounded-md text-sm font-medium bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
        >
          Horizontal Rule
        </button>
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className="p-2 rounded-md text-sm font-medium bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
        >
          Hard Break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="p-2 rounded-md text-sm font-medium bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="p-2 rounded-md text-sm font-medium bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
        >
          Redo
        </button>
        <button
          onClick={() => editor.chain().focus().setHighlightBox().run()}
          className={buttonClass(editor.isActive("highlightBox"))}
        >
          Highlight Box
        </button>
        <button
          onClick={() =>
            editor.chain().focus().setCommentBox("Aksha", "Comment Start").run()
          }
          className="p-2 rounded-md text-sm font-medium bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
        >
          Add Comment
        </button>
      </div>
      <div className="border border-gray-300 rounded-lg shadow-inner overflow-hidden max-h-96">
        <EditorContent className="p-4" editor={editor} />
      </div>
      <button
        onClick={handleContent}
        className="block w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Save Content
      </button>
    </div>
  );
};

export default Tiptap;
