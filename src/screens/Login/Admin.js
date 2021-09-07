import React, { Component } from 'react'
import { AdminContainer, CarouselPostContainer, ProductsPostContainer } from './styles';
import api from '../../api/api';
import fileSize from 'filesize';
import { uniqueId } from 'lodash';
import ProductsPost from './ProductsPost/ProductsPost';
import BolosPost from './ProductsPost/BolosPost';
import CucasPost from './ProductsPost/CucasPost';
import CarouselPost from './CarouselPost/CarouselPost';
import CarouselPostList from './CarouselPost/CarouselPostList';


class Admin extends Component {
    state = {
        uploadedFiles: [],
    };

    async componentDidMount() {
        const res = await api.get('posts');

        this.setState({
            uploadedFiles: res.data.map(file => ({
                id: file._id,
                name: file.name,
                readableSize: fileSize(file.size),
                preview: file.url,
                uploaded: true,
                url: file.url
            }))
        })

    }

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
          file,
          id: uniqueId(),
          name: file.name,
          readableSize: fileSize(file.size),
          preview: URL.createObjectURL(file),
          progress: 0,
          uploaded: false,
          error: false,
          url: null
        }));
    
        this.setState({
          uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        });
    
        uploadedFiles.forEach(this.processUpload);
      };

      updateFile = (id, data) => {
        this.setState({
          uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
            return id === uploadedFile.id
              ? { ...uploadedFile, ...data }
              : uploadedFile;
          })
        });
      };

      processUpload = uploadedFile => {
        const data = new FormData();
    
        data.append("file", uploadedFile.file, uploadedFile.name);
    
        api
          .post("posts", data, {
            onUploadProgress: e => {
              const progress = parseInt(Math.round((e.loaded * 100) / e.total));
    
              this.updateFile(uploadedFile.id, {
                progress
              });
            }
          }).then(res => {
            this.updateFile(uploadedFile.id, {
                uploaded: true,
                id: res.data._id,
                url: res.data.url
            })
          }).catch(() => {
            this.updateFile(uploadedFile.id, {
                error: true,
            })
          })
        }

        handleDelete = async id => {
            await api.delete(`posts/${id}`);

            this.setState({
                uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
            })
        }

        
        // ------------------------- Week files ------------------------------ //
    
        // handleUploadWeek = files => {
        //     const uploadedFilesWeek = files.map(file => ({
        //         file,
        //         id: uniqueId(),
        //         name: file.name,
        //         readableSize: fileSize(file.size),
        //         preview: URL.createObjectURL(file),
        //         progress: 0,
        //         uploaded: false,
        //         error: false,
        //         url: null,
        //         cod: file.cod,
        //         description: file.description
        //     }));
            
        //     this.setState({
        //         uploadedFilesWeek: this.state.uploadedFilesWeek.concat(uploadedFilesWeek)
        //     });
            
        //     uploadedFilesWeek.forEach(this.processUploadWeek);
        // };
        
        // updateFileWeek = (id, data) => {
        //     this.setState({
        //         uploadedFilesWeek: this.state.uploadedFilesWeek.map(uploadedFileWeek => {
        //             return id === uploadedFileWeek.id
        //             ? { ...uploadedFileWeek, ...data }
        //             : uploadedFileWeek;
        //         })
        //     });
        // };
        
        // processUploadWeek = uploadedFileWeek => {
        //     const data = new FormData();
            
        //     data.append("file", uploadedFileWeek.file, uploadedFileWeek.name);
            
        //     api
        //     .post("porducts", data, {
        //         onUploadProgress: e => {
        //             const progress = parseInt(Math.round((e.loaded * 100) / e.total));
                    
        //             this.updateFileWeek(uploadedFileWeek.id, {
        //                 progress
        //             });
        //         }
        //     }).then(res => {
        //         this.updateFileWeek(uploadedFileWeek.id, {
        //             uploaded: true,
        //             id: res.data._id,
        //             url: res.data.url
        //         })
        //     }).catch(() => {
        //         this.updateFileWeek(uploadedFileWeek.id, {
        //             error: true,
        //         })
        //     })
        // }

        // handleDeleteWeek = async id => {
        //     await api.delete(`products/${id}`);

        //     this.setState({
        //         uploadedFilesWeek: this.state.uploadedFilesWeek.filter(file => file.id !== id)
        //     })
        // }
        
        // componentWillUnmount() {
        //     this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
        // }
        // componentWillUnmount() {
        //     this.state.uploadedFilesWeek.forEach(file => URL.revokeObjectURL(file.preview));
        // }
render() {
  const { uploadedFiles } = this.state;
        return (
            <AdminContainer>
                <h1>Adicionar Imagem de capa</h1>
                <CarouselPostContainer>
                    <CarouselPost setUpload={this.handleUpload} />
                    { !!uploadedFiles.length && uploadedFiles.map(item => 
                      <CarouselPostList onDelete={this.handleDelete} item={item} />
                      ) }
                </CarouselPostContainer>
                <h1>Adicionar Pães</h1>
                <ProductsPostContainer>
                    <ProductsPost />

                </ProductsPostContainer>
                <h1>Adicionar Bolos</h1>
                <ProductsPostContainer>
                  <BolosPost />
                </ProductsPostContainer>
                <h1>Adicionar Cucas</h1>
                <ProductsPostContainer>
                  <CucasPost />
                </ProductsPostContainer>
            </AdminContainer>
        )
    }
    
}

export default Admin;
