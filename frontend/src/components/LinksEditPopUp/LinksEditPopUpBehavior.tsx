import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/RootStore';
import { LinksEditPopUpBehaviorProps, UpdateConcreteInput, UpdateInputHandler } from './LinksEditPopUpTypes';
import LinksEditPopUpTemplate from './LinksEditPopUpTemplate';

const LinksEditPopUpBehavior: FC<LinksEditPopUpBehaviorProps> = observer(({
  visible,
  setVisible,
  initDescriptionValue,
  initLinkValue,
  linkId,
}) => {
  const {
    LinksStore: {
      addLink,
      updateLink,
      createLink,
    },
  } = useStore();

  const [linkValue, setLinkValue] = useState<string>(initLinkValue ?? '');
  const [descriptionValue, setDescriptionValue] = useState<string>(initDescriptionValue ?? '');

  const updateInputHandler: UpdateInputHandler = (event, setState) => {
    const updatedValue = event.currentTarget.value;
    setState(updatedValue);
  };

  const updateLinkValue: UpdateConcreteInput = (event) => updateInputHandler(event, setLinkValue);
  const updateDescriptionValue: UpdateConcreteInput = (event) => updateInputHandler(event, setDescriptionValue);

  const acceptChangesHandler = () => {
    const link = createLink(descriptionValue, linkValue, linkId);

    if (initDescriptionValue && initLinkValue) {
      updateLink(link);
    } else {
      addLink(link);
      dropInputs();
    }

    // setVisible(false);
  };

  function dropInputs() {
    setLinkValue('');
    setDescriptionValue('');
  }
  return (
    <LinksEditPopUpTemplate
      visible={visible}
      setVisible={setVisible}
      linkValue={linkValue}
      descriptionValue={descriptionValue}
      updateLinkValue={updateLinkValue}
      updateDescriptionValue={updateDescriptionValue}
      acceptChangesHandler={acceptChangesHandler}
    />
  );
});

export default LinksEditPopUpBehavior;
