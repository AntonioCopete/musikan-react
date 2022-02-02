import { Button } from '../../../../styles/GlobalComponents/Button'

function TriggerModal({ type, btnText, handleOpen }) {
  return (
    <>
      {
        type === "button" ? <Button onClick={handleOpen}>{ btnText }</Button> :
        type === "link" ? "Link" : null}
    
    </>
  );
}

export default TriggerModal;
