import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import { App } from './components/App'
import { Router, Route, hashHistory } from 'react-router'
import { Whoops404 } from  './components/Whoops404'

// import { SkiDayList } from './components/SkiDayList'
// import { SkiDayCount } from './components/SkiDayCount'

//main rendering file

window.React = React

render(
	<Router history= {hashHistory}> 
		<Route path="/" component={App} />
		<Route path="list-days" component = {App} >
			<Route path = ":filter" component = {App} />
		</Route>
		<Route path="add-day" component = {App} />
		<Route path="*" component={Whoops404} />
	</Router>,	
	document.getElementById('react-container')
)

// render(
// 	<SkiDayCount total = {50} />, 
// 	document.getElementById('react-container')
// )



// SkiDayList days= {
// 	[
// 		{
// 			resort: "Squaw Valley",
// 			date: new Date("1/2/2016"),
// 			powder: true,
// 			backcountry: false
// 		},
// 		{
// 			resort: "Kirkwood",
// 			date: new Date("3/28/2016"),
// 			powder: false,
// 			backcountry: false
// 		},
// 		{
// 			resort: "Mt. Tallac",
// 			date: new Date("4/2/2016"),
// 			powder: false,
// 			backcountry: true
// 		}
// 	]
// }