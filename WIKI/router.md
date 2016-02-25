#### RESTFul 路由设置
上一小节说到简便的用Expressjs模块直接生成基本的框架，在router里面我们可以看到router.get("/",function(req,res,next))，这句基本上囊括了接下来所有我们要做的事情了。
首先，作为一个简单的博客管理小工具，用户组功能简单分为两个，一个就是管理员身份，另一个是用户，而内容上就只有文章这个部分，那么当在脑海中将这个想法付诸于JSON形式的非关系型数据库时，我天真的以单独的内容作为源头，用户的身份以作者的名字形式存在于这个collection中。那么对于用户的数据存储，就基本上只有登陆类，就是密码云云，基本的信息类。既然划分为了用户组形式，和以内容为目的的单一文章格式，我的router设计也如此。
对于用户组类，最后访问用户的collection，单独列出一个router js，app.use("/users/..",function(req,res,next))，至于"users"后面是什么下面再详细说。
基于对文章的管理，原则上总是访问以文章自增"_id"为识别的collection，也单独列出一个router.js，app.use("/blogs/...",function(req,res,next))，同样，对于博客的操作，之后详细再说。用户组的实现必然离不开页首的登陆注册功能，所以，对于开篇那个index.js，我先加上这几个功能:
```

router.get("/",function(req,res,next))		//首页显示所有文章
router.get("signup",function(req,res,next))	//注册模块
router.get（"login",function(req,res,next)）	//登陆模块
.
.
.
```
初步设定就完成了、
