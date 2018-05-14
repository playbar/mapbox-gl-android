
# Mapbox 地图样式规范
==

Mapbox 样式文件定义的是地图所呈现的视觉外观，包括：需要绘制哪些数据、绘制的顺序、以及绘制数据<br>
时如何进行符号化。样式文档是以 JSON 对象中的属性字段进行组织的。此规范对这些属性字段进行定义和<br>
描述。

* 此文档面向的对象包括：

    * 更倾向于手写样式而不是使用 Mapbox Studio 生成样式的高级设计师和制图人员
    * 希望使用 Mapbox GL JS 或 Mapbox iOS 或 Android SDK 中样式相关特性的开发者
    * 开发生成或处理 Mapbox 样式文件的软件工具开发者。
    
##根节点属性

* 根节点属性字段规定了样式中地图的图层、瓦片数据源和其他资源、以及其他地方未指定时相机的默认参数。<br>
{<br>
    "version": 8,<br>
    "name": "Mapbox Streets",<br>
    "sprite": "mapbox://sprites/mapbox/streets-v8",<br>
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",<br>
    "sources": {...},<br>
    "layers": [...]<br>
}<br>

* version <br>
    * 必选 enum. 
    * 样式规范版本号。 必须为 8。
    * "version": 8
* name
    * 可选 string.
    * 样式名称.
    * "name": "Bright"
    
    
* metadata<br>
    * 可选<br>
    * 关于样式表的任意属性信息，但不对渲染过程产生影响。这些属性应该添加前缀以避免冲突，
    * 例如 'mapbox:'。

* center
    * 可选 array.
    * 地图默认的中心经度和纬度。这个中心点只有在地图没有被其他方法定位时（例如地图设置或用户交互）才生效。

    "center": [<br>
        -73.9749,<br>
        40.7736<br>
    ]<br>

* zoom
    * 可选 number.
    * 默认缩放级别。这个缩放级别只有在地图没有被其他方法定位时（例如地图设置或用户交互）才生效。
    * "zoom": 12.5
    
* bearing
    * 可选 number.  单位为 degrees. 默认为 0.
    * 默认方位角，沿顺时针偏离真北方向的夹角。这个方位角只有在地图没有被其他方法定位时（例如地图设置或用户交互）才生效。
    * "bearing": 29

* pitch
    * 可选 number.  单位为 degrees. 默认为 0.
    * 默认倾斜角度。0 代表垂直于地面，即垂直俯视地图，更大的值例如 60 可以眺望到地平线。这个倾斜角度只有在地图没有被其他方法定位时（例如地图设置或用户交互）才生效。
    * "pitch": 50
    
* light
    * 可选
    
* sources
    * 必选 sources.
    * 数据源说明。

    "sources": { <br>
        "mapbox-streets": {<br>
            "type": "vector",<br>
            "url": "mapbox://mapbox.mapbox-streets-v6"<br>
        }<br>
    }<br>
    
    
* sprite
    * 可选 string.
    * 获取雪碧图及其元数据的基础 URL。扩展名后缀 .png、.json、以及缩放因子 @2x.png 会被自动添加。当有图层使用了 background-pattern、fill-pattern、line-pattern、或icon-image 属性时，此属性必须设置。
    * "sprite": "mapbox://sprites/mapbox/bright-v8"
    
* glyphs
    * 可选 string.
    * 获取以有向距离场编码的 PBF 字形文件的 URL 模板。URL 必须包含 {fontstack} 和 {range} 占位符。当有图层使用了 text-field 布局属性时，此属性必须设置。
    * "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf"
    
* transition
    * 可选 transition.
    * 全局的过渡动画属性，用来作为各种属性变化时的默认设置。

    "transition": {<br>
        "duration": 300,<br>
        "delay": 0<br>
    }<br>

* layers
    * 必选 array.
    * 图层将按照此数组依次绘制。

"layers": [<br>
  {<br>
    "id": "water",<br>
    "source": "mapbox-streets",<br>
    "source-layer": "water",<br>
    "type": "fill",<br>
    "paint": {<br>
      "fill-color": "#00ffff"<br>
    }<br>
  }<br>
]<br>


## 数据源
数据源提供地图显示的数据。数据源的类型通过 "type" 属性指定，并且必须是 vector, raster, geojson, image, video 其中之一。
仅添加数据源并不会立即显示在地图上，因为缺少样式信息如颜色或线宽。通过图层引用数据源将其显示出来。可以对同一数据源采用多种方式渲染，例如在高速路图层中对不同的等级的公路进行分别渲染以示区分。

* 瓦片数据源（矢量和栅格）必须按照 TileJSON 规范 来设置数据源信息。 可通过多种方式指定：

    * 在数据源字段中直接提供 TileJSON 属性字段如 "tiles"、"minzoom"、和  "maxzoom"：
    * "mapbox-streets": {<br>
        "type": "vector",<br>
        "tiles": [<br>
            "http://a.example.com/tiles/{z}/{x}/{y}.pbf",<br>
            "http://b.example.com/tiles/{z}/{x}/{y}.pbf"<br>
        ],<br>
        "maxzoom": 14<br>
    }<br>
    
