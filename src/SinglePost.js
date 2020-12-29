import React, { Component } from "react";
import AppNev from "./AppNev";
import Moment from "react-moment";
import { Button, Container } from "reactstrap";

class SinglePost extends Component {
  emptyComment = {
    text: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      Singlepost: [],
      isLoading: true,
      comment: this.emptyComment,
    };
    this.handleChange = this.handleChangeComment.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:8080/posts/${this.props.match.params.postid}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad Response from Server");
        }
        return response.json();
      })
      .then((post) => {
        this.setState({ Singlepost: post, isLoading: false });
      });
  }

  async upvote() {
    try {
      await fetch(
        `http://localhost:8080/users/1/upvoteForAPost/${this.props.match.params.postid}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        console.log(this.state.Singlepost);
        let updateTotalUpvote = this.state.Singlepost;
        updateTotalUpvote.totalUpvote++;
        this.setState({ Singlepost: updateTotalUpvote, isLoading: false });
      });
    } catch (err) {
      console.log(err);
    }
  }
  async downVote() {
    try {
      await fetch(
        `http://localhost:8080/users/1/downVoteForAPost/${this.props.match.params.postid}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        console.log(this.state.Singlepost);
        let updateTotalDownVote = this.state.Singlepost;
        updateTotalDownVote.totalDownVote++;
        this.setState({ Singlepost: updateTotalDownVote, isLoading: false });
      });
    } catch (err) {
      console.log(err);
    }
  }
  async comment() {
    try {
      const comment = this.state.comment;
      await fetch(
        `http://localhost:8080/users/addCommentOnPost/${this.props.match.params.postid}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: comment.text,
          }),
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  handleChangeComment = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.emptyComment[name] = value;
    this.setState({ ...this.state, comment: this.emptyComment });
    console.log(this.emptyComment);
  };
  render() {
    if (this.state.isLoading === false) {
      const {
        id,
        title,
        body,
        postedDate,
        totalUpvote,
        totalDownVote,
        comment,
      } = this.state.Singlepost;
      return (
        <div className="col-12">
          <AppNev />
          <div className="card border-secondary mb-3">
            <div className="card-header">
              <h3>{title}</h3>
            </div>
            <div className="card-body">
              <h4 className="card-body">{body}</h4>
              <h className="card-body">
                {"Submited Time: "}
                <Moment date={postedDate} format="YYYY/MM/DD" />
              </h>
              <Button size="12" color="info" onClick={() => this.upvote()}>
                UP({totalUpvote})
              </Button>

              <Button size="12" color="info" onClick={() => this.downVote()}>
                Down({totalDownVote})
              </Button>
            </div>

            <input
              type="text"
              name="text"
              id="text"
              size="39"
              onChange={this.handleChangeComment}
            ></input>
            <Button size="sm" color="info" onClick={() => this.comment()}>
              Comments {comment}
            </Button>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default SinglePost;
