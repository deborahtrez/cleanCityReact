import React, { Component } from 'react';
import axios from 'axios'

class ServiceRequest extends Component {
    constructor(props){
        super(props)

        this.state ={
            serviceCategory: '',
            service: '',
            incidentType: ''
        }
    }

    componentDidMount(){
        axios.get(' ' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    serviceCategory: response.data.serviceCategory,
                    service: response.data.service,
                    incidentType: response.data.incidentType
                })
            })
            .catch(error => console.log(error))
    }

    onChangeServiceCategory=(event)=>{
        this.setState({
            serviceCategory: event.target.value
        })
    }

    onChangeService=(event)=>{
        this.setState({
            service: event.target.value
        })
    }

    onChangeIncidentType=(event)=>{
        this.setState({
            incidentType: event.target.value
        })
    }

    render() {
        return (
            <div>
                 <section className="space">
                 <form action="https://formspree.io/f/xaylqnnj" method="POST">
                     
                    <div className="form-group">
                        <label htmlFor="inputCollege">Service Category</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01" name="college_selected" >
                                <option defaultValue>Choose...</option>
                                <option value= "Water Management"  name="water_management"> Water Management </option>
                                <option value= "Public Health" name="public_health" > Public Health </option>
                                <option value= "Waste Management" name="waste_management" > Waste Management </option>

                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputCollege">Service</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01" name="college_selected" >
                                <option defaultValue>Choose...</option>
                                <option value= "Childhood Illness"  name="childhood_illness"> Childhood Illness </option>
                                <option value= "Drilling Boreholes" name="drilling_boreholes" > Drilling Boreholes </option>
                                <option value= "Water Supply and Installation" name="supply_and_installation" > Water Supply and Installation</option>

                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputCollege">Service Category</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01" name="college_selected" >
                                <option defaultValue>Choose...</option>
                                <option value= "Individual"  name="individual"> Individual </option>
                                <option value= "Public" name="public" > Public </option>

                            </select>
                        </div>
                    </div>


                    <div className="form-group">
                        <ul>
                            <li>
                                <div className="form-row">
                                    <textarea type="text" className="form-control" id="inputQualifications" name="other_qualifications">
                                    
                                    </textarea>
                                </div>
                            </li>
                        </ul>
                        {/* <label for="inputAddress2">Nationality</label>
                        <input type="text" className="form-control" id="inputAddress2" name="nationality" /> */}
                    </div>


                    <button type="submit" className="btn btn-primary">Submit Application</button>
                    </form>
                 </section>
            </div>
        );
    }
}

export default ServiceRequest;