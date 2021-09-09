import React from 'react'

import Jumbotron from './components/jumbotron'
import MediaBlock from './components/media-block'
import ShortText from './components/short-text'

export default class AngebotPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props

    let image = getAsset(entry.getIn(['data', 'image']))

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + '//' + window.parent.location.host + image
    }

    const blurbValue = entry.getIn(['data', 'blurb'])
    const blurb = blurbValue ? blurbValue.toJS() : {}
    const entryValues = entry.getIn(['data', 'values'])
    const values = entryValues ? entryValues.toJS() : []

    return (
      <div>
        <Jumbotron image={image} title={entry.getIn(['data', 'title'])} />
        <ShortText {...blurb} />
        <div class="mw7 center ph3 pt4 cms">
          {values.map(({ text, heading, imageUrl, buttonLink }, i) => (
            <MediaBlock
              key={i}
              text={text}
              heading={heading}
              imageUrl={imageUrl}
              reverse={i % 2 === 0}
              sections={[]}
              moreInfoLink={buttonLink}
            />
          ))}
        </div>
      </div>
    )
  }
}
