import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class ZmitiIndexApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			count:'300,000,000'
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {


		return (
			<div style={{height:this.viewH,zIndex:this.props.showIndex?100:-1}} className='zmiti-index-main-ui' ref='zmiti-index-main-ui'>

				<section className='zmiti-index-scroll'>
					<div className='zmiti-index-title'>
						<img src='./assets/images/title.png'/>
						<section className='zmiti-index-title-content'>
							<div className="zmiti-index-title-img1">
								<img src='./assets/images/title_book2.png'/>
							</div>
							<div className="zmiti-index-title-text1">
								<div className="zmiti-index-title-inner1">
									<div>“领读者计划”是于世界读书日当天，由新华社联合掌阅、中信出版集团、京东读书、磨铁图书、作家出版社、三联书店、电子工业出版社、中信书店等推出的系列读书活动，目前已超过三亿人参与。</div>
									<div>“领读者计划”旨在打造高品质、不打烊的万人“阅读大厦”，提升国民阅读素养、营造全民阅读氛围。目前已开通了涵盖六大主题、全国各地方100个阅读大厦。</div>
									<div>新华社“领读者计划”邀你加入，做全民阅读的领读者。</div>
								</div>
							</div>
							<div className="zmiti-index-title-navbar">
								<div className='zmiti-index-nav-header'>
									读书报名
								</div>
								<section className='zmiti-index-bm'>
									<div className='zmiti-read-btn'><a href="../read2">地方大厦</a></div>
									<div className='zmiti-read-btn'><a href="../read3">主题大厦</a></div>
								</section>
								{
								/*<div className='zmiti-index-nav-header'>
									进度查询
								</div>*/
								}
								{/*<section  className='zmiti-index-bm'>
																	<div  className='zmiti-read-btn' onTouchTap={this.entryResult.bind(this)}>进度查询</div>
																	<div  className='zmiti-read-btn' style={{opacity:0}}>进度查询</div>
																</section>*/}

							</div>
						</section>
						<div className='zmiti-read-count'>
							{this.state.count}
						</div>
					</div>
					<div className='zmiti-read-panel'>
						<div className='zmiti-read-item'>
							<div className='zmiti-read-item-tit'>
								<img src='./assets/images/tit_01.png'/>
							</div>
							<div className='zmiti-read-item-inner'>
								<ul>
									<li><a href='https://m.weibo.cn/1699432410/4123714443832478'><img src='./assets/images/pic_01.png'/></a>
										<div className='zmiti-read-item-name'>
										海清
										</div>
									</li>
									<li>
										<a href='https://m.weibo.cn/1699432410/4132332720387778'><img src='./assets/images/pic_59.png'/></a>
										<div className='zmiti-read-item-name'>
										唐嫣
										</div>
									</li>
									<li><a href='http://m.weibo.cn/1699432410/4136403141265472'><img src='./assets/images/pic_05.png'/></a>
										<div className='zmiti-read-item-name'>
										papi酱
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4122523571975316'><img src='./assets/images/pic_06.png'/></a>
										<div className='zmiti-read-item-name'>
										周笔畅
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4134959360705082'><img src='./assets/images/pic_11.png'/></a>
										<div className='zmiti-read-item-name'>
										李沁
										</div>
									</li>
									<li><a href='http://m.weibo.cn/1699432410/4135679539155127'><img src='./assets/images/pic_04.png'/></a>
										<div className='zmiti-read-item-name'>
										马苏
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4133466209358411'><img src='./assets/images/pic_02.png'/></a>
										<div className='zmiti-read-item-name'>
										马思纯
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4134222266417812'><img src='./assets/images/pic_07.png'/></a>
										<div className='zmiti-read-item-name'>
										王子文
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4134586642084162'><img src='./assets/images/pic_08.png'/></a>
										<div className='zmiti-read-item-name'>
										邓家佳
										</div>
									</li>
									<li><a href='#'><img src='./assets/images/pic_48.png'/></a>
										<div className='zmiti-read-item-name'>
										欧阳娜娜
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4126631670370267'><img src='./assets/images/pic_09.png'/></a>
										<div className='zmiti-read-item-name'>
										邱晨
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4099620907410495'><img src='./assets/images/pic_03.png'/></a>
										<div className='zmiti-read-item-name'>
										Angelababy
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4099377117317514'><img src='./assets/images/pic_28.png'/></a>
										<div className='zmiti-read-item-name'>
										江一燕
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1797270765/4099679199315909'><img src='./assets/images/pic_22.png'/></a>
										<div className='zmiti-read-item-name'>
										许魏洲
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4097640180160592'><img src='./assets/images/pic_20.png'/></a>
										<div className='zmiti-read-item-name'>
										吴磊
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4098970567232941'><img src='./assets/images/pic_38.png'/></a>
										<div className='zmiti-read-item-name'>
										张皓宸
										</div>
									</li>
									<li><a href='https://m.weibo.cn/5607826030/4099689705433393'><img src='./assets/images/pic_16.png'/></a>
										<div className='zmiti-read-item-name'>
										冯建宇
										</div>
									</li>
									<li><a href='https://m.weibo.cn/2893399571/4099682789727665'><img src='./assets/images/pic_37.png'/></a>
										<div className='zmiti-read-item-name'>
										苑子文
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4099632080451150'><img src='./assets/images/pic_10.png'/></a>
										<div className='zmiti-read-item-name'>
										苏芒
										</div>
									</li>
									<li><a href='https://m.weibo.cn/1699432410/4098960774372622'><img src='./assets/images/pic_42.png'/></a>
										<div className='zmiti-read-item-name'>
										麦家
										</div>
									</li>
								</ul>
								<div className='clearfix'></div>
								
								
							</div>
						</div>


						<div className='zmiti-read-item'>
							<div className='zmiti-read-item-tit'>
								<img src='./assets/images/tit_03.png'/>
							</div>
							<div className='zmiti-read-item-inner'>
								<ul>
									<li><a href='http://mp.weixin.qq.com/s/VA2VN18J04_L6GghFfcRNQ'><img src='./assets/images/pic_01.png'/></a>
										<div className='zmiti-read-item-name'>
										海清
										</div>
									</li>
									
									<li><a href='http://mp.weixin.qq.com/s/vnntdlT9PAuqu26aY92ThQ'><img src='./assets/images/pic_05.png'/></a>
										<div className='zmiti-read-item-name'>
										papi酱
										</div>
									</li>
									
									<li><a href='http://mp.weixin.qq.com/s/nmLllnckIkNxKG99zkJP-A'><img src='./assets/images/pic_11.png'/></a>
										<div className='zmiti-read-item-name'>
										李沁
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/JSgqRxcTtoHDXXwm6tfYcQ'><img src='./assets/images/pic_04.png'/></a>
										<div className='zmiti-read-item-name'>
										马苏
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/01PdJBW0m2s3HanXn9UYdQ'><img src='./assets/images/pic_02.png'/></a>
										<div className='zmiti-read-item-name'>
										马思纯
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/cL5Zu_wzEHckKW2lVRwH2A'><img src='./assets/images/pic_07.png'/></a>
										<div className='zmiti-read-item-name'>
										王子文
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/LVpVnwP4ksrdIDWwbfTJ1Q'><img src='./assets/images/pic_49.png'/></a>
										<div className='zmiti-read-item-name'>
										八月长安
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/Y52suWdpmYOYdskqgr_3gg'><img src='./assets/images/pic_08.png'/></a>
										<div className='zmiti-read-item-name'>
										邓家佳
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/2hznlZZsriZvWp8I2oSYXg'><img src='./assets/images/pic_50.png'/></a>
										<div className='zmiti-read-item-name'>
										陈铎
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/tzSKNRdyTgplXr7Hpk7laA'><img src='./assets/images/pic_51.png'/></a>
										<div className='zmiti-read-item-name'>
										毕淑敏
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/a6ZaUwKpy5a1QQTRKhi85w'><img src='./assets/images/pic_52.png'/></a>
										<div className='zmiti-read-item-name'>
										月关
										</div>
									</li>
									<li><a href='https://mp.weixin.qq.com/s/5mYchMa1anFnhe_qyei58Q'><img src='./assets/images/pic_60.png'/></a>
										<div className='zmiti-read-item-name'>
										李梦
										</div>
									</li>
									<li><a href='#'><img src='./assets/images/pic_53.png'/></a>
										<div className='zmiti-read-item-name'>
										解语
										</div>
									</li>
									<li><a href='#'><img src='./assets/images/pic_54.png'/></a>
										<div className='zmiti-read-item-name'>
										唐欣恬
										</div>
									</li>
									<li><a href='#'><img src='./assets/images/pic_55.png'/></a>
										<div className='zmiti-read-item-name'>
										冰河
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/mVN_u54yqnphzNt5Pv1Psw'><img src='./assets/images/pic_31.png'/></a>
										<div className='zmiti-read-item-name'>
										王珞丹
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/-lcuHUITYVLIqtRqzPlVcA'><img src='./assets/images/pic_36.png'/></a>
										<div className='zmiti-read-item-name'>
										俞敏洪
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/5e6oc9uUWA5XsXF8b0nElg'><img src='./assets/images/pic_25.png'/></a>
										<div className='zmiti-read-item-name'>
										董子健
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/998DFlV5EKuDmHOb7bIeDA'><img src='./assets/images/pic_28.png'/></a>
										<div className='zmiti-read-item-name'>
										江一燕
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/ew0yH8WX9NyC9iGt5PYgUA'><img src='./assets/images/pic_34.png'/></a>
										<div className='zmiti-read-item-name'>
										殷桃
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/yI-GQQuS49g0ebMwR1Zhhw'><img src='./assets/images/pic_29.png'/></a>
										<div className='zmiti-read-item-name'>
										李光洁
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/9Haj_8Lt7TIXRbz6Uzq0Xw'><img src='./assets/images/pic_26.png'/></a>
										<div className='zmiti-read-item-name'>
										胡静
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/FSON-IQmAd3C21v32pkl7Q'><img src='./assets/images/pic_35.png'/></a>
										<div className='zmiti-read-item-name'>
										于丹
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/DK07fbzKCGbQMELaXKmrbA'><img src='./assets/images/pic_39.png'/></a>
										<div className='zmiti-read-item-name'>
										张凯丽
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/9h5kQF2PvWRdYuEbm-bJZQ'><img src='./assets/images/pic_30.png'/></a>
										<div className='zmiti-read-item-name'>
										卢思浩
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/jG66F6bA7orhsbi7efdFxQ'><img src='./assets/images/pic_24.png'/></a>
										<div className='zmiti-read-item-name'>
										陈思思
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/YU_TkoOXqcBEUVXNirPSdg'><img src='./assets/images/pic_12.png'/></a>
										<div className='zmiti-read-item-name'>
										苏芩
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/XZY3Z7IGFpw2B_-iiG9Pmg'><img src='./assets/images/pic_32.png'/></a>
										<div className='zmiti-read-item-name'>
										吴楠
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/jt776WRZJjMEuRjdEMp84A'><img src='./assets/images/pic_40.png'/></a>
										<div className='zmiti-read-item-name'>
										周玄毅
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/2AGNhP8oTDhgkrLV_PvaUQ'><img src='./assets/images/pic_33.png'/></a>
										<div className='zmiti-read-item-name'>
										小鹿姐姐
										</div>
									</li>
									<li><a href='http://mp.weixin.qq.com/s/oGtfy3fdJAQDnDFDUMxuKg'><img src='./assets/images/pic_27.png'/></a>
										<div className='zmiti-read-item-name'>
										胡玮炜
										</div>
									</li>
								</ul>
								<div className='clearfix'></div>
								
								
							</div>
						</div>
						
						<div className='zmiti-read-item'>
							<div className='zmiti-read-item-tit'>
								<img src='./assets/images/tit_05.png'/>
							</div>
							<div className='zmiti-read-item-inner'>
								<ul>
									<li><img src='./assets/images/pic_57.png'/>
										<div className='zmiti-read-item-name'>
										汤亚舟
										</div>
									</li>
									<li><img src='./assets/images/pic_58.png'/>
										<div className='zmiti-read-item-name'>
										李月亮
										</div>
									</li>
									<li><img src='./assets/images/pic_43.png'/>
										<div className='zmiti-read-item-name'>
										吴冰
										</div>
									</li>
									<li><img src='./assets/images/pic_44.png'/>
										<div className='zmiti-read-item-name'>
										辛德勇
										</div>
									</li>
									<li><img src='./assets/images/pic_45.png'/>
										<div className='zmiti-read-item-name'>
										阎崇年
										</div>
									</li>
									<li><img src='./assets/images/pic_46.png'/>
										<div className='zmiti-read-item-name'>
										杨渡
										</div>
									</li>
									<li><img src='./assets/images/pic_47.png'/>
										<div className='zmiti-read-item-name'>
										祝勇
										</div>
									</li>
								</ul>
								<div className='clearfix'></div>
							</div>
						</div>
						<div className='zmiti-read-item'>
							<div className='zmiti-read-item-tit'>
								<img src='./assets/images/tit_06.png'/>
							</div>
							<div className='zmiti-read-item-inner'>
								<div className='zmiti-read-item-pics'>
									<img src='./assets/images/panel_06.png'/>
								</div>
							</div>
						</div>
						<div className='zmiti-read-bottom'>
							<img src='./assets/images/panel_07.jpg'/>
						</div>
					</div>
					
				</section>
				<div className='zmiti-read-arrow'><img src='./assets/images/info.png'/></div>
			</div>
		);
	}

	entryResult(){
		let {obserable } = this.props;
		obserable.trigger({
			type:'entryResult'
		});
	}

	loading(arr, fn, fnEnd){
		var arr = arr  || [];


        var len = arr.length;

        if(len <= 0){
        	fnEnd();
        	return;
        }
        var count = 0;
        var i = 0;
        
        function loadimg() {
            if (i === len) {
                return;
            }
            var img = new Image();
            img.onload = img.onerror = function(){
                count++;
                if (i < len - 1) {
                    i++;
                    loadimg();
                    fn && fn(i / (len - 1), img.src);
                } else {
                    fnEnd && fnEnd(img.src);
                }
            };
            img.src = arr[i];
        }
       loadimg();
    }


	componentDidMount() {
		let {IScroll } = this.props;
		this.scroll = new IScroll(this.refs['zmiti-index-main-ui'],{
			scrollbars:true,
			preventDefault:false
		});

		setTimeout(()=>{
			this.scroll.refresh();
		},400)
		var s = this;
		/*$.ajax({
			url:'http://api.zmiti.com/v2/book/get_usercount/',
			data:{},

		}).done((data)=>{
			if(data.getret === 0){
				s.setState({
					count:'200,000,000'
				})
			}
		})*/
	}
}
export default PubCom(ZmitiIndexApp);