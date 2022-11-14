import styled from 'styled-components';

const LinkCardBody = styled.div`
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 10px;
`;

const TagLink = styled.a`
  width: 100%;
  padding: 2px;
  padding-left: 10px;

  display: flex;
  align-items: center;

  font-size: 24px;
  text-decoration: none;
  font-weight: bold;

  border-radius: var(--border-main-radius);

  &:hover {
    background-color: var(--color-table-row);
  }

  & {
    color: var(--color-pink);
  }
`;

const LinkButtons = styled.div`
  display: flex;

  gap: 5px;
`;

export { LinkCardBody, TagLink, LinkButtons };
