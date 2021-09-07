import Dropzone from 'react-dropzone';
import React, {useState, useEffect} from 'react';
import { ProductsPostContainer,
    DescriptionTextField,
    CodTextField,
    TitleTextField,
    DropContainer,
    UploadMessage } from './styles';
import api from '../../../api/api';
import fileSize from 'filesize';
import { uniqueId } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import BolosPostList from './BolosPostList';

const BolosPost = () => {
    const [descriptionInput, setDescriptionInput] = useState('')
    const [codInput, setCodInput] = useState('')
    const [codTitle, setTitle] = useState('')
    const [selectFile, setSelectFile] = useState([])
    const [file, setFile] = useState([])
    const [load, setLoad] = useState(false);
    
    useEffect(() => {
       async function fetchData() {
            const res =  await api.get('bolos');
            
            console.log('useeffect chamado')
            setFile(res.data)
            setLoad()
        }
        fetchData()
        
    }, [load])
    
    const handleUpload = () => {
        setLoad(true)
        const uploadedFiles =  selectFile.map(files => ({
            files,
            id: uniqueId(),
            name: files.name,
            readableSize: fileSize(files.size),
            preview: URL.createObjectURL(files),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
            description: '',
            cod: '',
            title: ''
        }))
        setFile({file, ...uploadedFiles})
        selectFile.forEach(filePost)
        console.log('handleupload chamado')
    }

    const filePost = async (uploadedFile) => {
        const data = new FormData();
        
        data.append('file', uploadedFile, uploadedFile.name)
        data.append('cod', codInput)
        data.append('title', codTitle)
        data.append('description', descriptionInput)
        await api.post('bolos', data)
        .then(res => {
            console.log('Arquivo enviado')
        }
        ).catch(() => {
            console.log('Não enviado')
        }
        )
    }

    const handleDelete = async (id) => {
        await api.delete(`bolos/${id}`);
        setLoad(true)
    }

    const useStyle = makeStyles(theme => ({
        root: {
            '& .MuiFormLabel-root': {
                color: '#fff'
            },
            '& .MuiInputBase-input': {
                color: '#fff'
            }
        }
        
    }))

    const classes = useStyle();

   
    const renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return <UploadMessage>Arraste arquivos aqui ou clique</UploadMessage>
        }
        if (isDragReject) {
            return <UploadMessage type='error'>Arquivo não suportado</UploadMessage>
        }
        return <UploadMessage type='success'>Solte os arquivos aqui...</UploadMessage>
    } 
    return (
        <ProductsPostContainer className={classes.root}>
            <Dropzone accept='image/*' onDropAccepted={setSelectFile}>
                { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                     <DropContainer
                        { ...getRootProps() }
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                     >
                         <input { ...getInputProps() } />
                         { renderDragMessage(isDragActive, isDragReject) }
                     </DropContainer>
                ) }
            </Dropzone>
            <h1>{selectFile.name}</h1>
            <DescriptionTextField 
                name="message" 
                id="outlined-multiline-static" 
                multiline rows={4} 
                label='Descrião/Ingredientes'
                margin='normal'
                fullWidth
                variant='filled'
                value={descriptionInput}
                onChange={e => setDescriptionInput(e.target.value)}
            />
            <TitleTextField 
                name="name" 
                required id="standard-basic" 
                label="Nome do produto"
                margin='dense'
                fullWidth
                variant='filled'
                value={codTitle}
                onChange={e => setTitle(e.target.value)}
            />
            <CodTextField 
                name="name" 
                required id="standard-basic" 
                label="Código"
                margin='dense'
                fullWidth
                variant='filled'
                value={codInput}
                onChange={e => setCodInput(e.target.value)}
            />
            <input className='button-submit' value='Enviar' type='submit'  onClick={handleUpload}/>
            { !!file.length && file.map(item => {
                return <BolosPostList setLoad={setLoad} handleDelete={handleDelete} file={item} key={item.id}/>
            }) }
        </ProductsPostContainer>
    )
}


export default BolosPost;
