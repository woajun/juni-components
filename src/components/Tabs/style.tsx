import styled from 'styled-components';

export const StyledTabs = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  border-bottom: 1px solid #e5e7eb;

  .tab-list {
    display: flex;
    justify-content: space-evenly;

    .tab-button {
      display: inline-block;
      padding: 1rem;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem; 
      border-bottom-width: 2px; 
      border-color: transparent; 

      &.active {
        color: #3b82f6;
        border-color: #3b82f6;
        &:hover {
          color: #3b82f6;
          border-color: #3b82f6;
        }
      }
      &:hover {
        color: #4b5563;
        border-color: #cbd5e0;
      }
    }
  }
`;
