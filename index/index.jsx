import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class ZmitiIndexApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {


		return (
			<div className='zmiti-index-main-ui'>
				<div onTouchStart={this.entryResult.bind(this)} className="zmiti-goto-search">
					去搜索
				</div>
			</div>
		);
	}

	entryResult(){
		let {obserable } = this.props;
		obserable.trigger({
			type:'entryResult'
		});
	}


	componentDidMount() {

	}
}
export default PubCom(ZmitiIndexApp);