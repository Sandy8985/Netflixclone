import React, { useState } from "react";
import "./Section6.css";
// import AiOutlinePlusCircle from "react-icons";
// import image10 from '../../Images/add.png'

const Section6 = () => {
  const data = [
    {
      que: "What is netflix ?",
      ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      que: "How much does netflix cost ?",
      ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      que: "Where can i watch?",
      ans: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      que: "How do i cancel?",
      ans: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      que: "What can i watch on Netflix ?",
      ans: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      que: "Is Netflix Good for kids ?",
      ans: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own spaceKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const [click, setclick] = useState(null);
  const handleclick = (i) => {
    if (click === i) {
      return setclick(null);
    }
    setclick(i);
  };
  return (
    <div className="sec6">
      <h1>Frequently Asked Questions</h1>
      {data.map((item, i) => {
        return (
          <div className="faq" key={i}>
            <div className="question" onClick={() => handleclick(i)}>
              <h3>{item.que}</h3>
              <h2 className="add">+</h2>
            </div>

            <div className={click === i ? "answer show" : "answer"}>
              <p>{item.ans}</p>
            </div>
          </div>
        );
      })}

        <div className="text">
              <h2>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h2>
              <div className="ib">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  id="ip" style={{backgroundColor:'white'}}
                />
                <button className="btn2">Get Started</button>
              </div>
          </div>
    </div>
  );
};
export default Section6;