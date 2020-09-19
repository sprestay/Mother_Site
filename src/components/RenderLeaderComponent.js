import React from 'react';
import { Media } from 'reactstrap';

const RenderLeader = (props) => {
    if (props.leader != null)  {
    return (
        <div style={{margin: "2% 0 0 0"}} className='row'>
        <Media tag='li'>
            <Media left top className='col-2'>
                <Media object src={props.leader.image} alt={props.leader.name}/>
            </Media>
            <Media body className='col-10'>
                <Media heading className='mt-0 mb-1'>{props.leader.name}</Media>
                <Media style={{ margin: "2% 0 1% 0"}}>{props.leader.designation}</Media>
                {props.leader.description}
            </Media>
        </Media>
    </div>
    );
    }
    else {
        return (<div></div>)
    }
}
export default RenderLeader;