
<div
        className="fifth-section"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="container text-center">
          <Button
            variant="light"
            style={{ borderRadius: "2rem" }}
            className="mb-3 px-4"
          >
            Features
          </Button>
          <div className="mb-5">
            <h2 style={{ color: "white" }}>Maximize your results with</h2>
            <h2 style={{ color: "white" }}>our core features</h2>
          </div>
          <div
            className="slider-container"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
            <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="slider-item"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(-1)}
                >
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    width={300}
                    height={500}
                    style={{
                      border: isHovered === index ? "1rem solid black" : "",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="row">
            {/* {features.map((feature, index) => (
              <div className="col-md-4" key={index}>
                <Card
                  style={{ background: feature.color, width: "20rem" }}
                  className="p-4 "
                >
                  <Card.Body>
                    <Card.Img src={feature.image} height={100}></Card.Img>
                    <Card.Title className="mb-3">{feature.title}</Card.Title>
                    <Card.Text className="mb-3">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))} */}
          </div>
        </div>
      </div>