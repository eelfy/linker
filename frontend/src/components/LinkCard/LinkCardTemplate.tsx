import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Button from '../Button';
import Card from '../Card';
import { LinkButtons, LinkCardBody, TagLink } from './LinkCardStyled';
import { LinkCardTemplateProps } from './LinkCardTypes';
import LinksEditPopUp from '../LinksEditPopUp';

const LinkCardTemplate: FC<LinkCardTemplateProps> = ({
  id,
  tag,
  link,
  deleteHandler,
  editHandler,
  isPopUpVisible,
  setIsPopUpVisible,
  isEditMode,
}) => (
  <>
    <Card>
      <LinkCardBody>
        <TagLink href={link}>{tag}</TagLink>

        {
           isEditMode && (
           <LinkButtons>
             <Button onClick={editHandler}>
               <FontAwesomeIcon icon={faPen} />
             </Button>

             <Button onClick={deleteHandler}>
               <FontAwesomeIcon icon={faTrash} />
             </Button>

           </LinkButtons>
           )
        }
      </LinkCardBody>
    </Card>
    {
      isEditMode && (
      <LinksEditPopUp
        linkId={id}
        visible={isPopUpVisible}
        setVisible={setIsPopUpVisible}
        initDescriptionValue={tag}
        initLinkValue={link}
      />
      )
    }

  </>
);

export default LinkCardTemplate;
