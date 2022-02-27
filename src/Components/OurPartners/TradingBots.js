import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import setting4 from '../../images/tower.png';

const TradingBots = () => {
    return (
        <Container style={{paddingTop: "100px"}}>
        <Row>
          <Col sm={12} md={8} lg={6}>
            <img className="img-fluid" src={setting4} alt="" />
          </Col>
          <Col sm={12} md={4} lg={6}>
            <h2 className="text-white py-3">AI TRADING BOTS</h2>
            <small>
            With the PoorToRich AI Bots one can now select from a wide range of AI Bots available on our platform. The AutoBot range from different trading pairs, different logics applied, and are programmed with unique strategies.
            </small>
              <br/>
              <br/>
            <small>
            One of the best thing about the AI Bots is the transparency, as the Bots can be analyzed before one decides to subscribe, with the visual statistics on the dashboard, one can evaluate the bots based on the various metrics displayed like Total Returns, Score, the age of the bot and its performance graph.
            </small>
            <br/>
            <br/>
            <small>Clicking on the subscribe button, which will give the user more information on how the Bot has been programmed and planned to work. Furthermore, on the left side is a PnL (profit & loss) Graph to assess and display its performance.</small>
            <br/>
            
            <Button className="btn button_part">Read More</Button>
          </Col>
        </Row>
      </Container>
    );
};

export default TradingBots;