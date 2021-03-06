import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, View} from 'react-native'

const Count = props => (
  <View style={[styles.container, styles[props.variant]]}>
    {props.label && <Text style={styles.title}>{props.label}</Text>}
    <Text>{props.value}</Text>
  </View>
)

Count.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(['high', 'low']), // is this a high number or low number?
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    margin: 10,
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  title: {
    marginBottom: 5,
  },
  low: {
    backgroundColor: '#faa',
  },
  high: {
    backgroundColor: '#afa',
  },
})

export default Count
