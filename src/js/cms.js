// eslint-disable-next-line no-unused-vars
import React from 'react'
import CMS from 'netlify-cms'

import ContactPreview from './cms-preview-templates/contact'
import SitePreview from './cms-preview-templates/site'
import TeamPreview from './cms-preview-templates/team'
import HomePreview from './cms-preview-templates/home'
import AngebotPreview from './cms-preview-templates/angebot'

CMS.registerPreviewStyle('/css/main.css')
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('team', TeamPreview)
CMS.registerPreviewTemplate('angebot', AngebotPreview)
CMS.registerPreviewTemplate('contact', ContactPreview)
CMS.registerPreviewTemplate('about', SitePreview)
CMS.registerPreviewTemplate('waldspielgruppe', SitePreview)
CMS.registerPreviewTemplate('innenspielgruppe', SitePreview)
CMS.registerPreviewTemplate('erlebnisnachmittag', SitePreview)
