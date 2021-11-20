import React from 'react';

import View from '../../components/View';

import '../../index.css';

const ClientView = () => {
  const data = [
    "https://raw.githubusercontent.com/tbuwadi/HackWestern8/eng-clientview/wits-bg/img1.b600c14a.png?token=AHYMZK45RYMGICEG5PFLMQLBUJW64",
    "https://raw.githubusercontent.com/tbuwadi/HackWestern8/eng-clientview/wits-bg/img2.9f130068.png?token=AHYMZK2AW56NQOUJG5ORENTBUJXA2",
    "https://raw.githubusercontent.com/tbuwadi/HackWestern8/eng-clientview/wits-bg/img3.a5180e90.png?token=AHYMZK5IMMQWOLRNOL4WW7DBUJXCM",
  ];
  
  return (
    <div className='container' style={{ marginTop: '50px' }}>
      <h1>Resume Revamp</h1>
      <h5>description description descriptiondescription</h5>
      <br></br>
      <View speaker='hi' qna='https://app.sli.do/event/1yidejwe' zoom={data}/>
    </div>
  );
}

export default ClientView;
