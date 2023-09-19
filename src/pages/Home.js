import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaCircle } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';


const Home = () => {
  return (
    <div>

      <div className='position-relative'>
          <Container fluid className='m-0 px-4 main border-bottom position-absolute'>
              <Navbar expand="lg" className="">
                <Container fluid>
                  <Row className='align-items-center'>

                    <Col xs={3}>
                      <Navbar.Brand href="#">
                        <img src="https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2020/09/logocreative03-1-1001-1.svg" alt="" width='55%' /> 
                      </Navbar.Brand>
                    </Col>
                  
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Col xs={9}>
                      <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0 align-items-center" style={{ maxHeight: '100px' }} navbarScroll>
                          
                          <Nav.Link href="#action1" className='c-black blue-hov'>Home</Nav.Link>
                          <Nav.Link href="#action1" className='c-black blue-hov'>Agency</Nav.Link>
                          <Nav.Link href="#action1" className='c-black blue-hov'>Team</Nav.Link>
                          <Nav.Link href="#action1" className='c-black blue-hov'>Services</Nav.Link>
                          <Nav.Link href="#action1" className='c-black blue-hov'>Showcase</Nav.Link>
                          <Nav.Link href="#action1" className='c-black blue-hov'>Blog</Nav.Link>
                          <Nav.Link href="#action1" className='c-black blue-hov'>Contact</Nav.Link>
                          
                          <div className='bg-blue but mx-3'>Book a consultation</div>

                        </Nav>
                      </Navbar.Collapse>
                    </Col>
                  

                  </Row>
                </Container>
              </Navbar>
          </Container>

          <Container fluid className='m-0 bg-main blur d-flex align-items-center pd-160'>
            <Container className=''>
              <Row className=''>
                <Col xl={12} md={12} xs={12}>

                  <div>
                    <img src="https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2020/09/logocreative03-1-1001-1.svg" alt="" width='20%' className='d-flex m-auto' />
                  </div>

                  <div className='m-50'>
                    <h3 className='f-76 c-black fw-700 lh text-center text-uppercase'>We build digital <br /> experiences</h3>
                  </div>

                  <div>
                    <ul className='d-flex justify-content-center'>
                      <li className='px-2 ls fw-500 f-18 align-items-center d-flex'>WEBSITES <FaCircle className='ff ms-3'/> </li>
                      <li className='px-2 ls fw-500 f-18 align-items-center d-flex'>BRANDING <FaCircle className='ff ms-3'/> </li>
                      <li className='px-2 ls fw-500 f-18'>DIGITAL MARKETING</li>
                    </ul>
                  </div>

                </Col>
              </Row>
            </Container>
          </Container>
      </div>

      <Container fluid className='bg-back pt-80'>
        <Container className=''>
          <Row>
            <Col className='d-flex flex-wrap justify-content-center'>

              <div>
                <h3 className='c-black f-37 fw-600 lh-1 ls-1'>The last digital agency you'll ever need</h3>
              </div>

              <div className='mt-60'>
                <p className='f-20 text-center c-black-1 fw-400 lh-2'>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit <br /> placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut <br /> magna porttitor scelerisque.</p>
              </div>

            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className='bg-back pt-3 pb-120'>
          <Row className='pd-20'>

            <Col xl={3}>
              <FaCalendarAlt className='f-42 c-blue pb-3'/>
              <h4><a href='' className='c-black f-20 fw-600 lh-1'>10+ years of market experience</a></h4>
            </Col>

            <Col xl={3}>
              <FaBuilding className='f-42 c-blue pb-3'/>
              <h4><a href='' className='c-black f-20 fw-600 lh-1'>Unique technologies & modern approach</a></h4>
            </Col>

            <Col xl={3}>
              <FaFolderOpen className='f-42 c-blue pb-3'/>
              <h4><a href='' className='c-black f-20 fw-600 lh-1'>100+ cuccessful cases in portfolio</a></h4>
            </Col>
            
            <Col xl={3}>
              <FaUserAlt className='f-42 c-blue pb-3'/>
              <h4><a href='' className='c-black f-20 fw-600 lh-1'>Customer satisfaction is our top priority</a></h4>
            </Col>

          </Row>
      </Container>

      <Container fluid className='bg-back'>
        <Container>
          <Row>
            <Col className='d-flex justify-content-center flex-wrap'>
              <div>
                <h3 className='c-black f-37 fw-600 lh-1 ls-1 text-center'>Our expertise</h3>
              
                <p className='c-black-1 f-20 fw-400 lh-2 text-center mt-60'>Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut <br /> magna porttitor, sollicitudin ligula at, molestie dolor.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className='bg-back pt-5'>
        <Container>
          <Row>

            <Col xl={3}>

              <div>
                <img src='	https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2023/01/cr609.jpg' alt=''  className='bg-img mb-30' />
              </div>

              <div>
                <h3 className='c-black mb-0 f-25 fw-500'>Web Design & Development</h3>
                <a href='' className='c-navy f-14 fw-500 text-up lh-1 ls mt-4 d-block'>Learn more <FaLongArrowAltRight /> </a>
              </div>

            </Col>

            <Col xl={3}>

              <div>
                <img src='	https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2023/01/cr616.jpg' alt=''  className='bg-img mb-30' />
              </div>

              <div>
                <h3 className='c-black mb-0 f-25 fw-500'>WDigital Marketing</h3>
                <a href='' className='c-navy f-14 fw-500 text-up lh-1 ls mt-4 d-block'>Learn more <FaLongArrowAltRight /> </a>
              </div>

            </Col>

            <Col xl={3}>

              <div>
                <img src='https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2023/01/cr630.jpg' alt=''  className='bg-img mb-30' />
              </div>

              <div>
                <h3 className='c-black mb-0 f-25 fw-500'>E-Commercet</h3>
                <a href='' className='c-navy f-14 fw-500 text-up lh-1 ls mt-4 d-block'>Learn more <FaLongArrowAltRight /> </a>
              </div>

            </Col>

            <Col xl={3}>

              <div>
                <img src='https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2023/01/3d007.jpg' alt=''  className='bg-img mb-30' />
              </div>

              <div>
                <h3 className='c-black mb-0 f-25 fw-500'>Branding & Creative Services</h3>
                <a href='' className='c-navy f-14 fw-500 text-up lh-1 ls mt-4 d-block'>Learn more <FaLongArrowAltRight /> </a>
              </div>

            </Col>

          </Row>
        </Container>
      </Container>

      <Container fluid className='bg-back pb-5 mb-5'>
        <Row className='p-5'>
          <Col xl={4}>

            <div className='mb-5'>
              <img src="https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2020/09/logocreative03-1-1001-1.svg" alt="" width='60%' />
            </div>

            <div>
              <p className='mb-4'>Questions? Reach us <br />Monday – Friday from 9 am to 6 pm</p>

              <h4 className='mb-4 c-black f-18 fw-600'>+1 001 234 5678</h4>
            </div>

            <div><a href="" className='f-12 fw-500 but-1'>Request for quote <FaLongArrowAltRight /> </a></div>

          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Home