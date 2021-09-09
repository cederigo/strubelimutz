import React from 'react'

import Jumbotron from './components/jumbotron'

export default class HomePreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props
    let image = getAsset(entry.getIn(['data', 'image']))

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + '//' + window.parent.location.host + image
    }

    const news = entry.getIn(['data', 'news'])
    const team = entry.getIn(['data', 'team'])
    const intro = entry.getIn(['data', 'intro'])

    return (
      <div>
        <Jumbotron
          image={image}
          title={entry.getIn(['data', 'title'])}
          subtitle={entry.getIn(['data', 'subtitle'])}
        />

        {/* Aktuelles  */}
        {news.getIn(['displayed']) && (
          <div class="bg-off-white pv4">
            <div class="ph3 mw7 center">
              <h2 class="f2 b lh-title mb2 primary-light">{news.getIn(['heading'])}</h2>
              <p class="mb2 mw6" dangerouslySetInnerHTML={{ __html: news.getIn(['text']) }}></p>
            </div>
          </div>
        )}

        <div class="bg-grey-1 pv4">
          <div class="ph3 mw7 center">
            <h2 class="f2 b lh-title mb2 primary-light">{team.getIn(['heading'])}</h2>
            <p class="mb4 mw6">{team.getIn(['text'])}</p>
            <div class="">
              <a href="/team" class="btn raise">
                Unser Team
              </a>
            </div>
          </div>
        </div>

        <div class="bg-off-white pv4">
          <div class="ph3 mw7 center">
            <h2 class="f2 b lh-title mb2 primary-light">{intro.getIn(['heading'])}</h2>
            <p class="mb4 mw6">{intro.getIn(['text'])}</p>
            <div class="">
              <a href="/angebot" class="btn raise">
                Mehr Infos
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
