﻿var nodemailer = require('nodemailer');
var rand = require('./createRandomString');


var transporter = nodemailer.createTransport({
	service: 'naver',
	auth: {
				//발송 이메일
		user: 'rladlsgh654@naver.com', //임시 이메일
		pass: '' //비밀번호
	}
});

var mailerOptions = { //임시 이메일로 설정
//from과 발송 이메일 동일 
	from: 'rladlsgh654@naver.com',
//아래는 받는 이메일
	to: 'kkkwon1008@naver.com',
	subject: '메일발송입니다',
	text: rand.randomStr()
};

transporter.sendMail(mailerOptions, function (error, info) {

	if (error) {
		console.log(error);
	} else {
		console.log('Email sent! :' + info.response);
	}
	transporter.close();
});