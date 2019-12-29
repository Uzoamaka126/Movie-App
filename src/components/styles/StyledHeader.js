import styled from 'styled-components';

export const StyledHeader = styled.div`
    background: #1c1c1c;
    padding: 0 10px;
    box-sizing: border-box;

    .header-content {
        padding: 0 20px;
        box-sizing: border-box;
        max-width: 1280px;
        min-height: 70px;
        margin: 0 auto

        @media screen and (max-width: 500px) {
            max-width: 1280px;
            min-height: 0px;
        }
    }
`;
export const RmdbLogo = styled.img`
    width: 30px;
    margin-top: 20px;
    float: left;

    @media screen and (max-width: 500px) {
        width: 150px;
        margin-top: 5px;
    }
`;