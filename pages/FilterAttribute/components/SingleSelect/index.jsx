import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from 'Components/View';
import Attribute from '../Attribute';
import Item from '../Item';
import ClearButton from '../ClearButton';
import styles from '../../style';

/**
 * The Filter SingleSelect view component.
 */
class SingleSelect extends Component {
  static propTypes = {
    mergeTemporaryFilters: PropTypes.func.isRequired,
    removeTemporaryFilter: PropTypes.func.isRequired,
    temporaryFilters: PropTypes.shape().isRequired,
    currentAttribute: PropTypes.shape(),
  };

  static defaultProps = {
    currentAttribute: null,
  };

  /**
   * Updates the current filter options selection.
   * @param {Array} valueId A set of strings containing the current selected attribute options.
   */
  handleSelection = (valueId) => {
    const { currentAttribute } = this.props;
    this.props.mergeTemporaryFilters({
      [currentAttribute.id]: {
        label: currentAttribute.label,
        source: currentAttribute.source,
        type: currentAttribute.type,
        value: valueId,
      },
    });
  };

  /**
   * Renders the component
   * @returns {JSX}
   */
  render() {
    if (!this.props.currentAttribute) {
      return <View />;
    }

    const { currentAttribute } = this.props;
    const tempFilter = this.props.temporaryFilters[currentAttribute.id] || {};
    return (
      <View title={currentAttribute.label}>
        <div className={styles} data-test-id="filterAttributes">
          <Attribute>
            {currentAttribute.values.map(value => (
              <Item
                key={value.id}
                label={value.label}
                value={value.id}
                onClick={() => this.handleSelection(value.id)}
                checked={tempFilter.value === value.id}
                singleSelect
              />
            ))}
          </Attribute>
          <ClearButton disabled={!tempFilter.value} currentAttribute={currentAttribute} />
        </div>
      </View>
    );
  }
}

export default SingleSelect;
