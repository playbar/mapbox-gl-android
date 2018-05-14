MapBox 结构分析
==

# JNI_OnLoad
1. 生成RunLoop静态对象。 注册 JNI接口函数,如:MapRenderer::registerNative
2. RunLoop::Impl 启动Alarm线程
3. ThreadLocal 线程
4. Scheduler::SetCurrent
5. Thread,启用alarm线程。

# Token
* MapboxApplication.java -> DEFAULT_MAPBOX_ACCESS_TOKEN
*  values/developer-config.xml
* FileSource  

#renderer_impl.cpp
render()


# 线程对象
ThreadPool
1. 在JNI_OnLoad 中创建
2. RunLoop::Imple::Impl创建Alarm线程
3. AssertManagerSource::AssertManagerSource创建AssertManagerSource线程
4. DefaultFileSource 中创建 DefaultFileSource线程
5. LocalFileSource 中创建LocalFileSource线程

* 其他的数据加载线程封装为Message保存到MailBox中<br>
* mailbox, 在每个SourceFile, 都会生成一个Mailbox对象,这个对象,在其他线程接收数据,在自己的线程队列中处理数据。
共Alarm, AssetManagerFileSource, DefaultFileSource, LocalFileSource, 这个几个线程,分别生成对应的mailbox
* Runloop在OnLoad启动，使用default方式，启动alarm线程，alarm线程有调用Runloop生成Loop<br>
* 使用循环调用，查看线程中的数据。

# 线程池
   1. ThreadPool,类定义
   2. 在MapRenderer中首次创建。->
   3. NativeMapView 第二次使用 ->SpriteLoader ::load
   
   
#样式获取 请求URL

* 样式获取 json url地址生成规则：baseUrl + /styles/v1{path}?access_token= + 【token】
* 实现函数 normalizeStyleURL

* std::string apiBaseURL = mbgl::util::API_BASE_URL = "https://api.mapbox.com"
* normalizeSourceURL

Native url
https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7/12/3371/1551.vector.pbf?access_token=pk.eyJ1IjoiaGdsODY4IiwiYSI6ImNqY3IxazAxODIzZzMzM3M1eTZnMzM3ZWYifQ.r4fHRX1Ty6qgBqbLOZ3srw

For test
https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7/12/3371/1552.vector.pbf?access_token=pk.eyJ1IjoiaGdsODY4IiwiYSI6ImNqY3IxazAxODIzZzMzM3M1eTZnMzM3ZWYifQ.r4fHRX1Ty6qgBqbLOZ3srw


# Token 
FileSource::setAccessToken

MapboxApplication.DEFAULT_MAPBOX_ACCESS_TOKEN 


#样式解析
 * FileSourceRequest中responeCallback从Style::Impl::LoadURL中获取，<br>
    -->Style::Impl::parse实现json格式解析<br>
    -->Parse::ParseLayer<br>
    -->converter<br>
    * -->BackgroundLayer<br>
          -->Layer::Impl::<br>
          -->setPaintProperties<br>
         

* Parser.cpp中，Parse::parse解析json，主要parseSource和parseLayers两个函数。
    parseLayers函数主要解析出对应的图层，分别保存在相关层类中，
* 使用rapidjson分析json。
* 分层解析， layer 派生出 BackgroundLayer，FillLayer， LineLayer， SymbolLayer等相关图层。


#点击Debug mode 调用
*  java 层 
1. MapView 调用 FileSource.getInstance
2. FileSource::getDefaultFileSource


* 在程序启动后，点击debug_mode, Java调用FileSource<br>
    FileSource 中 offline_database中加载sqlite中的数据，

## MapRender 类创建,和render()函数调用在不太线程。
## FileSource 和MapRender 创建在同一个线程。


* 渲染层 java层
1. java层使用 glSurfaceView, 
2. GLSurfaceViewMapRenderer extends MapRenderer implements GLSurfaceView.Renderer
3. MapRenderer.onDrawFrame
4. MapRenderer.nativeRenderer() 调用native层渲染
*Native 层
5. 对应MapRenderer::render()

* 由glSurfaceView创建，调用Renderer::Impl::render渲染


# 数据部分：
1. offlineDatabase 读取cache中的数据
2. OnlineFileSource， request 生成http url 地址 中用HttpFileSource实现
3. HttpRequest.java  网络下载数据，使用okhttp 3.9.1版本
4. http_file_source.cpp 中注册java类，httprequest生成
5. OnlineFileSource::activeRequest执行网络下载操作，传入回调函数
6. 在default_file_source中，判断assertFileSource和LocalFileSourcez中使用的协议，如果符合协议
则执行这两个类的相关的request操作。


