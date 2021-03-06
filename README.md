<h1>Scheme designer</h1>
<p>Constructor for interactive schemes on canvas <br />
Demo: <a href="http://nikitchenko.ru/scheme-designer/examples/">http://nikitchenko.ru/scheme-designer/examples/</a>
</p>

<p align=center><img src="http://nikitchenko.ru/scheme-designer/scheme-designer.gif" width="600"></p>

<h2>Features</h2>
<ul>
    <li>No dependencies</li>
    <li>Render only visible objects</li>
    <li>Responsible</li>
    <li>Objects stored in search tree</li>
    <li>Touch support</li>
    <li>Many api methods and events</li>
</ul>

<h2>Usage Instructions</h2>
1. Link file:

```
<script src="dist/scheme-designer.min.js"></script>
```

2. Add Markup
```
<canvas id="canvas" width="800" height="500"></canvas>
```
for adaptive add wrapper (relative):
```
 <div style="width: 100%; height: 500px; position:relative;">
       <canvas id="canvas"></canvas>
 </div>
```

3. Init, add objects and render (see examples)
```
var canvas = document.getElementById('canvas');
var schemeDesigner = new SchemeDesigner.Scheme(canvas, {
    scroll: {
        maxHiddenPart: 0.85
    },
    zoom: {
        padding: 0.1,
        maxScale: 8,
        zoomCoefficient: 1.04
    },
    storage: {
        treeDepth: 6
    }
});

var schemeObject = new SchemeDesigner.SchemeObject({
            x: 0.5 + leftOffset,
            y: 0.5 + topOffset,
            width: width,
            height: height,
            renderFunction: renderPlace
});

schemeDesigner.addObject(schemeObject);

schemeDesigner.render();
```

<h2>Options</h2>
<h3>Scheme</h3>
<table>
    <tr>
        <th>Option</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td colspan=3 align=center><strong>Scroll</strong></td>
    </tr>
     <tr>
        <td>maxHiddenPart</td>
        <td>0.85</td>
        <td>Max hidden part on scroll</td>
    </tr>
    <tr>
        <td colspan=3 align=center><strong>Zoom</strong></td>
    </tr>
     <tr>
        <td>padding</td>
        <td>0.1</td>
        <td>Padding from objects to canvas border</td>
    </tr>
    <tr>
        <td>maxScale</td>
        <td>5</td>
        <td>Max sale</td>
    </tr>
    <tr>
        <td>zoomCoefficient</td>
        <td>1.04</td>
        <td>Zoom coefficient (Math.pow(zoomCoefficient, delta))</td>
    </tr>
    <tr>
        <td colspan=3 align=center><strong>Storage</strong></td>
    </tr>
     <tr>
        <td>treeDepth</td>
        <td>0.6</td>
        <td>Depth of search tree</td>
    </tr>
</table>
<h3>SchemeObject</h3>
<table>
    <tr>
        <th>Option</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
     <tr>
        <td>x: number</td>
        <td></td>
        <td>X position</td>
    </tr>
    <tr>
        <td>width: number</td>
        <td></td>
        <td>Width</td>
    </tr>
    <tr>
        <td>height: number</td>
        <td></td>
        <td>Height</td>
    </tr>
     <tr>
        <td>cursorStyle: string</td>
        <td>pointer</td>
        <td>Cursor style on object</td>
    </tr>
    <tr>
        <td>renderFunction: Function(schemeObject: SchemeObject, scheme: Scheme, view: View)</td>
        <td></td>
        <td>Function for rendering object, see examples</td>
    </tr>
    <tr>
        <td>clickFunction: Function(schemeObject: SchemeObject, scheme: Scheme, view: View, e: Event)</td>
        <td></td>
        <td>Function for handle click on object</td>
    </tr>
    <tr>
        <td>mouseOverFunction: Function(schemeObject: SchemeObject, scheme: Scheme, view: View, e: Event)</td>
        <td></td>
        <td>Function for handle mouseover on object</td>
    </tr>
   <tr>
       <td>mouseLeaveFunction: Function(schemeObject: SchemeObject, scheme: Scheme, view: View, e: Event)</td>
       <td></td>
       <td>Function for handle mouseleave on object</td>
   </tr>
