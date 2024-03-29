import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import * as store from '../store'
import * as api from '../api'

const style = {
  article: {
    body: {
      width: '80%',
      marginLeft: '10%',
      marginTop: '20px',
      textAlign: 'left'
    }
  }
}

export default class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article: null,
      readArticles: store.fetch() || []
    }
  }

  componentDidMount() {
    // Async fetch article by `articleId`
    const {articleId} = this.props.match.params
    const url = `/api/articles/${articleId}`
    api.fetch(url)
      .then(article => this.setState({article}))
      .catch(err => console.error(err))
  }

  componentWillUnmount() {
    // LocalStorage to persist user already *read* books
    const {article, readArticles} = this.state
    if (article && readArticles.indexOf(article.id) === -1) {
      store.save([...readArticles, article.id])
    }
  }

  render() {
    const {article, readArticles} = this.state
    const isRead = article && readArticles.indexOf(article.id) !== -1
    return (
      <div id="content">
        {article ?
          <article style={style.article}>
            <h2>{article.title}</h2>

            <p>by <em>{article.author}</em>, on <em>{article.publish_date}</em>,
              {isRead &&
                <label>
                  <input
                    checked
                    readOnly
                    type="checkbox"
                    /> (read already)
                </label>
              }</p>

            <p>Category
              <Link to={`/${article.category.id}/articles`}>
                {`⎡${article.category.title}⎦`}
              </Link>
            </p>

            <div style={style.article.body} dangerouslySetInnerHTML={{__html: article.content}}/>
          </article> : null}
      </div>
    )
  }
}
