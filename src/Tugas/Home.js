import React, {Component} from 'react';
import {Field,Form,Formik,ErrorMessage} from 'formik';
import Img from './img.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
import Axios from 'axios'

class Home extends Component {
    
    dataSend = (values,action) => {
        Axios.post('http://localhost:3001/data',{
            values
        })
        .then (response =>{
            action.setSubmitting(false)
            action.resetForm()
            alert ("masuk pak eko")
        })

    }
    render(){
        return (
           
            <Formik
            initialValues = {{
                nama : '',
                ttl : '',
                wafat : '',
                description : '',
                establishment : '',
                imgUrl : ''
            }}
            validate = {(values) =>{
                let error = {};
                if(!values.nama){
                    error.nama = <small className="form-text text-danger">Name is required</small>;
                    return error;
                }if(!values.ttl){
                    error.ttl = <small className="form-text text-danger">Name is required</small>;
                    return error;
                }if(!values.wafat){
                    error.wafat = <small className="form-text text-danger">Name is required</small>;
                    return error
                }if(!values.description){
                    error.description = <small className="form-text text-danger">Name is required</small>;
                    return error
                }if(!values.establishment){
                    error.establishment = <small className="form-text text-danger">Name is required</small>;
                    return error
                }if(!values.imgUrl){
                    error.imgUrl = <small className="form-text text-danger">Name is required</small>;
                }
            
        }}
            onSubmit={this.dataSend}
            render={formProps => {
            return (
                <Form>
                      <div className="container">
                          <div className="row justify-content-md-center">
                              <div className="col-sm-6">
                                <div className="card ">
                                        <img src={Img} alt="none"/>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="nama" placeholder="nama"/>
                                            <ErrorMessage name="nama"/>
                                        </div>
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="ttl" placeholder="born"/>
                                            <ErrorMessage name="ttl"/>
                                        </div>
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="wafat" placeholder="died"/>
                                            <ErrorMessage name="wafat"/>
                                        </div>
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="description" placeholder="description"/>
                                            <ErrorMessage name="description"/>
                                        </div>
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="establishment" placeholder="establishment"/>
                                            <ErrorMessage name="establishment"/>
                                        </div>
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="imgUrl" placeholder="imageUrl"/>
                                            <ErrorMessage name="imgUrl"/>
                                        </div>
                                        <button className="btn btn-outline-primary" type="submit" disabled={formProps.isSubmitting}>
                                            add hero
                                        </button>
                                    </div>
                                </div>
                              </div>
                          </div>
                      </div> 
                </Form>
            );
        }}/>
    );


        
    }


}


export default Home

/* <Formik 
initialValues = {{
    nama : '',
    ttl : '',
    wafat : '',
    description : '',
    establishment : '',
    imgUrl : ''
}}
validate = {(values) =>{
    let error = {};
    if(!values.nama){
        error.nama = window.alert("isi bro")
        return error;
    }if(!values.ttl){
        error.ttl = window.alert("isi bro")
        return error;
    }if(!values.wafat){
        error.wafat = window.alert("isi bro")
        return error
    }if(!values.description){
        error.description = window.alert("isi bro")
        return error
    }if(!values.establishment){
        error.establishment = window.alert("isi bro")
        return error
    }if(!values.imgUrl){
        error.imgUrl = window.alert("isi bro")
    }

}}
/> */

/* <div>
                
               
            
                <div>
                    <Form>
                        <div>
                            <label>nama</label>
                            <Field type="text" name="nama" placeholder="nama"/>
                        </div>
                        <div>
                            <label>lahir</label>
                            <Field type="text" name="ttl" placeholder="born"/>
                        </div>
                        <div>
                            <label>nama</label>
                            <Field type="text" name="wafat" placeholder="wafat"/>
                        </div>
                        <div>
                            <label>nama</label>
                            <Field type="text" name="description" placeholder="description"/>
                        </div>
                        <div>
                            <label>nama</label>
                            <Field type="text" name="establishment" placeholder="establishment"/>
                        </div>
                        <div>
                            <label>nama</label>
                            <Field type="text" name="imgUrl" placeholder="imageurl"/>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
                
                 
            
        </div> */