* 提供一个指向 TileJOSN 文件的 "url"：<br>
    * "mapbox-streets": {<br>
        "type": "vector",<br>
        "url": "http://api.example.com/tilejson.json"<br>
    }<br>

* 提供一个 url 指向支持EPSG:3857（或 EPSG:900913）坐标的 WMS 地图服务，作为瓦片的数据源。 
服务的 url 应该包含一个 "{bbox-epsg-3857}" 替换符，用以提供 bbox 参数。 
(此项功能目前仅支持 Mapbox GL JS 和 Mapbox macOS SDK。)
    * "wms-imagery": {
        "type": "raster",
        "tiles": [
            'http://a.example.com/wms?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&width=256&height=256&layers=example'
        ],
        "tileSize": 256
    }
    
* vector
    * 矢量瓦片数据源。瓦片必须是 Mapbox Vector Tile 格式。瓦片中所有的几何坐标必须在 -1 * extent 和 (extent * 2) - 1 之间（包括界限值）。所有引用矢量数据源的图层必须指定 "source-layer" 属性。 对于 Mapbox 托管的矢量瓦片，"url" 的形式为 mapbox://mapid。

    "mapbox-streets": {<br>
        "type": "vector",<br>
        "url": "mapbox://mapbox.mapbox-streets-v6"<br>
    }<br>

* url
    * 可选 string.
    * 指向 TileJSON 的 URL。支持的协议有 http:、https:、 以及 mapbox://<mapid>。

* tiles
    * 可选 array.
    * 包含一个或多个瓦片数据源的 URL，见 TileJSON 规范

* minzoom
    * 可选 number.  默认为 0.
    * 瓦片源的最小缩放级别，见 TileJSON 规范。

maxzoom
可选 number.  默认为 22.
瓦片源的最大缩放级别，见 TileJSON 规范。当显示更高缩放级别的地图时，会使用此级别的数据。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
基本功能	>= 0.10.0	>= 2.0.0	>= 2.0.1
raster
对于 Mapbox 托管的矢量瓦片，"url" 的形式为 mapbox://mapid。

"mapbox-satellite": {
  "type": "raster",
  "url": "mapbox://mapbox.satellite",
  "tileSize": 256
}
url
可选 string.
指向 TileJSON 的 URL。支持的协议有 http:、https:、 以及 mapbox://<mapid>。

tiles
可选 array.
包含一个或多个瓦片数据源的 URL，见 TileJSON 规范

minzoom
可选 number.  默认为 0.
瓦片源的最小缩放级别，见 TileJSON 规范。

maxzoom
可选 number.  默认为 22.
瓦片源的最大缩放级别，见 TileJSON 规范。当显示更高缩放级别的地图时，会使用此级别的数据。

tileSize
可选 number.  单位为 pixels. 默认为 512.
图层中显示瓦片的最小尺寸。仅对栅格图层有效。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
基本功能	>= 0.10.0	>= 2.0.0	>= 2.0.1
geojson
GeoJSON 数据源。数据源必须指定 "data" 属性，其值可以为 URL 或者内联的 GeoJSON。

"geojson-marker": {
  "type": "geojson",
  "data": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-77.0323, 38.9131]
    },
    "properties": {
      "title": "Mapbox DC",
      "marker-symbol": "monument"
    }
  }
}
以下示例是一个通过 URL 方式指向一个外部 GeoJSON 文件的 GeoJSON 数据源。GeoJSON 文件必须在同一域上或者可通过 CORS 方式访问到。

"geojson-lines": {
  "type": "geojson",
  "data": "./lines.geojson"
}
data
可选
链接到 GeoJSON 文件的 URL，或者内联的 GeoJSON。

maxzoom
可选 number.  默认为 18.
生成矢量瓦片的最大缩放级别（值越大详细程度越高）。

buffer
可选 number.  默认为 128.
瓦片边界上的缓冲区大小。0 表示无缓冲区。512 表示缓冲区与瓦片本身一样宽。值越大在瓦片边缘上生成的符号冲突越少，但是意味着性能降低。

tolerance
可选 number.  默认为 0.375.
Douglas-Peucker 化简容差（值越大，几何要素化简程度越高，渲染性能也更好）。

cluster
可选 boolean.  默认为 false.
如果数据是点数据集，设置 true 将会按照聚类半径进行聚类。

clusterRadius
可选 number.  默认为 50.
聚类半径。512 表示聚类半径等于瓦片宽度。

clusterMaxZoom
可选 number.
点进行聚类的最大缩放级别。默认为 maxzoom - 1（为了确保在最大缩放级别下要素不被聚类）。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
基础功能	>= 0.10.0	>= 2.0.0	>= 2.0.1
聚类	>= 0.14.0	暂不支持	暂不支持
image
图片数据源。"url" 包含了图片文件的位置。

"coordinates" 数组包含图片四角的 [经度, 纬度] 坐标对，以顺时针方向排列：左上角、右上角、右下角、左下角。

"image": {
  "type": "image",
  "url": "/mapbox-gl-js/assets/radar.gif",
  "coordinates": [
      [-80.425, 46.437],
      [-71.516, 46.437],
      [-71.516, 37.936],
      [-80.425, 37.936]
  ]
}
url
必选 string.
指向图片的 URL。

