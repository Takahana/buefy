<template>
    <b-datepicker
        v-if="!isMobile || inline"
        ref="datepicker"
        v-model="computedValue"
        v-bind="datepicker"
        :open-on-focus="openOnFocus"
        :position="position"
        :loading="loading"
        :inline="inline"
        :editable="editable"
        :close-on-click="false"
        :date-formatter="defaultDatetimeFormatter"
        :date-parser="defaultDatetimeParser"
        :min-date="minDate"
        :max-date="maxDate"
        :icon="icon"
        :icon-pack="iconPack"
        :size="datepickerSize"
        :range="false">
        <nav class="level is-mobile">
            <div
                class="level-item has-text-centered"
                v-if="$slots.left !== undefined">
                <slot name="left" />
            </div>
            <div class="level-item has-text-centered">
                <b-timepicker
                    ref="timepicker"
                    v-bind="timepicker"
                    v-model="computedValue"
                    inline
                    :editable="editable"
                    :min-time="minTime"
                    :max-time="maxTime"
                    :size="timepickerSize"
                />
            </div>
            <div
                class="level-item has-text-centered"
                v-if="$slots.right !== undefined">
                <slot name="right" />
            </div>
        </nav>
    </b-datepicker>
    <b-input
        v-else
        ref="input"
        type="datetime-local"
        autocomplete="off"
        :value="formatNative(computedValue)"
        :placeholder="placeholder"
        :size="size"
        :icon="icon"
        :icon-pack="iconPack"
        :loading="loading"
        :max="formatNative(maxDate)"
        :min="formatNative(minDate)"
        :disabled="disabled"
        :readonly="false"
        v-bind="$attrs"
        :use-html5-validation="useHtml5Validation"
        @change.native="onChangeNativePicker"
        @focus="onFocus"
        @blur="onBlur"/>
</template>

<script>
import FormElementMixin from '../../utils/FormElementMixin'
import { isMobile } from '../../utils/helpers'
import config from '../../utils/config'

import Datepicker from '../datepicker/Datepicker'
import Timepicker from '../timepicker/Timepicker'

