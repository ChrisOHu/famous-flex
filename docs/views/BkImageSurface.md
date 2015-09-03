<a name="module_BkImageSurface"></a>
## BkImageSurface
BkImageSurface adds support for sizing-strategies such as AspectFit and AspectFill for displaying images with famo.us.
It uses a 'div' with a background-image rather than a 'img' tag.

Can be used as a drop-in replacement for ImageSurface, in case the the size of the div is not derived
from the image.


* [BkImageSurface](#module_BkImageSurface)
  * [BkImageSurface](#exp_module_BkImageSurface--BkImageSurface) ⏏
    * [new BkImageSurface(options)](#new_module_BkImageSurface--BkImageSurface_new)
    * _instance_
      * [.setContent(imageUrl)](#module_BkImageSurface--BkImageSurface#setContent)
      * [.getContent()](#module_BkImageSurface--BkImageSurface#getContent) ⇒ <code>String</code>
      * [.setSizeMode(sizeMode)](#module_BkImageSurface--BkImageSurface#setSizeMode)
      * [.getSizeMode()](#module_BkImageSurface--BkImageSurface#getSizeMode) ⇒ <code>SizeMode</code> &#124; <code>String</code>
      * [.setPositionMode(positionMode)](#module_BkImageSurface--BkImageSurface#setPositionMode)
      * [.getPositionMode()](#module_BkImageSurface--BkImageSurface#getPositionMode) ⇒ <code>RepeatMode</code> &#124; <code>String</code>
      * [.setRepeatMode(repeatMode)](#module_BkImageSurface--BkImageSurface#setRepeatMode)
      * [.getRepeatMode()](#module_BkImageSurface--BkImageSurface#getRepeatMode) ⇒ <code>RepeatMode</code> &#124; <code>String</code>
    * _static_
      * [.SizeMode](#module_BkImageSurface--BkImageSurface.SizeMode)
      * [.PositionMode](#module_BkImageSurface--BkImageSurface.PositionMode)
      * [.RepeatMode](#module_BkImageSurface--BkImageSurface.RepeatMode)

<a name="exp_module_BkImageSurface--BkImageSurface"></a>
### BkImageSurface ⏏
**Kind**: Exported class  
<a name="new_module_BkImageSurface--BkImageSurface_new"></a>
#### new BkImageSurface(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options. |
| [options.content] | <code>String</code> | Image-url. |
| [options.sizeMode] | <code>SizeMode</code> &#124; <code>String</code> | Size-mode to use. |
| [options.positionMode] | <code>PositionMode</code> &#124; <code>String</code> | Position-mode to use. |
| [options.repeatMode] | <code>RepeatMode</code> &#124; <code>String</code> | Repeat-mode to use. |

<a name="module_BkImageSurface--BkImageSurface#setContent"></a>
#### bkImageSurface.setContent(imageUrl)
**Kind**: instance method of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  

| Param | Type | Description |
| --- | --- | --- |
| imageUrl | <code>String</code> | Image-url, when set will cause re-rendering |

<a name="module_BkImageSurface--BkImageSurface#getContent"></a>
#### bkImageSurface.getContent() ⇒ <code>String</code>
**Kind**: instance method of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  
**Returns**: <code>String</code> - Image-url  
<a name="module_BkImageSurface--BkImageSurface#setSizeMode"></a>
#### bkImageSurface.setSizeMode(sizeMode)
**Kind**: instance method of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  

| Param | Type | Description |
| --- | --- | --- |
| sizeMode | <code>SizeMode</code> &#124; <code>String</code> | Sizing-mode, when set will cause re-rendering |

<a name="module_BkImageSurface--BkImageSurface#getSizeMode"></a>
#### bkImageSurface.getSizeMode() ⇒ <code>SizeMode</code> &#124; <code>String</code>
**Kind**: instance method of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  
**Returns**: <code>SizeMode</code> &#124; <code>String</code> - Size-mode  
<a name="module_BkImageSurface--BkImageSurface#setPositionMode"></a>
#### bkImageSurface.setPositionMode(positionMode)
**Kind**: instance method of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  

| Param | Type | Description |
| --- | --- | --- |
| positionMode | <code>PositionMode</code> &#124; <code>String</code> | Position-mode, when set will cause re-rendering |

<a name="module_BkImageSurface--BkImageSurface#getPositionMode"></a>
#### bkImageSurface.getPositionMode() ⇒ <code>RepeatMode</code> &#124; <code>String</code>
**Kind**: instance method of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  
**Returns**: <code>RepeatMode</code> &#124; <code>String</code> - Position-mode  
<a name="module_BkImageSurface--BkImageSurface#setRepeatMode"></a>
#### bkImageSurface.setRepeatMode(repeatMode)
**Kind**: instance method of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  

| Param | Type | Description |
| --- | --- | --- |
| repeatMode | <code>RepeatMode</code> &#124; <code>String</code> | Repeat-mode, when set will cause re-rendering |

<a name="module_BkImageSurface--BkImageSurface#getRepeatMode"></a>
#### bkImageSurface.getRepeatMode() ⇒ <code>RepeatMode</code> &#124; <code>String</code>
**Kind**: instance method of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  
**Returns**: <code>RepeatMode</code> &#124; <code>String</code> - Repeat-mode  
<a name="module_BkImageSurface--BkImageSurface.SizeMode"></a>
#### BkImageSurface.SizeMode
**Kind**: static enum property of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  
**Properties**

| Name | Default |
| --- | --- |
| AUTO | <code>auto</code> | 
| FILL | <code>100% 100%</code> | 
| ASPECTFILL | <code>cover</code> | 
| ASPECTFIT | <code>contain</code> | 

<a name="module_BkImageSurface--BkImageSurface.PositionMode"></a>
#### BkImageSurface.PositionMode
**Kind**: static enum property of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  
**Properties**

| Name | Default |
| --- | --- |
| CENTER | <code>center center</code> | 
| LEFT | <code>left center</code> | 
| RIGHT | <code>right center</code> | 
| TOP | <code>center top</code> | 
| BOTTOM | <code>center bottom</code> | 
| TOPLEFT | <code>left top</code> | 
| TOPRIGHT | <code>right top</code> | 
| BOTTOMLEFT | <code>left bottom</code> | 
| BOTTOMRIGHT | <code>right bottom</code> | 

<a name="module_BkImageSurface--BkImageSurface.RepeatMode"></a>
#### BkImageSurface.RepeatMode
**Kind**: static enum property of <code>[BkImageSurface](#exp_module_BkImageSurface--BkImageSurface)</code>  
**Properties**

| Name | Default |
| --- | --- |
| NONE | <code>no-repeat</code> | 
| VERTICAL | <code>repeat-x</code> | 
| HORIZONTAL | <code>repeat-y</code> | 
| BOTH | <code>repeat</code> | 