coordinates
必选 array.
图片的四角的经纬度坐标。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
基础功能	>= 0.10.0	暂不支持	暂不支持
video
视频数据源。"urls" 的值是一个数组。对于数组中的每一个 URL，将会生成一个 video 元素的 源，以满足不同浏览器对视频格式的要求。

"coordinates" 数组包含视频四角的 [经度, 纬度] 坐标对，以顺时针方向排列：左上角、右上角、右下角、左下角。

"video": {
  "type": "video",
  "urls": [
    "https://www.mapbox.com/drone/video/drone.mp4",
    "https://www.mapbox.com/drone/video/drone.webm"
  ],
  "coordinates": [
     [-122.51596391201019, 37.56238816766053],
     [-122.51467645168304, 37.56410183312965],
     [-122.51309394836426, 37.563391708549425],
     [-122.51423120498657, 37.56161849366671]
  ]
}
urls
必选 array.
指向视频内容的URL，按照格式优先级排列。

coordinates
必选 array.
视频的四角的经纬度坐标。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
基础功能	>= 0.10.0	暂不支持	暂不支持
Sprite
样式中的 sprite 属性需提供一个 URL 模板，用于获取在background-pattern、fill-pattern、line-pattern、和 icon-image 属性中使用的小图标。

"sprite": "mapbox://sprites/mapbox/bright-v8"
一个有效的雪碧图源必须包含两种文件：

索引文件，即一个 JSON 文件包含对雪碧图中的每个图标的描述信息。文件的内容必须是一个 JSON 对象，其中 key 作为标识符，被以上四个样式属性所使用；value 是一个对象，用来描述图标的尺寸（width 和 height 属性）、像素比例（pixelRatio）、以及在雪碧图中的位置（x 和 y）。例如，只包含一个图标的雪碧图的索引文件内容如下：
{
  "poi": {
    "width": 32,
    "height": 32,
    "x": 0,
    "y": 0,
    "pixelRatio": 1
  }
}
然后样式文件可以通过创建一个设置了"icon-image": "poi"的符号图层来引用雪碧图中的图标，或者使用 "icon-image": "{icon}" 替换符的方式，符号化 icon 字段的值为 poi 的矢量瓦片要素。
图片文件, 包含雪碧图数据的 PNG 图片。
Mapbox SDK 将会根据样式中的 sprite 属性值，生成获取这两种文件的 URL。首先，对于这两种文件，在高分屏设备上都会在 URL 上追加 @2x。其次，会对索引文件添加 .json 文件后缀，对图片文件添加 .png 文件后缀。例如，如果你指定 "sprite": "https://example.com/sprite"，渲染是将会载入 https://example.com/sprite.json 和 https://example.com/sprite.png，或者 https://example.com/sprite@2x.json 和 https://example.com/sprite@2x.png。

如果您正在使用 Mapbox Studio，Mapbox 会提供预生成好的雪碧图，同时也可以上传自定义的 SVG 图像来生成您自己的雪碧图。无论哪种方式，雪碧图都会自动构建并且可用通过 Mapbox API 获取到。如果您想手动生成雪碧图并放到自己的服务器上，您可以使用 spritezero-cli，这个命令行工具可以从 SVG 文件夹中生成兼容 Mapbox GL 的雪碧图片和索引文件。

Glyphs
样式的 glyphs 属性提供一个获取 PBF 格式的有向距离场字型文件的 URL 模板。

"glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf"
Transition
样式的 transition 属性提供一个全局的过渡设置。

"transition": {
  "duration": 300,
  "delay": 0
}
duration
可选 number.  单位为 milliseconds. 默认为 300.
过渡动画的持续时间。

delay
可选 number.  单位为 milliseconds. 默认为 0.
过渡动画延迟开始的时间。

Layers
样式的 layers 属性罗列出所有的样式图层。图层的类型通过 "type" 属性指定，并且必须是 background, fill, line, symbol, raster, circle 其中之一。

除了 background 图层，其他图层均需要引用一个数据源。图层从数据源中获取数据、过滤数据、以及定义要素符号化的方法。

"layers": [
  {
    "id": "water",
    "source": "mapbox-streets",
    "source-layer": "water",
    "type": "fill",
    "paint": {
      "fill-color": "#00ffff"
    }
  }
]
id
必选 string.
全局唯一的图层名称。

type
可选 enum.  可选的值有 fill, line, symbol, circle, raster, background.
图层的渲染类型。

fill
可填充的多边形，可带描边。

line
绘制线。

symbol
图标或者文本标注。

circle
可填充的圆。

raster
栅格地图例如卫星影像。

background
地图的背景色或者填充图案。

metadata
可选
关于图层的任意属性信息，但不对渲染过程产生影响。这些属性应该添加前缀以避免冲突，例如 'mapbox:'。

ref
可选 string.
引用其他图层的 type、source、source-layer、minzoom、maxzoom、filter、以及 layout 属性。此属性可让图层共享处理过程，提高效率。

source
可选 string.
图层的数据源。

source-layer
可选 string.
矢量瓦片数据源的图层。当数据源支持多个图层时，此属性是必需的。

minzoom
可选 number.
图层进行解析并显示的最小缩放级别。

maxzoom
可选 number.
图层进行解析并显示的最大缩放级别。

interactive
可选 boolean.  默认为 false.
允许从此图层上查询要素数据，用于交互。