#数据加载
* 例如：地址：https://api.mapbox.com/styles/v1/mapbox/streets-v10?access_token=pk.eyJ1IjoiaGdsODY4IiwiYSI6ImNqY3IxazAxODIzZzMzM3M1eTZnMzM3ZWYifQ.r4fHRX1Ty6qgBqbLOZ3srw
* OnlineFileRequest保存json url地址和下载状态等信息
* OnlineFileSource->httpFileSource.request下载json数据，目前样式数据只是在内存中，并没有保存成文件。
* http_file_source.mm文件中，HTTPFileSource::request获取从网络下载的数据，通过http请求。
* http_file_source中注册java类，使用HttpRequest 原生层，并且调用okHttp下载数据。
* 下载到的数据通过OffLine_database保存到sqlite本地数据中。
* 数据在sqlite主要保存在resources，tiles这两个表中。
* 两个表中的data字段，为压缩后的数据，其中根据字体名url分类。有样式数据，地图数据等。
* online_file_source.cpp中，使用OnlineFileSource 实现，在activateRequest函数中，调用java层HTTPRequest实现http数据下载，
    在该函数中的回调表达式中，获取值，在DefaultFileSource中的request函数中，使用offlineDatabase把数据保存到sqlite中。
* Http_file_source.onRespone检验下载数据是否成功，并且返回结果。
* OnlineFileSource::activeRequest 调用HttpRequest，执行网络数据下载操作。
* HTTPRequest 调用java层HTTPRequest.java，该类使用okHttp3.9.1 实现网络数据请求，下载。
* HTTPRequest java层，实现onRespone，接收网络数据。
* OnLineFileSource 中使用httpFileSource实现 OnLineFileSource::request 生成url 访问的地址
* Style url : "mapbox://styles/mapbox/streets-v10"
* Android 版本db 位置：/data/user/0/com.mapbox.mapboxsdk.testapp/files/mbgl-offline.db
* IOS 版本db 位置: /Users/houguoli/Library/Developer/CoreSimulator/Devices/D854C19B-58FC-4ADB-A975-D37E66DA6BCA/data/Containers/Data/Application/6A85143D-F9C6-408D-80DB-B3E8BDA7A062/Library/Application Support/com.mapbox.test.my/.mapbox/cache.db
* 地图请求URL地址 ：地图url请求地址 "https://api.map.diditaxi.com.cn/map/dds/update”
* 地图数据下载同样式相同。下载后的数据同样保存在sqlite中。

* default_file_source.cpp ->request 获取offline数据<br>
* offlineDataBase::getResource 获取sqlite中的数据<br>
* style_impl.cpp loadURL 加载JSON数据<br>
* GeometryTileWorker::redoLayout -> toRenderLayers-> attamptPlacement
* 数据在请求不到本地数据时，下载并且保存到本地sqlite数据库中


* 数据请求协议
    * const char* protocol = "file://";   本地
    * const std::string assetProtocol = "asset://"; asset
    * "mapbox://styles/mapbox/streets-v10"        网络

# 样式加载流程
* 在主线程, style 样式url 来自java层。
*  NativeMapView::setStyleUrl设置url,调用default_file_source->request,<br>
    并且设置default_file_source::impl::request回调函数。
* 样式选择, 在java 层,Style.java中定义不同的样式。
* 样式颜色支持 rgb、rbga、hsl、和hsla这四种格式。
* 样式颜色值使用hsl, http://mothereffinghsl.com/

default_file_source.cpp --> request()加载style_test.json文件。
根据协议，判断使用哪种解析方式。
AssetFileSource  
LocalFileSource 
OfflineDatabase
OnlineFileSource


* makePaintPropertySetters 生成paint属性
* makeLayoutPropertySetters 生成layout属性

* layer tuple 模板相关操作。


* AssetManagerFileSource::Impl 调用
* req.invoke(&FileSourceRequest::setResponse, response); 实际使用Style::Impl::loadURL中lambda 表达式。
* Style::Impl::parse(const std::string& json_)解析样式。
* 在上面函数中,调用Parser.parse分析,并且把把结果保存在Style::Impl对象的 layers

# FileSource 创建
1. 先创建AssetManagerFileSource 对象,并且创建 AssetManagerFileSource 线程。
2. DefaultFileSource 创建。<br>
* DefaultFileSource使用AssetManagerFileSource对象为参数,创建DefaultFileSource对象
* 在DefaultFileSource 构造函数中,创建 DefaultFileSource线程,



#数据生成部分

