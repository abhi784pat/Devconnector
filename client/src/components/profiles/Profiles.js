import React,{Fragment,useEffect}from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfileItem'
import {getProfiles} from '../../actions/profile'


const Profiles=({getProfiles,profile:{profiles,loading}})=>{
    useEffect(()=>{
        getProfiles()
    },[getProfiles])
    return (
        <Fragment>
      {loading?<Spinner/>:<Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
              <i className="fab fa-connectdevelop">
                  Browse and Connect with Developers
              </i>
              <div className="profiles">
                  {profiles.length>0?(profiles.map(profile=>(
                      <ProfileItem key={profile._id} profile={profile}/>

                  ))):<h4>No Profiles found...</h4>}
              </div>
          </p>
          </Fragment>}
        </Fragment>
    )
}

Profiles.propTypes={
    getProfiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired

}
// returning the object {foo: "a"} To return an object literal expression requires parentheses around expression:
const mapStateToProps=state=>({
    profile:state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles)