filter
可选 filter.
指明数据源上要素的过滤条件的表达式。只有符合过滤条件的要素才被显示。

layout
可选 layout.
图层的布局属性。

paint
可选 paint.
图层的默认绘制属性。

paint.*
可选 paint.
特定类别的绘制属性。第一个点后面的部分即为类别名。

图层有两个子属性用来确定图层中的数据如何被渲染：layout 和 paint 属性.

Layout 属性 出现在图层的 "layout" 对象中。它将被应用于渲染过程的早期阶段，定义了图层的数据如何传输到 GPU。为了提升效率，其他图层可以通过 "ref" 属性来共享此图层的 layout 属性，应当尽可能地使用此功能。这将会减少处理时间，并允许图层间共享 GPU 内存和其他资源。

Paint 属性 被应用于渲染过程的后期阶段。一个共享其他图层 layout 属性的图层可以设置不同的 paint 属性。Paint 属性出现在图层的 "paint" 对象中。图层可以设置特定类别的 paint 属性，根据地图设置的类名称进行调用。例如，图层的 "paint.night" 属性将会在地图设置了 "night" 类名时生效。

Key: 支持插值函数 支持阶梯函数 支持过渡

background
Layout 属性
visibility 
可选 enum.  可选的值有 visible, none. 默认为 visible.
是否显示此图层。

visible
显示此图层。

none
不显示此图层。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
Paint 属性
background-color  
可选 color.  默认为 #000000. 设置 background-pattern 后无效.
背景色。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
background-pattern  
可选 string.
在雪碧图中的图标名称，用来绘制背景图案。为了无缝填充，图案的宽和高必须是 2 的整数倍如 (2, 4, 8, ..., 512)。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
background-opacity  
可选 number.  默认为 1.
背景色的不透明度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
fill
Layout 属性
visibility 
可选 enum.  可选的值有 visible, none. 默认为 visible.
是否显示此图层。

visible
显示此图层。

none
不显示此图层。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
Paint 属性
fill-antialias 
可选 boolean.  默认为 true.
多边形填充是否需要反锯齿。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
fill-opacity  
可选 number.  默认为 1.
多边形填充的不透明度。与 fill-color 不同的是，当有描边时，这个值也会影响到多边形填充作为 1px 的描边。对于一个凸出的填充图层，不透明度将以图层为单位而不是以要素为单位生效（也因此将不会支持字段函数）。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
data-driven styling

>= 0.21.0	不支持	不支持
fill-color  
可选 color.  默认为 #000000. 设置 fill-pattern 后无效.
此图层填充部分的颜色。该颜色可以用包括 alpha 通道的 rgba 方式指定，并且颜色的不透明度将不会影响到周围 1 px的描边。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
data-driven styling

>= 0.19.0	不支持	不支持
fill-outline-color  
可选 color.  设置 fill-pattern 后无效. 需要 fill-antialias = true.
多边形填充的轮廓颜色。如果未指定，与 fill-color 一致。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
data-driven styling

>= 0.19.0	不支持	不支持
fill-translate  
可选 array.  单位为 pixels. 默认为 0,0.
几何要素的偏移量。以 [x, y] 形式设置，负值表示向左和上偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
fill-translate-anchor 
可选 enum.  可选的值有 map, viewport. 默认为 map. 需要 fill-translate.
控制偏移的参考点。

map
相对于地图偏移。

viewport
相对于视窗偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
fill-pattern  
可选 string.
在雪碧图中的图标名称，用来对多边形进行图案填充。为了无缝填充，图案的宽和高必须是 2 的整数倍如 (2, 4, 8, ..., 512)。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
fill-extrude-height  
可选 number.  默认为 0.
凸出此多边形图层的高度值。

fill-extrude-base  
可选 number.  默认为 0. 必须小于等于 fill-extrude-height.
凸出此图层基底的高度值。

line
Layout 属性
line-cap 
可选 enum.  可选的值有 butt, round, square. 默认为 butt.
线末端的显示样式。

butt
方型末端，仅绘制到直线端点。

round
圆型末端，以线宽的 1/2 为半径，以线端点为圆心，超出线端点绘制。

square
方型末端，以线宽的 1/2 长度超出线端点绘制。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-join 
可选 enum.  可选的值有 bevel, round, miter. 默认为 miter.
线交叉时的显示样式。

bevel
方型交点，以线宽的 1/2 长度超出交点绘制。

round
圆型交点，以线宽的 1/2 为半径，以交点为圆心绘制，超出交点绘制。

miter
尖型交角，以两线段外沿相交，超出交点绘制。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-miter-limit 
可选 number.  默认为 2. 需要 line-join = miter.
用来将锐利的尖型交角自动地转换为方型交角。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-round-limit 
可选 number.  默认为 1.05. 需要 line-join = round.
用来将平浅的圆型交角自动地转换为尖型交角。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
visibility 
可选 enum.  可选的值有 visible, none. 默认为 visible.
是否显示此图层。

visible
显示此图层。

none
不显示此图层。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
Paint 属性
line-opacity  
可选 number.  默认为 1.
绘制线的不透明度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-color  
可选 color.  默认为 #000000. 设置 line-pattern 后无效.
绘制线的颜色。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
data-driven styling

