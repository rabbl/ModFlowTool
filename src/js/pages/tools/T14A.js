import React from 'react'
import {connect} from 'react-redux';

import Background from '../../components/tools/Background'
import Chart from '../../components/tools/ChartT14A'
import Parameters from '../../components/tools/Parameters'
import {changeParameter, calculate, reset} from '../../actions/T14A'
import Header from '../../components/tools/Header';

@connect((store) => {
    return {tool: store.T14A}
})
export default class T14A extends React.Component {

    handleChange = (e) => {

        if (e.target.name.startsWith('parameter')) {
            const param = e
                .target
                .name
                .split('_');

            let parameter = {};
            parameter.id = param[1];
            parameter[param[2]] = e.target.value;

            this
                .props
                .dispatch(changeParameter(parameter))
        }
    };

    handleReset = (e) => {
        this
            .props
            .dispatch(reset());
    };

    componentWillMount() {
        this
            .props
            .dispatch(calculate())
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="page-width">
                    <Header title={'T14_a. River drawdown // Fully penetrating stream with no streambed resistance'}/>
                    <div className="grid-container">
                        <section className="tile col col-abs-2 stacked">
                            <Background image={this.props.tool.background.image}/>
                        </section>

                        <section className="tile col col-abs-3 stretch">
                            <Chart data={this.props.tool.chart.data} info={this.props.tool.info} options={this.props.tool.chart.options}/>
                        </section>
                    </div>

                    <div className="grid-container">
                        <section className="tile col col-abs-2"></section>

                        <section className="tile col col-abs-3 stretch">
                            <Parameters data={this.props.tool.parameters} handleChange={this.handleChange} handleReset={this.handleReset}/>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
