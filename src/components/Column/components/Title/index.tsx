import "./styles.scss";

type TTitle = {
  title: string;
};

const Title = ({ title }: TTitle) => {
  return <h2 className="title">{title}</h2>;
};

export default Title;
