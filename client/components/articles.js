import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Articles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    const {categoryId} = this.props.match.params
    const fetchArticles = async () => {
      const response = await fetch(`/api/categories/${categoryId}/articles`)
      const articles = await response.json()
      this.setState({articles})
    }

    fetchArticles(categoryId)
  }

  render() {
    const {articles} = this.state
    return (
      <div id="content">
        <h2>Articles</h2>
        <ul className="item-list">
          {
            articles.map(article => (
              <li key={article.id}>
                <Link to={`/articles/${article.id}`}>
                  {article.title}, by {article.author}, on {article.publish_date}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
