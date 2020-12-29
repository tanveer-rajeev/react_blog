import React, { Component } from "react";
// import { Container } from "reactstrap";
import AppNev from "./AppNev";
import PostListItem from "./PostListItem";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/posts")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response from Server");
        }
        return response.json();
      })
      .then((posts) => {
        this.setState({ posts: posts, isLoading: false });
      });

    // this.setState({ Posts: Posts, isLoading: false });
  }

  render() {
    const { posts, isLoading } = this.state;
    if (isLoading) return <div>Loading....</div>;

    return (
      <div>
        <AppNev />
        <h2>Posts</h2>
        {this.state.posts.map(
          ({
            id,
            title,
            body,
            postedDate,
            user,
            totalUpVote,
            totalDownVote,
          }) => (
            <div className="container">
              <div className="row">
                <PostListItem
                  key={id}
                  postid={id}
                  title={title}
                  body={body}
                  postedDate={postedDate}
                  user={user}
                  totalUpVote={totalUpVote}
                  totalDownVote={totalDownVote}
                />
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default Post;
