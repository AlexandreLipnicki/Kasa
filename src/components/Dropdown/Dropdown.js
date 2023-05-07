import React, { useState, useRef } from 'react';

import "./style.css"

function Collapse({ title, content }) {
	const [setActive, setActiveState] = useState('')
	const [setHeight, setHeightState] = useState('0px')
	const [setRotate, setRotateState] = useState('collapse-icon')
	const contentCollapse = useRef(null)

	const toggleCollapse = () => {
		setActiveState(setActive === '' ? 'active' : '')
		setHeightState(
			setActive === 'active'
				? '0px'
				: `${contentCollapse.current.scrollHeight}px`
		)
		setRotateState(
			setActive === 'active' ? 'collapse-icon' : 'collapse-icon rotate'
		)
	}

	const contentArray = []
	if (!Array.isArray(content)) {
		contentArray.push(content)
	} else {
		for (let i = 0; i < 9; i++) {
			contentArray.push(content[i])
		}
	}

	return (
		<div className="dropdown">
			<button
				className={`dropdown_btn ${setActive}`}
				onClick={toggleCollapse}
			>
				<span>{title}</span>
				<img src="#" className={`${setRotate}`} alt="" />
			</button>
			<div
				ref={contentCollapse}
				style={{ maxHeight: `${setHeight}` }}
				className="dropdown-content"
			>
				<div className="dropdown-txt">
					{contentArray.map((content, index) => (
						<div key={`${content}-${index}`}>{content}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Collapse