>= 0.23.0	不支持	不支持
line-translate  
可选 array.  单位为 pixels. 默认为 0,0.
几何要素的偏移量。以 [x, y] 形式设置，负值表示向左和上偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-translate-anchor 
可选 enum.  可选的值有 map, viewport. 默认为 map. 需要 line-translate.
控制偏移的参考点。

map
相对于地图偏移。

viewport
相对于视窗偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-width  
可选 number.  单位为 pixels. 默认为 1.
Stroke thickness.

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-gap-width  
可选 number.  单位为 pixels. 默认为 0.
在线的实际路径外部绘制线套。设置的值表示内间距。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-offset  
可选 number.  单位为 pixels. 默认为 0.
线的偏移。对于线状要素，正值表示相对于线走向的右边偏移。对于多边形要素，正值表示内缩（inset），负值表示外突（outset）。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.12.1	>= 3.1.0	>= 3.0.0
line-blur  
可选 number.  单位为 pixels. 默认为 0.
线虚化的像素值。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-dasharray  
可选 array.  单位为 line widths. 设置 line-pattern 后无效.
指定生成虚线的实部和虚部长度。设置的长度会随着线宽进行缩放。将长度乘以当前线宽即为虚线的实际像素数。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
line-pattern  
可选 string.
在雪碧图中的图标名称，用来对线进行图案填充。为了无缝填充，图案的宽和高必须是 2 的整数倍如 (2, 4, 8, ..., 512)。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
symbol
Layout 属性
symbol-placement 
可选 enum.  可选的值有 point, line. 默认为 point.
注记相对于几何要素的位置。

point
标注在几何要素的点位上。

line
标注在几何要素的边线上。只能用在 LineString 和 Polygon 要素上

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
symbol-spacing 
可选 number.  单位为 pixels. 默认为 250. 需要 symbol-placement = line.
两个注记锚点之间的距离。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
symbol-avoid-edges 
可选 boolean.  默认为 false.
设置为 true 时，注记不会跨瓦片边缘，以避免相互冲突。当图层的矢量瓦片没有足够的缓冲区以避免冲突，或者一个点注记图层在一个线注记图层之上时，推荐开启此设置。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-allow-overlap 
可选 boolean.  默认为 false. 需要 icon-image.
设置为 true 时，图标符号即使碰撞到其他绘制的注记也会显示。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-ignore-placement 
可选 boolean.  默认为 false. 需要 icon-image.
设置为 true 时，其他注记即使碰撞到此图标符号也会显示。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-optional 
可选 boolean.  默认为 false. 需要 icon-image. 需要 text-field.
设置为 true 时，当此注记的图标与其他注记碰撞而文本未碰撞时，仅显示此注记的文本而不显示图标。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-rotation-alignment 
可选 enum.  可选的值有 map, viewport, auto. 默认为 auto. 需要 icon-image.
与 symbol-placement 组合使用，决定旋转时图标的行为。

map
当 symbol-placement 设置为 point 时，将图标与东西方向对齐。当 symbol-placement 设置为 line 时，将图标的 x 轴与线对齐。

viewport
将图标的 x 轴与视窗的 x 轴对齐，无论 symbol-placement 设置为哪个值。

auto
当 symbol-placement 设置为 point 时，与 viewport 行为一致。当 symbol-placement 设置为 line 时，与 map 行为一致。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
auto value

不支持	不支持	不支持
icon-size 
可选 number.  默认为 1. 需要 icon-image.
图标的缩放因子。1 表示原始大小，3 表示三倍大小。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-text-fit 
可选 enum.  可选的值有 none, width, height, both. 默认为 none. 需要 icon-image. 需要 text-field.
缩放图标以与文本相匹配。

none
图标按其本身的比例进行显示。

width
图标在 x 轴进行缩放以匹配文本的宽度。

height
图标在 y 轴进行缩放以匹配文本的高度。

both
图标在 x 轴与 y 轴都进行缩放。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.21.0	不支持	不支持
icon-text-fit-padding 
可选 array.  单位为 pixels. 默认为 0,0,0,0. 需要 icon-image. 需要 text-field. 需要 icon-text-fit = one of both, width, height.
根据 icon-text-fit 确定的图标尺寸添加额外的间隔，以上-右-下-左的顺时针顺序设置。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.21.0	不支持	不支持
icon-image 
可选 string.
替换 {tokens} 的字符串，引用拉取的图标资源。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-rotate 
可选 number.  单位为 degrees. 默认为 0. 需要 icon-image.
按顺时针方向旋转图标。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
data-driven styling

>= 0.21.0	不支持	不支持
icon-padding 
可选 number.  单位为 pixels. 默认为 2. 需要 icon-image.
包围在图标 bbox 外的额外空间，用以检测注记碰撞。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-keep-upright 
可选 boolean.  默认为 false. 需要 icon-image. 需要 icon-rotation-alignment = map. 需要 symbol-placement = line.
如果设置为 true，图标可以被翻转以避免图标上下颠倒。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-offset 
可选 array.  默认为 0,0. 需要 icon-image.
图标与其锚点的偏移量。正值表示向右和下偏移，负值表示向左和上偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-pitch-alignment 
可选 enum.  可选的值有 map, viewport, auto. 默认为 auto. 需要 text-field.
当地图倾斜时文本的方向。

