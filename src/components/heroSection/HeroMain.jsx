import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
      {/*
        flex: Applies flexbox layout
        md:flex-row: On medium screens and larger, items are arranged in a row
        sm:flex-col: On small screens, items are arranged in a column
        max-w-[1200px]: Sets a maximum width of 1200px
        mx-auto: Centers the container horizontally
        justify-between: Distributes space between items, pushing them to the edges
        items-center: Vertically centers items within the flex container
        relative: Positions the container relative to its normal position, allowing for absolute positioning of child elements
      */}
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;