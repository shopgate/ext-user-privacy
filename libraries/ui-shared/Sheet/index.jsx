import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import Backdrop from '@shopgate/pwa-common/components/Backdrop';
import Drawer from '@shopgate/pwa-common/components/Drawer';
import Header from './components/Header';
import styles from './style';

/**
 * Sheet component.
 */
class Sheet extends Component {
  static Header = Header;

  /**
   * The component prop types.
   * @type {Object}
   */
  static propTypes = {
    animation: PropTypes.shape({
      in: PropTypes.string,
      out: PropTypes.string,
    }),
    backdrop: PropTypes.bool,
    children: PropTypes.node,
    duration: PropTypes.number,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    title: PropTypes.string,
  };

  /**
   * The component default props.
   * @type {Object}
   */
  static defaultProps = {
    animation: {},
    backdrop: true,
    children: null,
    duration: 300,
    isOpen: false,
    onClose: () => {},
    onOpen: () => {},
    title: '',
  };

  /**
   * The constructor.
   * @param {Object} props The component props.
   */
  constructor(props) {
    super(props);

    this.content = React.createRef();

    this.state = {
      isOpen: props.isOpen,
      scrolled: false,
    };
  }

  /**
   * Change isOpen state for new incoming props.
   * @param {Object} nextProps The next component props.
   */
  componentWillReceiveProps({ isOpen }) {
    if (this.state.isOpen !== isOpen) {
      this.setState({ isOpen });
    }
  }

  /**
   * @param {Object} nextProps The next component props.
   * @param {Object} nextState The next component state.
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.isOpen !== nextState.isOpen ||
      this.state.scrolled !== nextState.scrolled
    );
  }

  /**
   * Getter for the animation props of the Sheet.
   * @returns {Object}
   */
  get animationProps() {
    return {
      duration: this.props.duration,
      ...styles.drawerAnimation,
      ...this.props.animation,
    };
  }

  /**
   * Close the Sheet.
   */
  handleClose = () => {
    this.props.onClose();

    this.setState({
      isOpen: false,
      scrolled: false,
    });
  };

  /**
   * Close the Sheet.
   */
  handleScroll = throttle(() => {
    const scrolled = this.content.current.scrollTop !== 0;

    if (this.state.scrolled !== scrolled) {
      this.setState({ scrolled });
    }
  }, 10);

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    const children = React.Children.map(this.props.children, child => (
      React.cloneElement(
        child,
        // Only add onClose prop to other components
        typeof child.type === 'function' && this.props.onClose !== null ? (
          { onClose: this.props.onClose }
        ) : {}
      )
    ));

    return (
      <section>
        <Drawer
          className={styles.container}
          isOpen={this.state.isOpen}
          onOpen={this.props.onOpen}
          onClose={this.handleClose}
          animation={this.animationProps}
        >
          {this.props.title &&
            <Sheet.Header
              onToggleClose={this.handleClose}
              shadow={this.state.scrolled}
              title={this.props.title}
            />
          }
          <div
            ref={this.content}
            onScroll={this.handleScroll}
            className={`${styles.content} ${!this.props.backdrop && styles.shadow}`}
          >
            {children}
          </div>
        </Drawer>
        {this.props.backdrop &&
          <Backdrop
            isVisible={this.state.isOpen}
            level={4}
            onClick={this.handleClose}
            opacity={20}
          />
        }
      </section>
    );
  }
}

export default Sheet;