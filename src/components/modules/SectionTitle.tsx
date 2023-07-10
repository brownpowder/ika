type Props = {
  title: String;
  subTitle: String;
};

const SectionTitle = (props: Props) => {
  return (
    <div className="section_titleBox">
      <h1>{props.title}</h1>
      <h2>( {props.subTitle} )</h2>
    </div>
  );
};

export default SectionTitle;
