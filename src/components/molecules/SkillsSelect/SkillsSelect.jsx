import React,{Component} from "react";
import Select from "react-select";
import "./SkillsSelect.scss";
import User from "../../../models/User";

class SkillsSelect extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {skillsOptions: null, selectedSkills: []}
        this.mentorHandler = new User(User.UserTypeMentor, this.props.firebase.db, this.props.firebase.storage);
    
        this.mentorHandler.getSkillsOptions().then((options) => {
            this.setState({skillsOptions: options});
        })
    }
    selectstyles = {
        control: (base, state) => ({
          ...base,
          padding:"1% 0%",
          borderRadius:"10px",
          border: "1px solid #ccc",
          backgroundColor: "#F8F8F8",
        }),
        menu: base => ({
          ...base,
          textAlign: "left",
        }),
    }

    render(){
            return this.state.skillsOptions !== null ? 
            <div className="select-container-style center">
                <div className = "select-style">
                    <Select 
                        id="Skills"
                        className="select-style center"
                        placeholder="Select Skills" 
                        isMulti
                        onChange={this.props.handleSkillSelectChange}
                        styles={this.selectstyles}
                        options={this.state.skillsOptions} 
                    /> 
                </div>
            </div>:
            <div>Loading...</div>
    }

}

export default SkillsSelect;