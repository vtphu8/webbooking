import "./Footer.css";
import Column from "./Column";
import FooterData from "../data/footer.json";

const Footer = () => {
  return (
    <section className="footer">
      {FooterData.map((col, index) => (
        <Column key={index} items={col.col_values}></Column>
      ))}
    </section>
  );
};

export default Footer;