map
文本与地图平面对齐。

viewport
文本与视窗平面对齐。

auto
自动地与 text-rotation-alignment 设置相匹配。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.21.0	>= 2.0.0	>= 2.0.1
auto value

不支持	不支持	不支持
text-rotation-alignment 
可选 enum.  可选的值有 map, viewport, auto. 默认为 auto. 需要 text-field.
与 symbol-placement 结合使用，确定构成文本的单个字型的旋转行为。

map
当 symbol-placement 设置为 point 时，将文本与东西方向对齐。当 symbol-placement 设置为 line 时，将文本的 x 轴与线对齐。

viewport
将字型的 x 轴与视窗的 x 轴对齐，无论 symbol-placement 设置为哪个值。

auto
当 symbol-placement 设置为 point 时，与 viewport 行为一致。当 symbol-placement 设置为 line 时，与 map 行为一致。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
auto value

不支持	不支持	不支持
text-field 
可选 string.
用来作为文本标注的字段。用 {field_name} 指示使用要素的哪个字段。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-font 
可选 array.  默认为 Open Sans Regular,Arial Unicode MS Regular. 需要 text-field.
显示文本的字栈。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-size 
可选 number.  单位为 pixels. 默认为 16. 需要 text-field.
字体大小

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-max-width 
可选 number.  单位为 ems. 默认为 10. 需要 text-field.
文本折行的最大行度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-line-height 
可选 number.  单位为 ems. 默认为 1.2. 需要 text-field.
多行文本的行高。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-letter-spacing 
可选 number.  单位为 ems. 默认为 0. 需要 text-field.
字符间距。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-justify 
可选 enum.  可选的值有 left, center, right. 默认为 center. 需要 text-field.
文本对齐选项。

left
文本左对齐。

center
文本居中。

right
文本右对齐。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-anchor 
可选 enum.  可选的值有 center, left, right, top, bottom, top-left, top-right, bottom-left, bottom-right. 默认为 center. 需要 text-field.
文本停靠到锚点的部分。

center
文本中心停靠到锚点。

left
文本左边停靠到锚点。

right
文本右边停靠到锚点。

top
文本顶部停靠到锚点。

bottom
文本底部停靠到锚点。

top-left
文本的左上角停靠到锚点。

top-right
文本的右上角停靠到锚点。

bottom-left
文本的左下角停靠到锚点。

bottom-right
文本的右下角停靠到锚点。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-max-angle 
可选 number.  单位为 degrees. 默认为 45. 需要 text-field. 需要 symbol-placement = line.
相邻字符的最大夹角。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-rotate 
可选 number.  单位为 degrees. 默认为 0. 需要 text-field.
顺时针旋转文本的角度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-padding 
可选 number.  单位为 pixels. 默认为 2. 需要 text-field.
文本框四周的额外空间，用以检测注记碰撞。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-keep-upright 
可选 boolean.  默认为 true. 需要 text-field. 需要 text-rotation-alignment = map. 需要 symbol-placement = line.
如果设置为 true，文本可以被翻转以避免图标上下颠倒。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-transform 
可选 enum.  可选的值有 none, uppercase, lowercase. 默认为 none. 需要 text-field.
设置文本的大小写，类似于 CSS 的 text-transform 属性。

none
文本保持不变。

uppercase
强制使所有的字符大写。

lowercase
强制使所有的字符小写。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-offset 
可选 array.  单位为 ems. 默认为 0,0. 需要 text-field.
文本与其锚点的偏移量。正值表示向右和下偏移，负值表示向左和上偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-allow-overlap 
可选 boolean.  默认为 false. 需要 text-field.
设置为 true 时，文本标注即使碰撞到其他绘制的注记也会显示。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-ignore-placement 
可选 boolean.  默认为 false. 需要 text-field.
设置为 true 时，其他注记即使碰撞到此文本标注也会显示。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-optional 
可选 boolean.  默认为 false. 需要 text-field. 需要 icon-image.
设置为 true 时，当此文本注记与其他注记碰撞而图标未碰撞时，仅显示此注记的图标而不显示文本。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
visibility 
可选 enum.  可选的值有 visible, none. 默认为 visible.
是否显示此图层。

visible
显示此图层。

none
不显示此图层。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
Paint 属性
icon-opacity  
可选 number.  默认为 1. 需要 icon-image.
绘制图标的不透明度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-color  
可选 color.  默认为 #000000. 需要 icon-image.
图标的颜色。仅对 sdf 格式的图标有效。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-halo-color  
可选 color.  默认为 rgba(0, 0, 0, 0). 需要 icon-image.
图标的光晕颜色。仅对 sdf 格式的图标有效。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-halo-width  
可选 number.  单位为 pixels. 默认为 0. 需要 icon-image.
光晕到图标轮廓的距离。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-halo-blur  
可选 number.  单位为 pixels. 默认为 0. 需要 icon-image.
光晕向外渐变的宽度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-translate  
可选 array.  单位为 pixels. 默认为 0,0. 需要 icon-image.
图标锚点偏离原始位置的距离。正数表示向右和下偏移，负数表示向左和上偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
icon-translate-anchor 
可选 enum.  可选的值有 map, viewport. 默认为 map. 需要 icon-image. 需要 icon-translate.
控制偏移的参考点。

