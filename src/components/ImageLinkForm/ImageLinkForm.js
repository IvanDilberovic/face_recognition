import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p className='f3'>
				{'Input any kind of a picture URL and the application will try to detect a face.'}
			</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-3">
					<input className='f4 pa2 w-70 center' type='text' onChange={ onInputChange }/>
					<button className='w-30 grow f4 link ph3 pv2 dib black' onClick={ onButtonSubmit }>DETECT</button>
				</div>				
			</div>
		</div>	
		);
}

export default ImageLinkForm;