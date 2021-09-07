import React from 'react';
import { ProductsPostListContainer, Preview, FileInfo } from './styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const BolosPostList = ({ file, key, handleDelete, setLoad }) => {
    return (
        <ProductsPostListContainer key={key}>
            <li key={file.id}>
            <FileInfo>
                <Preview src={file.url} />
                <div className='infos-style'>
                    <div className='text-style'>
                        <strong>{file.name}</strong>
                    </div>
                    <span>{file.readableSize}{''}
                        { !!file.url && (
                            <button onClick={() => handleDelete(file._id)}>Excluir</button>
                        ) } 
                    </span>
                </div>
            </FileInfo>
            <div className='icons-style'>
                { !file.uploaded && !file.error && (
                    <CircularProgressbar
                    styles={{
                        root: { width: 24, marginRight: '0.5rem'},
                        path: { stroke: '#30342F' }
                    }}
                    strokeWidth={10}
                    value={file.progress}
                    />
                ) }
                { file.url && (
                    <a 
                    href={file.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        <MdLink style={{ marginRight: 8 }} size={24} color='#fff' />
                    </a>
                ) }
                { file.uploaded && <MdCheckCircle size={24} color='#78e5d5' /> }
                { file.error && <MdError size={24} color='#e57878' /> }
            </div>
        </li>
        </ProductsPostListContainer>
    )
}

export default BolosPostList;
