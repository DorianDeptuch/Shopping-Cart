import React from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <div
      className="about-div-container"
      style={{ filter: props.displayCart && "blur(0.4rem)" }}
    >
      <div className="about-parallax-3">
        <span className="about-parallax-3-text">ABOUT US</span>
      </div>
      <div className="about-div">
        <div className="section-text">
          <h3>Why do we do this?</h3>
          <p>
            {" "}
            You may be wondering to yourself: "Why would anybody do this?!" I
            believe the most fitting answer would be to respond with a quote by
            the great George Mallory:
            <br />{" "}
            <em>
              <hr />
              “People ask me, 'What is the use of climbing Mount Everest?' and
              my answer must at once be, 'It is of no use.' There is not the
              slightest prospect of any gain whatsoever. Oh, we may learn a
              little about the behaviour of the human body at high altitudes,
              and possibly medical men may turn our observation to some account
              for the purposes of aviation. But otherwise nothing will come of
              it. We shall not bring back a single bit of gold or silver, not a
              gem, nor any coal or iron... If you cannot understand that there
              is something in man which responds to the challenge of this
              mountain and goes out to meet it, that the struggle is the
              struggle of life itself upward and forever upward, then you won't
              see why we go. What we get from this adventure is just sheer joy.
              And joy is, after all, the end of life. We do not live to eat and
              make money. We eat and make money to be able to live. That is what
              life means and what life is for."
              <hr />
            </em>
          </p>
        </div>
        <br />
        <div className="section-text">
          <h3>But isn't this risky?</h3>
          <p>
            Aren't all things in life risky to some degree? Driving your car or
            crossing the street are risky too, but we've accepted these risks
            into our daily lives. Live a little and climb a mountain! Still not
            convinved? Here's another quote:
            <hr />
            <em>
              "The pleasure of risk is in the control needed to ride it with
              assurance so that what appears dangerous to the outsider is, to
              the participant, simply a matter of intelligence, skill,
              intuition, coordination in a word, experience. Climbing, in
              particular, is a paradoxically intellectual pastime, but with this
              difference you have to think with your body. Every move has to be
              worked out in terms of effort, balance and consequences. It is
              like playing chess with your body. If I make a mistake, the
              consequences are immediate, obvious, embarrassing and possibly
              painful. For a brief period, I am directly responsible for my
              actions. In that beautiful, silent world of the mountains, it
              seems to me worth a little risk."
            </em>
            <br />
            -A. Alvarez
            <hr />
          </p>
        </div>
        <br />
        <div className="section-text">
          <h3>What do you think? Will you join us?</h3>
          <button>
            <Link to="/Shopping-Cart/Shop">CLICK HERE</Link>
          </button>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
