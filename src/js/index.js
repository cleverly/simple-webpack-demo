import $ from 'jquery'
import Demo from './demo.js'

require('../scss/index.scss')

$(document).ready(()=> {
    const demo = new Demo()
    demo.setDate()
    demo.startTime()
})