</table>

<h2>Api</h2>

Examples:
```
var schemeDesigner = new SchemeDesigner.Scheme(canvas);

SchemeDesigner.setCursorStyle('move');
schemeDesigner.getZoomManager().zoomToCenter(10);
schemeDesigner.getScrollManager().scroll(100, 200);
schemeDesigner.getStorageManager().showNodesParts();

```

<table>
    <tr>
        <th>Method</th>
        <th>Return</th>
        <th>Description</th>
    </tr>
     <tr>
        <td colspan=3 align=center><strong>SchemeDesigner</strong></td>
    </tr>
    <tr>
        <td>getEventManager()</td>
        <td>EventManager</td>
        <td></td>
    </tr>
    <tr>
        <td>getScrollManager()</td>
        <td>ScrollManager</td>
        <td></td>
    </tr>
    <tr>
        <td>getZoomManager()</td>
        <td>ZoomManager</td>
        <td></td>
    </tr>
    <tr>
        <td>getStorageManager()</td>
        <td>StorageManager</td>
        <td></td>
    </tr>
     <tr>
        <td>getWidth()</td>
        <td>number</td>
        <td>Scheme width</td>
    </tr>
    <tr>
        <td>getHeight()</td>
        <td>number</td>
        <td>Scheme height</td>
    </tr>
    <tr>
        <td>clearContext()</td>
        <td>SchemeDesigner</td>
        <td>Clear canvas context</td>
    </tr>
    <tr>
        <td>requestRenderAll()</td>
        <td>SchemeDesigner</td>
        <td>Request redraw canvas</td>
    </tr>
    <tr>
        <td>render()</td>
        <td></td>
        <td>Request redraw canvas, create search tree and scroll with zoom to center</td>
    </tr>
    <tr>
        <td>addObject(object: SchemeObject)</td>
        <td></td>
        <td>Wrapper for storageManager.addObject</td>
    </tr>
    <tr>
        <td>removeObject(object: SchemeObject)</td>
        <td></td>
        <td>Wrapper for storageManager.removeObject</td>
    </tr>
     <tr>
        <td>getObjects()</td>
        <td>SchemeObject[]</td>
        <td>Wrapper for storageManager.getObjects</td>
    </tr>
     <tr>
        <td>removeObjects(object: SchemeObject)</td>
        <td></td>
        <td>Wrapper for storageManager.removeObjects</td>
    </tr>
        <tr>
        <td>getCanvas()</td>
        <td>HTMLCanvasElement</td>
        <td>Canvas element</td>
    </tr>
    <tr>
        <td>getCanvas2DContext()</td>
        <td>CanvasRenderingContext2D</td>
        <td>Canvas context</td>
    </tr>
     <tr>
        <td>setCursorStyle(cursor: string)</td>
        <td>SchemeDesigner</td>
        <td>Set cursor style</td>
    </tr>
    <tr>
        <td colspan=3 align=center><strong>Scroll manager</strong></td>
    </tr>
     <tr>
        <td>getScrollLeft()</td>
        <td>number</td>
        <td>Left offset</td>
    </tr>
    <tr>
        <td>getScrollTop()</td>
        <td>number</td>
        <td>Top offset</td>
    </tr>
    <tr>
        <td>scroll(left: number, top: number)</td>
        <td></td>
        <td>Set scroll</td>
    </tr>
    <tr>
        <td>toCenter()</td>
        <td></td>
        <td>Scroll to objects center</td>
    </tr>
    <tr>
        <td>setMaxHiddenPart(value: number)</td>
        <td></td>
        <td>Set maxHiddenPart</td>
    </tr>
    <tr>
        <td colspan=3 align=center><strong>Zoom manager</strong></td>
    </tr>
    <tr>
        <td>zoom(delta: number)</td>
        <td>boolean</td>
        <td>Zoom scheme if posible</td>
    </tr>
    <tr>
        <td>setScale(scale: number)</td>
        <td>boolean</td>
        <td>Set scale if posible</td>
    </tr>
    <tr>
        <td>getScaleWithAllObjects()</td>
        <td>number</td>
        <td>Get scale when all objects are visible</td>
    </tr>
    <tr>
        <td>zoomByFactor(factor: number)</td>
        <td>boolean</td>
        <td>Zoom by factor if posible</td>
    </tr>
    <tr>
        <td>getScale()</td>
        <td>number</td>
        <td>Current scale</td>
    </tr>
    <tr>
        <td>zoomToCenter(delta: number)</td>
        <td></td>
        <td>Zoom to center</td>
    </tr>
    <tr>
        <td>zoomToPoint(point: Coordinates, delta: number)</td>
        <td></td>
        <td>Zoom to point</td>
    </tr>
    <tr>
        <td>setPadding(value: number)</td>
        <td></td>
        <td>Set padding</td>
    </tr>
    <tr>
        <td>setMaxScale(value: number)</td>
        <td></td>
        <td>Set maxScale</td>
    </tr>
    <tr>
        <td>setZoomCoefficient(value: number)</td>
        <td></td>
        <td>Set zoomCoefficient </td>
    </tr>
     <tr>
        <td colspan=3 align=center><strong>Storage manager</strong></td>
    </tr>
     <tr>
        <td>getObjects()</td>
        <td>SchemeObject[]</td>
        <td>Get all objects</td>
    </tr>
    <tr>
        <td>addObject(object: SchemeObject)</td>
        <td></td>
        <td>Add object</td>
    </tr>
    <tr>
        <td>removeObject(object: SchemeObject)</td>
        <td></td>
        <td>Remove object</td>
    </tr>
    <tr>
        <td>removeObjects()</td>
        <td></td>
        <td>Remove all objects</td>
    </tr>
    <tr>
        <td>findObjectsByCoordinates(coordinates: Coordinates)</td>
        <td>SchemeObject[]</td>
        <td>Find objects by coordinates</td>
    </tr>
    <tr>
        <td>getObjectsBoundingRect()</td>
        <td>BoundingRect</td>
        <td>Bounding rect of all objects</td>
    </tr>
    <tr>
        <td>reCalcObjectsBoundingRect()</td>
        <td></td>
        <td>Request fo recalculate bounding rect of all objects</td>
    </tr>
    <tr>
        <td>setTreeDepth(value: number)</td>
        <td></td>
        <td>Set treeDepth</td>
    </tr>
    <tr>
        <td>requestBuildTree()</td>
        <td></td>
        <td>Request rebuild search tree</td>
    </tr>
    <tr>
        <td>getTree()</td>
        <td>TreeNode</td>
        <td>Get root tree node</td>
    </tr>
    <tr>
        <td>showNodesParts()</td>
        <td></td>
        <td>Draw rect of nodes for testing</td>
    </tr>
</table>


<h2>Events</h2>

<table>
    <tr>
        <th>Event</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>schemeDesigner.beforeRenderAll</td>
        <td>Before render all</td>
    </tr>
        <tr>
        <td>schemeDesigner.afterRenderAll</td>
        <td>After render all</td>
    </tr>
        <tr>
        <td>schemeDesigner.clickOnObject</td>
        <td>Click on object</td>
    </tr>
        <tr>
        <td>schemeDesigner.mouseOverObject</td>
        <td>Mouse over on object</td>
    </tr>
        <tr>
        <td>schemeDesigner.mouseLeaveObject</td>
        <td>Mouse leave from object</td>
    </tr>
        <tr>
        <td>schemeDesigner.scroll</td>
        <td>On scroll</td>
    </tr>
    <tr>
        <td>schemeDesigner.zoom</td>
        <td>On zoom</td>
    </tr>
</table>