1. FillBucket::addFeature 增加填充绘制，包括填充的颜色，边框形状
2. GeometryTileWorker::redoLayout()
3. GeometryTileWorker::setData(), 设置 data_为地图数据
4. GeometryTile 中有Actor<GeometryTileWorke> 成员变量
5. GeometryTile::setData
6. AnnotationManager::addTile()
7. GeometryTileWorker::setLayers设置样式数据。


* 设置图层相关:
1. Renderer::render()
2. RenderVectorSource::update();
3. TilePyramid::update()
4. algorithm::updateRenderables()
5. TilePyramid::update()
6. GeometryTile::setLayers




# annotation_manager
* AnnotationManager::SourceID = "com.mapbox.annotations";
* AnnotationManager::PointLayerID = "com.mapbox.annotations.points";
* AnnotationManager::ShapeLayerID = "com.mapbox.annotations.shape.";


# 字体相关
1. glyph_manager
2. Font  place_village

* 字体在glyph中，使用8位alpha数据

1. RenderSymbolLayer::Render
2. Symbol_bucket
3. ImageManager

 * line_atlas
 * glyph_atlas

parseGlyphPBF 分析下载数据。

#回调函数

* FileSourceRequest  responeCallBack中设置多个callback函数，
    1. Style::Impl::LoadURL
    2. VectorSource::LoadDescription
    3. SpriteLoader::Load
    4. TileLoader::LoadFromNetWork, LoadFromCache
    

* VectorTile::SetData <br>
    -->GeometryFile::SetData<br>
    -->GeometryTileWorker::SetData()

# Shader生成
* 在GLRender thread中, RenderStaticData负责创建, 在RenderStaticData对象中,使用Programs 保存地图渲染所有的shader。<br>
    创建shader使用 context.createProgram
* 在RenderStaticData中,包含Context::CreateVertexBuffer 创建顶点缓冲区和索引缓冲区。


#地图渲染

* Renderer::Impl::render<br>
    -->RenderFillLayer::render<br>
    -->Program::draw<br>
    -->Context::draw<br>

1. 针对Opengl API接口专门封装一个Context类，实现opengl接口对应的封装，在Context中实现call draw调用。
2. UpdateParameters 保存opengl渲染需要的状态信息。
3. EAGLContex 在MGLMapView中定义，在函数createGLView中创建GLContext对象。
4. MGLRenderFrontend


# 关键管理类
* Map，实现由Map::Impl实现，实现地图绘制管理，其中使用MapObserver对象，提供观察者模式，<br>
    修改地图内容发生变化时，对MGLMapView中的数据进行修改。
* NativeMapView 对应 java成 NativeMapView 类
* MapRenderer 对应 java层 MapRenderer 类
* Java层 MapboxMap
* CameraPosition 对应java CameraPosition




# Transform 设置位置
* 作用:设置地图大小,位置,平移,缩放等。
* 在 NativeMapView->map中创建,Transform对象保存在map对象中,数据保存在TransformState 对象中。
1. Map::OnUpdate()
2. AndroidRendererFronted::updata()
3. MapRenderer::Update() 修改updateParamerters 参数值


### 样式中 type 有 background, fill, line, symbol, raster, circle 对应解析
* render_background_layer.cpp
* render_fill_layer.cpp
* render_line_layer.cpp
* render_symbol_layer.cpp
* render_raster_layer.cpp
* render_circle_layer.cpp

* 样式图层保存位置: 


#差值算法:

* include/mbgl/style/expression/interpolate.hpp


# 样式数据转换

mbgl::style::expression::InterpolateBase::interpolationFactor(mbgl::Range<double> const&, double)
optional<PropertyValue> typedValue
CrossFadedPropertyEvaluator
CrossFadedPropertyEvaluator<T>::calculate
convertStops

### source 
* Layer 相关属性在 layer_impl.hpp 文件中。
* group_by_layout.cpp中使用source,生成layoutKey。



# Camera相关

* TransformState::setLatLngZoom 设置缩放比例。



# Hawaii相关

* DDLocationCoordinate2DMake 坐标生成
* MapInteractor.cpp  -> Operation 



# MapBox特点
* 优点：
1. 接口和实现完全分开，例如接口类Renderer，专门有个Renderer::Impl类实现对应的功能, 在做多线程时, <br>
    直接在Renderer类中添加Impl回调接口,由Impl在对应的线程中处理数据。
2. 对类中数据，正确设置权限，通过接口实现数据访问
3. 使用json样式表，能灵活添加删除和修改样式属性。

* 缺点：
1. 程序使用较大的内存。
2. 运行效率低
3. 代码中大量使用c++14相关特性，对一些接口使用，过度封装，造成阅读调试困难，比如jni接口层，opengles 相关接口封装。
4. 使用lambda表达式, 增加堆栈调用。




