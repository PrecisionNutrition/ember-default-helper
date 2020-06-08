import { helper } from '@ember/component/helper';

export default helper(function defaultHelper([value, defaultValue]) {
  return value !== undefined ? value : defaultValue;
});
