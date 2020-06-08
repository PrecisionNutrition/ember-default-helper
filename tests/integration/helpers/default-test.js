import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | default', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{default this.value "default" }}`);

    assert.equal(this.element.textContent, 'default');

    this.set('value', 'value');

    assert.equal(this.element.textContent, 'value');
  });
});
