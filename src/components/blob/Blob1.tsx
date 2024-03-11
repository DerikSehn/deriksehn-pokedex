// make a react blob component with children inside
const Blob1 = ({ children }: any) => {
  return (
    <div className="relative top-0 left-0 z-0">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="rgb(182, 224, 239)" d="M62.5,-36.4C75.3,-14.1,75.8,15,63.4,36.5C50.9,58.1,25.5,72,1.2,71.4C-23.1,70.7,-46.2,55.4,-60.3,32.9C-74.4,10.4,-79.5,-19.2,-67.9,-40.8C-56.4,-62.5,-28.2,-76.2,-1.6,-75.3C24.9,-74.3,49.8,-58.7,62.5,-36.4Z" transform="translate(100 100)" />
      </svg>
      <div className="relative top-0 left-0 z-0">{children}</div>
    </div>
  );
};

export default Blob1;
