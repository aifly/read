import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class ZmitiResultApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {

		var mainStyle = {
			background:'url(./assets/images/bg.jpg) repeat-y ',
			height:'100%'
		}

		console.log(this.props.list)
		return (
			<div className='zmiti-result-main-ui' style={{height:this.viewH}}>
				<div className='zmiti-result-C' style={mainStyle}>
					<div className="zmiti-result-main">
						<div className='zmiti-result-title'>我的阅读</div>
						{this.props.list.map((item,i)=>{
							return <div key={i} className='zmiti-result-item-C'>
								<div className='zmiti-result-type'>{item.type}</div>
								{item.children.map((child,k)=>{
									return <section className='zmiti-result-item' key={k}>
										<span className='zmiti-result-num'>{k+1}</span>
										<div>
											<img src={child.qrcodeurl}/>
											<div>{child.booktitle}</div>
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


	componentDidMount() {

	}
}
export default PubCom(ZmitiResultApp);