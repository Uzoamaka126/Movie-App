import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const StyledMovieInfo = styled.div`
    background: ${props => 
        props.backdrop
        ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
        : '#000'};
        background-size: cover!important;
        background-position center!important;
        width: 100%;
        padding: 40px 20px;
        box-sizing: border-box;
        // animation: animateMovieInfo 1s;

        .movieinfo-content {
            max-width: 1280px;
            min-height: 450px;
            margin: 0 auto;
            background: rgb(0, 0, 0, 0.7);
            border-radius: 20px;
            display: flex;

        }

        .movieinfo-thumb {
            width: 40%;
            height: 100%;
        }

        .movieinfo-text {
            width: 50%;
            color: #fff;
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 15px;
        }

`;