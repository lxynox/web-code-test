import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Categories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    const fetchCategories = async () => {
      const response = await fetch('/api/categories')
      const categories = await response.json()
      this.setState({
        categories
      })
    }

    fetchCategories()
  }

  render() {
    const {categories} = this.state

    return (
      <div id="content">
        <h2>Categories</h2>
        <ul className="item-list">
          {
            categories.map(category => (
              <li key={category.id}>
                <Link to={`/${category.id}/articles`}>
                  {category.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
