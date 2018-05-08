import { css } from 'glamor';

/**
 * The styles for the input field.
 */
const input = css({
  position: 'relative',
  padding: 0,
  width: '100%',
  marginTop: 24,
  outline: 0,
  fontSize: 16,
  lineHeight: '19px',
}).toString();

/**
 * The styles for the multiLine.
 */
const multiLine = css({
  position: 'relative',
  marginTop: 24,
  marginBottom: 3,
  padding: 0,
  width: '100%',
  outline: 0,
  height: 19,
  minHeight: 19,
  lineHeight: '19px',
  verticalAlign: 'top', // Important to avoid bottom whitespace.
}).toString();

export default {
  input,
  multiLine,
};
