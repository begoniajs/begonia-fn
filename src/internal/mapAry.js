import noop from './noop.js';

export default (ary = [], fn = noop, scope = null) => ary.map(fn, scope);
