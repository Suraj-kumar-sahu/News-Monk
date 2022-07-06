import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super() ;
    this.state = {
      articles: [] ,
      loading : false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1460467628fa4cb185f899bc5c55bc92" ;
    let data = await fetch(url) ;
    let parsedData = await data.json() ;
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center my-3'>News Monk-Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-3">
            <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,90):""} imgUrl={element.urlToImage} newsUrl={element.url} />
          </div>
          })}
        
            
        </div>
      </div>
    )
  }
}

export default News
