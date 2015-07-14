// tutorial4.js
var Comment = React.createClass({displayName: "Comment",
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        this.props.children
      )
    );
  }
});

// tutorial10.js
var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    console.log("DEBUG");
    console.log(this.props);
    var commentNodes = this.props.data.map(function (comment) {
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});

// tutorial1.js
var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {


    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data})
      )
    );
  }
});

var fakeData =  [
  {
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  }
];

//React.render(
//  <CommentBox data={data} />,
//  document.getElementById('content')
//);
React.render(
  React.createElement(Griddle, {results: fakeData}),
  document.getElementById('content')
);


//React.render(
//  <CommentBox data={data} />,
//  document.getElementById('content')
//);
