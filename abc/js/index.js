import React from 'react';
import ReactDOM from 'react-dom';

import '.././css/index.css';

require('./cc1');
require('./cc2');

import {Header,HeaderContent,Footer} from './modules/AppIndex.jsx';
//import RootIndex from './modules/Index.jsx';

const AppTemplate =(
					<div> 
						<Header />
						<HeaderContent />
						
						<div>Hi Testing </div>
						
						<Footer />
					</div>
				);

ReactDOM.render(AppTemplate, document.getElementById('root'));