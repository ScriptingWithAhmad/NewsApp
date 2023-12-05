
import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, url } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imgUrl ? "https://static.foxnews.com/foxnews.com/content/uploads/2021/06/Earth-iStock.jpg" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">

            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
        
      </div>
    )
  }
}

export default NewsItems
