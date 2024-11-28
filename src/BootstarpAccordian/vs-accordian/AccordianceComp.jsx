import Accordion from "react-bootstrap/Accordion";

function BasicExample(props) {
  return (
    <div>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>{props.title}</Accordion.Header>
          <Accordion.Body>
            {props.info}
            {props.image}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default BasicExample;
