import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Button from '../Button';
import Card from '../Card';
import { LinkButtons, LinkCardBody, TagLink } from './LinkCardStyled';
import { LinkCardTemplateProps } from './LinkCardTypes';
import LinksEditPopUp from '../LinksEditPopUp';

const LinkCardTemplate: FC<LinkCardTemplateProps> = ({
  tag,
  link,
  deleteHandler,
  editHandler,
  isPopUpVisible,
  setIsPopUpVisible,
}) => (
  <>
    <Card>
      <LinkCardBody>
        <TagLink href={link}>{tag}</TagLink>

        <LinkButtons>

          <Button onClick={editHandler}>
            <FontAwesomeIcon icon={faPen} />
          </Button>

          <Button onClick={deleteHandler}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>

        </LinkButtons>
      </LinkCardBody>
    </Card>

    <LinksEditPopUp
      visible={isPopUpVisible}
      setVisible={setIsPopUpVisible}
    />

  </>
);

export default LinkCardTemplate;
