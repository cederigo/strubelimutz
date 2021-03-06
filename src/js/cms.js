import React from 'react'
import CMS from 'netlify-cms'

// import HomePreview from './cms-preview-templates/home'
// import PostPreview from "./cms-preview-templates/post";
// import ProductsPreview from './cms-preview-templates/products'
// import ValuesPreview from './cms-preview-templates/values'
import ContactPreview from './cms-preview-templates/contact'
import AboutPreview from './cms-preview-templates/about'
import TeamPreview from './cms-preview-templates/team'

// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return (
      <input
        style={{ height: '80px' }}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
      />
    )
  }
}

CMS.registerPreviewStyle('/css/main.css')
// CMS.registerPreviewTemplate('home', HomePreview)
// CMS.registerPreviewTemplate("post", PostPreview);
// CMS.registerPreviewTemplate('products', ProductsPreview)
CMS.registerPreviewTemplate('team', TeamPreview)
CMS.registerPreviewTemplate('contact', ContactPreview)
CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerWidget('color', ColorControl)
