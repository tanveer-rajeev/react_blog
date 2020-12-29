import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
const PostListItem = ({
  postid,
  title,
  body,
  postedDate,
  user,
  totalUpVote,
  totalDownVote,
}) => {
  return (
    <div className="col-12">
      <div className="card border-secondary mb-3">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <h4 className="card-body">{body}</h4>
          <h className="card-body">
            {"Submited Time: "}
            <Moment date={postedDate} format="YYYY/MM/DD" />
          </h>

          <Link to={`/single/${postid}`} className="btn btn-primary btn-lg">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
