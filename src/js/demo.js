import moment from 'moment'
import raf from 'raf'
import $ from 'jquery'

raf.polyfill()

export default class Demo {
    constructor() {
        this.$date = $('#date')
        this.$time = $('#time')
        this.$timeToggle = $('#time-toggle')
        this.timeRunning = false
        this.timeHandle = null

        this.$timeToggle.on('click', this.toggleTime.bind(this))
    }
    moment(format) {
        return moment(Date.now()).format(format)
    }
    setDate() {
        this.$date.text(this.moment('MMM Do, YYYY'))
    }
    setTime() {
        this.$time.text(this.moment('h:mm:ss a'))
        this.timeHandle = raf(this.setTime.bind(this))
    }
    startTime() {
        this.timeHandle = raf(this.setTime.bind(this))
        this.$timeToggle.text('Stop Time')
        this.timeRunning = true
    }
    stopTime() {
        raf.cancel(this.timeHandle)
        this.$timeToggle.text('Start Time')
        this.timeRunning = false
    }
    toggleTime() {
        this.timeRunning ? this.stopTime() : this.startTime()
    }
}