export default {
    name: 'BDatetimepicker',
    components: {
        [Datepicker.name]: Datepicker,
        [Timepicker.name]: Timepicker
    },
    mixins: [FormElementMixin],
    inheritAttrs: false,
    props: {
        value: {
            type: Date
        },
        editable: {
            type: Boolean,
            default: false
        },
        icon: String,
        iconPack: String,
        inline: Boolean,
        openOnFocus: Boolean,
        position: String,
        mobileNative: {
            type: Boolean,
            default: true
        },
        minDatetime: Date,
        maxDatetime: Date,
        datetimeFormatter: {
            type: Function
        },
        datetimeParser: {
            type: Function
        },
        datetimeCreator: {
            type: Function,
            default: (date) => {
                if (typeof config.defaultDatetimeCreator === 'function') {
                    return config.defaultDatetimeCreator(date)
                } else {
                    return date
                }
            }
        },
        datepicker: Object,
        timepicker: Object
    },
    data() {
        return {
            newValue: this.value
        }
    },
    computed: {
        computedValue: {
            get() {
                return this.newValue
            },
            set(value) {
                if (value !== null && typeof value !== 'undefined') {
                    let val = new Date(value.getTime())
                    if (this.newValue) {
                        // restore time part
                        if (value.getHours() === 0 &&
                            value.getMinutes() === 0 &&
                            value.getSeconds() === 0) {
                            val.setHours(this.newValue.getHours(),
                                this.newValue.getMinutes(),
                                this.newValue.getSeconds(), 0)
                        }
                    } else {
                        val = this.datetimeCreator(value)
                    }
                    // check min and max range
                    if (this.minDatetime && val < this.minDatetime) {
                        val = this.minDatetime
                    } else if (this.maxDatetime && val > this.maxDatetime) {
                        val = this.maxDatetime
                    }
                    this.newValue = new Date(val.getTime())
                } else {
                    this.newValue = value
                }
                this.$emit('input', this.newValue)
            }
        },
        isMobile() {
            return this.mobileNative && isMobile.any()
        },
        minDate() {
            if (!this.minDatetime) return null
            return new Date(this.minDatetime.getFullYear(),
                this.minDatetime.getMonth(),
                this.minDatetime.getDate(), 0, 0, 0, 0)
        },
        maxDate() {
            if (!this.maxDatetime) return null
            return new Date(this.maxDatetime.getFullYear(),
                this.maxDatetime.getMonth(),
                this.maxDatetime.getDate(), 0, 0, 0, 0)
        },
        minTime() {
            if (!this.minDatetime) return null
            if (this.newValue === null || typeof this.newValue === 'undefined') return null
            if (this.minDatetime.getFullYear() === this.newValue.getFullYear() &&
                this.minDatetime.getMonth() === this.newValue.getMonth() &&
                this.minDatetime.getDate() === this.newValue.getDate()) {
                return this.minDatetime
            }
        },
        maxTime() {
            if (!this.maxDatetime) return null
            if (this.newValue === null || typeof this.newValue === 'undefined') return null
            if (this.maxDatetime.getFullYear() === this.newValue.getFullYear() &&
                this.maxDatetime.getMonth() === this.newValue.getMonth() &&
                this.maxDatetime.getDate() === this.newValue.getDate()) {
                return this.maxDatetime
            }
        },
        datepickerSize() {
            return this.datepicker && this.datepicker.size ? this.datepicker.size : this.size
        },
        timepickerSize() {
            return this.timepicker && this.timepicker.size ? this.timepicker.size : this.size
        }
    },
    watch: {
        value(value) {
            this.newValue = value
        }
    },
    methods: {
        defaultDatetimeParser(date) {
            if (typeof this.datetimeParser === 'function') {
                return this.datetimeParser(date)
            } else if (typeof config.defaultDatetimeParser === 'function') {
                return config.defaultDatetimeParser(date)
            } else {
                return new Date(Date.parse(date))
            }
        },
        defaultDatetimeFormatter(date) {
            if (typeof this.datetimeFormatter === 'function') {
                return this.datetimeFormatter(date)
            } else if (typeof config.defaultDatetimeParser === 'function') {
                return config.defaultDatetimeParser(date)
            } else {
                if (this.$refs.timepicker) {
                    const yyyyMMdd = date.getFullYear() +
                        '/' + (date.getMonth() + 1) +
                        '/' + date.getDate()
                    const d = new Date(yyyyMMdd)
                    return d.toLocaleDateString() +
                        ' ' + this.$refs.timepicker.timeFormatter(date, this.$refs.timepicker)
                }
                return null
            }
        },
        /*
        * Parse date from string
        */
        onChangeNativePicker(event) {
            const date = event.target.value
            this.computedValue = date ? new Date(date) : null
        },
        formatNative(value) {
            const date = new Date(value)
            if (value && !isNaN(date)) {
                const year = date.getFullYear()
                const month = date.getMonth() + 1
                const day = date.getDate()
                const hours = date.getHours()
                const minutes = date.getMinutes()
                const seconds = date.getSeconds()
                return year + '-' +
                    ((month < 10 ? '0' : '') + month) + '-' +
                    ((day < 10 ? '0' : '') + day) + 'T' +
                    ((hours < 10 ? '0' : '') + hours) + ':' +
                    ((minutes < 10 ? '0' : '') + minutes) + ':' +
                    ((seconds < 10 ? '0' : '') + seconds)
            }
            return ''
        }
    },
    mounted() {
        // $refs attached, it's time to refresh datepicker (input)
        if (this.newValue) {
            this.$refs.datepicker.$forceUpdate()
        }
    }
}
</script>
