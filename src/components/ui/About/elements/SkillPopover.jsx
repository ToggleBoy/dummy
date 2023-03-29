import Button from "react-bootstrap/Button";
import './SkillPopover.css';

const SkillPopover = ({data}) => (
  <Button variant="primary" size="lg" disabled className="skillButton">
    {data}
  </Button>
);

export default SkillPopover;
