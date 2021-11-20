import React from 'react';

import View from '../../components/View';

import '../../index.css';

const ClientView = () => {
  return (
    <div className='container' style={{ marginTop: '50px' }}>
      <h1>Resume Revamp</h1>
      <h5>description description descriptiondescription</h5>
      <br></br>
      <View speaker='hi' qna='https://app.sli.do/event/1yidejwe'/>
    </div>
  );
}

export default ClientView;
