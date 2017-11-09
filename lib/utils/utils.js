const crypto =require('crypto');

const SMSClient=require('@alicloud/sms-sdk');


const accessKeyId='LTAIUD13en3y3UtU';
const secretAccessKey ='gCBWfbKPEHvsZdZdy87LBxmUvPyYEv';

let smsClient = new SMSClient({accessKeyId, secretAccessKey});




class Utils{
	constructor(){

	}
	addCrypto (o,field){
		let md5=crypto.createHash('md5');
		md5.update(o[field]);
		o[field]=md5.digest('hex');
	}
	
	sendSMS(smsOptions,successFn,errorFn){
 return smsClient.sendSMS(smsOptions)
   .then(successFn,errorFn);

	}
}
module.exports = new Utils();