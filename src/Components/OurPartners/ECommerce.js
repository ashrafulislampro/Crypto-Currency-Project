import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import setting from '../../images/setting.png';
const ECommerce = () => {
    return (
        <Container style={{paddingTop: "100px"}}>
        <Row>
          <Col sm={12} md={8} lg={6}>
            <img className="img-fluid" src={setting} alt="" />
          </Col>
          <Col sm={12} md={4} lg={6}>
            <h2 className="text-white py-3">E-COMMERCE</h2>
            <small>
            What is Decentralized E-commerce and How does it work?
            </small>
        <br/>
        <br/>
            <small>
            Everyone knows the importance of E-commerce today, as for most of us it has become a convenient way to acquire many of our needs and wants.
            </small>
            <br/>
        <br/>
            <small>Needless to say, E-commerce has drastically grown over time and has become the now and future of buying and selling goods electronically over the internet. The process involves Merchants or retailers selling products through a platform like Amazon, eBay, etc. the platform acts as a middleman and thereby helping the buyer and the seller to complete a trade. </small>
            <br/>
            <br/>
            <small>In a Decentralized E-Commerce, people can buy and sell products in peer to peer form. Users can register and list their products and become a seller or act as a seller. The buyer will be able to see the rates and track their purchases. It is the cost-effective way of trading for both parties as the trade is happening directly between the buyer and the seller. Here the platforms like PoorToRich would ensure the genuinity and smooth transaction of the process by making sure that both the parties trade fairly. </small>
            <br/>
            <Button className="btn button_part">Read More</Button>
          </Col>
        </Row>
      </Container>
    );
};

export default ECommerce;