import React, { Component } from 'react'
import NewsItems from './NewsItems'


export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afc77b8d87c04dd186788156a6be6cc3&page=1&pagesize=${this.props.pageSize}`;
    // let url = "https://newsapi.org/v2/top-headlines?country=us&ey=afc77b8d87c04dd186788156a6be6cc3";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })

  }
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afc77b8d87c04dd186788156a6be6cc3&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })
  }
  handleNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {

      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afc77b8d87c04dd186788156a6be6cc3&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData)
      this.setState({ articles: parseData.articles })

      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      })
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='my-2 mx-4 text-center'>WorldDoing - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title ? element.title : ""} description={element.title ? element.description : ""} imgUrl={element.urlToImage} url={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
