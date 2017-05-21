import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class ZmitiResultApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			keyworks:''
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {

		var mainStyle = {
			background:'url(./assets/images/bg.jpg) repeat-y ',
		}

		return (
			<div className='zmiti-result-main-ui' ref='zmiti-result-main-ui' style={{height:this.viewH}}>
				<div className='zmiti-result-C' style={mainStyle}>
					<div className="zmiti-result-main" style={{minHeight:this.viewH - 200}}>
						<div className='zmiti-result-title'>我的阅读</div>
						<div className='zmiti-search-input'>
							<img src='./assets/images/search-ico.png'/>
							<input value={this.state.keyworks} onChange={e=>{this.setState({keyworks:e.target.value})}} type='text' placeholder='手机号/微信号/姓名'/>
						</div>
						<div onTouchTap={this.beginSearch.bind(this)} className={'zmiti-search-btn '+ (this.state.search?'active':'')}>
							搜索
						</div>
						<div className='zmiti-search-result-tip' ref='zmiti-search-result-tip'>搜索结果:</div>
						{this.props.list.length<=0 &&<div className='zmiti-no-result'>暂无结果！</div>}
						{this.props.list.map((item,i)=>{
							return <div key={i} className='zmiti-result-item-C'>
								<div className='zmiti-result-type'>{item.type}</div>
								{item.children.map((child,k)=>{
									return <section className='zmiti-result-item' key={k}>
										<span className='zmiti-result-num'>{k+1}</span>
										<div>
											<img src={child.qrcodeurl||'./assets/images/qrcode.jpg'}/>
											<div className='zmiti-text-overflow'>{child.booktitle}</div>
											<div>{child.date}</div>

										</div>
									</section>
								})}
							</div>
						})}	
					</div>
				</div>
			</div>
		);
	}

	beginSearch(){
		this.setState({
			search:true
		});
		let {obserable} = this.props;
		setTimeout(()=>{

			this.setState({
				search:false
			});

			var s = this;

			$.ajax({
				url:"http://api.zmiti.com/v2/book/get_bookqrcode",
				data:{
					userinfo:s.state.keyworks
				}
			}).done((data)=>{
				if(data.getret === 0){
					obserable.trigger({
						type:'fillData',
						data:data.list
					});
					setTimeout(()=>{
						s.scroll.refresh();
						if(data.list.length > 2){
							s.scroll.scrollTo(0,-s.refs['zmiti-search-result-tip'].offsetTop - 100,600);;
						}
					},400);
				}
			},()=>{});

		},200);


	}


	componentDidMount() {
		let {IScroll,obserable } = this.props;
		this.scroll =  new IScroll(this.refs['zmiti-result-main-ui'],{
			scrollbars:true
		});

		obserable.on('refreshScroll',()=>{
			this.scroll.refresh();
		})


	}
}
export default PubCom(ZmitiResultApp);