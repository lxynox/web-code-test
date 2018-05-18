import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import * as store from '../store'
import * as api from '../api'

const style = {
  table: {}
}

export default class Articles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    // Async fetch articles by `categoryId`
    const {categoryId} = this.props.match.params
    const url = `/api/categories/${categoryId}/articles`
    api.fetch(url)
      .then(articles => this.setState({articles}))
      .catch(err => console.error(err))
  }

  render() {
    const {articles} = this.state
    const readArticles = store.fetch() || []
    return (
      <div id="content">
        <h2>Articles</h2>
        <ul className="mdl-list">
          {
            articles.map(article => (
              <li className="mdl-list__item mdl-grid" key={article.id}>
                <table style={style.table} className="mdl-cell mdl-cell--12-col mdl-data-table mdl-shadow--2dp">
                  <thead>
                    <tr>
                      <th>{readArticles.indexOf(article.id) === -1 ? '(❌) Read' : '(✅) Read'}</th>
                      <th className="mdl-data-table__cell--non-numeric">Title</th>
                      <th>Author</th>
                      <th>Publish Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link to={`/articles/${article.id}`}>
                          ➜ 📖
                        </Link>
                      </td>
                      <td className="mdl-data-table__cell--non-numeric">{article.title}</td>
                      <td>{article.author}</td>
                      <td>{article.publish_date}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
