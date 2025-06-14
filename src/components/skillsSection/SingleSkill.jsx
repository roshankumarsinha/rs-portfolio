const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      {/* 
        This div is used to create a hover effect that moves the skill item upwards when hovered over.
        The transition-all class applies a smooth transition to all properties, and duration-500 sets the duration of the transition to 500 milliseconds.
      */}
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
        {/*
          This div is used to create a circular background for the skill icon.
          bg-white: Sets the background color to white.
          text-cyan: Sets the text color to cyan.
          h-[100px] w-[100px]: Sets the height and width of the div to 100 pixels.
          flex items-center justify-center: This makes the div a flexbox, centering the icon both vertically and horizontally.
          rounded-full: This makes the div circular by applying a border radius equal to half its width and height.
          hover:text-darkGrey: Changes the text color to dark grey when hovered over.
          hover:scale-105: Scales the div to 105% of its original size when hovered over.
          transform transition-all duration-500: Applies a smooth transition effect to the scaling and color change, lasting 500 milliseconds.
        */}
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
      {/*
        This div is used to create a background effect for the skill item.
        w-[100px] h-[200px]: Sets the width to 100 pixels and the height to 200 pixels.
        bg-orange: Sets the background color to orange.
        absolute top-[50px]: Positions the div absolutely, 50 pixels from the top of its nearest positioned ancestor.
        -z-10: Places this div behind other elements by setting its z-index to -10.
      */}
    </div>
  );
};

export default SingleSkill;