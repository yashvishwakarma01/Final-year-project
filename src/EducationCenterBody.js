import Image from 'react-bootstrap/Image';
import education from './education.jpg'
// import LinkRoute from './LinkRoute';
function EducationCenterBody() {
  return (
    <>
  <Image src={education} fluid style={{width:"100%"}}/>
  {/* <LinkRoute style={{position:"absolute", bottom:"200px"}}/> */}

  </>
  );
} 



export default EducationCenterBody