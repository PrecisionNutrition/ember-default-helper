# {{default}} helper

Returns the second argument if the first one is `undefined`.

## Installation

```
ember install @precision-nutrition/ember-default-helper
```

## Usage

```handlebars
<div class="PnMenu" ...attributes>
  {{yield
    (component
      "pn-menu/item"
      truncate=(default @truncate true)
      onClick=(default @onItemClick (noop))
    )
  }}
</div>
```

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
