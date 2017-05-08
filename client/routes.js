import React from 'react'
import {Route} from 'react-router-dom'

import Categories from './components/categories'
import Article from './components/article'
import Articles from './components/articles'
import Suggestions from './components/suggestions'

const Routes = () => (
  <div className="content">
    <Route exact path="/" component={Categories}/>
    <Route path="/:categoryId/articles" component={Articles}/>
    <Route path="/articles/:articleId" component={Article}/>
    <Route path="/suggestions" component={Suggestions}/>
  </div>
)

export default Routes
