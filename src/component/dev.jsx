import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function CardGrid() {
  const [activeCard, setActiveCard] = useState(null);

  const cardsData = [
    { id: 1, title: "Website Design", text: "Our Website designers craft visually appealing, user-friendly layouts and interfaces, focusing on aesthetics, usability, and brand alignment. Our team blends design with digital tools.", logo: "./images/img1.png" },
    { id: 2, title: "Web Development", text: "Web development involves creating and maintaining websites, ensuring seamless performance, user-friendly design, and robust functionality.", logo: "./images/img2.png" },
    { id: 3, title: "E-commerce", text: "Enabling seamless online transactions with secure, scalable, and user-friendly solutions, driving digital business growth and customer engagement.", logo: "./images/img3.png" },
    { id: 4, title: "Domain and Hosting", text: "Domain refers to your website's unique address, while hosting is the service that stores your website files and makes them accessible online.", logo: "./images/img4.png" },
    { id: 5, title: "Website Redesign", text: "Website redesign revamps a site's structure, visuals, and functionality to enhance user experience and align with evolving brand goals.", logo: "./images/img5.png" },
    { id: 6, title: "Website Maintenance", text: "Website Management ensures seamless performance, updates, and security of a site, keeping it user-friendly and up-to-date.", logo: "./images/img6.png" },
  ];

  const handleMouseEnter = (id) => setActiveCard(id);
  const handleMouseLeave = () => setActiveCard(null);

  return (
    <Container fluid className="my-4">
      {/* Header Section with Image and Text */}
      <div style={{ position: 'relative', height: '300px', overflow: 'hidden', textAlign: 'center', margin: '50px 40px 20px' }}>
        <img
          src="./images/header1.png"
          alt="Header"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        />
        <div style={{
          position: 'relative',
          zIndex: 2,
          color: 'white',
          padding: '50px 20px',
          fontSize: '2rem',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          animation: 'slideDown 1s ease-out forwards'
        }}>
          Development
        </div>
      </div>

      {/* Responsive Image and Text Section */}
      <div className="responsive-section" style={{ margin: '50px 40px 20px' }}>
        <img
          src="./images/webdeve.png"
          alt="Additional Image"
          className="responsive-img"
          style={{ animation: 'slideInFromLeft 1s ease-out forwards' }}
        />
        <div style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.6', animation: 'slideInFromRight 1s ease-out forwards' }}>
          <h2 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Web Design & Development</h2>
          <p style={{ textAlign: 'left' }}>
            Our expertise in web development empowers businesses with highly functional, user-centered solutions. We focus on scalability, security, and seamless performance to support your digital growth.
          </p>
        </div>
      </div>

      {/* Card Section in New Line */}
      <Row style={{ margin: '50px 40px 20px' }}>
        {cardsData.map((card) => (
          <Col xs={12} sm={6} md={4} lg={4} key={card.id} className="mb-4">
            <Card
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                width: "100%",
                height: "220px",
                transition: "transform 0.3s, background-color 0.3s",
                transform: activeCard === card.id ? "scale(1.05)" : "scale(1)",
                backgroundColor: activeCard === card.id ? "rgb(106 74 140)" : "white",
                color: activeCard === card.id ? "white" : "black",
                cursor: "pointer",
                boxShadow: activeCard === card.id ? "0px 0px 15px rgba(0, 0, 0, 0.2)" : "none"
              }}
            >
              <Card.Body style={{ overflow: "hidden", paddingTop: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: 'flex-start', marginBottom: "10px" }}>
                  <img
                    src={card.logo}
                    alt={`${card.title} logo`}
                    style={{
                      width: (card.id === 3 || card.id === 4) ? "50px" : "40px",
                      height: (card.id === 3 || card.id === 4) ? "50px" : "40px",
                      marginRight: "10px"
                    }}
                  />
                  <h5 style={{ color: activeCard === card.id ? "white" : "black", fontWeight: "bold", margin: 0 }}>
                    {card.title}
                  </h5>
                </div>
                <Card.Text style={{ fontSize: "0.9rem", textAlign: 'left' }}>
                  {card.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style>
        {`
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes slideInFromLeft {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes slideInFromRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          /* Responsive Styles */
          .responsive-section {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 50px;
            padding-bottom: 90px;
          }

          .responsive-img {
            width: 40%; /* Default width */
            margin-right: 20px;
          }

          @media (max-width: 768px) {
            .responsive-section {
              flex-direction: column;
              text-align: center;
            }

            .responsive-img {
              width: 100%;
              margin: 0 0 15px 0;
            }
          }

          @media (min-width: 768px) {
            .responsive-img {
              width: 50%; /* Expanded width on larger screens */
            }
          }
        `}
      </style>
    </Container>
  );
}

export default CardGrid;
