import React, { Component } from 'react';

export default class InputField extends Component {
	render() {
		const {input,label,type,meta, id} = this.props;
		return (
			<div>
				<label htmlFor={id}>{label}</label>
				<input {...input} placeholder={label} type={type} />
				{meta.touched &&((meta.error &&<span>{meta.error}</span>) ||(meta.warning &&<span>{meta.warning}</span>))}
			</div>
		);
	}
}
