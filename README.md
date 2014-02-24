# JSX (JS) wrapper for SocketStream 0.3

Allows you to use [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) files (.jsx) in your SocketStream project.


### Instructions

Add `ss-jsx` to your application's `package.json` file and then add this line to app.js:

```javascript
ss.client.formatters.add(require('ss-jsx'));
```
