import styled, { css } from "styled-components";
import TextField from '@material-ui/core/TextField';

const dragActive = css`
    border-color: green;
`
const dragReject = css`
    border-color: red;
`

export const ProductsPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20rem;

    .button-submit{
        height: 2rem;
        width: 4rem;
        background-color: #564929;
        margin: 1rem;
    }
`
export const DescriptionTextField = styled(TextField)`

`
export const TitleTextField = styled(TextField)`

`
export const CodTextField = styled(TextField)`
    color: #fff;
`
export const DropContainer = styled.div.attrs({
    className: 'dropzone'
})`
     border: 1px dashed #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: height 0.2s ease;
    padding: 1rem;
    display: flex;
    background-color: var(--grey);
    width: 100%;
    height: 5rem;
    justify-content: center;
    align-items: center;
    color: #fff;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`
export const UploadMessage = styled.span`

`
export const ProductsPostListContainer = styled.div`
    li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        & + li {
            margin-top: 15px;
        }

        .icons-style {
            display: flex;
            justify-content: center;
        }

        strong {
            max-width: 14rem;
            text-overflow: ellipsis;
            white-space: nowrap;

        }
    }
`
export const FileInfo = styled.div`
    display: flex;
    align-items: center;

    .infos-style {
        width: 14rem;
    }
    .text-style {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    div {
        display: flex;
        flex-direction: column;

        span{
            font-size: 12px;
            color: #999;
            margin-top: 5px;

            button {
                border: 0;
                background-color: transparent;
                color: #e57878;
                margin-left: 5px;
                cursor: pointer;
            }
        }
    }
`
export const Preview = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-right: 10px;
`