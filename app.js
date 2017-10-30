global.__basename=__dirname;

const express=require('express');
const ejs=require('ejs');//��������

const app=express();
const routes=require(__basename+'/routes/routes.js');

//���þ�̬��Դ·��

app.use(express.static(__basename + '/web/public'));
app.use(express.static(__basename + '/web/views'));
app.use(express.static(__basename + '/web'));
//������ͼ����
app.set('views', __basename + '/web/views');
app.set('view engine', 'html');
app.engine('.html', ejs.__express);
//��������·��
routes(app);


//404����
app.use((req,res)=>{
	res.status(404);
	res.send('ҳ�治����');
});
//500����
app.use((err,req,res)=>{
	res.status(500);
	res.send('����������');
});
app.listen(9898,()=>{
	console.log('������������127.0.0.1:9898');
});