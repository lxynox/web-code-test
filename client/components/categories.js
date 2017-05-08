import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const style = {
  container: {
    width: '100%',
    height: '200px',
    backgroundColor: 'ghostwhite',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '2px 2px 2px 2px rgba(140, 139, 145, 0.1)'
  }
}

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
        <ul className="mdl-list mdl-grid">
          {
            categories.map(category => (
              <li className="mdl-list__item mdl-cell" key={category.id}>
                <div style={style.container}>
                  <Link to={`/${category.id}/articles`}>
                    {category.title}
                  </Link>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
