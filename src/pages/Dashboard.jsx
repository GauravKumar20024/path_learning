import React, { useEffect, useState } from 'react';
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const texts = [
    "Start Learning Now",
    "Master Web Development",
    "Kickstart Your Coding Journey",
    "Level Up Your Skills"
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const currentText = texts[index];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80); // typing speed

      return () => clearTimeout(timeout);
    }

    // wait then move to next text
    const hold = setTimeout(() => {
      setDisplayText("");
      setCharIndex(0);
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // wait before next text

    return () => clearTimeout(hold);
  }, [charIndex, index, texts]);

  return (
    <div id='main_'>
      <section id="ad">
        <article>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/051/336/399/small/html-programming-transparent-logo-free-png.png" alt="" />
          <img src="https://icon2.cleanpng.com/20180816/ql/7da0574f943d245723f512620b4e3c51.webp" alt="" />
          <img src="https://icon2.cleanpng.com/20180810/ekz/11448a7a96ee808a3cdbaf0df9570976.webp" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s" alt="" />
        </article>

        <h1 className="animated-heading">
          <span className="fade-slide">{displayText}</span>
        </h1>
<p>
  This is your moment to upskill and move ahead. Access quality courses anytime,anywhere. <br />
   Your journey to growth starts today.
  Unlock new skills, learn at your pace, level up your future.
  <br />
  Your future is calling. Don't let this slip away
</p>
<h4>Dont miss the opportunity - Register now and start learning</h4>
        <button>Register Now</button>
      </section>
  <section id="about">
  <h2>About Our Platform</h2>

  <div class="about-block">
    <div class="text">
      <h4>Welcome to Our Web Development Learning Platform</h4>
      <p>
        Start your coding journey with a platform built to make learning web development simple, structured, and enjoyable. We guide you step by step from the absolute basics to real project-level skills, covering HTML, CSS, JavaScript, and React from scratch.
      </p>
    </div>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/049/226/664/small/professional-woman-welcoming-guests-in-a-suit-png.png" alt="HTML" />
  </div>

  <div class="about-block reverse">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/050/594/566/small/smiling-female-receptionist-hand-presenting-something-side-view-isolate-on-transparency-background-png.png" alt="CSS" />
    <div class="text">
      <h4>Learn the Right Way</h4>
      <p>
        Our lessons are beginner-friendly, practical, and designed to help you understand concepts clearly. Whether you're new to coding or leveling up your skills, our platform adapts to your pace.
      </p>
    </div>
  </div>

  <div class="about-block">
    <div class="text">
      <h4>Practice What You Learn</h4>
      <p>
        After every topic, apply your knowledge with interactive challenges, hands-on exercises, and mini coding tasks. Build real confidence by building real things.
      </p>
    </div>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/057/727/052/small/smiling-businesswoman-holding-tablet-transparent-background-free-png.png" alt="JavaScript"/>
  </div>

  <div class="about-block reverse">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/050/817/792/small/happy-smiling-business-woman-in-suit-with-hand-pointing-at-empty-space-standing-isolate-on-transparent-background-png.png" alt="React" />
    <div class="text">
      <h4>Test Yourself</h4>
      <p>
        Stay on track with mock tests designed to measure your understanding and boost your readiness for interviews, internships, and real-world development challenges.
      </p>
    </div>
  </div>

  <div class="about-block">
    <div class="text">
      <h4>Track Your Progress</h4>
      <p>
        Your personal dashboard shows completed lessons, practice performance, test scores, and overall growth. Watch yourself improve day by day.
      </p>
    </div>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/055/721/782/small/business-woman-in-black-suit-and-white-shirt-png.png" alt="Progress" />
  </div>

  <div class="why-us">
    <h4>Why Learn With Us?</h4>
    <ul>
      <li>Beginner-friendly structured content</li>
      <li>Clear explanations with real examples</li>
      <li>Practical exercises and challenges</li>
      <li>Mock tests to assess skills</li>
      <li>Progress reports that keep you motivated</li>
    </ul>
  </div>
</section>
    </div>
  );
}

export default Dashboard;
