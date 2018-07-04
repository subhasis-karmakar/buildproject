
const path 			= require('path');
const src_path 		= path.resolve('src/');
const dist_path 	= path.resolve('dist/');

// Required for HTML files
const html_plugin 		= require('html-webpack-plugin');

// Required for combine common files into one files
const commons_chunk = require('webpack/lib/optimize/CommonsChunkPlugin');

// Required for CSS files
const extract_text_plugin = require('extract-text-webpack-plugin');


module.exports  = {
	entry:{
		index: path.resolve(src_path, 'js/index.js')
		//, about: path.resolve(src_path, 'js/about.js')
	},
	output: {
			path: path.resolve(dist_path),
			filename: 'js/[name].js',
			publicPath:''
	},	
	module:{
		rules:[
			{
				test:	/\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/				 
			},			
			{
				test: /\.(css|scss)$/,
				use: extract_text_plugin.extract(
						{ 
							fallback: 'style-loader', 
							use: ['css-loader', 'sass-loader'],
							publicPath:"../"							
						}),				
			},
			{
				test:/\.(jpe?g|png|gif|svg)$/,
				use:"url-loader?limit=300&name=images/[name].[ext]"
			},
			{
				test:/\.(eot|ttf|otf|woff|woff2)$/,
				use:"file-loader?name=fonts/[name].[ext]"
			}/*,	
			{
				test:/\.html$/,
				use:"html-loader?interpolate=require!"
			}*/
		]
	},
	plugins:[
			
			new commons_chunk('common'),
			
			new extract_text_plugin({
				filename: 'css/[name].css'			
			}),
			
			new html_plugin({
				filename:path.resolve(dist_path,'index.html'),
				template:path.resolve(src_path, 'index.html'),
				inject:true,
				chunks:['common', 'index'],
				favicon:"",
				title:"Hi",
				optimize:{
					collapseWhitespace:false
				}
			})
			/*
			new html_plugin({
				filename:path.resolve(dist_path,'about.html'),
				template:path.resolve(src_path, 'about.html'),
				inject:true,
				chunks:["commonforall", "about"],
				favicon:"",
				title:"Hi there",
				optimize:{
					collapseWhitespace:false
				}
			})
			*/			
	],
	devServer:{
		port:			3000,
		contentBase: 	path.resolve(dist_path),
		open: 			true,    					 // Open the window while in run mode
		inline: 		true,  						// Automatic update the code into the browser
		https:			true,
		compress: 		true
	}		
}	
