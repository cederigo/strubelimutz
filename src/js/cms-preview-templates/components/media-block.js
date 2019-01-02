// eslint-disable-next-line no-unused-vars
import React from 'react'

const MediaBlock = ({ heading, text, imageUrl, reverse, sections }) => {
  const imageContainerClassName = reverse ? 'ph3-m w-50-m' : 'ph3-m w-50-m order-last-m'
  return (
    <div className="flex-m mhn3-m mb4">
      <div className={imageContainerClassName}>
        <img src={imageUrl} alt="" className="db mb2" />
      </div>
      <div className="ph3-m w-50-m">
        <h3 className="f3 b lh-title mb1">{heading}</h3>
        <p>{text}</p>
        {sections.map(({ heading, list }, i) => (
          <div>
            <h4 class="f4 b">{heading}</h4>
            <ul class="list">
              {list.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MediaBlock
