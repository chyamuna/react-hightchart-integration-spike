import React from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts  from 'react-highcharts';

export default class App extends React.Component {
    constructor() {
        super(); 
   		this.config = {
  			xAxis: {
    			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  			},
  			series: [{
  				name: 'Sales',
    			data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  			}, {
  				name: 'Margin',
    			data: [71.4, 129.2, 135.0, 176.0, 150.6, 148.5, 317.4, 256, 2.1, 0.6, 10.12,200.4]
  			}]
		};
    }

    render() {
        return (
        	<div>
            	<ReactHighcharts config={this.config} />
        	</div>
      	);
    }
}
