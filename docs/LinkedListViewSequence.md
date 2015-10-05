## Modules
<dl>
<dt><a href="#module_LinkedListViewSequence">LinkedListViewSequence</a></dt>
<dd><p>Own implementation of ViewSequence which doesn&#39;t suck</p>
</dd>
</dl>
## Functions
<dl>
<dt><a href="#assert">assert()</a></dt>
<dd><p>This Source Code is licensed under the MIT license. If a copy of the
MIT-license was not distributed with this file, You can obtain one at:
<a href="http://opensource.org/licenses/mit-license.html">http://opensource.org/licenses/mit-license.html</a>.</p>
</dd>
</dl>
<a name="module_LinkedListViewSequence"></a>
## LinkedListViewSequence
Own implementation of ViewSequence which doesn't suck


* [LinkedListViewSequence](#module_LinkedListViewSequence)
  * [LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence) ⏏
    * [new LinkedListViewSequence(options)](#new_module_LinkedListViewSequence--LinkedListViewSequence_new)
    * [.getHead()](#module_LinkedListViewSequence--LinkedListViewSequence#getHead) ⇒ <code>LinkedListViewSequence</code>
    * [.getTail()](#module_LinkedListViewSequence--LinkedListViewSequence#getTail) ⇒ <code>LinkedListViewSequence</code>
    * [.getPrevious()](#module_LinkedListViewSequence--LinkedListViewSequence#getPrevious) ⇒ <code>LinkedListViewSequence</code>
    * [.getNext()](#module_LinkedListViewSequence--LinkedListViewSequence#getNext) ⇒ <code>LinkedListViewSequence</code>
    * [.get()](#module_LinkedListViewSequence--LinkedListViewSequence#get) ⇒ <code>Renderable</code>
    * [.set(value)](#module_LinkedListViewSequence--LinkedListViewSequence#set)
    * [.getIndex()](#module_LinkedListViewSequence--LinkedListViewSequence#getIndex) ⇒ <code>Number</code>
    * [.toString()](#module_LinkedListViewSequence--LinkedListViewSequence#toString) ⇒ <code>String</code>
    * [.indexOf()](#module_LinkedListViewSequence--LinkedListViewSequence#indexOf) ⇒ <code>Number</code>
    * [.findByIndex()](#module_LinkedListViewSequence--LinkedListViewSequence#findByIndex)
    * [.findByValue()](#module_LinkedListViewSequence--LinkedListViewSequence#findByValue)
    * [.insert()](#module_LinkedListViewSequence--LinkedListViewSequence#insert) ⇒ <code>LinkedListViewSequence</code>
    * [.remove(sequence)](#module_LinkedListViewSequence--LinkedListViewSequence#remove) ⇒ <code>LinkedListViewSequence</code>

<a name="exp_module_LinkedListViewSequence--LinkedListViewSequence"></a>
### LinkedListViewSequence ⏏
**Kind**: Exported class  
<a name="new_module_LinkedListViewSequence--LinkedListViewSequence_new"></a>
#### new LinkedListViewSequence(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Configurable options. |

<a name="module_LinkedListViewSequence--LinkedListViewSequence#getHead"></a>
#### linkedListViewSequence.getHead() ⇒ <code>LinkedListViewSequence</code>
Get head node.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>LinkedListViewSequence</code> - head node.  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#getTail"></a>
#### linkedListViewSequence.getTail() ⇒ <code>LinkedListViewSequence</code>
Get tail node.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>LinkedListViewSequence</code> - tail node.  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#getPrevious"></a>
#### linkedListViewSequence.getPrevious() ⇒ <code>LinkedListViewSequence</code>
Get previous node.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>LinkedListViewSequence</code> - previous node.  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#getNext"></a>
#### linkedListViewSequence.getNext() ⇒ <code>LinkedListViewSequence</code>
Get next node.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>LinkedListViewSequence</code> - next node.  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#get"></a>
#### linkedListViewSequence.get() ⇒ <code>Renderable</code>
Gets the value of this node.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>Renderable</code> - surface/view  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#set"></a>
#### linkedListViewSequence.set(value)
Sets the value of this node.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Renderable</code> | surface/view |

<a name="module_LinkedListViewSequence--LinkedListViewSequence#getIndex"></a>
#### linkedListViewSequence.getIndex() ⇒ <code>Number</code>
Get the index of the node.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>Number</code> - Index of node.  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#toString"></a>
#### linkedListViewSequence.toString() ⇒ <code>String</code>
Get human readable string verion of the node.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>String</code> - node as a human readable string  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#indexOf"></a>
#### linkedListViewSequence.indexOf() ⇒ <code>Number</code>
Gets the index of a given render-node.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>Number</code> - Index or -1 when not found.  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#findByIndex"></a>
#### linkedListViewSequence.findByIndex()
Gets the view-sequence item at the given index.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#findByValue"></a>
#### linkedListViewSequence.findByValue()
Gets the view-sequence item at the given index.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#insert"></a>
#### linkedListViewSequence.insert() ⇒ <code>LinkedListViewSequence</code>
Pushes an item to the end of the view-sequence.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>LinkedListViewSequence</code> - view-sequence node  
<a name="module_LinkedListViewSequence--LinkedListViewSequence#remove"></a>
#### linkedListViewSequence.remove(sequence) ⇒ <code>LinkedListViewSequence</code>
Removes the view-sequence item at the given index.

**Kind**: instance method of <code>[LinkedListViewSequence](#exp_module_LinkedListViewSequence--LinkedListViewSequence)</code>  
**Returns**: <code>LinkedListViewSequence</code> - New current view-sequence node to display.  

| Param | Type | Description |
| --- | --- | --- |
| sequence | <code>LinkedListViewSequence</code> | Node to remove |

<a name="assert"></a>
## assert()
This Source Code is licensed under the MIT license. If a copy of the
MIT-license was not distributed with this file, You can obtain one at:
http://opensource.org/licenses/mit-license.html.

**Kind**: global function  
**Author:**: Hein Rutjes (IjzerenHein)  
**License**: MIT  
**Copyright**: Gloey Apps, 2015  
