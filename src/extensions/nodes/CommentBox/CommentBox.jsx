import { Node } from "@tiptap/core";

export const CommentBox = Node.create({
  name: "commentBox",
  //this means commentbox behave like block element like para,and all
  group: "block",
  //for content
  content: "inline*",

  draggable: true,

  addAttributes() {
    return {
      author: {
        default: "Anonymous",
      },
      comment: {
        default: "Add your comment here...",
      },
      //this will add current date and time 
      timestamp: {
        default: () => new Date().toLocaleString(),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-comment-box]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      {
        "data-comment-box": "",
        style:
          "border: 1px solid #ccc; padding: 10px; background: #f9f9f9; border-radius: 5px; margin: 10px 0;",
      },
      [
        "div",
        { style: "font-size: 12px; color: #666;" },
        `Author: ${HTMLAttributes.author} | ${HTMLAttributes.timestamp}`,
      ],
      [
        "div",
        {
          style: "margin-top: 5px; padding: 5px; background: #fff; border: 1px solid #ddd; border-radius: 3px;",
        },
        HTMLAttributes.comment,
      ],
      ["div", { style: "margin-top: 10px;" }, 0], // This allows for inline content.
    ];
  },

  addCommands() {
    return {
      setCommentBox:
        (author = "Anonymous", comment = "Add your comment here...") =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { author, comment },
          });
        },
    };
  },
});
