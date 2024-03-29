import React from 'react';

const Review = (props) => {
    const {review,user_name,email} = props.review;
    return (
      <span>
        <div className="media mb-3">
          <div className="mr-2">
            <img
              className="rounded-circle border p-1"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="Generic placeholder image"
            />
          </div>
          <div className="media-body">
            <p>{review}</p>
            <small className="text-muted">
              Posted by {user_name} on 3/1/18
            </small>
            <small className="text-muted">email by {email} on 3/1/18</small>
          </div>
        </div>
        <hr />
      </span>
    );
};

export default Review;