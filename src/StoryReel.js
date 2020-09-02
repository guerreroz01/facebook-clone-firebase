import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        img="http://lorempixel.com/output/sports-q-c-640-480-9.jpg"
        profileSrc="http://lorempixel.com/output/people-q-c-640-480-7.jpg"
        title="Martha Perez"
      />
      <Story
        img="http://lorempixel.com/output/sports-q-c-640-480-6.jpg"
        profileSrc="http://lorempixel.com/output/people-q-c-640-480-6.jpg"
        title="Carlos Sanchez"
      />
      <Story
        img="http://lorempixel.com/output/sports-q-c-640-480-7.jpg"
        profileSrc="http://lorempixel.com/output/people-q-c-640-480-8.jpg"
        title="Frankie"
      />
      <Story
        img="http://lorempixel.com/output/sports-q-c-640-480-1.jpg"
        profileSrc="http://lorempixel.com/output/people-q-c-640-480-4.jpg"
        title="Luisa lu"
      />
      <Story
        img="http://lorempixel.com/output/sports-q-c-640-480-3.jpg"
        profileSrc="http://lorempixel.com/output/people-q-c-640-480-3.jpg"
        title="Manuel J"
      />
    </div>
  );
}

export default StoryReel;
