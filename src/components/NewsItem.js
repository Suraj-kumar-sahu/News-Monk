import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl} = this.props ;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imgUrl?"https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5ld3NwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60":imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{!description?"Click to Read More":description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
