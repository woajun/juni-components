import styled from 'styled-components';

export const StyledCardBundle = styled.div`
width: 100%;
position: relative;

.card {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 100%;
    color: white;
    user-select: "none";
    cursor: "grab";
}

.next {
    z-index: -1;
}

`;