map
相对于地图偏移。

viewport
相对于视窗偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-opacity  
可选 number.  默认为 1. 需要 text-field.
绘制文本的不透明度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-color  
可选 color.  默认为 #000000. 需要 text-field.
绘制文本的颜色。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-halo-color  
可选 color.  默认为 rgba(0, 0, 0, 0). 需要 text-field.
文本光晕的颜色，用于区别于背景。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-halo-width  
可选 number.  单位为 pixels. 默认为 0. 需要 text-field.
光晕离字体轮廓线的距离。最大值为字体大小的 1/4

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-halo-blur  
可选 number.  单位为 pixels. 默认为 0. 需要 text-field.
光晕向外渐变的宽度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-translate  
可选 array.  单位为 pixels. 默认为 0,0. 需要 text-field.
。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
text-translate-anchor 
可选 enum.  可选的值有 map, viewport. 默认为 map. 需要 text-field. 需要 text-translate.
控制偏移的参考点。

map
相对于地图偏移。

viewport
相对于视窗偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
raster
Layout 属性
visibility 
可选 enum.  可选的值有 visible, none. 默认为 visible.
是否显示此图层。

visible
显示此图层。

none
不显示此图层。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
Paint 属性
raster-opacity  
可选 number.  默认为 1.
绘制图片的不透明度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
raster-hue-rotate  
可选 number.  单位为 degrees. 默认为 0.
在色轮上旋转色相的角度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
raster-brightness-min  
可选 number.  默认为 0.
增大或减少图片的亮度。此值是最小亮度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
raster-brightness-max  
可选 number.  默认为 1.
增大或减少图片的亮度。此值是最大亮度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
raster-saturation  
可选 number.  默认为 0.
增加或者减少图片的饱和度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
raster-contrast  
可选 number.  默认为 0.
增加或者减少图片的对比度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
raster-fade-duration  
可选 number.  单位为 milliseconds. 默认为 300.
当添加新瓦片时的渐隐时间。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
circle
Layout 属性
visibility 
可选 enum.  可选的值有 visible, none. 默认为 visible.
是否显示此图层。

visible
显示此图层。

none
不显示此图层。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
Paint 属性
circle-radius  
可选 number.  单位为 pixels. 默认为 5.
圆的半径。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
data-driven styling

>= 0.18.0	不支持	不支持
circle-color  
可选 color.  默认为 #000000.
圆的填充颜色。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
data-driven styling

>= 0.18.0	不支持	不支持
circle-blur  
可选 number.  默认为 0.
圆虚化的程度。1 表示把圆虚化到只有圆心是不透明的。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
data-driven styling

>= 0.20.0	不支持	不支持
circle-opacity  
可选 number.  默认为 1.
绘制圆的不透明度。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
data-driven styling

>= 0.20.0	不支持	不支持
circle-translate  
可选 array.  单位为 pixels. 默认为 0,0.
几何要素的偏移量。以 [x, y] 形式设置，负值表示向左和上偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
circle-translate-anchor 
可选 enum.  可选的值有 map, viewport. 默认为 map. 需要 circle-translate.
控制偏移的参考点。

map
相对于地图偏移。

viewport
相对于视窗偏移。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.10.0	>= 2.0.0	>= 2.0.1
circle-pitch-scale 
可选 enum.  可选的值有 map, viewport. 默认为 map.
当地图倾斜时，控制圆的缩放行为。

map
圆根据与相机的视距离进行缩放。

viewport
圆不进行缩放。

SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
basic functionality

>= 0.21.0	不支持	不支持
值类型
Mapbox 样式文件包含多种不同类型的值，其中大多数是图层相关的属性。

Color
颜色值以 JSON 字符串的形式定义，允许的格式有：HTML 风格的 hex 值、rgb、rbga、hsl、和hsla。HTML 保留的颜色名称如 yellow 和 blue也可以使用。

{
  "line-color": "#ff0",
  "line-color": "#ffff00",
  "line-color": "rgb(255, 255, 0)",
  "line-color": "rgba(255, 255, 0, 1)",
  "line-color": "hsl(100, 50%, 50%)",
  "line-color": "hsla(100, 50%, 50%, 1)",
  "line-color": "yellow"
}
支持 hsl，是因为比 rgb() 更易理解。

Enum
从字符串形式的值列表中选择一个。在值两边使用引号括起来。

{
  "text-transform": "uppercase"
}
String
字符串即文本。在 Mapbox 样式文件中，字符串要用引号括起来。字符串可以为任意内容，但是要注意 text-field ——它实际上是通过花括号的方式引用要素，如下例。

{
  "text-field": "{MY_FIELD}"
}
Boolean
布尔值表示是或否，接受的值有 true 或 false。

{
  "fill-enabled": true
}
Number
数值，通常为整数或浮点数（十进制）。不需要用引号括起来。

{
  "text-size": 24
}
Array
数组是以一定顺序、以逗号分隔的一个或多个数值。它们被用来设置虚线，指定虚线实部和虚部的长度间隔。

{
  "line-dasharray": [2, 4]
}
Function
任何 layout 或 paint 属性可以设置成 函数. 函数使得地图要素的样式随当前缩放级别和要素字段变化。

