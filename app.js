global.__basename=__dirname;

global.config=require(__basename+'/config/config.js');

const express=require('express');

const ejs=require('ejs');

const favicon=require('serve-favicon');

const bodyParser=require('body-parser');

const app=express();

const routes=require(__basename+'/routes/routes.js');

let port=process.env.PORT||config.server.port;

app.use(favicon(__basename+'/web/public/images/icons/img_79.ico'));
app.use(express.static(__basename+'/web/public'));
app.use(express.static(__basename+'/web/views'));
app.use(express.static(__basename+'/web'));

//设置视图引擎
app.set('views',__basename+'/web/views');
app.set('view engine','html');
app.engine('.html',ejs.__express);
app.use(bodyParser.json());




routes(app);












//404处理
app.use((req,res)=>{
	res.status(404);
	res.send('页面不存在');
});
//500处理
app.use((req,res)=>{
	res.status(500);
	res.send('服务器错误');
});
app.listen(config.port,()=>{
	console.log(`服务器运行于${config.server.host}:${port}端口`);
})