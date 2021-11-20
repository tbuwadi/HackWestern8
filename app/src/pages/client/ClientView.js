import React from 'react';

import View from '../../components/View';

import '../../index.css';

const ClientView = () => {
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    }
  ];
  
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
