## Modules

<dl>
<dt><a href="#module_connect">connect</a></dt>
<dd></dd>
<dt><a href="#module_just-state">just-state</a></dt>
<dd></dd>
<dt><a href="#module_logger">logger</a></dt>
<dd></dd>
<dt><a href="#module_selector">selector</a></dt>
<dd></dd>
<dt><a href="#module_setter">setter</a></dt>
<dd></dd>
<dt><a href="#module_module">module</a></dt>
<dd></dd>
</dl>

<a name="module_connect"></a>

## connect
**Example**  
```js
import Connect from './connect'
```

* [connect](#module_connect)
    * [module.exports](#exp_module_connect--module.exports) ⏏
        * _instance_
            * [.updateState(...funcs)](#module_connect--module.exports+updateState) ⇒ <code>Promise</code>
            * [.render()](#module_connect--module.exports+render) ⇒ <code>React.Node</code>
        * _inner_
            * [~StateMutation](#module_connect--module.exports..StateMutation) : <code>function</code>

<a name="exp_module_connect--module.exports"></a>

### module.exports ⏏
Connects the provided state and the provided component together.
This class is used by the `state` function provided in `./state.js`

**Kind**: Exported class  
<a name="module_connect--module.exports+updateState"></a>

#### module.exports.updateState(...funcs) ⇒ <code>Promise</code>
A variatic function that chains the provided functions together
and updates the state of the provided component

The functions provided must take the entire state tree and either return the new
state tree, or a promise that resolves to the new state tree

**Kind**: instance method of [<code>module.exports</code>](#exp_module_connect--module.exports)  
**Returns**: <code>Promise</code> - A promise that is either resolved or rejected when the state
                          update is complete  
**Fulfuil**: <code>object</code> - The state tree  
**Reject**: <code>Error</code> - The error generator by the error  

| Param | Type | Description |
| --- | --- | --- |
| ...funcs | <code>Array.&lt;StateMutation&gt;</code> | N number of functions that mutate the state and return the                                 entire state tree |

<a name="module_connect--module.exports+render"></a>

#### module.exports.render() ⇒ <code>React.Node</code>
Renders the component provided on `this.props.component` with
the updateState function, and the state derived from `mapStateToProps`

**Kind**: instance method of [<code>module.exports</code>](#exp_module_connect--module.exports)  
**Returns**: <code>React.Node</code> - An instance of the component provided on `this.props.component`  
<a name="module_connect--module.exports..StateMutation"></a>

#### module.exports~StateMutation : <code>function</code>
A state mutation method that has the signature of `(state) => any | Promise<any>`

**Kind**: inner typedef of [<code>module.exports</code>](#exp_module_connect--module.exports)  
<a name="module_just-state"></a>

## just-state
**Example**  
```js
import * as justState from 'just-state'
import { state, Connect, selector, setter } from 'just-state'
```
<a name="module_logger"></a>

## logger
**Example**  
```js
import logger from './logger'
```
<a name="module_logger.logStateChange"></a>

### logger.logStateChange(newState, oldState, logger) ⇒ <code>undefined</code>
Logs state changes in a readable way

**Kind**: static method of [<code>logger</code>](#module_logger)  

| Param | Type | Description |
| --- | --- | --- |
| newState | <code>Object</code> | the new state object |
| oldState | <code>Object</code> | the old state object |
| logger | <code>function</code> | A custom logger, if no logger is provided `console.log` is used |

<a name="module_selector"></a>

## selector
**Example**  
```js
import selector from './selector'
```
<a name="module_setter"></a>

## setter
**Example**  
```js
import setter from './setter'
```
<a name="module_module"></a>

## module
**Example**  
```js
import state from './state'
```
<a name="exp_module_module--module.exports"></a>

### module.exports(state, Component, mapStateToProps) ⇒ <code>React.node</code> ⏏
The main interface of connecting a React Component.
Passes the `state`, `component` and the `mapStateToProps`
to the `Connect` component

**Kind**: Exported function  
**Returns**: <code>React.node</code> - An instance of the Connect component from `./connect`  
**Curried**:   

| Param | Type | Description |
| --- | --- | --- |
| state | <code>any</code> | The state tree to be passed to the provided                               mapStateToProps function |
| Component | <code>any</code> | The react component to be rendered |
| mapStateToProps | <code>any</code> | A function which takes the provided state tree                               and returns an object which is spread onto the                               provided `component` as props |
