import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class ZmitiAreaListApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			display:'none',
			dialogname:'',
			dialogcode:0,
			dialogimgurl:'',
			dialogtext:'',
			dataCode:[{
				key:1,
				name:'黑龙江',
				code:83042,
				imgurl:'./assets/images/code1.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:2,
				name:'吉林',
				code:3131,
				imgurl:'./assets/images/code2.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:3,
				name:'辽宁',
				code:82012,
				imgurl:'./assets/images/code3.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:4,
				name:'河北',
				code:82072,
				imgurl:'./assets/images/code4.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:5,
				name:'河南',
				code:86042,
				imgurl:'./assets/images/code5.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:6,
				name:'山东',
				code:84022,
				imgurl:'./assets/images/code6.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:7,
				name:'江苏',
				code:83052,
				imgurl:'./assets/images/code7.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:8,
				name:'山西',
				code:82202,
				imgurl:'./assets/images/code8.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:9,
				name:'陕西',
				code:86022,
				imgurl:'./assets/images/code9.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:10,
				name:'甘肃',
				code:86102,
				imgurl:'./assets/images/code10.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:11,
				name:'四川',
				code:86032,
				imgurl:'./assets/images/code11.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:12,
				name:'青海',
				code:82032,
				imgurl:'./assets/images/code12.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:13,
				name:'湖南',
				code:86112,
				imgurl:'./assets/images/code13.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:14,
				name:'湖北',
				code:81082,
				imgurl:'./assets/images/code14.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:15,
				name:'江西',
				code:83202,
				imgurl:'./assets/images/code15.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:16,
				name:'安徽',
				code:83142,
				imgurl:'./assets/images/code16.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:17,
				name:'浙江',
				code:83072,
				imgurl:'./assets/images/code17.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:18,
				name:'福建',
				code:83192,
				imgurl:'./assets/images/code18.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:19,
				name:'广东',
				code:86142,
				imgurl:'./assets/images/code19.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:20,
				name:'台湾省',
				code:85082,
				imgurl:'./assets/images/code20.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:21,
				name:'贵州',
				code:86062,
				imgurl:'./assets/images/code21.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:22,
				name:'云南',
				code:86082,
				imgurl:'./assets/images/code22.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:23,
				name:'海南',
				code:80032,
				imgurl:'./assets/images/code23.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:24,
				name:'内蒙古',
				code:81212,
				imgurl:'./assets/images/code24.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:25,
				name:'新疆维吾尔族自治区',
				code:1421,
				imgurl:'./assets/images/code25.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:26,
				name:'宁夏回族自治区',
				code:84062,
				imgurl:'./assets/images/code26.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:27,
				name:'西藏',
				code:4323,
				imgurl:'./assets/images/code27.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:28,
				name:'广西壮族自治区',
				code:81182,
				imgurl:'./assets/images/code28.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:29,
				name:'北京',
				code:81011,
				imgurl:'./assets/images/code29.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:30,
				name:'天津',
				code:81062,
				imgurl:'./assets/images/code30.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:31,
				name:'上海',
				code:81072,
				imgurl:'./assets/images/code31.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:32,
				name:'重庆',
				code:81142,
				imgurl:'./assets/images/code32.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:33,
				name:'香港',
				code:85062,
				imgurl:'./assets/images/code33.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			},{
				key:34,
				name:'澳门',
				code:84978,
				imgurl:'./assets/images/code34.png',
				text:'想要了解更多活动详情请打开微信扫描二维码，感谢您的参与！',
			}],
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {


		return (
			<div className='zmiti-area-main-ui'>
				<div className="zmiti-area-top01"></div>
				<div className="zmiti-area-prolist">
					<div className="zmiti-area-province">
						<ul>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,1)}>黑龙江</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,2)}>吉林</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,3)}>辽宁</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,4)}>河北</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,5)}>河南</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,6)}>山东</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,7)}>江苏</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,8)}>山西</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,9)}>陕西</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,10)}>甘肃</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,11)}>四川</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,12)}>青海</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,13)}>湖南</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,14)}>湖北</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,15)}>江西</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,16)}>安徽</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,17)}>浙江</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,18)}>福建</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,19)}>广东</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,20)}>台湾省</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,21)}>贵州</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,22)}>云南</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,23)}>海南</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,24)}>内蒙古</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,25)}>新疆维吾尔族自治区</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,26)}>宁夏回族自治区</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,27)}>西藏</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,28)}>广西壮族自治区</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,29)}>北京</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,30)}>天津</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,31)}>上海</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,32)}>重庆</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,33)}>香港</a></li>
							<li><a href="javascript:void(0)" onClick={this.provinceDialog.bind(this,34)}>澳门</a></li>
						</ul>
					</div>
				</div>				
				<div className="zmiti-area-dialog" style={{display:this.state.display}}>
					<div className="zmiti-area-close"><span onClick={this.dialogClose.bind(this)}>×</span></div>
					<div className="zmiti-area-dialog-inner">
						<div className="zmiti-area-dialog-tit">地区：{this.state.dialogname}</div>
						<img className="zmiti-area-dialog-imgs" src={this.state.dialogimgurl}/>
						<div className="zmiti-area-dialog-code">验证码：{this.state.dialogcode}</div>
						<div className="zmiti-area-dialog-tips">提示：</div>
						<div className="zmiti-area-dialog-text">{this.state.dialogtext}</div>
					</div>
					
				</div>
			</div>

		);
	}


	componentDidMount() {
		
	}
	provinceDialog(value){
		var s = this;
		var name,text,imgurl,code;
		//console.log(value);
		var dataCode=this.state.dataCode;
		$.each(dataCode,function(i,item){
			if(item.key===value){				
				name=item.name;
				imgurl=item.imgurl;
				text=item.text;
				code=item.code;
			}
		})
		this.setState({
			dialogname:name,
			dialogtext:text,
			dialogimgurl:imgurl,
			dialogcode:code,
			display:'block',
		})
		s.forceUpdate();
	}
	dialogClose(){
		var s=this;
		s.setState({
			display:'none',
			dialogname:'',
			dialogcode:0,
			dialogimgurl:'',
			dialogtext:'',
		})
	}

}
export default PubCom(ZmitiAreaListApp);