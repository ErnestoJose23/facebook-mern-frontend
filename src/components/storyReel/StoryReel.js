import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyreel">
      <Story
        img="https://cdn.pixabay.com/photo/2020/09/19/09/40/sunset-5584004_960_720.jpg"
        profileSrc="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        title="Jessica Lincoln"
      />
      <Story
        img="https://cdn.pixabay.com/photo/2020/09/21/05/57/coffee-5589036_1280.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJm0gAXunXcm3HezBOW5XyULCkkdCxQ95_XA&usqp=CAU"
        title="Scarlett"
      />
      <Story
        img="https://cdn.pixabay.com/photo/2020/08/12/09/42/dog-5482171_1280.jpg"
        profileSrc="https://i.redd.it/v0caqchbtn741.jpg"
        title="Tom Hardy"
      />
      <Story
        img="https://cdn.pixabay.com/photo/2020/09/15/09/27/woman-5573135_960_720.jpg"
        profileSrc="https://uploads.disquscdn.com/images/dc368ebd907dfb3c40406ed0c842b10023f20651969cbd4bf77e524b3bf29ce7.jpg"
        title="Luu Liu"
      />
      <Story
        img="https://cdn.pixabay.com/photo/2020/09/03/15/55/church-5541729_1280.jpg"
        profileSrc="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        title="Matt Damon"
      />
    </div>
  );
}

export default StoryReel;
