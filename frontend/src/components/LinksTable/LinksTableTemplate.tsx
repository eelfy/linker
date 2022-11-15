import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import LinksEditPopUp from '../LinksEditPopUp';
import LinkCard from '../LinkCard';
import Icon from '../Icon';
import { LinksTableTemplateProps } from './LinksTableTypes';
import { LinksTableBody } from './LinksTableStyled';

const LinksTableTemplate: FC<LinksTableTemplateProps> = ({
  links,
  isPopUpVisible,
  setIsPopUpVisible,
  plusButtonHandler,
  isEditMode,
  url,
}) => (
  <LinksTableBody>
    {links.map((link) => (
      <LinkCard
        key={link.id}
        id={link.id}
        tag={link.tag}
        link={link.link}
        isEditMode={isEditMode}
      />
    ))}

    { isEditMode && (
      <>
        <Icon onClick={plusButtonHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </Icon>
        <div>{url}</div>
        <LinksEditPopUp visible={isPopUpVisible} setVisible={setIsPopUpVisible} />
      </>
    )}

  </LinksTableBody>
);

export default LinksTableTemplate;
