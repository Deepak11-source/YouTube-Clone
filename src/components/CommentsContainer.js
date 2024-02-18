import React from "react";

const commentData = [
  {
    name: "Sarah 😊",
    text: "Interesting topic! I'd love to hear more about it. 🤔",
    replies: [],
  },
  {
    name: "John",
    text: "Great video! I learned a lot from this.",
    replies: [
      {
        name: "Alice",
        text: "John, I totally agree. The content is excellent!",
      },
      {
        name: "Bob",
        text: "This channel never disappoints. Keep up the good work!",
      },
      {
        name: "Charlie",
        text: "I had a question about the third point. Can someone help me?",
      },
      {
        name: "David",
        text: "Amazing insights! Looking forward to more videos like this.",
      },
      {
        name: "Eve",
        text: "David, I subscribed after watching this. Can't wait for the next one!",
      },
    ],
  },
  {
    name: "Alex 👍",
    text: "This video is very informative. Thanks for sharing! 🙌",
    replies: [],
  },
  {
    name: "Emily 📚",
    text: "I have a question about the second point. Can someone clarify? 🤷‍♀️",
    replies: [],
  },
  {
    name: "Daniel 🚀",
    text: "Great job on breaking down the complex concepts. Keep it up! 👏",
    replies: [],
  },
  {
    name: "Olivia 💖",
    text: "I stumbled upon this channel, and I'm already impressed with the content. 🎉",
    replies: [],
  },
  {
    name: "Michael 🤩",
    text: "Looking forward to more videos from you. Subscribed! 🚀",
    replies: [],
  },
];

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return (   
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="user"/>
            <div className="px-3">
                <p className="px-3">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

const CommentList = ({ comments }) => {
    return (
        comments &&
        comments.map((comment, index) => (
            <div key={index}>
                <Comment data={comment} />
                {comment.replies && (
                    <div className="pl-5 border border-l-black ml-5">
                        <CommentList comments={comment.replies} />
                    </div>
                )}
            </div>
        ))
    );
};


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[60%]">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentData}/>    
    </div>
  );
};

export default CommentsContainer;
