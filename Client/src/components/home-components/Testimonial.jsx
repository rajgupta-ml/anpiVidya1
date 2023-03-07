import React from 'react';
import '../../css/home-css/testimonial.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import avatar from '../../images/avatar.svg';

function Testimonial() {
  return (
    <div>
      <div className="testimonial-main-container ">
        <div className="testimonial-heading-container | my-[5.375rem] bg-[#5BC0F8]">
          <div className="track ">
            <div className="content | w-[100vw] text-white">
                            &nbsp;testimonial&nbsp;&nbsp;&nbsp;&nbsp;testimonial
                            &nbsp;&nbsp;&nbsp;&nbsp;testimonial
                            &nbsp;&nbsp;&nbsp;&nbsp;testimonial
                            &nbsp;&nbsp;&nbsp;&nbsp;testimonial
                            &nbsp;&nbsp;&nbsp;&nbsp;testimonial
                            &nbsp;&nbsp;&nbsp;&nbsp;testimonial
                            &nbsp;&nbsp;&nbsp;&nbsp;testimonial
                            &nbsp;&nbsp;&nbsp;&nbsp;testimonial&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
        <div className="testimonial-cards | grid gap-8 | max-width-container text-black">
          <div className="row1">
            <div className="row1-test-card test-card | w-[100%] min-h-[8.688rem] max-h[16.25] b border-4 ">
              <div className="testimonial | border-2  w-[80%] text-xs p-4">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <p>
                  &quot;I love your system.
                  Apnividya is the most valuable business resource we have EVER purchased.
                  I would be lost without apnividya. I am really satisfied with my apnividya.&quot;

                </p>
              </div>
            </div>
            <div className="test-right-container">
              <div className="test-card-name">Raj Gupta</div>
              <div className="image-container">
                <img src={avatar} alt="Avatar" />
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="row2-test-card test-card | w-[100%] h-[8.688rem] border-4 ">

              <div className="testimonial | border-2 w-[80%] text-xs p-4">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <p>
                  &quot;I love your system. Apnividya
                  is the most valuable business resource
                  we have EVER purchased. I would be lost
                  without apnividya. I am really
                  satisfied with my apnividya.&quot;

                </p>
              </div>
            </div>
            <div className="test-right-container">
              <div className="image-container">
                <img src={avatar} alt="Avatar" />
              </div>
              <div className="test-card-name">Raj Gupta</div>

            </div>
          </div>
          <div className="row3">
            <div className="row3-test-card test-card | w-[100%] h-[8.688rem] border-4 ">

              <div className="testimonial | border-2 w-[80%] text-xs p-4">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <p>
                  &quot;I love your system. Apnividya is the most valuable business
                  resource we have EVER purchased. I would be lost without apnividya.
                  I am really satisfied with my apnividya.&quot;

                </p>
              </div>
            </div>

            <div className="test-right-container">
              <div className="test-card-name">Raj Gupta</div>
              <div className="image-container">
                <img src={avatar} alt="Avatar" />
              </div>
            </div>
          </div>
          <div className="row4">
            <div className="row4-test-card test-card | w-[100%] h-[8.688rem] border-4 ">

              <div className="testimonial | border-2 w-[80%] text-xs p-4">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <p>
                  &quot;I love your system. Apnividya is the most
                  valuable business resource we have EVER purchased.
                  I would be lost without apnividya.
                  I am really satisfied with my apnividya.&quot;

                </p>
              </div>
            </div>
            <div className="test-right-container">
              <div className="image-container">
                <img src={avatar} alt="Avatar" />
              </div>
              <div className="test-card-name">Raj Gupta</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AOS.init();
export default Testimonial;
