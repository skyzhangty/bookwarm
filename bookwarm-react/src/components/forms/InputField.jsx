import React, { Component } from 'react';

function InputField(props) {

	const {input,label,type,meta, id} = props;
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input {...input} placeholder={label} type={type} />
			{meta.touched &&((meta.error &&<span>{meta.error}</span>) ||(meta.warning &&<span>{meta.warning}</span>))}
		</div>);
	
}

export default InputField;
