import Vue from 'vue'

const measure = ['Kilogram', 'Ton', 'Piece', 'Liter']

Vue.filter('MeasureUnit', (val) => measure[val])
