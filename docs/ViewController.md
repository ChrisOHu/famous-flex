<a name="module_ViewController"></a>
## ViewController
Controller for views.


* [ViewController](#module_ViewController)
  * [ViewController](#exp_module_ViewController--ViewController) ⏏
    * [new ViewController([options])](#new_module_ViewController--ViewController_new)
    * [.show(renderable, [options])](#module_ViewController--ViewController+show) ⇒ <code>ViewController</code>
    * [.hide([options])](#module_ViewController--ViewController+hide) ⇒ <code>ViewController</code>
    * [.removeFromStack(renderable)](#module_ViewController--ViewController+removeFromStack) ⇒ <code>ViewController</code>

<a name="exp_module_ViewController--ViewController"></a>
### ViewController ⏏
**Kind**: Exported class  
<a name="new_module_ViewController--ViewController_new"></a>
#### new ViewController([options])

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Configurable options. |

<a name="module_ViewController--ViewController+show"></a>
#### viewController.show(renderable, [options]) ⇒ <code>ViewController</code>
Show an renderable and call its onRendered callback on completion (if exists).

**Kind**: instance method of <code>[ViewController](#exp_module_ViewController--ViewController)</code>  
**Returns**: <code>ViewController</code> - this  

| Param | Type | Description |
| --- | --- | --- |
| renderable | <code>Renderable</code> | View or surface to show |
| [options] | <code>Object</code> | Options, the same as AnimationController.show options. |

<a name="module_ViewController--ViewController+hide"></a>
#### viewController.hide([options]) ⇒ <code>ViewController</code>
Hide current renderable and call its onRemoved callback on completion (if exists).

**Kind**: instance method of <code>[ViewController](#exp_module_ViewController--ViewController)</code>  
**Returns**: <code>ViewController</code> - this  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options, the same as AnimationController.hide options. |

<a name="module_ViewController--ViewController+removeFromStack"></a>
#### viewController.removeFromStack(renderable) ⇒ <code>ViewController</code>
Remove target renderable from _viewStack

**Kind**: instance method of <code>[ViewController](#exp_module_ViewController--ViewController)</code>  
**Returns**: <code>ViewController</code> - this  

| Param | Type | Description |
| --- | --- | --- |
| renderable | <code>Renderable</code> | View or surface to show |

