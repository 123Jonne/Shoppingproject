global.__basename=__dirname;

const express=require('express');
const ejs=require('ejs');//导入引擎

const app=express();
const routes=require(__basename+'/routes/routes.js');

//设置静态资源路径

app.use(express.static(__basename + '/web/public'));
app.use(express.static(__basename + '/web/views'));
app.use(express.static(__basename + '/web'));
//设置视图引擎
app.set('views', __basename + '/web/views');
app.set('view engine', 'html');
app.engine('.html', ejs.__express);
//加载所有路由
routes(app);


//404处理
app.use((req,res)=>{
	res.status(404);
	res.send('页面不存在');
});
//500处理
app.use((err,req,res)=>{
	res.status(500);
	res.send('服务器错误');
});
app.listen(9898,()=>{
	console.log('服务器运行于127.0.0.1:9898');
});