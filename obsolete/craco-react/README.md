
--------

# README

This is a React app based on [CRA template](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript), [craco](https://github.com/gsoft-inc/craco) and minor customizations.

## To use Preact instead of React

Edit [craco.config.js](craco.config.js) like:

```diff
-  if (/* change to true to bundle preact instead of react */ 0) {
+  if (true) {
```