stops必选 array.
函数按照输入和输出进行定义。一对输入输出就是一个“stop”。
property可选 string.
如果指定，函数将会把相应要素字段作为输入。另见 字段函数。
base可选 number. 默认为 1.
插值曲线的指数基底。控制断点插值的增长速率。值越大，在靠近上限的一端增长越快。1 表示线性插值。
type可选 enum. 可选的值有 identity, exponential, interval, categorical.
identity 函数的输出与输入相同。
exponential 函数在断点间插值的结果稍小于和稍大于函数输入。 这是  属性的默认设置。
interval 函数输出的断点值稍小于函数输入。这是  属性的默认设置。
categorical 函数输出的断点值等于函数输入。
缩放函数允许地图要素的样式随缩放级别变化。缩放用来产生视觉深度和控制数据显示密度。每个断点由两个元素组成，第一个是缩放级别，第二个是函数输出的值。

{
  "circle-radius": {
    "stops": [

      // zoom is 5 -> circle radius will be 1px
      [5, 1],

      // zoom is 10 -> circle radius will be 2px
      [10, 2]

    ]
  }
}
              
字段函数允许地图要素样式随其字段值变化。字段函数用来区分同一个图层中不同类型的要素，或者进行数据可视化。每个断点由两个元素组成，第一个是字段的值，第二个是函数输出的值。需要注意的是，现阶段不是所有的样式属性、所有的平台都支持字段函数。

{
  "circle-color": {
    "property": "temperature",
    "stops": [

      // "temperature" is 0   -> circle color will be blue
      [0, 'blue'],

      // "temperature" is 100 -> circle color will be red
      [100, 'red']

    ]
  }
}
              
缩放+字段函数允许地图要素样式随缩放级别和 字段进行变化。每个断点由两个元素组成，第一个是包含字段值和缩放级别的对象，第二个值是函数输出的值。需要注意的是对字段函数的支持还不完整。

{
  "circle-radius": {
    "property": "rating",
    "stops": [

      // zoom is 0 and "rating" is 0 -> circle radius will be 0px
      [{zoom: 0, value: 0}, 0],

      // zoom is 0 and "rating" is 5 -> circle radius will be 5px
      [{zoom: 0, value: 5}, 5],

      // zoom is 20 and "rating" is 0 -> circle radius will be 0px
      [{zoom: 20, value: 0}, 0],

      // zoom is 20 and "rating" is 5 -> circle radius will be 20px
      [{zoom: 20, value: 5}, 20]

    ]
  }
}
              
Filter
过滤器从图层中选择特定的要素。过滤器是由以下形式的过滤条件构成的数组：

存在与否过滤条件
["has", key] feature[key] 存在
["!has", key] feature[key] 不存在
比较过滤条件
["==", key, value] 等于：feature[key] = value
["!=", key, value] 不等于：feature[key] ≠ value
[">", key, value] 大于：feature[key] > value
[">=", key, value] 大于等于：feature[key] ≥ value
["<", key, value] 小于：feature[key] < value
["<=", key, value] 小于等于：feature[key] ≤ value
集合隶属过滤条件
["in", key, v0, ..., vn] 包含：feature[key] ∈ {v0, ..., vn}
["!in", key, v0, ..., vn] 不包含：feature[key] ∉ {v0, ..., vn}
复合过滤条件
["all", f0, ..., fn] 逻辑与: f0 ∧ ... ∧ fn
["any", f0, ..., fn] 逻辑或: f0 ∨ ... ∨ fn
["none", f0, ..., fn] 逻辑非: ¬f0 ∧ ... ∧ ¬fn
过滤器的 key 必须是表示要素字段的字符串，或者是表示要素类型的特殊字符 "$type"。value（和集合 v0, ..., vn）必须是 string、number、或 boolean，并且与字段值类型一致。对于 "$type"，其值必须是 "Point"、"LineString"、"Polygon"其中之一。

集合隶属过滤条件是一个紧凑和高效的方式，来测试字段值是否在值列表中。

比较和集合隶属过滤条件进行的是严格类型比较。例如，这些比较都会返回 false：0 < "1"、2 == "2"、"true" in [true, false]。

"all"、"any"、和 "none" 过滤操作符用来生成复合过滤条件。其值必须是 f0, ..., fn 过滤条件本身。

["==", "$type", "LineString"]
以下过滤条件要求要素的 class 字段的值是 "street_major"、"street_minor"、或 "street_limited"。

["in", "class", "street_major", "street_minor", "street_limited"]
以下复合过滤条件 "all" 包含三条其他过滤条件，并要求选中的要素同时满足这些条件：要素的 class 必须等于 "street_limited"，它的 admin_level 必须大于等于 3，并且几何类型不能是 Polygon。你可以将复合条件改为 "any" ，用来选择满足任意条件的要素——如类型为 Polygon，但 class 字段的值不同。

[
  "all",
  ["==", "class", "street_limited"],
  [">=", "admin_level", 3],
  ["!in", "$type", "Polygon"]
]
SDK 支持	Mapbox GL JS	iOS SDK	Android SDK
基础功能	>= 0.10.0	>= 2.0.0	>= 2.0.1
has/!has	>= 0.19.0	>= 3.3.0	>= 4.1.0