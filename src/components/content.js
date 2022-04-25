import "./content.css";
import Title from "./Content/Title/Title";
import Description from "./Content/Description/Description";

const Content = (props) => {
  const lorem = props.text;
  const title = props.name;
  return (
    <div className="content">
      <Title name={title} />
      <Description text={lorem} />
    </div>
  );
};
export default Content;
