// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

import * as apollo from '@apollo/client'

import * as msal from '@azure/msal-browser'

import * as dndCore from '@dnd-kit/core'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS as cssDndKit } from '@dnd-kit/utilities'

import { H5PEditorUI, H5PPlayerUI } from '@lumieducation/h5p-react'
import * as fileBrowser from '@microsoft/file-browser'

import WebViewer from '@pdftron/webviewer'

import Ably from 'ably'

import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'

import * as Utils from './Utils'

import * as UIComponents from './UIComponents'
import * as UIComponents1 from './UIComponents1'
import * as UIComponents2 from './UIComponents2'
import * as UIComponents3 from './UIComponents3'
import * as UIComponents4 from './UIComponents4'
import * as UIComponents5 from './UIComponents5'

import appContainer from './appContainer'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')
app.append(logo, heading, imageBackground, imagePublic)
